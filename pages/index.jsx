/* eslint-disable no-undef */
import React, { useState } from "react";
import Router from 'next/router';
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { useSession } from "next-auth/client";
import prisma from '../lib/prisma';
import { fetchProducts } from "./api/fetch";
import hydrateRequest from "../lib/functions/hydrateRequest";

const DB_Param = 'Diffuser Jewelry';

// We might use this to do user fetching .....
export const getStaticProps = async () => {
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

    const _getProducts = async () => {
        const json = await fetchProducts();
        set_Raw_Products(json.products);
    };

    const _sendProducts = async () => {
        await hydrateRequest({ request: 'SEND' });
        await Router.push('/');
    };

    const _wipeDatabase = async () => {
        await hydrateRequest({ request: 'DESTROY' });
        await Router.push('/');
    };

    const isLoggedIn = session[0]?.user;

    return (
        <Layout>
            <div className="page">
                <h1>Welcome to ShopHopper</h1>
                {
                    isLoggedIn ?
                        <React.Fragment>
                            <button onClick={_getProducts}>
                                <a>Fetch Products</a>
                            </button>
                            <button onClick={_sendProducts}>
                                <a>Send Products to db</a>
                            </button>
                            { process.env.NODE_ENV === 'development' &&
                                <button onClick={_wipeDatabase}>
                                    <a className="red">Permanently Wipe DB (testing only)</a>
                                </button>
                            }
                            <main className="main">
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
                        <div className="notice hov">
                            <p>Might as well Log in</p>
                        </div>
                }
            </div>
            <style jsx>{`
        .main {
          margin-top: 20px;
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
    products: PropTypes.object
};

export default Blog;