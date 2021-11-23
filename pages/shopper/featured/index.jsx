import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
// import Sidebar from './Sidebar';
import Board from './Board';

const Featured = () => (
    <Page featured>
        <Board />
    </Page>
);

export default Featured;
