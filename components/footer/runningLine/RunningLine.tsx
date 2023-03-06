import { motion } from 'framer-motion';
import styled from 'styled-components';

const RunningLineWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 10000px;
  background-color: var(--green);
  font-size: 30px;
  height: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const RunningLineComponent = styled(motion.div)`
  position: absolute;
  bottom: 5px;
  display: flex;
  gap: 10px;

  > div {
    height: 30px;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

function RunningLine() {
  return (
    <RunningLineWrapper>
      <RunningLineComponent
        initial={{ x: 1900 }}
        animate={{ x: -2000 }}
        transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
      >
        FOR{' '}
        <div>
          <img src='./icons/comet.svg' alt='comet' />
        </div>{' '}
        OUR{' '}
        <div>
          <img src='./icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        TIME{' '}
        <div>
          <img src='./icons/snake.svg' alt='snake' />
        </div>{' '}
        ON{' '}
        <div>
          <img src='./icons/sun.svg' alt='sun' />
        </div>{' '}
        FIGMA'S{' '}
        <div>
          <img src='./icons/snowflake.svg' alt='snowflake' />
        </div>{' '}
        MARVELOUSLY{' '}
        <div>
          <img src='./icons/zigzag.svg' alt='zigzag' />
        </div>{' '}
        CONSIDERED{' '}
        <div>
          <img src='./icons/comet.svg' alt='comet' />
        </div>{' '}
        COLLECTION{' '}
        <div>
          <img src='./icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        OF{' '}
        <div>
          <img src='./icons/snake.svg' alt='snake' />
        </div>{' '}
        OBJECTS{' '}
        <div>
          <img src='./icons/sun.svg' alt='sun' />
        </div>{' '}
        FOR{' '}
        <div>
          <img src='./icons/comet.svg' alt='comet' />
        </div>{' '}
        OUR{' '}
        <div>
          <img src='./icons/hourglass.svg' alt='hourglass' />{' '}
        </div>
        TIME{' '}
        <div>
          <img src='./icons/snake.svg' alt='snake' />
        </div>{' '}
        ON{' '}
        <div>
          <img src='./icons/sun.svg' alt='sun' />{' '}
        </div>{' '}
        FIGMA'S{' '}
        <div>
          <img src='./icons/snowflake.svg' alt='snowflake' />
        </div>{' '}
        MARVELOUSLY{' '}
        <div>
          <img src='./icons/zigzag.svg' alt='zigzag' />
        </div>{' '}
        CONSIDERED{' '}
        <div>
          <img src='./icons/comet.svg' alt='comet' />
        </div>{' '}
        COLLECTION{' '}
        <div>
          <img src='./icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        OF{' '}
        <div>
          <img src='./icons/snake.svg' alt='snake' />
        </div>{' '}
        OBJECTS{' '}
        <div>
          <img src='./icons/sun.svg' alt='sun' />
        </div>{' '}
        FOR{' '}
        <div>
          <img src='./icons/comet.svg' alt='comet' />
        </div>{' '}
        OUR
        <div>
          <img src='./icons/hourglass.svg' alt='hourglass' />{' '}
        </div>
        TIME{' '}
        <div>
          <img src='./icons/snake.svg' alt='snake' />
        </div>{' '}
        ON{' '}
        <div>
          <img src='./icons/sun.svg' alt='sun' />
        </div>{' '}
        FIGMA'S{' '}
        <div>
          <img src='./icons/snowflake.svg' alt='snowflake' />
        </div>{' '}
        MARVELOUSLY{' '}
        <div>
          <img src='./icons/zigzag.svg' alt='zigzag' />
        </div>{' '}
        CONSIDERED{' '}
        <div>
          <img src='./icons/comet.svg' alt='comet' />
        </div>{' '}
        COLLECTION{' '}
        <div>
          <img src='./icons/hourglass.svg' alt='hourglass' />
        </div>{' '}
        OF{' '}
        <div>
          <img src='./icons/snake.svg' alt='snake' />
        </div>{' '}
        OBJECTS{' '}
        <div>
          <img src='./icons/sun.svg' alt='sun' />
        </div>
      </RunningLineComponent>
    </RunningLineWrapper>
  );
}
export default RunningLine;
