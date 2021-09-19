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

    console.log('Users:', Object.keys(props.users).length > 1 ? 'This is production DB' : props.users);
    console.log('Feed:', Object.keys(props.feed).length > 1 ? 'This is production DB' : props.feed);
    console.log('Products:', props.products);

    return (
        <Layout>
            <div className="page">
                <h1>Welcome to ShopHopper</h1>
                {
                    isLoggedIn ?
                        <React.Fragment>
                            <button onClick={_getProducts}>
                                <a>Fetch Directly from Shopify, display below</a>
                            </button>
                            {/* { process.env.NODE_ENV === 'development' && */}
                            <button onClick={_wipeDatabase}>
                                {loading === 'wipeDatabase' ? "Loading..." : <a className="red">Permanently Wipe DB (testing only)</a>}
                            </button>
                            {/* } */}
                            <main className="main">
                                <button className="send hov" onClick={_sendProducts}>
                                    {loading === 'sendProducts'
                                        ? "Loading..."
                                        : <a>Fetch Products, and send to DB, also, they will be listed below when this component pulls them in and it re-renders.</a>} 
                                </button>
                                <div className="notice hov">
                                    <p>Currently  <span className="blue">{Object.keys(props.products).length}</span> unique Products matching this criteria: <span className="blue">{DB_Param}</span> in the Database</p>
                                </div>
                                {Object.keys(props.products).map((key) => (
                                    <div key={key} className="notice hov">
                                        <p>{props.products[key].title}</p>
                                    </div>
                                ))}
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
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .send {
            background: lightGrey;
            border-radius: 50px;
            border: none;
            padding: 10px;
            transition: box-shadow 0.1s ease-in;
            margin-bottom: 20px;
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

        .blue {
          color: blue;
        }

        .red {
          color: red;
        }

        .hov:hover {
          box-shadow: 1px 1px 3px #aaa;
        }
      `}</style>
        </Layout>
    );
};

Blog.propTypes = {
    products: PropTypes.object,
    users: PropTypes.object,
    feed: PropTypes.object
};

export default Blog;