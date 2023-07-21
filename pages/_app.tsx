import type { AppProps } from 'next/app';
import Layout from 'layout/Layout';
import CartContextProvider from '../context/CartContextProvider';
import CountryContextProvider from '../context/CountryContextProvider';
import 'shared/styles/global.css';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  if ([`/checkout`].includes(appProps.router.pathname)) {
    return (
      <div lang='en' className={inter.className}>
        <CartContextProvider>
          <CountryContextProvider>
            <Component {...pageProps} />;
          </CountryContextProvider>
        </CartContextProvider>
      </div>
    );
  }

  return (
    <div lang='en' className={inter.className}>
      <CartContextProvider>
        <CountryContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CountryContextProvider>
      </CartContextProvider>
    </div>
  );
}
