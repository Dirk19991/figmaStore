import styles from './GridCell.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface GridCellProps {
  elem: Product;
}
interface ContainerProps {
  display: number;
}

function GridCell({ elem }: GridCellProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.cell}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <>
        <div
          className={cn(styles.image, hovered ? styles.after : '')}
          style={{
            backgroundImage: hovered
              ? `url(${elem.imageHover}), url(${elem.background})`
              : `url(${elem.imageMain})`,
          }}
        ></div>
      </>
    </div>
  );
}
export default GridCell;
