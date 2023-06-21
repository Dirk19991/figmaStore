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
        <motion.div
          animate={{ opacity: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          className={cn(styles.hover, hovered ? styles.block : styles.none)}
        >
          <Image
            width={250}
            height={350}
            alt={elem.title}
            src={elem.background}
            priority
          ></Image>
          <Image
            width={250}
            height={350}
            alt={elem.title}
            src={elem.imageHover}
            priority
          ></Image>
        </motion.div>
        <motion.div
          animate={{ opacity: hovered ? 0.5 : 1 }}
          transition={{ duration: 0.5 }}
          className={hovered ? styles.none : styles.block}
        >
          <Image
            width={250}
            height={350}
            alt={elem.title}
            src={elem.imageMain}
          ></Image>
        </motion.div>
      </>
    </div>
  );
}
export default GridCell;
