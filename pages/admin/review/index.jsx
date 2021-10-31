import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import Sidebar from './Sidebar';
import Board from './Board';

const ProductReviewSystem = () => (
    <Page>
        <NavBarLeft />

        <Sidebar />

        <Board />
    </Page>
);

export default ProductReviewSystem;
