import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Footer.module.scss';
import RunningLine from 'components/RunningLine/RunningLine';
import Link from 'next/link';

function Footer() {
  const redCircleRef = useRef(null);
  const redCircleInView = useInView(redCircleRef);

  const sloganRef = useRef(null);
  const sloganInView = useInView(sloganRef);

  const contactLinksRef = useRef(null);
  const contactLinksInView = useInView(contactLinksRef);

  const socialLinksRef = useRef(null);
  const socialLinksInView = useInView(socialLinksRef);

  console.log(socialLinksInView);

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
              <Link href={'https://store.figma.com/pages/privacy-policy'}>
                <div>Privacy & Terms</div>
              </Link>
              <Link href={'/about/#contact'}>
                <div>Contact Us</div>
              </Link>
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
            <Link href={'https://figma.com/'}>
              <div>FIGMA</div>
            </Link>
            <Link href={'https://twitter.com/figma'}>
              <div>TWITTER</div>
            </Link>
            <Link href={'https://www.instagram.com/figma'}>
              <div>INSTAGRAM</div>
            </Link>
            <Link href={'https://www.youtube.com/c/Figmadesign'}>
              <div>YOUTUBE</div>
            </Link>
          </div>
        </div>
      </div>
      <RunningLine />
    </footer>
  );
}
export default Footer;
