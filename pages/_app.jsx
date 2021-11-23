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
import { Auth0Provider } from '@auth0/auth0-react';

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
            <Auth0Provider
                domain="dev-lb7cs6nt.us.auth0.com"
                clientId="XUT4AkENVnJtWG5dKIkDdNWPYLmEpTgK"
                //secret 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
                redirectUri={'https://bens-remote-shop-hopper-api-j9hr7zm4z-benmcloughlin.vercel.app'}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Auth0Provider>
        </ThemeProvider>
    </SessionProvider>
);

export default App;
