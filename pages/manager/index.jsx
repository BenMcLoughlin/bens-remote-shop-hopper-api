import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import hydrateRequest from "requests/hydrateRequest";
import SideNav from 'components/manager/SideNav';
import Display from 'components/manager/Display';
import * as shopsLists from '../../mock/shopsLists';
import { camelCase } from 'utils/strings';

const manager = () => {
    const [ loading, setLoading ] = useState(false);
    const [ siteHost, setSelectedSiteHost ] = useState('shopify');
    const [ businessName, setSelectedBusinessName ] = useState('');
    const [ domain, setSelectedDomain ] = useState('');
    const city = 'kelowna';
    const shopsList = shopsLists[city];

    useEffect(() => {
        const selectedShop = shopsList.find((d) => d.business_name === businessName);
        selectedShop && setSelectedDomain(selectedShop.domain);
    }, [ businessName ]);

    const props = {
        shopsList,
        selected: {
            siteHost: camelCase(siteHost),
            businessName: businessName,
            domain
        },
        set: {
            selectedSiteHost: (v) => setSelectedSiteHost(v),
            selectedBusinessName: (v) => setSelectedBusinessName(v === businessName ? '' : v)
        }
    };

    const _wipeDatabase = async () => {
        setLoading('wipeDatabase');
        const result = await hydrateRequest({ request: 'DESTROY' });
        if (result) {
            console.log('result:', result);
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="wrapper">
                <Title>
                    <h1>Database Manager</h1>
                    <button className="send hov" onClick={_wipeDatabase}>
                        {loading === 'wipeDatabase' ? "Loading..." : <a className="red">Permanently Wipe DB (testing only)</a>}
                    </button>
                </Title>
                <div className="column">
                    <div className="row">
                        <SideNav {...props} />
                        <Display {...props} />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    height: 100%;
                    width: 100%;
                }
                .column {
                    display: flex;
                    flex-direction: column;
                }
                .row {
                    display: flex;
                    justify-content: center;
                }
                .notice {
                    background: white;
                    transition: box-shadow 0.1s ease-in;
                    padding: 20px;
                }
                .hov:hover {
                    box-shadow: 1px 1px 3px #aaa;
                }
            `}</style>
        </Layout>
    );
};

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem;
    color: #14e2a4;
    background: #485056;
    white-space: nowrap;
`;

export default manager;