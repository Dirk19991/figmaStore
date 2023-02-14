import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--yellow);
`;

const StyledHeader = styled.header`
  padding: 10px 50px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Link = styled.a`
  font-size: 0.8rem;
  border: 1.5px solid black;
  border-radius: 25px;
  font-weight: 700;
  padding: 8px 15px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Select = styled.select`
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0 15px;
  background-color: var(--yellow);
  border: 1.5px solid black;
  border-radius: 25px;
  outline: none;
  cursor: pointer;

  > option {
    font-size: 0.8rem;
    font-weight: 700;
    background-color: var(--black);
    color: white;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <Wrapper>
      <StyledHeader>
        <LinksWrapper>
          <Link>SHOP</Link>
          <Link>ABOUT</Link>
        </LinksWrapper>
        <Logo>THE FIGMA STORE</Logo>
        <LinksWrapper>
          <Select>
            <option selected value='UNITED STATES'>
              UNITED STATES
            </option>
            <option value='UNITED KINGDOM'>UNITED KINGDOM</option>
          </Select>
          <Link>CART</Link>
        </LinksWrapper>
      </StyledHeader>
    </Wrapper>
  );
}
export default Header;
