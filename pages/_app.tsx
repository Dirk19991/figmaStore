import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import CartContextProvider from '../context/CartContextProvider';
import CountryContextProvider from '../context/CountryContextProvider';
import 'shared/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
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
