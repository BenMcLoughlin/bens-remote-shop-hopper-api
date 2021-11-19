import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import { ReviewSidebar } from './Sidebar';
import { EmailDemonstrations } from './EmailDemonstrations';

const Review = () => (
    <Page>
        <NavBarLeft />

        <ReviewSidebar />

        <EmailDemonstrations />
    </Page>
);

export default Review;
