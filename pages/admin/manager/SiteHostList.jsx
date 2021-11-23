import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { Shopify } from '@styled-icons/fa-brands/Shopify';
import HostCard from './HostCard';
import { color, font, mixin } from 'frontend/styles/theme';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';

const SiteHostList = () => {
    const router = useRouter();
    const [globalState, globalActions] = useGlobal();
    const [siteHosts, setSiteHosts] = useState([]);

    // useEffect(() => {
    //     console.log('globalState.siteHosts.list:', globalState.siteHosts.list);
    //     setSiteHosts(globalState.siteHosts.list);

    // }, [ globalState.siteHosts.list ]);

    const _openPage = (path) => {
        router.replace(path);
    };

    if (!globalState.siteHosts.list.length) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <>
            <Title>
                <HostsCount>{globalState.siteHosts.list.length} Host</HostsCount>
            </Title>
            <List>
                <>
                    {globalState.siteHosts.list.map((host, index) => (
                        <HostCard
                            key={`${host.id + index}`}
                            id={host.id}
                            businessName={host}
                            openPage={() => _openPage(`/admin/manager/${host.toLowerCase()}`)}
                            details="We will add some metrics and interesting info about each host type here as time goes on"
                            iconType={Shopify}
                        />
                    ))}
                    {Array.from('odfpinsdf').map((host, index) => (
                        <HostCard
                            key={`${host + index}`}
                            id={host.id}
                            businessName={host}
                            index={index}
                            openPage={() => _openPage(`/admin/manager/${host.toLowerCase()}`)}
                        />
                    ))}
                </>
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
    background: ${color.backgroundLightest};
    padding: 10px 8px 300px 8px;
`;

export const Title = styled.div`
    padding: 13px 10px 17px;
    text-transform: uppercase;
    color: ${color.textMedium};
    ${font.size(12.5)};
    ${mixin.truncateText}
`;

export const HostsCount = styled.span`
    text-transform: lowercase;
    ${font.size(13)};
`;

export const hosts = styled.div`
    height: 100%;
    padding: 0 5px;
`;

export default SiteHostList;
