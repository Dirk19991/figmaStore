import styles from './AboutHeader.module.scss';

function AboutHeader() {
  return (
    <div className={styles.wrapper}>
      <h3>About</h3>
      <p>
        Welcome to the Figma Store, a collection of Figma apparel (layers) and
        accessories (components) designed for our community.
      </p>
    </div>
  );
}
export default AboutHeader;
