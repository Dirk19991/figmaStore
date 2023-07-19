import CheckoutForm from 'components/CheckoutForm/CheckoutForm';
import CheckoutGoods from 'components/CheckoutGoods/CheckoutGoods';
import styles from './CheckoutComponent.module.scss';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';

const CheckoutComponent = ({ data }: AllProducts) => {
  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  return showDesktop ? (
    <div className={styles.wrapper}>
      <CheckoutForm />
      <CheckoutGoods data={data} />
    </div>
  ) : (
    <div className={styles.mobileWrapper}>
      <CheckoutGoods data={data} />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutComponent;
