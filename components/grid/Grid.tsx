import styled from 'styled-components';
import GridHeader from './header/GridHeader';
import Link from 'next/link';

interface GridProps {
  data: Product[];
}

const GridWrapper = styled.div`
  max-width: 1200px;
  min-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusrify-content: center;
`;

const GridContent = styled.div`
  max-width: 1200px;
  min-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

interface GridCellProps {
  image: string;
  imageHover: string;
  imageBackground: string;
}

const GridCell = styled.div<GridCellProps>`
  @keyframes appear {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes appear2 {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  width: 250px;
  height: 350px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 40px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  animation: appear2 1s;

  &:hover {
    background-image: url(${(props) => props.imageHover}),
      url(${(props) => props.imageBackground});
    animation: appear 1s;
  }
`;

function Grid({ data }: GridProps) {
  return (
    <GridWrapper>
      <GridHeader />
      <GridContent>
        {data.map((elem) => (
          <Link
            href={`/products/${elem.title.toLowerCase().split(' ').join('-')}`}
            key={elem.title}
          >
            <GridCell
              imageBackground={elem.background}
              imageHover={elem.imageHover}
              image={elem.imageMain}
            ></GridCell>
          </Link>
        ))}
      </GridContent>
    </GridWrapper>
  );
}
export default Grid;
