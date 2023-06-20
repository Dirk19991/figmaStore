import styles from './GridHeader.module.scss';

function GridHeader() {
  return (
    <h2 className={styles.header}>
      FIGMA'S <img src='./icons/snowflake.svg' alt='snowflake' /> COLLECTION{' '}
      <img src='./icons/hourglass.svg' alt='hourglass' /> OF LAYERS{' '}
      <img src='./icons/zigzag.svg' alt='zigzag' /> AND{' '}
      <img src='./icons/dots.svg' alt='dots' /> COMPONENTS{' '}
      <img src='./icons/sun.svg' alt='sun' /> FOR YOU{' '}
      <img src='./icons/comet.svg' alt='comet' /> AND{' '}
      <img src='./icons/snake.svg' alt='snake' /> YOUR{' '}
      <img src='./icons/triangle.svg' alt='triangle' /> FRIENDS
    </h2>
  );
}
export default GridHeader;
