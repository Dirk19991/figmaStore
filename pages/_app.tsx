import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import Layout from '../components/Layout';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export const CountryContext = createContext(null);

export const CartContext = createContext({
  items: [],
  addItem: (id: number, quantity: number) => {},
  removeItem: (id: number) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [country, setCountry] = useState('UNITED STATES');
  const [items, setItems] = useState([]);
  const addItem = (id: number, quantity: number) => {
    setItems((prev) => {
      console.log(quantity);
      if (prev.filter((elem) => elem.id === id).length > 0) {
        return prev.map((elem) => {
          return elem.id === id
            ? { id: elem.id, quantity: elem.quantity + quantity }
            : elem;
        });
      } else {
        return [...prev, { id: id, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => {
      if (prev.filter((elem) => elem.id === id).length > 0) {
        return prev.map((elem) => (elem.id === id ? elem.quantity-- : elem));
      } else {
        return prev;
      }
    });
  };

  const cartValue = {
    items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartValue}>
      <CountryContext.Provider value={country}>
        <Layout setCountry={setCountry}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </CountryContext.Provider>
    </CartContext.Provider>
  );
}
