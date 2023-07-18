import styles from './Cart.module.scss';
import { useCartContext } from '../../context/CartContextProvider';
import { useCountryContext } from '../../context/CountryContextProvider';
import findById from '../../shared/utils/findById';
import Link from 'next/link';
import CartRow from 'components/CartRow/CartRow';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Prices {
  'UNITED STATES': {
    label: 'priceUS';
    sign: '$';
  };
  'UNITED KINGDOM': {
    label: 'priceUK';
    sign: '£';
  };
}

function CartComponent({ data }: AllProducts) {
  const { items, removeItem, ordered, setOrdered } = useCartContext();
  const { country } = useCountryContext();
  const router = useRouter();

  const prices: Prices = {
    'UNITED STATES': {
      label: 'priceUS',
      sign: '$',
    },
    'UNITED KINGDOM': {
      label: 'priceUK',
      sign: '£',
    },
  };

  let sum = 0;
  items.forEach((item) => {
    const currentItem = findById(data, item.id);
    const quantity = item.quantity;
    const subtotal =
      country === 'UNITED KINGDOM'
        ? quantity * currentItem.priceUK
        : quantity * currentItem.priceUS;
    sum += subtotal;
  });

  const handleRouteChange = () => {
    setOrdered(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  if (ordered) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.thanks}>Thank you for your order!</h1>
        <Link className={styles.continue} href={'/'}>
          <h2>Continue shopping</h2>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h3>
        {items.length} {items.length === 1 ? 'item' : 'items'} in Cart
      </h3>
      <div className={styles.line} />
      <div className={styles.tableHeader}>
        <h3 className={styles.item}>Item</h3>
        <div className={styles.price}>Price</div>
        <div className={styles.quantity}>Qty</div>
        <div className={styles.subtotal}>Subtotal</div>
      </div>
      <div className={styles.thinLine} />
      <div className={styles.table}>
        {items.map((item) => {
          return <CartRow key={item.id} data={data} item={item} />;
        })}
      </div>
      <div className={styles.totalCheckoutWrapper}>
        <div className={styles.total}>
          <div>Total:</div>
          <div>
            {prices[country].sign}
            {sum}
          </div>
        </div>
        {items.length > 0 && (
          <Link href={'/checkout'}>
            <button className={styles.checkout}>CHECKOUT</button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default CartComponent;
