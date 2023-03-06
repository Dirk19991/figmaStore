import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../../../context/CartContextProvider';
import { useCountryContext } from '../../../context/CountryContextProvider';
import Buttons from './buttons/Buttons';

interface InfoProps {
  data: Product;
}

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 500px;
  padding-right: 10px;
  max-width: 60%;
`;

const Category = styled.div`
  width: 150px;
  height: 35px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: var(--green);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
`;

const AddButton = styled.button`
  max-width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  border: 2px solid black;
  border-radius: 30px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
`;

const Subtitle = styled.p`
  margin-top: -10px;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
  font-style: italic;
`;

function Info({ data }: InfoProps) {
  const { country, setCountry } = useCountryContext();
  const cart = useCartContext();

  const signs = {
    'UNITED STATES': '$',
    'UNITED KINGDOM': '£',
  };
  const prices = {
    'UNITED STATES': data.priceUS,
    'UNITED KINGDOM': data.priceUK,
  };
  const [amount, setAmount] = useState(1);

  return (
    <StyledInfo>
      <Category>{data.category}</Category>
      <Title>{data.title}</Title>
      <Buttons amount={amount} setAmount={setAmount} />
      <AddButton onClick={() => cart.addItem(data.id, amount)}>
        Add {signs[country]}
        {prices[country]}
      </AddButton>
      <Description>{data.productInfo.description}</Description>
      <Subtitle>{data.productInfo.subtitle}</Subtitle>
    </StyledInfo>
  );
}
export default Info;
