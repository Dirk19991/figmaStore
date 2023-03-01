import { Dispatch, SetStateAction } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
