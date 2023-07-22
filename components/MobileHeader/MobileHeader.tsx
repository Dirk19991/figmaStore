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
import { Squash as Hamburger } from 'hamburger-react';
import cn from 'classnames';
import { useRouter } from 'next/router';

function MobileHeader() {
  const { country, setCountry } = useCountryContext();
  const cart = useCartContext();
  let currentItems = 0;
  cart.items.forEach((elem: Item) => (currentItems += elem.quantity));

  const [selectOpened, setSelectOpened] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function scrollHandler() {
    setScrollY(window.pageYOffset);
    setMenuOpened(false);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', scrollHandler);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setMenuOpened(false));

    return () => {
      router.events.off('routeChangeComplete', () => setMenuOpened(false));
    };
  }, [router]);

  const selectClickHandler: MouseEventHandler<HTMLSelectElement> = (e) => {
    if (e.detail === 0) {
      setSelectOpened(false);
    }
  };

  const closeButtonHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    setSelectOpened(false);
  };

  const selectChangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCountry(e.target.value as AvailableCountries);
    setSelectOpened(false);
  };

  return (
    <header className={cn(styles.header, menuOpened && styles.white)}>
      {menuOpened && (
        <div className={styles.mobileMenu}>
          <div className={styles.linksWrapper}>
            <Link className={styles.bigLink} href='/'>
              SHOP
            </Link>
            <Link className={styles.bigLink} href='/about'>
              ABOUT
            </Link>
            <div className={styles.smallLinks}>
              <Link
                className={styles.smallLink}
                href={'https://store.figma.com/pages/privacy-policy'}
              >
                Privacy & Terms
              </Link>
              <Link className={styles.smallLink} href={'/about/#contact'}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.burger}>
          <Hamburger size={20} toggled={menuOpened} toggle={setMenuOpened} />
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
        <div className={styles.selectWrapper}>
          <select
            onClick={selectClickHandler}
            onChange={selectChangeHandler}
            className={styles.select}
            defaultValue={country}
          >
            <option value='UNITED STATES'>UNITED STATES</option>
            <option value='UNITED KINGDOM'>UNITED KINGDOM</option>
          </select>
          <button
            onClick={closeButtonHandler}
            className={styles.selectCloseButton}
          >
            X
          </button>
        </div>
      )}
    </header>
  );
}
export default MobileHeader;
