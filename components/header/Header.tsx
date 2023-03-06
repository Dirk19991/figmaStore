import Link from 'next/link';
import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../../context/CartContextProvider';
import {
  AvailableCountries,
  useCountryContext,
} from '../../context/CountryContextProvider';

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--yellow);
`;

const StyledHeader = styled.header`
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  border: 1.5px solid black;
  border-radius: 25px;
  font-weight: 700;
  padding: 8px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const Select = styled.select`
  font-size: 18px;
  font-weight: 700;
  padding: 0 15px;
  background-color: var(--yellow);
  border: 1.5px solid black;
  border-radius: 25px;
  outline: none;
  cursor: pointer;

  > option {
    font-size: 18px;
    font-weight: 700;
    background-color: var(--black);
    color: white;
    cursor: pointer;
  }
`;

function Header() {
  const { country, setCountry } = useCountryContext();
  const cart = useCartContext();
  let currentItems = 0;
  cart.items.forEach((elem: Item) => (currentItems += elem.quantity));

  return (
    <Wrapper>
      <StyledHeader>
        <LinksWrapper>
          <StyledLink href='/'>SHOP</StyledLink>
          <StyledLink href='/about'>ABOUT</StyledLink>
        </LinksWrapper>
        <Logo>THE FIGMA STORE</Logo>
        <LinksWrapper>
          <Select
            onChange={(e) => setCountry(e.target.value as AvailableCountries)}
            defaultValue={country}
          >
            <option value='UNITED STATES'>UNITED STATES</option>
            <option value='UNITED KINGDOM'>UNITED KINGDOM</option>
          </Select>
          <StyledLink href='/cart'>CART {currentItems}</StyledLink>
        </LinksWrapper>
      </StyledHeader>
    </Wrapper>
  );
}
export default Header;
