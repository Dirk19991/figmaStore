import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

interface GridCellProps {
  elem: Product;
}

const StyledGridCell = styled.div`
  @keyframes appear {
    0% {
      opacity: 0.1;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes appear2 {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  position: relative;
  width: 250px;
  height: 350px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  animation: appear2 1s;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    animation: appear 1s;
  }
`;

function GridCell({ elem }: GridCellProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledGridCell
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <>
          <Image
            width={250}
            height={350}
            alt={elem.title}
            src={elem.background}
          ></Image>
          <Image
            width={250}
            height={350}
            alt={elem.title}
            src={elem.imageHover}
          ></Image>
        </>
      ) : (
        <Image
          width={250}
          height={350}
          alt={elem.title}
          src={elem.imageMain}
        ></Image>
      )}
    </StyledGridCell>
  );
}
export default GridCell;
