import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import Sidebar from './Sidebar';
import ClassExample from './ClassExample';

const ReviewPID = () => (
    <Page noFooter>
        <NavBarLeft />

        <Sidebar isPID />

        <ClassExample />
    </Page>
);

export default ReviewPID;
