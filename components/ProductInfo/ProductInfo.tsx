import { useState } from 'react';
import styles from './ProductInfo.module.scss';
import { useCartContext } from 'context/CartContextProvider';
import { useCountryContext } from 'context/CountryContextProvider';
import ProductButtons from 'components/ProductButtons/ProductButtons';

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>{data.category}</div>
      <div className={styles.title}>{data.title}</div>
      <ProductButtons amount={amount} setAmount={setAmount} />
      <button
        className={styles.addButton}
        onClick={() => cart.addItem(data.id, amount)}
      >
        Add {signs[country]}
        {prices[country]}
      </button>
      <p className={styles.description}>{data.productInfo.description}</p>
      <p className={styles.subtitle}>{data.productInfo.subtitle}</p>
    </div>
  );
}
export default Info;
