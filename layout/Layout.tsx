import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import { useCartContext } from 'context/CartContextProvider';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  return (
    <>
      {showDesktop ? <Header key='desktop' /> : <MobileHeader key='mobile' />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
