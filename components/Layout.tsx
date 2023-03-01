import { Dispatch, SetStateAction } from 'react';
import Header from './header/Header';

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
