import React from 'react';
import { NavBarLeft, Page } from 'frontend/components';
import SiteHostList from './SiteHostList';
import Sidebar from './Sidebar';

const manager = () => (
    <Page>
        <NavBarLeft />

        <Sidebar />

        <SiteHostList />
    </Page>
);

export default manager;
