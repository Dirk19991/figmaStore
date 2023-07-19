import Link from 'next/link';
import { useState } from 'react';
import styles from './Styles.module.scss';
import cn from 'classnames';

function Socks({ isDesktop }: ImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href='/products/light-grey-comment-socks'>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(hovered && isDesktop ? styles.hovered : styles.invisible)}
      >
        Light grey comment socks
      </div>

      <svg width='658' height='658' viewBox='-2 -2 654 654' fill='none'>
        <defs>
          <pattern id='7' patternUnits='objectBoundingBox' width='1' height='1'>
            <image
              href='/images/swiper/socks.webp'
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
          fillRule='evenodd'
          clipRule='evenodd'
          d='M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z'
          fill='url(#7)'
          stroke='black'
          strokeWidth='7'
        ></path>
      </svg>
    </Link>
  );
}
export default Socks;
