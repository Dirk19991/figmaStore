import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import { useCartContext } from 'context/CartContextProvider';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  const isDesktop = useMediaQuery('(min-width: 850px)');

  return (
    <>
      {isDesktop ? <Header /> : <MobileHeader />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
