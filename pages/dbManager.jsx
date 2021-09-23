import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SideNav from '../components/dbManager/SideNav';
import Display from '../components/dbManager/Display';
import * as shopsLists from '../mock/shopsLists';
import { camelCase } from '../utils/strings';

const ExtractTransformLoad = () => {
    const city = 'kelowna';

    const shopsList = shopsLists[city];

    const [siteHost, setSelectedSiteHost] = useState('shopify');
    const [businessName, setSelectedBusinessName] = useState('bigSun');
    const [domain, setSelectedDomain] = useState('');

    useEffect(() => {
        const selectedShop = shopsList.find((d) => camelCase(d.business_name) === businessName);
        selectedShop && setSelectedDomain(selectedShop.domain);
    }, [businessName]);

    const props = {
        shopsList,
        selected: {
            siteHost: camelCase(siteHost),
            businessName: camelCase(businessName),
            update: 'allShops',
            domain,
        },
        set: {
            selectedSiteHost: (v) => setSelectedSiteHost(v),
            selectedBusinessName: (v) => setSelectedBusinessName(v),
        },
    };

    return (
        <Layout>
            <div className="wrapper">
                <div className="column">
                    <div className="title">Database Manager</div>
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
                .title {
                    width: 100%;
                    height: 7rem;
                    font-size: 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    background: #485056;
                }
            `}</style>
        </Layout>
    );
};

export default ExtractTransformLoad;
