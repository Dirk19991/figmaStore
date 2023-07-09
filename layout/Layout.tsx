import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { useCartContext } from 'context/CartContextProvider';

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
