import Link from 'next/link';
import { useState } from 'react';
import styles from './Styles.module.scss';

function Bottle() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href='/products/bezier-water-bottle'>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? styles.hovered : styles.invisible}
        >
          Bezier water bottle
        </div>
  
      <svg width='650' height='650' viewBox='0 0 650 650' fill='none'>
        <defs>
          <pattern id='2' patternUnits='objectBoundingBox' width='1' height='1'>
            <image
              href='/images/swiper/bottle.webp'
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
          d='M648 325C648 503.388 503.388 648 325 648C146.612 648 2 503.388 2 325C2 146.612 146.612 2 325 2C503.388 2 648 146.612 648 325Z'
          fill='url(#2)'
          stroke='black'
          strokeWidth='7'
        ></path>
      </svg>
    </Link>
  );
}
export default Bottle;
