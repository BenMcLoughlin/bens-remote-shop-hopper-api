import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import Sidebar from './Sidebar';
import Board from './Board';
import ClassExample from './ClassExample';

const ProductReviewClass = () => (
    <Page>
        <NavBarLeft />

        <Sidebar />

        <ClassExample />

        <Board />
    </Page>
);

export default ProductReviewClass;
