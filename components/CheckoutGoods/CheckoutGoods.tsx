import CheckoutRow from 'components/CheckoutRow/CheckoutRow';
import { useCartContext } from 'context/CartContextProvider';
import { useCountryContext } from 'context/CountryContextProvider';
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import findById from 'shared/utils/findById';
import styles from './CheckoutGoods.module.scss';
import cn from 'classnames';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';

const CheckoutGoods = ({ data }: AllProducts) => {
  const { items } = useCartContext();
  const { country } = useCountryContext();
  const [giftCardValue, setGiftCardValue] = useState('');
  const [discount, setDiscount] = useState(1);
  const [codeStatus, setCodeStatus] = useState<'idle' | 'active' | 'rejected'>(
    'idle'
  );
  const giftCodes = ['gift'];

  const isDesktop = useMediaQuery('(min-width: 850px)');

  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  const giftFormHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!giftCardValue) {
      return;
    }
    if (giftCodes.includes(giftCardValue.toLowerCase())) {
      setDiscount(0.95);
      setCodeStatus('active');
    } else {
      setCodeStatus('rejected');
    }
  };

  const giftInputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setCodeStatus('idle');
    setGiftCardValue(e.target.value);
  };

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.goods}>
          {items.map((item) => (
            <CheckoutRow data={data} item={item} key={item.id} />
          ))}
        </div>
        <div className={styles.line}></div>
        <form className={styles.giftForm} onSubmit={giftFormHandler}>
          <input
            data-cy='gift-card'
            disabled={codeStatus === 'active' ? true : false}
            value={giftCardValue}
            onChange={giftInputHandler}
            className={styles.giftInput}
            placeholder='Gift card or discount code'
            type='text'
          />
          <button
            data-cy='apply'
            className={
              giftCardValue && !(codeStatus === 'active')
                ? cn(styles.giftButton, styles.active)
                : styles.giftButton
            }
          >
            Apply
          </button>
          {codeStatus === 'active' && (
            <div className={styles.applied} data-cy='applied'>
              Code applied!
            </div>
          )}
          {codeStatus === 'rejected' && (
            <div className={styles.rejected} data-cy='incorrect'>
              Incorrect code!
            </div>
          )}
        </form>

        <div className={styles.line}></div>
        <div className={styles.total}>
          <div>Total</div>
          {discount === 1 ? (
            <div>
              {' '}
              {prices[country].sign}
              {sum}
            </div>
          ) : (
            <div className={styles.discount}>
              <div className={styles.strike}>
                {' '}
                {prices[country].sign}
                {sum}
              </div>
              <div data-cy='discount-sum'>
                {' '}
                {prices[country].sign}
                {(sum * discount).toFixed(0)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutGoods;
