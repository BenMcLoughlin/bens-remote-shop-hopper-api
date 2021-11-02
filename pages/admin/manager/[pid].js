import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { NavBarLeft, Counter, SelectShop, MetricsDisplay, Page } from 'frontend/components';
import Sidebar from './Sidebar';
import * as shopsLists from 'frontend/mock/shopsLists';

import { camelCase, capitalize } from 'frontend/utils/strings';
import { updateMetrics } from 'backend/requests/updateMetrics';
import useGlobal from 'frontend/globalState/store';

const SiteHost = () => {
    const router = useRouter();
    const [globalState, globalActions] = useGlobal();
    const { status } = globalState;
    const { pid } = router.query;

    const [uploadedResult, setUpLoaded] = useState(false);
    const [siteHost, setSelectedSiteHost] = useState('shopify');
    const [businessName, setSelectedBusinessName] = useState('');
    const [domain, setSelectedDomain] = useState('');

    const city = 'kelowna';
    const shopsList = shopsLists[city];

    useEffect(() => {
        setUpLoaded(globalState.counter.result);
    }, [globalState.counter.result]);

    useEffect(() => {
        const selectedShop = shopsList.find((d) => d.business_name === businessName);
        selectedShop && setSelectedDomain(selectedShop.domain);
    }, [businessName]);

    const selected = {
        siteHost: camelCase(siteHost),
        businessName: businessName,
        domain
    };

    const set = {
        selectedSiteHost: (v) => setSelectedSiteHost(v),
        selectedBusinessName: (v) => setSelectedBusinessName(v === businessName ? '' : v)
    };

    const _cancel = async () => {
        // todo
        // await globalActions.products.all([], true);
    };

    const _updateAll = async () => {
        console.time('_updateAll');
        globalActions.counter.clearRequests();
        await globalActions.counter.setLoading(true);
        const success = await globalActions.products.all(globalState.shops);

        if (success) {
            updateMetrics(true, 'all');
            await globalActions.counter.setLoading(false);

            return true;
        }

        console.timeend('_updateAll');
    };

    const _updateSingle = async (params) => {
        globalActions.counter.clearRequests();
        await globalActions.counter.setLoading(true);
        const success = await globalActions.products.single(params);

        if (success) {
            updateMetrics(true, params.business_name);
            await globalActions.counter.setLoading(false);

            return true;
        }
    };

    console.log('status:', status)

    return (
        <Page>
            <NavBarLeft />

            <Sidebar />

            <Title>
                <h2 style={{ color: '#fff', margin: 10 }}>
                    {`${capitalize(pid || 'not working')} Database Manager`}{' '}
                </h2>
                <Counter />
            </Title>
            {uploadedResult && (
                <Results>
                    {status && globalState.counter.loading && (
                        <span style={{ margin: 5, fontSize: 8, color: '#fff' }}>{status}</span>
                    )}
                    {uploadedResult.map((result) => (
                        <p
                            key={result.result}
                            style={
                                result.status === 422
                                    ? { color: 'red', textAlign: 'right' }
                                    : { textAlign: 'right' }
                            }>
                            {result.result}
                        </p>
                    ))}
                </Results>
            )}

            <SiteHostSection>
                <MetricsDisplay
                    headerTitle={selected.siteHost}
                    isHost
                    loading={globalState.counter.loading}
                    cancel={_cancel}
                    buttonTitle={`Update All ${selected.siteHost} Shops`}
                    buttonClick={() => {
                        set.selectedBusinessName('');

                        _updateAll({
                            siteHost: selected.siteHost,
                            businessName: null,
                            domain: null
                        });
                    }}
                    disabled={Boolean(selected.businessName)}
                />
            </SiteHostSection>

            <ShopSection>
                {selected.businessName && (
                    <MetricsDisplay
                        headerTitle={selected.businessName}
                        loading={globalState.counter.loading}
                        cancel={_cancel}
                        buttonTitle={`Update ${selected.businessName}`}
                        buttonClick={() => {
                            _updateSingle(selected);
                        }}
                        disabled={false}
                    />
                )}
            </ShopSection>

            <SelectShop
                shopsList={shopsList}
                set={set}
                selected={selected}
                refresh={Boolean(uploadedResult)}
            />
        </Page>
    );
};

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.2rem;
    color: #14e2a4;
    background: #485056;
    border-radius: 4px;
    @media (max-width: 680px) {
        padding: 0.05rem;
        width: unset;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
    }
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
    ${(p) => p.theme.gradient.secondary};
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
`;

SiteHost.propTypes = {
    shopsList: PropTypes.array,
    set: PropTypes.object,
    selected: PropTypes.object
};

export default SiteHost;
