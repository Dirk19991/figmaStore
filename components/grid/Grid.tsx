import styled from 'styled-components';
import GridHeader from './header/GridHeader';
import Link from 'next/link';
import { useCountryContext } from '../../context/CountryContextProvider';

import GridCell from './gridCell/GridCell';

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

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

function Grid({ data }: GridProps) {
  const { country, setCountry } = useCountryContext();

  return (
    <GridWrapper>
      <GridHeader />
      <GridContent>
        {data.map((elem) => (
          <StyledLink
            href={`/products/${elem.title.toLowerCase().split(' ').join('-')}`}
            key={elem.title}
          >
            <GridCell elem={elem}></GridCell>
            <Wrapper>
              <Title>{elem.title}</Title>
              <Price>
                {country === 'UNITED STATES'
                  ? `$${elem.priceUS}`
                  : `£${elem.priceUK}`}
              </Price>
            </Wrapper>
          </StyledLink>
        ))}
      </GridContent>
    </GridWrapper>
  );
}
export default Grid;
