import Link from 'next/link';
import { useState } from 'react';
import styles from './Styles.module.scss';

function GirlWithGlasses() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href='/products/figma-logo-pin'>
      {hovered && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={styles.hovered}
        >
          Figma logo pin
        </div>
      )}
      <svg width='650' height='650' viewBox='0 0 650 650' fill='none'>
        <defs>
          <pattern id='1' patternUnits='objectBoundingBox' width='1' height='1'>
            <image
              href='/images/swiper/girlWithGlasses.webp'
              x='0'
              y='0'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid slice'
            ></image>
          </pattern>
        </defs>
        <path
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ cursor: hovered ? 'pointer' : '' }}
          d='M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z'
          fill='url(#1)'
          stroke='black'
          strokeWidth='7'
        ></path>
      </svg>
    </Link>
  );
}
export default GirlWithGlasses;
