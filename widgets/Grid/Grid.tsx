import styles from './Grid.module.scss';
import GridHeader from 'components/GridHeader/GridHeader';
import GridCell from 'components/GridCell/GridCell';
import Link from 'next/link';
import { useCountryContext } from '../../context/CountryContextProvider';

function Grid({ data }: AllProducts) {
  const { country, setCountry } = useCountryContext();

  return (
    <div className={styles.wrapper}>
      <GridHeader />
      <div className={styles.content}>
        {data.map((elem) => (
          <Link
            className={styles.link}
            href={`/products/${elem.title.toLowerCase().split(' ').join('-')}`}
            key={elem.title}
          >
            <GridCell elem={elem}></GridCell>
            <div className={styles.titlePriceContainer}>
              <div className={styles.title}>{elem.title}</div>
              <div data-cy='price' className={styles.price}>
                {country === 'UNITED STATES'
                  ? `$${elem.priceUS}`
                  : `£${elem.priceUK}`}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Grid;
