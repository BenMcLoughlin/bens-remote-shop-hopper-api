/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { color } from 'frontend/styles/theme';
import loaderGif from 'public/assets/loader/octo_loader.gif';
import useGlobal from 'frontend/globalState/store';
import { Product } from 'frontend/components';

import incrementProduct from 'backend/requests/incrementProduct';

const HotItems = () => {
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);

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
        <Main>
            <Title>
                These are the {globalState.products.hotItems.length} hottest items, or items that
                have the highest rating, according to predefined query parameters.
            </Title>
            <List>
                {loading ? (
                    <Image src={loaderGif} width={800} height={600} />
                ) : (
                    <>
                        {globalState.products.hotItems?.map((product, index) => (
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
                                sizes={product.sizes}
                                incrementProduct={_incrementProduct}
                            />
                        ))}
                    </>
                )}
            </List>
        </Main>
    );
};

export const Title = styled.div`
    font-size: 16px;
    margin: 1rem;
`;

export const Main = styled.div`
    display: block;
    height: 100vh;
    overflow-y: auto;
    margin-top: 3rem;
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 0.05rem;
    min-height: 400px;
    overflow-y: auto;
    height: 100vh;
    width: 100%;
    border-radius: 3px;
    background: ${color.backgroundLightest};
    padding: 0.1rem 8px 300px 8px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export default HotItems;
