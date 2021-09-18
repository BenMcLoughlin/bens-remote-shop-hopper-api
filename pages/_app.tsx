import React from 'react';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = ({ Component, pageProps }: AppProps) => (
    <Provider session={pageProps.session}>
        <Component {...pageProps} />
    </Provider>
);

export default App;