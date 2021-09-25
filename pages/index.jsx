/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { useSession } from "next-auth/client";
import prisma from '../prisma/prisma';
import { fetchProducts } from "./api/fetch";
import hydrateRequest from "../lib/requests/hydrateRequest";
import fetchTags from "../lib/requests/fetchTags";
import incrementItem from "../lib/requests/incrementItem";
import incrementProduct from "../lib/requests/incrementProduct";

const DB_Param = 'Diffuser Jewelry';

// We might use this to do user fetching .....
export const getServerSideProps = async () => {
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true }
            }
        }
    });

    const allUsers = await prisma.user.findMany({
        include: { posts: true }
    });

    // Example Query
    const productsFeed = await prisma.product.findMany({
        where: { product_type: DB_Param }
    });

    const users = dateStripped(allUsers);
    const products = dateStripped(productsFeed);
    // console.dir(users, { depth: null }) this is neat

    return { props: { feed, users, products } };
};

// This is gross, we will see if there is a better solution to this problem
const dateStripped = (obj) => {
    let newObj = {};

    Object.keys(obj).forEach((key) => {
        let value = obj[key];
        if (value !== null) {
            // If array, loop...
            if (Array.isArray(value)) {
                value = value.map((item) => dateStripped(item));
            }
            // ...if property is date/time, stringify/parse...
            else if (typeof value === "object" && typeof value.getMonth === "function") {
                value = JSON.parse(JSON.stringify(value));
            }
            // ...and if a deep object, loop.
            else if (typeof value === "object") {
                value = dateStripped(value);
            }
        }

        newObj[key] = value;
    });

    return newObj;
};

const Blog = (props) => {
    const session = useSession();
    const [ raw_products, set_Raw_Products ] = useState([]);
    const [ raw_Tags, set_Raw_Tags ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const _getProducts = async () => {
        const json = await fetchProducts();
        set_Raw_Products(json.products);
    };

    const _getAllTags = async () => {
        setLoading('getAllTags');
        const tags = await fetchTags();
        if (tags) {
            set_Raw_Tags(tags.uniqueTags);
            setLoading(false);
        }
    };

    const _incrementItem = async (tag) => {
        setLoading('incrementItem');
        const result = await incrementItem(tag);
        if (result) {
            setLoading(false);
        }
    };

    const _incrementProduct = async (title) => {
        setLoading('incrementProduct');
        const result = await incrementProduct(title);
        if (result) {
            refreshData();
            setLoading(false);
        }
    };

    const _sendProducts = async () => {
        setLoading('sendProducts');
        const result = await hydrateRequest({ request: 'SEND' });
        if (result) {
            console.log('result:', result);
            refreshData();
            setLoading(false);
        }
    };

    const _wipeDatabase = async () => {
        setLoading('wipeDatabase');
        const result = await hydrateRequest({ request: 'DESTROY' });
        if (result) {
            console.log('result:', result);
            refreshData();
            setLoading(false);
        }
    };

    const isLoggedIn = session[0]?.user;

    // console.log('Users:', Object.keys(props.users).length > 1 ? 'This is production DB' : props.users);
    // console.log('Feed:', Object.keys(props.feed).length > 1 ? 'This is production DB' : props.feed);
    // console.log('Products:', props.products);

    return (
        <Layout>
            <div className="page">
                <h1>Welcome to ShopHopper</h1>
                {
                    isLoggedIn ?
                        <React.Fragment>
                            {/* <button className="send hov" onClick={_getProducts}>
                                <a>Fetch Directly from Shopify, display below</a>
                            </button> */}
                            <button className="send hov" onClick={_sendProducts}>
                                {loading === 'sendProducts'
                                    ? "Loading..."
                                    : <a>Fetch Products, and send to DB, also, they will be listed below when this component pulls them in and it re-renders.</a>} 
                            </button>
                            {/* } */}
                            <main className="main">
                                <div className="notice hov">
                                    <p>Currently  <span className="blue">{Object.keys(props.products).length}</span> unique Products matching this criteria: <span className="blue">{DB_Param}</span> in the Database</p>
                                </div>

                                <div className="cards">
                                    {Object.keys(props.products).map((key) => <div className="card hov" key={key}>
                                        <img className="image" src={props.products[key].images[0].src} />
                                        <button className="hov" onClick={() => _incrementProduct(props.products[key].title)}>
                                            {props.products[key].rating > 10 && <p className="star">⭐️</p>}
                                            {<a className="blue">
                                                {props.products[key].title}
                                                <span className="red">{props.products[key].rating}</span>
                                            </a>}
                                        </button>
                                    </div>)}
                                </div>

                                {/* { process.env.NODE_ENV === 'development' && */}
                                <button className="send hov" onClick={_wipeDatabase}>
                                    {loading === 'wipeDatabase' ? "Loading..." : <a className="red">Permanently Wipe DB (testing only)</a>}
                                </button>

                                <div></div>

                                <button className="hov" onClick={() => _getAllTags()}>
                                    {loading === 'getAllTags' ? "Loading..." : <a className="red">Get Tags</a>}
                                </button>
                                {raw_Tags.map((tag) => <button key={tag} onClick={() => _incrementItem(tag)}>
                                    {loading === 'incrementItem' ? "Loading..." : <a className="blue">{tag}</a>}
                                </button>)}

                                {raw_products.map((item) => (
                                    <div key={item.id} className="post hov">
                                        <p>{raw_products.length}</p>
                                        <p>{JSON.stringify(item)}</p>
                                    </div>
                                ))}
                            </main>
                        </React.Fragment>
                        :
                        <Link href="/api/auth/signin">
                            <div className="notice hov">
                                <a data-active={isActive('/signup')}>Might as well Log in</a>
                            </div>
                        </Link>
                }
            </div>
            <style jsx>{`
        .main {
            display: block;
            position: relative;
            margin-bottom: 20px;
            width: 100%;
        }

        .send {
            background: lightGrey;
            border-radius: 50px;
            border: none;
            padding: 10px;
            transition: box-shadow 0.1s ease-in;
            margin: 1rem;
        }

        .cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }

        .card {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background: white;
            transition: box-shadow 0.1s ease-in;
            width: 275px;
            height: 300px;
            padding: 1rem;
        }

        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post + .post {
          margin-top: 2rem;
        }

        .notice {
          background: white;
          transition: box-shadow 0.1s ease-in;
          padding: 20px;
        }

        .notice + .notice {
          margin-top: 1rem;
        }

        .image {
            width: 200px;
            height: auto;
            object-fit: contain;
        }

        .blue {
            color: blue;
            margin: 1rem;
        }

        .red {
          color: red;
        }

        .hov:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .star {
            position: absolute;
            transform: scale(3,3) translate(-5px, -10px);
        }

        .star:hover {
            transform: scale(5, 5);
            transition: all 1s;
        }
      `}</style>
        </Layout>
    );
};

Blog.propTypes = {
    products: PropTypes.object,
    users: PropTypes.object,
    feed: PropTypes.array
};

export default Blog;