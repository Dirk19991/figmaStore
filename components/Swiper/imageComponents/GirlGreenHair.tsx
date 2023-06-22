import Link from 'next/link';
import { useState } from 'react';
import styles from './Styles.module.scss';

function GirlGreenHair() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href='/products/figma-hoodie'>
      {hovered && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={styles.hovered}
        >
          Figma hoodie
        </div>
      )}
      <svg width='650' height='648' viewBox='0 0 650 648' fill='none'>
        <defs>
          <pattern id='4' patternUnits='objectBoundingBox' width='1' height='1'>
            <image
              href='/images/swiper/girlGreenHair.webp'
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
          d='M648 4.22453L648 643.684C648 644.463 647.15 644.943 646.483 644.54L645.449 646.252L646.483 644.54L449.926 525.864C447.953 524.673 445.42 524.985 443.795 526.62L325.709 645.449C325.318 645.842 324.682 645.842 324.291 645.449L206.205 526.62C204.58 524.985 202.047 524.673 200.074 525.864L3.51682 644.54C2.85037 644.943 1.99997 644.463 1.99997 643.684L2 4.22451C2 3.4526 2.83746 2.97177 3.50403 3.36084L4.51221 1.63352L3.50409 3.36084L200.147 118.131C202.087 119.264 204.544 118.963 206.154 117.397L324.303 2.46841C324.691 2.09081 325.309 2.09082 325.697 2.46841L443.846 117.397C445.456 118.963 447.913 119.264 449.853 118.131L646.496 3.36087C647.163 2.97178 648 3.45263 648 4.22453Z'
          fill='url(#4)'
          stroke='black'
          strokeWidth='7'
        ></path>
      </svg>
    </Link>
  );
}
export default GirlGreenHair;
