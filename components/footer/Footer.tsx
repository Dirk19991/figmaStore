import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  margin-top: 30px;
  height: 425px;
  background-color: var(--green);
  overflow: hidden;
`;

const FooterWrapper = styled.div`
  max-width: 1100px;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  gap: 100px;
`;

const RedCircle = styled.div`
  height: 280px;
  width: 250px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--red);
  font-size: 36px;
  font-weight: 500;
  flex-shrink: 0;

  > :first-child {
    transform: rotate(90deg);
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 700px;
  flex-shrink: 2;
`;

const InfoUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Slogan = styled.div`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  max-width: 270px;
`;

const ContactLinks = styled.div`
  font-size: 18px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  font-size: 30px;
  gap: 30px;

  > div {
    &:hover {
      text-decoration: underline;
    }
  }
`;

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

const RunningLine = styled(motion.div)`
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

function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper>
        <RedCircle>
          <div>THE</div>
          <div>FIGMA</div>
          <div>STORE</div>
        </RedCircle>
        <Info>
          <InfoUpWrapper>
            <Slogan>OBJECTS THAT INSPIRE.</Slogan>
            <ContactLinks>
              <div>Privacy & Terms</div>
              <div>Contact Us</div>
            </ContactLinks>
          </InfoUpWrapper>
          <SocialLinks>
            <div>FIGMA</div>
            <div>TWITTER</div>
            <div>INSTAGRAM</div>
            <div>YOUTUBE</div>
          </SocialLinks>
        </Info>
      </FooterWrapper>
      <RunningLineWrapper>
        <RunningLine
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
        </RunningLine>
      </RunningLineWrapper>
    </StyledFooter>
  );
}
export default Footer;
