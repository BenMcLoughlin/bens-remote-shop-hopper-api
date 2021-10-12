import React from 'react';
import { camelCase, startCase } from '../../utils/strings';

const SideNav = ({ shopsList, selected, set }) => {
    const siteHostList = [ ...new Set(shopsList.map((d) => d.site_host)) ].filter((d) => d);
    const selectedIndex = siteHostList.findIndex((d) => camelCase(d) == selected.siteHost);

    console.log('set:', [ ...new Set(shopsList.map((d) => d.site_host)) ].filter((d) => d));
    console.log('map:', shopsList.map((d) => d.site_host));
    console.log('sort:', [ ...new Set(shopsList.map((d) => d.site_host)) ].sort());

    return (
        <div className="wrapper">
            <div className="city">Kelowna</div>
            <ul className="list">
                {siteHostList.map((siteHost) => (
                    <div
                        key={siteHost}
                        className={`listItem ${ camelCase(siteHost) }`}
                        onClick={() => set.selectedSiteHost(camelCase("shopify"))} // todo
                    >
                        {startCase(siteHost)}
                    </div>
                ))}
                <div className="pill" />
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
                    padding: 3rem;
                    display: flex;
                    height: 1rem;
                    cursor: pointer;
                    width: 95%;
                    text-align: left;
                    align-items: center;
                }
                .${ selected.siteHost } {
                    background: #f7f7f7;
                    color: #1469eb;
                    transition: all 0.5s ease;
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