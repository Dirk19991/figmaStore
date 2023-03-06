import { Context, createContext, useContext, useState } from 'react';

interface Item {
  id: number;
  quantity: number;
}

interface ICartContext {
  items: Item[] | [];
  addItem: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addItem: (id, quantity) => [],
  removeItem: (id) => [],
});

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }: any) {
  const [items, setItems] = useState<Item[] | []>([]);

  const addItem = (id: number, quantity: number) => {
    setItems((prev) => {
      if (prev.filter((elem) => elem.id === id).length > 0) {
        return prev.map((elem) => {
          return elem.id === id
            ? { id: elem.id, quantity: elem.quantity + quantity }
            : elem;
        });
      } else {
        return [...prev, { id: id, quantity: quantity }];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => {
      if (prev.filter((elem) => elem.id === id).length > 0) {
        return prev.map((elem) =>
          elem.id === id ? { id: elem.id, quantity: elem.quantity - 1 } : elem
        );
      } else {
        return prev;
      }
    });
  };

  const cartValue = {
    items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}
export default CartContextProvider;
