import React, { useState } from 'react';
import Metrics from './Analytics';
import Button from '../buttons/Button';
import SelectShop from './SelectShop';

// We might use this to do user fetching .....
export const getServerSideProps = async () => {
    const hotItemsFeed = await prisma.product.findMany({
        where: {
            value: {
                gt: 10
            }
        }
    });
    // const hot_items = dateStripped(hotItemsFeed);

    return { props: { hotItemsFeed } };
};

const Display = ({ hot_items }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    {
                        hot_items?.length &&
                        <div className="cards">
                            {
                                hot_items.map((product) => <div className="card hov" key={product.id} onClick={() => _incrementProduct(product.id)}>
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
