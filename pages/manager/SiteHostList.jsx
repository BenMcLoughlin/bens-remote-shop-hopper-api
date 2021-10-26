import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

import HostCard from './HostCard';
import { color, font, mixin } from 'styles/theme';
import useGlobal from "globalState/store";
import loaderGif from 'public/assets/loader/octo_loader.gif';

const SiteHostList = () => {
    const router = useRouter();
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ siteHosts, setSiteHosts ] = useState([]);
    const mountedRef = useRef(true);

    // useEffect(() => {
    //     console.log('globalState.siteHosts.list:', globalState.siteHosts.list);
    //     mountedRef.current && setSiteHosts(globalState.siteHosts.list);

    //     return () => {
    //         mountedRef.current = false;
    //     };
    // }, [ globalState.siteHosts.list ]);

    const _openPage = (path) => {
        router.replace(path);
    };

    if (!globalState.siteHosts.list.length) {
        return <p>Loading ...</p>;
    }

    return (
        <>
            <Title>
                <HostsCount>{siteHosts.length} Items</HostsCount>
            </Title>
            <List>
                {
                    loading ?
                        <Image src={loaderGif} className="loading" width={800} height={600} />
                        :
                        <>
                            {globalState.siteHosts.list.map((host, index) => (
                                <HostCard
                                    key={`${ host.id + index }`}
                                    id={host.id}
                                    businessName={host}
                                    openPage={() => _openPage(`/manager/${ host.toLowerCase() }`)}
                                />
                            ))}
                            {Array.from('odfpinsdfpposndfpn').map((host, index) => (
                                <HostCard
                                    key={`${ host + index }`}
                                    id={host.id}
                                    businessName={host}
                                    index={index}
                                    openPage={() => _openPage(`/manager/${ host.toLowerCase() }`)}
                                />
                            ))}
                        </>
                }
            </List>
        </>
    );
};

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

export const HostsCount = styled.span`
    text-transform: lowercase;
    ${ font.size(13) };
`;

export const hosts = styled.div`
    height: 100%;
    padding: 0 5px;
`;

export default SiteHostList;