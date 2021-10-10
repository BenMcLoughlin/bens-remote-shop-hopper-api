import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/client";
import styled from 'styled-components';

import useGlobal from "../../globalState/store";

import Layout from '../../components/Layout';
import Counters from "../../components/Counters";
import Products from "../../components/Products";
import * as shopsLists from '../../mock/shopsLists';

import { camelCase, capitalize } from '../../utils/strings';
import MetricsDisplay from './MetricsDisplay';
import SelectShop from './SelectShop';
import { updateMetrics } from '../../lib/requests/updateMetrics';


import Image from 'next/image';
import greenCircles from '../../public/assets/footer/greenCircles.png';
import phone from '../../public/assets/footer/phone.png';
import { RadialButton } from '../../components';
import { useOnScreen } from '../../hooks/useOnScreen';

const Sitehost = () => {
    const session = useSession();
    const router = useRouter();
    const [ uploadedSuccess, setUpLoaded ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ globalState, globalActions ] = useGlobal();
    const { pid } = router.query;
    console.log('pid:', pid);

    const isActive = (pathname) => router.pathname === pathname;

    const city = 'kelowna';
    const shopsList = shopsLists[city];

    const [ siteHost, setSelectedSiteHost ] = useState('shopify');
    const [ businessName, setSelectedBusinessName ] = useState('');
    const [ domain, setSelectedDomain ] = useState('');

    useEffect(() => {
        const selectedShop = shopsList.find((d) => d.business_name === businessName);
        selectedShop && setSelectedDomain(selectedShop.domain);
    }, [ businessName ]);

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


    const _updateProducts = async (params) => {
        setIsLoading(true);
        // const success = await updateProducts(params);
        const success = await globalActions.extract.single(params);

        if (success) {
            setUpLoaded(success.result);
            setIsLoading(false);

            return true;
        }
    };

    const isLoggedIn = session[0]?.user;

    return (
        <Layout>
            {
                isLoggedIn ?
                    <>
                        <div className="title">
                            <h2>{`${ capitalize(pid) } Database Manager`} </h2>
                            <Counters />
                            <Products />
                        </div>
                        <Top>
                            {/* <Background>
                                <Image src={greenCircles} width={2000} height={300} />
                            </Background> */}
                            <MetricsDisplay
                                header={shops.selected.siteHost}
                                refresh={uploadedSuccess}
                                isHost
                                isLoading={isLoading}
                                buttonTitle={`Load All ${ shops.selected.siteHost } Shops`}
                                buttonClick={() => {
                                    shops.set.selectedBusinessName('');

                                    _updateProducts({
                                        siteHost: shops.selected.siteHost,
                                        businessName: null,
                                        domain: null
                                    }).then(() => {
                                        updateMetrics(true, pid);
                                    });
                                }}
                                disabled={shops.selected.businessName}
                            />
                        </Top>
                        <Bottom>
                            {
                                uploadedSuccess === 'failed' &&
                                <p className="red">Product acquisition failed.</p>
                            }
                            {
                                shops.selected.businessName &&
                                    <MetricsDisplay
                                        header={shops.selected.businessName}
                                        refresh={uploadedSuccess}
                                        isLoading={isLoading}
                                        buttonTitle={`Load ${ shops.selected.businessName }`}
                                        buttonClick={() => {
                                            // set.selectedSiteHost(''); todo
                                            _updateProducts(shops.selected).then(() => {
                                                updateMetrics(true, shops.selected.businessName);
                                            });
                                        }}
                                        disabled={false}
                                    />
                            }
                        </Bottom>
                        <div className="wrapper">
                            <SelectShop
                                shopsList={shops.shopsList}
                                set={shops.set}
                                selected={shops.selected}
                                refresh={uploadedSuccess}
                            />
                        </div>
                    </>
                    :
                    <Link href="/api/auth/signin">
                        <div className="notice hov">
                            <a data-active={isActive('/signup')}>Might as well Log in</a>
                        </div>
                    </Link>
            }
            <style jsx>{`
                .title {
                    width: 100%;
                    height: 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    color: #14e2a4;
                    background: #485056;
                    white-space: nowrap;
                }
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
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

const Wrapper = styled.div`
    background: yellow;
    height: 8rem;
    width: 100%;
    background: green;
    margin-top: 30rem;
    color: white;
`;
const Top = styled.div`
    display: flex;
    justify-content: flex-end;
    // align-items: center;
    // flex-direction: column;
    background: #14c792;
    background: -webkit-linear-gradient(bottom left, #14c792, #14e2a4);
    background: -moz-linear-gradient(bottom left, #14c792, #14e2a4);
    background: linear-gradient(to top right, #14c792, #14e2a4);
`;
const Bottom = styled.div`
    display: flex;
    justify-content: flex-end;
    // align-items: center;
    // flex-direction: column;
    // ${ (props) => props.theme.flex.center };
    ${ (p) => p.theme.gradient.secondary };
`;
const Right = styled.div`
    z-index: 2;
    right: 4rem;
    display: flex;
    width: 40%;
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const Title = styled.div`
    font-size: ${ (props) => props.theme.font.mediumLarge };
    font-weight: 600;
`;
const SubTitle = styled.div`
    font-size: ${ (props) => props.theme.font.small };
    font-weight: 200;
`;
const Background = styled.div`
    position: absolute;
    top: 0rem;
    left: 0rem;
    height: 4rem;
    width: 100%;
`;
const Buttons = styled.div`
    width: 40rem;
    display: flex;
    justify-content: space-around;
`;
const Social = styled.div`
    width: 80rem;
    display: flex;
    justify-content: space-around;
`;
const SocialLink = styled.div`
    border-bottom: 1px solid white;
    font-size: ${ (props) => props.theme.font.small };
    height: 2.5rem;
    font-weight: 200;
    opacity: 0.6;
`;
const Copyright = styled.div`
    width: 80rem;
    display: flex;
    justify-content: space-around;
    display: flex;
    align-items: center;
    opacity: 0.6;
`;
const CopyrightText = styled.div`
    font-size: ${ (props) => props.theme.font.small };
    height: 2.5rem;
    font-weight: 200;
`;
const Vr = styled.div`
    border-right: 1px solid white;
    height: 3.5rem;
`;

Sitehost.propTypes = {
    shopsList: PropTypes.array,
    set: PropTypes.object,
    selected: PropTypes.object
};

export default Sitehost;