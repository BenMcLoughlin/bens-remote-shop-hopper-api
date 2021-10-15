
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Chips from 'react-chips';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import { useSession } from "next-auth/client";

import hydrateRequest from "../requests/hydrateRequest";
import incrementProduct from "../requests/incrementProduct";
import searchTwoParams from "../requests/searchTwoParams";
import loaderGif from '../public/assets/loader/octo_loader.gif';

const columns = [
    "business_name",
    "buckets",
    "title",
    "handle",
    "body_html",
    "vendor",
    "product_type",
    "created_at",
    "published_at",
    "updated_at",
    "tags",
    "variants",
    "images",
    "options",
    "original_price",
    "compare_at_price",
    "sizes",
    "colors"
];

const buckets = [
    "Athletic",
    "Bohemian",
    "Chic",
    "Trendy",
    "Casual",
    "Vintage",
    "Music Festival",
    "Baby & Kids",
    "Accessories",
    "Beauty",
    "Streetwear",
    "Hip Hop",
    "Rock",
    "Punk",
    "Elegant",
    "Formal",
    "Maternity"
];

const DB_Param = buckets[0];

const Features = () => {
    const session = useSession();
    const [ search_products, set_search_products ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ queryStrings, setQueryStrings ] = useState({
        column: 'buckets', 
        metric: DB_Param
    });
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    useEffect(() => {
        _searchTwoParams(queryStrings);
    }, [ ]);

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const _incrementProduct = async (id) => {
        setLoading('incrementProduct');
        const result = await incrementProduct(id);
        if (result) {
            refreshData();
            setLoading(false);
        }
    };

    const _searchTwoParams = async () => {
        setLoading('search');
        const result = await searchTwoParams(queryStrings);
        if (result) {
            let sorted = result.splice(0, 88);

            sorted.sort((a, b) => {
                if (a.rating < b.rating) { 
                    return 1; 
                }

                if (a.rating > b.rating) { 
                    return -1; 
                }

                return 0;
            });

            set_search_products(sorted);
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


    return (
        <Layout>
            <div className="page">
                {
                    isLoggedIn ?
                        <>
                            <main className="main">
                                <div className="row form">
                                    <Chips
                                        value={[ queryStrings.column ]}
                                        onChange={(v) => setQueryStrings({
                                            column: v[1], 
                                            metric: queryStrings.metric
                                        })}
                                        suggestions={columns}
                                        placeholder="Add a column to search on"
                                    />
                                </div>
                                <div className="row form">
                                    <Chips
                                        value={[ queryStrings.metric ]}
                                        onChange={(v) => setQueryStrings({
                                            column: queryStrings.column, 
                                            metric: v[1]
                                        })}
                                        suggestions={buckets}
                                        placeholder="Add a Metric to search for"
                                    />
                                </div>

                                <div>
                                    <button className="send hov" onClick={_searchTwoParams}>
                                        {loading === 'wipeDatabase' ? "Loading..." : <a className="blue">Search using these 2 params</a>}
                                    </button>

                                    <button className="send hov" onClick={_wipeDatabase}>
                                        {loading === 'wipeDatabase' ? "Loading..." : <a className="red">Permanently Wipe DB (testing only)</a>}
                                    </button>
                                </div>

                                {search_products.length ?
                                    <React.Fragment>
                                        <div className="notice hov" onClick={() => set_search_products([])}>
                                            <p>Currently showing <span className="blue">{search_products.length}</span> unique Products matching this criteria: <a className="blue">{DB_Param}</a></p>

                                            <p className="tiny">*Note* Some data doesn&apos;t update in real time like state data, so the counters don&apos;t seem like the are working but, they are. Thank you for coming to my Ted Talk</p>
                                        </div>
                                        <div className="cards">
                                            {
                                                search_products.map((product) => <div className="card hov" key={product.id} onClick={() => _incrementProduct(product.id)}>
                                                    <img className="image" src={product.images[0]?.src} />
                                                    <button className="hov">
                                                        {product.rating > 10 && (
                                                            <p className="star">⭐️</p>
                                                        )}
                                                        {
                                                            <a className="blue">
                                                                {product.title}
                                                                <span className="red">
                                                                    {product.rating}
                                                                </span>
                                                            </a>
                                                        }
                                                    </button>
                                                </div>)
                                            }
                                        </div>
                                    </React.Fragment>
                                    :
                                    <div className="cards">
                                        <p className="">You might have to try a different set of params</p>
                                        <Image src={loaderGif} className="loading" width={800} height={600} />
                                    </div>
                                }
                            </main>
                        </>
                        :
                        <Link href="/api/auth/signin">
                            <div className="notice hov">
                                <a data-active={isActive('/signup')}>Might as well Log in</a>
                            </div>
                        </Link>
                }
            </div>
            <style jsx>{`
        .page {
            margin: 20px;
        }

        .main {
            display: block;
        position: relative;
        margin-bottom: 20px;
        width: 100%;
        }

        .search {
            cursor: pointer;
        }

        .tiny {
            font - size: 10px;
        }

        .link {
            text - decoration: underline;
        cursor: pointer;
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
            margin - top: 2rem;
                }

        .notice {
            background: white;
        transition: box-shadow 0.1s ease-in;
        padding: 20px;
                }

        .notice + .notice {
            margin - top: 1rem;
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
            box - shadow: 1px 1px 3px #aaa;
                }

        .star {
            position: absolute;
        transform: scale(3, 3) translate(-5px, -10px);
                }

        .star:hover {
            transform: scale(5, 5);
        transition: all 1s;
                }
            `}</style>
        </Layout >
    );
};

export default Features;