import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import { ReviewSidebar } from 'frontend/components/pages/review/Sidebar';
import { ClassExamples } from 'frontend/components/pages/review/ClassExamples';

const ReviewPID = () => (
    <Page noFooter>
        <NavBarLeft />

        <ReviewSidebar isPID />

        <ClassExamples />
    </Page>
);

export default ReviewPID;
