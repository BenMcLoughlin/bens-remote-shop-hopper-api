import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '../../components/Layout';
// import incrementProduct from "../../requests/incrementProduct";
import searchTwoParams from "../../requests/searchTwoParams";

import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';
import { ProjectPage } from './Styles';

import { startData } from './mocks';

const ProductReviewSystem = () => {
    const session = useSession();
    const isLoggedIn = session[0]?.user;
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    const [ loading, setLoading ] = useState(false);
    const [ products, setProducts ] = useState([]);
    const [ queryStrings, setQueryStrings ] = useState({
        column: 'buckets', 
        metric: "Athletic"
    });

    useEffect(() => {
        _searchTwoParams(queryStrings);
    }, []);

    const _searchTwoParams = async () => {
        setLoading('search');
        const result = await searchTwoParams(queryStrings);
        if (result) {
            let sorted = result.splice(0, 88);

            sorted.sort((a, b) => {
                if (a.rating < b.rating) { 
                    return 1; 
                }

                if (a.rating > b.rating) { 
                    return -1; 
                }

                return 0;
            });

            setProducts(sorted);
            setLoading(false);
        }
    };

    const project = startData.project;


    return (
        <Layout>
            {
                !isLoggedIn ? // todo
                    <ProjectPage>
                        <NavbarLeft
                            issueSearchModalOpen={false}
                            issueCreateModalOpen={false}
                        />

                        <Sidebar project={project} />

                        <Board
                            users={project.users}
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

export default ProductReviewSystem;