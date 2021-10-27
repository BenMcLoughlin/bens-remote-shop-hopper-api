import React from 'react';
import styled from 'styled-components';

import { sizes } from 'styles/theme';
import Layout from 'components/Layout';
import NavbarLeft from 'components/NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

const ProductReviewSystem = () => (
    <Layout>
        <Page>
            <NavbarLeft />

            <Sidebar />

            <Board />
        </Page>
    </Layout>
);

export const Page = styled.div`
    padding: 20.05rem 32px 50px ${paddingLeft}px;
    @media (max-width: 1100px) {
        padding: 20.05rem 0.2rem 50px ${paddingLeft - 20}px;
    }
    @media (max-width: 999px) {
        padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
    }
`;

export default ProductReviewSystem;
