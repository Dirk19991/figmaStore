import Link from 'next/link';
import styled from 'styled-components';
import styles from './Header.module.scss';
import { useCartContext } from '../../context/CartContextProvider';
import {
  AvailableCountries,
  useCountryContext,
} from '../../context/CountryContextProvider';

function Header() {
  const { country, setCountry } = useCountryContext();
  const cart = useCartContext();
  let currentItems = 0;
  cart.items.forEach((elem: Item) => (currentItems += elem.quantity));

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.linksWrapper}>
          <Link className={styles.link} href='/'>
            SHOP
          </Link>
          <Link className={styles.link} href='/about'>
            ABOUT
          </Link>
        </div>
        <div className={styles.logo}>THE FIGMA STORE</div>
        <div className={styles.linksWrapper}>
          <select
            className={styles.select}
            onChange={(e) => setCountry(e.target.value as AvailableCountries)}
            defaultValue={country}
          >
            <option value='UNITED STATES'>UNITED STATES</option>
            <option value='UNITED KINGDOM'>UNITED KINGDOM</option>
          </select>
          <Link className={styles.link} href='/cart'>
            CART {currentItems}
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
