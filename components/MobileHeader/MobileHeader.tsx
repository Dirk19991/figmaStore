import Link from 'next/link';
import styles from './MobileHeader.module.scss';
import { useCartContext } from '../../context/CartContextProvider';
import {
  AvailableCountries,
  useCountryContext,
} from '../../context/CountryContextProvider';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

function MobileHeader() {
  const { country, setCountry } = useCountryContext();
  const cart = useCartContext();
  let currentItems = 0;
  cart.items.forEach((elem: Item) => (currentItems += elem.quantity));

  const [selectOpened, setSelectOpened] = useState(false);

  const selectClickHandler: MouseEventHandler<HTMLSelectElement> = (e) => {
    if (e.detail === 0) {
      setSelectOpened(false);
    }
  };

  const selectChangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCountry(e.target.value as AvailableCountries);
    setSelectOpened(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.burger}>
          <img src='./icons/burger.svg' alt='burger' />
        </div>

        <div className={styles.logo}>THE FIGMA STORE</div>
        <div
          onClick={() => setSelectOpened((prev) => !prev)}
          className={styles.pointer}
        >
          <img src='./icons/pointer.svg' alt='burger' />
        </div>
        <div className={styles.cart}>
          <Link className={styles.link} href='/cart'>
            {currentItems}
          </Link>
        </div>
      </div>
      {selectOpened && (
        <>
          <select
            onClick={selectClickHandler}
            onChange={selectChangeHandler}
            className={styles.select}
            defaultValue={country}
          >
            <option value='UNITED STATES'>UNITED STATES</option>
            <option value='UNITED KINGDOM'>UNITED KINGDOM</option>
          </select>
        </>
      )}
    </header>
  );
}
export default MobileHeader;
