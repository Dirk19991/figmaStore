import { Dispatch, SetStateAction } from 'react';
import Header from './header/Header';

interface LayoutProps {
  children: any;
  setCountry: Dispatch<SetStateAction<string>>;
}

export default function Layout({ children, setCountry }: LayoutProps) {
  return (
    <>
      <Header setCountry={setCountry} />
      <main>{children}</main>
    </>
  );
}
