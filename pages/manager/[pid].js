import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/client";
import styled from 'styled-components';

import NavbarLeft from 'components/NavbarLeft';
import Sidebar from './Sidebar';
import Layout from 'components/Layout';
import Counter from "components/Counter";
import MetricsDisplay from 'components/manager/MetricsDisplay';
import SelectShop from 'components/manager/SelectShop';
import * as shopsLists from '../../mock/shopsLists';

import { camelCase, capitalize } from 'utils/strings';
import { updateMetrics } from 'requests/updateMetrics';
import useGlobal from "globalState/store";

import { sizes } from 'styles/theme';
const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

const SiteHost = () => {
    const router = useRouter();
    const [ globalState, globalActions ] = useGlobal();
    const { status } = globalState;
    const { pid } = router.query;

    const [ uploadedResult, setUpLoaded ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ siteHost, setSelectedSiteHost ] = useState('shopify');
    const [ businessName, setSelectedBusinessName ] = useState('');
    const [ domain, setSelectedDomain ] = useState('');

    const city = 'kelowna';
    const shopsList = shopsLists[city];

    useEffect(() => {
        setUpLoaded(globalState.counter.result);
    }, [ globalState.counter.result ]);

    useEffect(() => {
        const selectedShop = shopsList.find((d) => d.business_name === businessName);
        selectedShop && setSelectedDomain(selectedShop.domain);
    }, [ businessName ]);

    // todo: Convert to GlobalState
    const shops = {
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

    const _updateAll = async () => {
        const success = await globalActions.products.all(globalState.shops);

        if (success) {
            updateMetrics(true, 'all');
            return true;
        }
    };

    const _updateSingle = async (params) => {
        setLoading(true);
        globalActions.counter.clearRequests();
        globalActions.counter.setLoading(true);
        const success = await globalActions.products.single(params);

        if (success) {
            updateMetrics(true, params.business_name);
            setLoading(false);
            globalActions.counter.setLoading(false);

            return true;
        }
    };

    return (
        <Layout isManager>
            <Page>
                <NavbarLeft />

                <Sidebar />

                <Title>
                    <h2 style={{ color: '#fff' }}>{`${ capitalize(pid || "not working") } Database Manager`} </h2>
                    <Counter />
                </Title>
                {
                    uploadedResult && 
                                <Results>
                                    {(status && globalState.counter.loading) && <span style={{ margin: 5, fontSize: 8, color: '#fff' }}>{status}</span>}
                                    {uploadedResult.map((result) => <p key={result.result} style={result.status === 422 ? { color: 'red', textAlign: 'right' } : { textAlign: 'right' }}>{result.result}</p>)
                                    }
                                </Results>
                }
                <SiteHostSection>
                    <MetricsDisplay
                        header={shops.selected.siteHost}
                        isHost
                        loading={globalState.counter.loading}
                        buttonTitle={`Load All ${ shops.selected.siteHost } Shops`}
                        buttonClick={() => {
                            shops.set.selectedBusinessName('');

                            _updateAll({
                                siteHost: shops.selected.siteHost,
                                businessName: null,
                                domain: null
                            });
                        }}
                        disabled={Boolean(shops.selected.businessName)}
                    />
                </SiteHostSection>

                <ShopSection>
                    {
                        shops.selected.businessName &&
                                    <MetricsDisplay
                                        header={shops.selected.businessName}
                                        loading={globalState.counter.loading}
                                        buttonTitle={`Load ${ shops.selected.businessName }`}
                                        buttonClick={() => {
                                            // set.selectedSiteHost(''); todo
                                            _updateSingle(shops.selected);
                                        }}
                                        disabled={false}
                                    />
                    }
                </ShopSection>

                <SelectShop
                    shopsList={shops.shopsList}
                    set={shops.set}
                    selected={shops.selected}
                    refresh={Boolean(uploadedResult)}
                />
            </Page>
        </Layout>
    );
};

export const Page = styled.div`
    // padding: 25px 32px 50px ${ paddingLeft }px;
    // @media (max-width: 1100px) {
    //     padding: 25px 20px 50px ${ paddingLeft - 20 }px;
    // }
    // @media (max-width: 999px) {
    //     padding-left: ${ paddingLeft - 20 - sizes.secondarySideBarWidth }px;
    // }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    color: #14e2a4;
    background: #485056;
    white-space: nowrap;
`;
const SiteHostSection = styled.div`
    display: flex;
    justify-content: flex-end;
    background: #14c792;
    background: -webkit-linear-gradient(bottom left, #14c792, #14e2a4);
    background: -moz-linear-gradient(bottom left, #14c792, #14e2a4);
    background: linear-gradient(to top right, #14c792, #14e2a4);
`;
const ShopSection = styled.div`
    display: flex;
    justify-content: flex-end;
    min-height: 4rem;
    ${ (p) => p.theme.gradient.secondary };
`;
const Results = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding: 1rem;
    padding-right: 3rem;
    background: #485056;
    white-space: nowrap;
`;

SiteHost.propTypes = {
    shopsList: PropTypes.array,
    set: PropTypes.object,
    selected: PropTypes.object
};

export default SiteHost;