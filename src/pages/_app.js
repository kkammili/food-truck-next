// pages/_app.js
import React from 'react';
import App from 'next/app';
import { Providers } from '../app/Provider';
import Checkout from './checkout';
import { useRouter } from 'next/router';

const MyApp=({ Component, pageProps })=> {
    const { pathname } = useRouter();

    return (
      <>
        {pathname === '/checkout' ? (
          <Checkout />
        ) : (
          <Providers>
            <Component {...pageProps} />
          </Providers>
        )}
      </>
    );
}

export default MyApp;
