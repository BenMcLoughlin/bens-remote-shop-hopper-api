import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import { ReviewSidebar } from './Sidebar';
import { ClassExamples } from './ClassExamples';

const ReviewPID = () => (
    <Page noFooter>
        <NavBarLeft />

        <ReviewSidebar isPID />

        <ClassExamples />
    </Page>
);

export default ReviewPID;
