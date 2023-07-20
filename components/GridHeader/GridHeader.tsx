import styles from './GridHeader.module.scss';

function GridHeader() {
  return (
    <>
      <h2 className={styles.header}>
        FIGMA'S{' '}
        <span>
          <img src='./icons/snowflake.svg' alt='snowflake' />{' '}
        </span>{' '}
        COLLECTION{' '}
        <span>
          <img src='./icons/hourglass.svg' alt='hourglass' />{' '}
        </span>{' '}
        OF LAYERS{' '}
        <span>
          <img src='./icons/zigzag.svg' alt='zigzag' />{' '}
        </span>{' '}
        AND{' '}
        <span>
          <img src='./icons/dots.svg' alt='dots' />
        </span>{' '}
        COMPONENTS{' '}
        <span>
          <img src='./icons/sun.svg' alt='sun' />
        </span>{' '}
        FOR YOU{' '}
        <span>
          <img src='./icons/comet.svg' alt='comet' />
        </span>{' '}
        AND{' '}
        <span>
          <img src='./icons/snake.svg' alt='snake' />
        </span>{' '}
        YOUR{' '}
        <span>
          <img src='./icons/triangle.svg' alt='triangle' />
        </span>{' '}
        FRIENDS
      </h2>
    </>
  );
}
export default GridHeader;
