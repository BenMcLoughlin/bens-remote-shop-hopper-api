/* eslint-disable */
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'frontend/styles/global.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'frontend/styles/theme';
import { Layout } from 'frontend/components/layout/Layout';

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

const App = ({ Component, pageProps }) => (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    </SessionProvider>
);

export default App;