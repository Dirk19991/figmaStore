import { Context, createContext, useContext, useState } from 'react';

interface ICartContext {
  items: any[];
  addItem: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addItem: (id, quantity) => {},
  removeItem: (id) => {},
});

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (id: number, quantity: number) => {
    setItems((prev) => {
      console.log(quantity);
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
        return prev.map((elem) => (elem.id === id ? elem.quantity-- : elem));
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
