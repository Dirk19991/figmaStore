import styles from './AboutComponent.module.css';
import AboutImage from 'components/AboutImage';
import AboutHeader from 'components/AboutHeader';
import Proceeds from 'components/Proceeds';
import FAQ from 'components/FAQ';
import CustomerCare from 'components/CustomerCare';

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
