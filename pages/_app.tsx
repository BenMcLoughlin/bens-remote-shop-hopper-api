/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/global.css';

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

const App = ({ Component, pageProps }: AppProps) => (
    <Provider session={pageProps.session}>
        <Component {...pageProps} />
    </Provider>
);

export default App;
