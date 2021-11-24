/* eslint-disable */
import React from 'react';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'frontend/styles/global.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'frontend/styles/theme';
import { Layout } from 'frontend/components/layout/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';

NProgress.configure({ showSpinner: true, trickleRate: 0.1, trickleSpeed: 300 });

Router.events.on('routeChangeStart', () => {
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
    NProgress.done();
});

Router.events.on('routeChangeError', () => {
    NProgress.done();
});

const App = ({ Component, pageProps }) => {
    const { user } = pageProps;
    return (
        <UserProvider user={user} redirectUri={'http://localhost:3000/shopper/onboard'}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </UserProvider>
    );
};

export default App;
