import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import background from '../../../public/images/productsMain/background/1.webp';
import { motion } from 'framer-motion';

interface GridCellProps {
  elem: Product;
}

const StyledGridCell = styled.div`
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
`;

interface ContainerProps {
  display: boolean;
}

const HoverContainer = styled(motion.div)<ContainerProps>`
  width: 250px;
  height: 350px;
  min-height: 200px;
  position: relative;
  display: ${(props) => (props.display ? '' : 'none')};

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainContainer = styled(motion.div)<ContainerProps>`
  display: ${(props) => (props.display ? 'none' : '')};
`;

function GridCell({ elem }: GridCellProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledGridCell
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <>
        <HoverContainer
          animate={{ opacity: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          display={hovered}
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
        </HoverContainer>
        <MainContainer
          animate={{ opacity: hovered ? 0.5 : 1 }}
          transition={{ duration: 0.5 }}
          display={hovered}
        >
          <Image
            width={250}
            height={350}
            alt={elem.title}
            src={elem.imageMain}
          ></Image>
        </MainContainer>
      </>
    </StyledGridCell>
  );
}
export default GridCell;
