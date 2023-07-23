import { useEffect, useState } from 'react';
import styles from './ProductInfo.module.scss';
import { useCartContext } from 'context/CartContextProvider';
import { useCountryContext } from 'context/CountryContextProvider';
import ProductButtons from 'widgets/ProductButtons/ProductButtons';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import { createPortal } from 'react-dom';

interface InfoProps {
  data: Product;
}

function Info({ data }: InfoProps) {
  const { country, setCountry } = useCountryContext();
  const cart = useCartContext();

  const signs = {
    'UNITED STATES': '$',
    'UNITED KINGDOM': '£',
  };
  const prices = {
    'UNITED STATES': data.priceUS,
    'UNITED KINGDOM': data.priceUK,
  };
  const [amount, setAmount] = useState(1);

  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const mobileProductEl = isClient
    ? document.querySelector('#mobile-product')!
    : null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>{data.category}</div>
      <div className={styles.title}>{data.title}</div>
      {showDesktop && <ProductButtons amount={amount} setAmount={setAmount} />}
      {showDesktop && (
        <button
          data-cy='add-button'
          className={styles.addButton}
          onClick={() => cart.addItem(data.id, amount)}
        >
          Add {signs[country]}
          {prices[country]}
        </button>
      )}
      <p className={styles.description}>{data.productInfo.description}</p>
      <p className={styles.subtitle}>{data.productInfo.subtitle}</p>
      {!showDesktop && mobileProductEl
        ? createPortal(
            <ProductButtons amount={amount} setAmount={setAmount} />,
            mobileProductEl
          )
        : null}
      {!showDesktop && mobileProductEl
        ? createPortal(
            <button
              className={styles.addButton}
              onClick={() => cart.addItem(data.id, amount)}
            >
              Add {signs[country]}
              {prices[country]}
            </button>,
            mobileProductEl
          )
        : null}
    </div>
  );
}
export default Info;
