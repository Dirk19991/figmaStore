import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import RunningLine from './runningLine/RunningLine';

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
  flex-wrap: wrap;

  > div {
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  const redCircleRef = useRef(null);
  const redCircleInView = useInView(redCircleRef);

  const sloganRef = useRef(null);
  const sloganInView = useInView(sloganRef);

  const contactLinksRef = useRef(null);
  const contactLinksInView = useInView(contactLinksRef);

  const socialLinksRef = useRef(null);
  const socialLinksInView = useInView(socialLinksRef);

  return (
    <StyledFooter>
      <FooterWrapper>
        <RedCircle
          ref={redCircleRef}
          style={{
            opacity: redCircleInView ? 1 : 0,
            transition: 'all 0.5s',
          }}
        >
          <div>THE</div>
          <div>FIGMA</div>
          <div>STORE</div>
        </RedCircle>
        <Info>
          <InfoUpWrapper>
            <Slogan
              ref={sloganRef}
              style={{
                opacity: sloganInView ? 1 : 0,
                transition: 'all 0.5s 0.3s',
              }}
            >
              OBJECTS THAT INSPIRE.
            </Slogan>
            <ContactLinks
              ref={contactLinksRef}
              style={{
                opacity: contactLinksInView ? 1 : 0,
                transition: 'all 0.5s 0.6s',
              }}
            >
              <div>Privacy & Terms</div>
              <div>Contact Us</div>
            </ContactLinks>
          </InfoUpWrapper>
          <SocialLinks
            ref={socialLinksRef}
            style={{
              opacity: socialLinksInView ? 1 : 0,
              transition: 'all 0.5s 0.9s',
            }}
          >
            <div>FIGMA</div>
            <div>TWITTER</div>
            <div>INSTAGRAM</div>
            <div>YOUTUBE</div>
          </SocialLinks>
        </Info>
      </FooterWrapper>
      <RunningLine />
    </StyledFooter>
  );
}
export default Footer;
