
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Chips from 'react-chips';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';

import { color, font, mixin } from 'styles/theme';
import incrementProduct from "../requests/incrementProduct";
import searchTwoParams from "../requests/searchTwoParams";
import loaderGif from '../public/assets/loader/octo_loader.gif';
import useGlobal from "../globalState/store";
import Product from 'components/Product';
import { columns, buckets } from "content/variables";

const DB_Param = buckets[0];

const Features = () => {
    const [ globalState, globalActions ] = useGlobal();
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ queryStrings, setQueryStrings ] = useState({
        column: 'buckets', 
        metric: DB_Param
    });

    useEffect(() => {
        setProducts(globalState.products.hotItems);
    }, [ globalState.products.hotItems ]);

    useEffect(() => {
        // _searchTwoParams(queryStrings);
        _getHotItems(40);
    }, []);

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const _incrementProduct = async (id) => {
        setLoading('incrementProduct');
        const result = await incrementProduct(id);
        if (result) {
            setLoading(false);
        }
    };

    const _getHotItems = async (amount) => {
        setLoading('getHotItems');
        const result = await globalActions.apiRequests.getHotItems(amount);
        if (result) {
            setLoading(false);
        }
    };

    const _searchTwoParams = async () => {
        setLoading('search');
        const result = await searchTwoParams(queryStrings);
        if (result) {
            setProducts(result);
            setLoading(false);
        }
    };

    const _nextPage = async () => {
        setLoading('nextPage');
        const result = await globalActions.apiRequests.nextPage();
        if (result) {
            setLoading(false);
        }
    };

    const _prevPage = async () => {
        setLoading('prevPage');
        const result = await globalActions.apiRequests.prevPage();
        if (result) {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="page">
                <Main>
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
                    </div>

                    <div>
                        <p className="blue">These are the {products.length} hottest items, or items that have the highest rating.</p>
                    </div>
                    {/* <ButtonsWrapper>
                        <Icon onClick={_prevPage}>
                            <ArrowLeftShort />
                        </Icon>
                        <Icon onClick={_nextPage}>
                            <ArrowRightShort /> 
                        </Icon>
                    </ButtonsWrapper> */}
                    <List>
                        {
                            loading ?
                                <Image src={loaderGif} className="loading" width={800} height={600} />
                                :
                                <>
                                    {products.map((product, index) => (
                                        <Product
                                            key={product.id}
                                            id={product.id}
                                            businessName={product.business_name}
                                            index={index}
                                            src={product.images[0]?.src}
                                            title={product.title}
                                            rating={product.rating}
                                            price={(product.original_price / 100).toFixed(2)}
                                            compareAtPrice={(product.original_price / 100).toFixed(2)}
                                            tags={product.tags}
                                            buckets={product.buckets}
                                            incrementProduct={_incrementProduct}
                                        />
                                    ))}
                                    {/* <ButtonsWrapper>
                                        <Icon onClick={_prevPage}>
                                            <ArrowLeftShort />
                                        </Icon>
                                        <Icon onClick={_nextPage}>
                                            <ArrowRightShort /> 
                                        </Icon>
                                    </ButtonsWrapper> */}
                                </>
                        }
                    </List>
                </Main>
            </div>
            <style jsx>{`
        .page {
            margin: 20px;
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

export const Main = styled.div`
    display: block;
    height: 100vh;
    overflow-y: auto;
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 5px;
    min-height: 400px;
    overflow-y: auto;
    height: 100vh;
    width: 100%;
    border-radius: 3px;
    background: ${ color.backgroundLightest };
    padding: 10px 8px 300px 8px;
`;

const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export default Features;