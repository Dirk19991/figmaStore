import { motion } from 'framer-motion';
import styles from './RunningLine.module.scss';

function RunningLine() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.runningLine}
        initial={{ x: 1900 }}
        animate={{ x: -2000 }}
        transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
      >
        FOR{' '}
        <div>
          <img src='/icons/comet.svg' alt='comet' />
        </div>{' '}
        OUR{' '}
        <div>
          <img src='/icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        TIME{' '}
        <div>
          <img src='/icons/snake.svg' alt='snake' />
        </div>{' '}
        ON{' '}
        <div>
          <img src='/icons/sun.svg' alt='sun' />
        </div>{' '}
        FIGMA'S{' '}
        <div>
          <img src='/icons/snowflake.svg' alt='snowflake' />
        </div>{' '}
        MARVELOUSLY{' '}
        <div>
          <img src='/icons/zigzag.svg' alt='zigzag' />
        </div>{' '}
        CONSIDERED{' '}
        <div>
          <img src='/icons/comet.svg' alt='comet' />
        </div>{' '}
        COLLECTION{' '}
        <div>
          <img src='/icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        OF{' '}
        <div>
          <img src='/icons/snake.svg' alt='snake' />
        </div>{' '}
        OBJECTS{' '}
        <div>
          <img src='/icons/sun.svg' alt='sun' />
        </div>{' '}
        FOR{' '}
        <div>
          <img src='/icons/comet.svg' alt='comet' />
        </div>{' '}
        OUR{' '}
        <div>
          <img src='/icons/hourglass.svg' alt='hourglass' />{' '}
        </div>
        TIME{' '}
        <div>
          <img src='/icons/snake.svg' alt='snake' />
        </div>{' '}
        ON{' '}
        <div>
          <img src='/icons/sun.svg' alt='sun' />{' '}
        </div>{' '}
        FIGMA'S{' '}
        <div>
          <img src='/icons/snowflake.svg' alt='snowflake' />
        </div>{' '}
        MARVELOUSLY{' '}
        <div>
          <img src='/icons/zigzag.svg' alt='zigzag' />
        </div>{' '}
        CONSIDERED{' '}
        <div>
          <img src='/icons/comet.svg' alt='comet' />
        </div>{' '}
        COLLECTION{' '}
        <div>
          <img src='/icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        OF{' '}
        <div>
          <img src='/icons/snake.svg' alt='snake' />
        </div>{' '}
        OBJECTS{' '}
        <div>
          <img src='/icons/sun.svg' alt='sun' />
        </div>{' '}
        FOR{' '}
        <div>
          <img src='/icons/comet.svg' alt='comet' />
        </div>{' '}
        OUR
        <div>
          <img src='/icons/hourglass.svg' alt='hourglass' />{' '}
        </div>
        TIME{' '}
        <div>
          <img src='/icons/snake.svg' alt='snake' />
        </div>{' '}
        ON{' '}
        <div>
          <img src='/icons/sun.svg' alt='sun' />
        </div>{' '}
        FIGMA'S{' '}
        <div>
          <img src='/icons/snowflake.svg' alt='snowflake' />
        </div>{' '}
        MARVELOUSLY{' '}
        <div>
          <img src='/icons/zigzag.svg' alt='zigzag' />
        </div>{' '}
        CONSIDERED{' '}
        <div>
          <img src='/icons/comet.svg' alt='comet' />
        </div>{' '}
        COLLECTION{' '}
        <div>
          <img src='/icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        OF{' '}
        <div>
          <img src='/icons/snake.svg' alt='snake' />
        </div>{' '}
        OBJECTS{' '}
        <div>
          <img src='/icons/sun.svg' alt='sun' />
        </div>
      </motion.div>
    </div>
  );
}
export default RunningLine;
