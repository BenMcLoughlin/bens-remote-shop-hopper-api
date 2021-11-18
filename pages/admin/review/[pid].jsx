import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import Sidebar from './Sidebar';
import ClassExamples from './ClassExamples';

const ReviewPID = () => (
    <Page noFooter>
        <NavBarLeft />

        <Sidebar isPID />

        <ClassExamples />
    </Page>
);

export default ReviewPID;
