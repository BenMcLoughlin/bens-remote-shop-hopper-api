import React from 'react';

import { NavBarLeft, Page } from 'frontend/components';
import { ReviewSidebar } from 'frontend/components/pages/review/Sidebar';
import { EmailDemonstrations } from 'frontend/components/pages/review/EmailDemonstrations';

const Review = () => (
    <Page>
        <NavBarLeft />

        <ReviewSidebar />

        <EmailDemonstrations />
    </Page>
);

export default Review;
