import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import Layout from '../components/Layout';
import CartContextProvider from '../context/CartContextProvider';
import CountryContextProvider from '../context/CountryContextProvider';
import '../components/global.css';
const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <CountryContextProvider>
        <Layout>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </CountryContextProvider>
    </CartContextProvider>
  );
}
