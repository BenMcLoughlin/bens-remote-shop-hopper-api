import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';

import HostCard from '../HostCard';
import { color, font, mixin } from 'styles/theme';
import useGlobal from "globalState/store";
import loaderGif from 'public/assets/loader/octo_loader.gif';

const SiteHostList = () => {
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ siteHosts, setSiteHosts ] = useState([]);

    useEffect(() => {
        setSiteHosts(globalState.siteHosts.list);
    }, [ globalState.siteHosts.list ]);

    const _nextPage = async () => {
        setLoading('nextPage');
        const result = await globalActions.apiRequests.nextPage();
        if (result) {
            setLoading(false);
        }
    };

    const _prevPage = async () => {
        setLoading('prevPage');
        const result = await globalActions.apiRequests.prevPage();
        if (result) {
            setLoading(false);
        }
    };

    if (!siteHosts.length) {
        return <p>Loading ...</p>;
    }

    return (
        <>
            <Title>
                <hostsCount>{siteHosts.length} Items</hostsCount>
            </Title>
            {/* <ButtonsWrapper>
                <Icon onClick={_prevPage}>
                    <ArrowLeftShort />
                </Icon>
                <Icon onClick={_nextPage}>
                    <ArrowRightShort /> 
                </Icon>
            </ButtonsWrapper> */}
            <List>
                {
                    loading ?
                        <Image src={loaderGif} className="loading" width={800} height={600} />
                        :
                        <>
                            {siteHosts.map((host, index) => (
                                <HostCard
                                    key={host.id}
                                    id={host.id}
                                    businessName={host}
                                    index={index}
                                />
                            ))}
                            {Array.from('odfpinsdfpposndfpn').map((host, index) => (
                                <HostCard
                                    key={host.id}
                                    id={host.id}
                                    businessName={host}
                                    index={index}
                                />
                            ))}
                            <ButtonsWrapper>
                                <Icon onClick={_prevPage}>
                                    <ArrowLeftShort />
                                </Icon>
                                <Icon onClick={_nextPage}>
                                    <ArrowRightShort /> 
                                </Icon>
                            </ButtonsWrapper>
                        </>
                }
            </List>
        </>
    );
};

// export const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
//     min-height: 100vh;
// `;

const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 5px;
    min-height: 400px;
    overflow-y: auto;
    height: 100vh;
    width: 100%;
    border-radius: 3px;
    background: ${ color.backgroundLightest };
    padding: 10px 8px 300px 8px;
`;

export const Title = styled.div`
    padding: 13px 10px 17px;
    text-transform: uppercase;
    color: ${ color.textMedium };
    ${ font.size(12.5) };
    ${ mixin.truncateText }
`;

export const hostsCount = styled.span`
    text-transform: lowercase;
    ${ font.size(13) };
`;

export const hosts = styled.div`
    height: 100%;
    padding: 0 5px;
`;

export default SiteHostList;