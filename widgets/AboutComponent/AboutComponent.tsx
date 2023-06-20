import styles from './AboutComponent.module.css';
import AboutImage from 'components/about/header/AboutImage';
import AboutHeaderText from 'components/about/header/AboutHeaderText';
import Proceeds from 'components/about/proceeds/Proceeds';
import FAQ from 'components/about/faq/FAQ';
import CustomerCare from 'components/CustomerCare';

function AboutComponent() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <AboutImage />
        <AboutHeaderText />
      </header>
      <Proceeds />
      <FAQ />
      <CustomerCare />
    </div>
  );
}
export default AboutComponent;
