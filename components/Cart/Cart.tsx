import { useEffect, useState } from 'react';
import clientPromise from 'shared/libs/mongodb';
import styled from 'styled-components';
import { useCartContext } from '../../context/CartContextProvider';
import { useCountryContext } from '../../context/CountryContextProvider';
import findById from '../../shared/utils/findById';

interface Prices {
  'UNITED STATES': {
    label: 'priceUS';
    sign: '$';
  };
  'UNITED KINGDOM': {
    label: 'priceUK';
    sign: '£';
  };
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
  }
`;

const Line = styled.div`
  max-width: 1200px;
  height: 3px;
  background-color: black;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
  }
`;

const Item = styled.h3`
  width: 600px;
  max-width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Price = styled.div`
  width: 150px;
  font-size: 18px;
`;

const Quantity = styled.div`
  width: 250px;
  font-size: 18px;
`;

const Subtotal = styled.div`
  width: 150px;
  font-size: 18px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThinLine = styled.div`
  max-width: 1200px;
  height: 1px;
  background-color: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function CartComponent({ data }: AllProducts) {
  const cart = useCartContext();
  const { country } = useCountryContext();

  console.log(cart);
  const prices: Prices = {
    'UNITED STATES': {
      label: 'priceUS',
      sign: '$',
    },
    'UNITED KINGDOM': {
      label: 'priceUK',
      sign: '£',
    },
  };

  return (
    <Wrapper>
      <h3>
        {cart.items.length} {cart.items.length === 1 ? 'item' : 'items'} in Cart
      </h3>
      <Line />
      <TableHeader>
        <Item>Item</Item>
        <Price>Price</Price>
        <Quantity>Qty</Quantity>
        <Subtotal>Subtotal</Subtotal>
      </TableHeader>
      <ThinLine />
      <Table>
        {cart.items.map((item) => {
          const currentItem = data ? findById(data, item.id) : null;
          const sign = prices[country].sign;
          const currentPrice = currentItem
            ? currentItem[prices[country].label]
            : null;
          return (
            <>
              <TableRow key={item.id}>
                <Item>
                  <RemoveButton>X</RemoveButton>
                  <Image>
                    <img
                      src={currentItem ? currentItem.imageMain : ''}
                      alt='image'
                    />
                  </Image>
                  <div>{currentItem ? currentItem.title : 'loading'}</div>
                </Item>
                <Price>{data ? `${sign}${currentPrice}` : 'loading'}</Price>
                <Quantity>{item.quantity}</Quantity>
                <Subtotal>
                  {data
                    ? `${sign}${item.quantity * (currentPrice || 0)}`
                    : 'loading'}
                </Subtotal>
              </TableRow>
              <ThinLine />
            </>
          );
        })}
      </Table>
    </Wrapper>
  );
}
export default CartComponent;
