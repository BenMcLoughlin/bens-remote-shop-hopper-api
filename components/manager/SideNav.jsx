import React from 'react';
import { camelCase, startCase } from '../../utils/strings';

import Link from 'next/link';

const SideNav = ({ shopsList, selected, set }) => {
    const siteHostList = [ ...new Set(shopsList.map((d) => d.site_host)) ].filter((d) => d);
    const selectedIndex = siteHostList.findIndex((d) => camelCase(d) == selected.siteHost);

    return (
        <div className="wrapper">
            <div className="city">Kelowna</div>
            <Link href={`/manager/shopify`}>
                <div
                    className={`listItem shopify`}
                >
                    <p>{startCase('shopify')}</p>
                </div>
            </Link>

            <ul className="list">
                {siteHostList.map((siteHost) => (
                    <Link 
                        key={siteHost}
                        href={`/manager/${ siteHost }`}
                    >
                        <div
                            // className={`listItem ${ camelCase(siteHost) }`} todo
                            className={`listItem`}
                        >
                            <p>{startCase(siteHost)}</p>
                        </div>
                    </Link>
                ))}
                <div className="pill" /> todo
            </ul>

            <style jsx>{`
                .wrapper {
                    background: #485056;
                    padding: 1rem;
                    height: 90rem;
                    width: 20%;
                    margin-top: -2.3rem;
                    border-radius: 5px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }
                .city {
                    width: 100%;
                    height: 5rem;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 1px solid white;
                    margin-bottom: 1rem;
                }
                .list {
                    justify-content: left;
                    align-items: center;
                    display: flex;
                    height: ${ siteHostList.length * 6 }rem;
                    flex-direction: column;
                    position: relative;
                    gap: 1rem;
                    height: 100%;
                    flex-wrap: wrap;
                }
                .listItem {
                    padding: 1rem;
                    display: flex;
                    cursor: pointer;
                    align-items: center;
                    border-radius: .5rem;
                }
                .${ selected.siteHost } {
                    background: #f7f7f7;
                    color: #1469eb;
                    transition: all 0.5s ease;
                }
                .${ selected.siteHost }:hover {
                    box-shadow: 11px 11px 22px #dedede, -11px -11px 22px #ffffff;
                }
                .pill {
                    position: absolute;
                    min-width: 0.3rem;
                    height: 5.5rem;
                    top: 0.4rem;
                    left: -0.3rem;
                    z-index: 501;
                    background: white;
                    transform: translate(0, ${ selectedIndex > 0 ? selectedIndex * 7 : 0 }rem);
                    transition: all 0.3s ease;
                    border-radius: 5px;
                    animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards
                        running fmdUjs;
                }
            `}</style>
        </div>
    );
};

export default SideNav;