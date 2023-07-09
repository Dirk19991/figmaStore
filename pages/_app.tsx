import type { AppProps } from 'next/app';
import Layout from 'layout/Layout';
import CartContextProvider from '../context/CartContextProvider';
import CountryContextProvider from '../context/CountryContextProvider';
import 'shared/styles/global.css';

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  if ([`/checkout`].includes(appProps.router.pathname)) {
    return (
      <CartContextProvider>
        <CountryContextProvider>
          <Component {...pageProps} />;
        </CountryContextProvider>
      </CartContextProvider>
    );
  }

  return (
    <CartContextProvider>
      <CountryContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountryContextProvider>
    </CartContextProvider>
  );
}
