import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface ButtonsProps {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const PlusButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid black;
  font-size: 36px;
`;

const MinusButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid black;
  font-size: 36px;
`;

const Amount = styled.div`
  width: 10px;
  font-size: 18px;
  font-weight: 500;
`;

function Buttons({ amount, setAmount }: ButtonsProps) {
  const increaseItems = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseItems = () => {
    setAmount((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <ButtonsWrapper>
      <PlusButton onClick={increaseItems}>
        <img src='/icons/plus.svg' alt='plus' />
      </PlusButton>
      <Amount>{amount}</Amount>
      <MinusButton onClick={decreaseItems}>
        <img src='/icons/minus.svg' alt='minus' />
      </MinusButton>
    </ButtonsWrapper>
  );
}
export default Buttons;
