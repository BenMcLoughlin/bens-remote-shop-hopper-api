import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { sizes } from 'styles/theme';
import Layout from '../../components/Layout';
// import incrementProduct from "../../requests/incrementProduct";
import searchTwoParams from "../../requests/searchTwoParams";

import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';

import { startData } from './mocks';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

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

    console.log('products:', products);

    return (
        <Layout>
            {
                isLoggedIn ?
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
        </Layout>
    );
};

export const ProjectPage = styled.div`
    padding: 25px 32px 50px ${ paddingLeft }px;
    @media (max-width: 1100px) {
        padding: 25px 20px 50px ${ paddingLeft - 20 }px;
    }
    @media (max-width: 999px) {
        padding-left: ${ paddingLeft - 20 - sizes.secondarySideBarWidth }px;
    }
`;

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