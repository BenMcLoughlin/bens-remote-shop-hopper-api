import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SideNav from '../components/manager/SideNav';
import Display from '../components/manager/Display';
import * as shopsLists from '../mock/shopsLists';
import { camelCase } from '../utils/strings';

const manager = () => {
    const session = useSession();
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    const city = 'kelowna';
    const shopsList = shopsLists[city];

    const [siteHost, setSelectedSiteHost] = useState('shopify');
    const [businessName, setSelectedBusinessName] = useState('');
    const [domain, setSelectedDomain] = useState('');

    useEffect(() => {
        const selectedShop = shopsList.find((d) => d.business_name === businessName);
        selectedShop && setSelectedDomain(selectedShop.domain);
    }, [businessName]);

    const props = {
        shopsList,
        selected: {
            siteHost: camelCase(siteHost),
            businessName: businessName,
            domain,
        },
        set: {
            selectedSiteHost: (v) => setSelectedSiteHost(v),
            selectedBusinessName: (v) => setSelectedBusinessName(v === businessName ? '' : v),
        },
    };

    const isLoggedIn = session[0]?.user;

    return (
        <Layout>
            {
                isLoggedIn ?
                    <div className="wrapper">
                        <div className="column">
                            <h1 className="title">Database Manager</h1>
                            <div className="row">
                                <SideNav  {...props} />
                                <Display {...props} />
                            </div>
                        </div>
                    </div>
                    :
                    <Link href="/api/auth/signin">
                        <div className="notice hov">
                            <a data-active={isActive('/signup')}>Might as well Log in</a>
                        </div>
                    </Link>
            }
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
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #14e2a4;
                    background: #485056;
                    white-space: nowrap;
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

export default manager;
