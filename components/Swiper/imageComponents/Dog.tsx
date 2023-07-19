import Link from 'next/link';
import { useState } from 'react';
import styles from './Styles.module.scss';
import cn from 'classnames';

function Dog({ isDesktop }: ImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href='/products/throw-blanket'>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(hovered && isDesktop ? styles.hovered : styles.invisible)}
      >
        Throw blanket
      </div>

      <svg width='650' height='650' viewBox='0 0 650 650' fill='none'>
        <defs>
          <pattern id='3' patternUnits='objectBoundingBox' width='1' height='1'>
            <image
              href='/images/swiper/dog.webp'
              x='0'
              y='0'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid slice'
            ></image>
          </pattern>
        </defs>
        <rect
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ cursor: hovered ? 'pointer' : '' }}
          stroke='black'
          strokeWidth='7'
          x='2'
          y='2'
          width='646'
          height='646'
          rx='103'
          fill='url(#3)'
        ></rect>
      </svg>
    </Link>
  );
}
export default Dog;
