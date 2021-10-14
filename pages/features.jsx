/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Chips from 'react-chips';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import { useSession } from "next-auth/client";

import hydrateRequest from "../requests/hydrateRequest";
import incrementProduct from "../requests/incrementProduct";
import searchTwoParams from "../requests/searchTwoParams";
// import useGlobal from "../../globalState/store";

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
    "Bohemian",
    "Chic",
    "Trendy",
    "Athletic",
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
    "Maternity",
    // Bonus
    "Man + Woman"
];

const DB_Param = buckets[0];

const Features = () => {
    const session = useSession();
    // const [ globalState, globalActions ] = useGlobal();
    const [ search_products, set_search_products ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ queryStrings, setQueryStrings ] = useState({
        column: 'buckets', 
        metric: DB_Param
    });
    const [ search, toggleSearch ] = useState(false);
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
            set_search_products(result.splice(0, 88));
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
                                <button className="send hov" onClick={_searchTwoParams}>
                                    {loading === 'wipeDatabase' ? "Loading..." : <a className="blue">Search using these 2 params</a>}
                                </button>

                                {search_products.length ?
                                    <React.Fragment>
                                        <div className="notice hov" onClick={() => set_search_products([])}>
                                            <p>Currently showing <span className="blue">{search_products.length}</span> unique Products matching this criteria: <a className="blue">{DB_Param}</a></p>
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
                                    null
                                }

                                {
                                    !search_products.length && !search ?
                                        <React.Fragment>
                                            <div className="notice hov">
                                                <p>Currently  <span className="blue">{Object.keys(search_products).length}</span> unique products that have this tag <a className="blue">{DB_Param}</a>with a rating higher than <span className="blue">10</span> in the Database. <a className="link" onClick={() => toggleSearch(true)}>Search</a> to see more.</p>

                                                <p className="tiny">*Note* Some data doesn&apos;t update in real time like state data, so the counters don&apos;t seem like the are working but, they are. Thank you for coming to my Ted Talk</p>
                                            </div>

                                            <div className="cards">
                                                {Object.keys(search_products).map((key) => <div className="card hov" key={key} onClick={() => _incrementProduct(search_products[key].id)}>
                                                    <img className="image" src={search_products[key].images[0].src} />
                                                    <button className="hov">
                                                        {search_products[key].rating > 10 && (
                                                            <p className="star">⭐️</p>
                                                        )}
                                                        {
                                                            <a className="blue">
                                                                {search_products[key].title}
                                                                <span className="red">
                                                                    {search_products[key].rating}
                                                                </span>
                                                            </a>
                                                        }
                                                    </button>
                                                </div>)}
                                            </div>
                                        </React.Fragment>
                                        :
                                        null
                                }

                                <button className="send hov" onClick={_wipeDatabase}>
                                    {loading === 'wipeDatabase' ? "Loading..." : <a className="red">Permanently Wipe DB (testing only)</a>}
                                </button>
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