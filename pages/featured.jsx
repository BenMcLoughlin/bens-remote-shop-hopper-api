
/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Layout from "../components/Layout";
import styled from 'styled-components';

import { color } from 'styles/theme';
import incrementProduct from "../requests/incrementProduct";
import loaderGif from 'public/assets/loader/octo_loader.gif';
import useGlobal from "globalState/store";
import Product from 'components/Product';

const Featured = () => {
    const [ globalState, globalActions ] = useGlobal();
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const mountedRef = useRef(true);

    // useEffect(() => {
    //     mountedRef.current && setProducts(globalState.products.hotItems);

    //     // return () => {
    //     //     mountedRef.current = false;
    //     // };
    // }, [ globalState.products.hotItems ]);

    useEffect(() => {
        _getHotItems(40);
    }, []);

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

    return (
        <Layout>
            <Main>
                <Title>
                    These are the {globalState.products.hotItems.length} hottest items, or items that have the highest rating, according to predefined query parameters. In the future these will be specific to the viewer.
                </Title>
                <List>
                    {
                        loading ?
                            <Image src={loaderGif} width={800} height={600} />
                            :
                            <>
                                {globalState.products.hotItems.map((product, index) => (
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
                            </>
                    }
                </List>
            </Main>
        </Layout >
    );
};

export const Title = styled.div`
    font-size: 22px;
    margin: 1rem;
`;

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

export default Featured;