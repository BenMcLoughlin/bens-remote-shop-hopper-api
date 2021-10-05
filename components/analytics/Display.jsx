import React, { useState } from 'react';
import Metrics from './Analytics';
import Button from '../buttons/Button';
import SelectShop from './SelectShop';
// import { updateMetrics } from './Analytics';

// We might use this to do user fetching .....
export const getServerSideProps = async () => {
    const hotItemsFeed = await prisma.product.findMany({
        where: {
            value: {
                gt: 10
            }
        }
    });
    // const hotItems = dateStripped(hotItemsFeed);

    return { props: { hotItemsFeed } };
};

const Display = ({ hotItems }) => {
    const [isLoading, setIsLoading] = useState(false);

    const updateProducts = async () => {
        setIsLoading(true);
        const uploaded = await fetch('/api/updateProducts', {
            method: 'POST',
            body: JSON.stringify(props.selected),
        });
        uploaded && setIsLoading(false);
        console.log(uploaded);
    };

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    {
                        hotItems?.length &&
                        <div className="cards">
                            {
                                hotItems.map((product) => <div className="card hov" key={product.id} onClick={() => _incrementProduct(product.id)}>
                                    <img className="image" src={product.images[0].src} />
                                    <button className="hov">
                                        {product.rating > 10 && <p className="star">⭐️</p>}
                                        {<a className="blue">
                                            {product.title}
                                            <span className="red">{product.rating}</span>
                                        </a>}
                                    </button>
                                </div>)
                            }
                        </div>
                    }
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 3rem;
                    display: flex;
                    width: 85%;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    // height: 120rem;
                }
                .spinner {
                }
                .top {
                    // height: 35rem;
                    width: 100%;
                }
                .metricsControl {
                    height: 15rem;
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </>
    );
};

export default Display;
