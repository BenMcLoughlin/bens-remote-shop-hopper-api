import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '../../components/Layout';

import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';
import { ProjectPage } from './Styles';

import { startData } from './mocks';

const products = () => {
    const session = useSession();
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    const project = startData.project;

    const isLoggedIn = session[0]?.user;

    return (
        <div>
            {
                !isLoggedIn ? // todo
                    <ProjectPage>
                        <NavbarLeft
                            issueSearchModalOpen={false}
                            issueCreateModalOpen={false}
                        />

                        <Sidebar project={project} />

                        <Board
                            products={products}
                        />
                    </ProjectPage>
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
        </div>
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

export default products;