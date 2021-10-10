/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { useSession } from "next-auth/client";
import prisma from '../prisma/prisma';
// import { fetchProducts } from "./api/fetch";
import hydrateRequest from "../requests/hydrateRequest";
import incrementProduct from "../requests/incrementProduct";
import searchRequest from "../requests/search";
import fetchTags from "../requests/fetchTags";

const DB_Param = "jewelry";

// We might use this to do user fetching .....
export const getServerSideProps = async () => {
    const allUsers = await prisma.user.findMany({});
    const users = dateStripped(allUsers);

    // Example Query
    const productsFeed = await prisma.product.findMany({
        where: {
            tags: {
                has: DB_Param
            }
            // rating: {
            //     gt: 10
            // }
        }
    });
    const products = dateStripped(productsFeed);

    return { props: { users, products } };
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

const Features = (props) => {
    const session = useSession();
    // const [ raw_products, set_Raw_Products ] = useState([]);
    const [ search_products, set_search_products ] = useState([]);
    const [ raw_Tags, set_Raw_Tags ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ query, setQuery ] = useState(false);
    const [ search, toggleSearch ] = useState(false);
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    useEffect(() => {
        const _getAllTags = async () => {
            setLoading('getAllTags');
            const tags = await fetchTags();
            if (tags) {
                set_Raw_Tags(tags.uniqueTags);
                setLoading(false);
            }
        };

        _getAllTags();
    }, []);

    const refreshData = () => {
        router.replace(router.asPath);
    };

    // const _getProducts = async () => {
    //     const json = await fetchProducts();
    //     set_Raw_Products(json.products);
    // };

    const _noSearch = () => {
        toggleSearch(false);
        setQuery(false);
    };

    const _incrementProduct = async (id) => {
        setLoading('incrementProduct');
        const result = await incrementProduct(id);
        if (result) {
            refreshData();
            setLoading(false);
        }
    };

    const _search = async (e) => {
        e.preventDefault();
        setLoading('search');
        const result = await searchRequest(query);
        if (result) {
            set_search_products(result);
            // refreshData();
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
    console.log('Products:', props.products);

    return (
        <Layout>
            <div className="page">
                {
                    isLoggedIn ?
                        <>
                            <main className="main">
                                {search_products.length ?
                                    <React.Fragment>
                                        <div className="notice hov" onClick={() => set_search_products([])}>
                                            <p>Currently  <span className="blue">{search_products.length}</span> unique Products matching this criteria: <a className="blue">{query}</a> in the Database</p><span className="tiny">  Again?</span>
                                        </div>
                                        <div className="cards">
                                            {
                                                search_products.map((product) => <div className="card hov" key={product.id} onClick={() => _incrementProduct(product.id)}>
                                                    <img className="image" src={product.images[0].src} />
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
                                    search ?
                                        <form onSubmit={_search}>
                                            <h2 className="search hov" onClick={() => toggleSearch(false)}>New Search</h2>
                                            {
                                                query ?
                                                    <input className="send blue hov" disabled={!query} type="submit" value={`Search for Products Matching ${ query }?`} />
                                                    :
                                                    raw_Tags.map((tag) => <button key={tag} onClick={() => setQuery(tag)}>
                                                        {loading === 'incrementItem' ? "Loading..." : <a className="blue">{tag}</a>}
                                                    </button>)
                                            }
                                            <button className="red hov">
                                                <a onClick={() => _noSearch()}>
                                                    Cancel
                                                </a>
                                            </button>
                                        </form>
                                        :
                                        <h2 className="search hov" onClick={() => toggleSearch(true)}>New Search?</h2>
                                }

                                {
                                    !search_products.length && !search ?
                                        <React.Fragment>
                                            <div className="notice hov">
                                                <p>Currently  <span className="blue">{Object.keys(props.products).length}</span> unique products that have this tag <a className="blue">{DB_Param}</a>with a rating higher than <span className="blue">10</span> in the Database. <a className="link" onClick={() => toggleSearch(true)}>Search</a> to see more.</p>

                                                <p className="tiny">*Note* Some data doesn&apos;t update in real time like state data, so the counters don&apos;t seem like the are working but, they are. Thank you for coming to my Ted Talk</p>
                                            </div>

                                            <div className="cards">
                                                {Object.keys(props.products).map((key) => <div className="card hov" key={key} onClick={() => _incrementProduct(props.products[key].id)}>
                                                    <img className="image" src={props.products[key].images[0].src} />
                                                    <button className="hov">
                                                        {props.products[key].rating > 10 && (
                                                            <p className="star">⭐️</p>
                                                        )}
                                                        {
                                                            <a className="blue">
                                                                {props.products[key].title}
                                                                <span className="red">
                                                                    {props.products[key].rating}
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

Features.propTypes = {
    products: PropTypes.object,
    users: PropTypes.object
};

export default Features;