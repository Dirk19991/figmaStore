import styles from './Proceeds.module.scss';

function Proceeds() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>100% OF PROCEEDS ARE DONATED</h2>
      <div className={styles.text}>
        <p>
          Any and all profits we generate from the store will be used to
          purchase carbon removal credits via reforestation from TIST (The
          International Small Group and Tree Planting Program). TIST is an
          innovative time-tested reforestation program that supports subsistence
          farmers in Kenya, Uganda, and Tanzania to tackle sustainable
          development and climate change through education and tree planting.
        </p>

        <p className={styles.tist}>
          <a href='https://program.tist.org/'>Learn more about TIST ↗</a>
        </p>
      </div>
    </div>
  );
}
export default Proceeds;
