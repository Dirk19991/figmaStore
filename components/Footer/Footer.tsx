import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Footer.module.scss';
import RunningLine from 'components/RunningLine/RunningLine';

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
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div
          className={styles.redCircle}
          ref={redCircleRef}
          style={{
            opacity: redCircleInView ? 1 : 0,
            transition: 'all 0.5s',
          }}
        >
          <div>THE</div>
          <div>FIGMA</div>
          <div>STORE</div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoUpWrapper}>
            <div
              className={styles.slogan}
              ref={sloganRef}
              style={{
                opacity: sloganInView ? 1 : 0,
                transition: 'all 0.5s 0.3s',
              }}
            >
              OBJECTS THAT INSPIRE.
            </div>
            <div
              className={styles.contactLinks}
              ref={contactLinksRef}
              style={{
                opacity: contactLinksInView ? 1 : 0,
                transition: 'all 0.5s 0.6s',
              }}
            >
              <div>Privacy & Terms</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div
            className={styles.socialLinks}
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
          </div>
        </div>
      </div>
      <RunningLine />
    </footer>
  );
}
export default Footer;
