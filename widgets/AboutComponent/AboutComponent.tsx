import styles from './AboutComponent.module.scss';
import AboutImage from 'components/AboutImage/AboutImage';
import AboutHeader from 'components/AboutHeader/AboutHeader';
import Proceeds from 'components/Proceeds/Proceeds';
import FAQ from 'components/FAQ/FAQ';
import CustomerCare from 'components/CustomerCare/CustomerCare';

function AboutComponent() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <AboutImage />
        <AboutHeader />
      </header>
      <Proceeds />
      <FAQ />
      <CustomerCare />
    </div>
  );
}
export default AboutComponent;
