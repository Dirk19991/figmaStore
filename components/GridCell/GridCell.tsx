import styles from './GridCell.module.scss';
import { useState } from 'react';
import cn from 'classnames';

interface GridCellProps {
  elem: Product;
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
        <div
          className={styles.none}
          style={{
            backgroundImage: `url(${elem.imageHover}), url(${elem.background})`,
          }}
        ></div>
      </>
    </div>
  );
}
export default GridCell;
