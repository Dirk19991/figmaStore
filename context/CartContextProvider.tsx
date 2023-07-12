import {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Item {
  id: number;
  quantity: number;
}

interface ICartContext {
  items: Item[] | [];
  addItem: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  decreaseItems: (id: number) => void;
  clearCart: () => void;
  ordered: boolean;
  setOrdered: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addItem: (id, quantity) => [],
  removeItem: (id) => [],
  decreaseItems: (id) => [],
  clearCart: () => [],
  ordered: false,
  setOrdered: () => [],
});

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }: any) {
  const [items, setItems] = useState<Item[] | []>([]);
  const [ordered, setOrdered] = useState(false);

  const addItem = (id: number, quantity: number) => {
    setItems((prev) => {
      if (prev.filter((elem) => elem.id === id).length > 0) {
        const updated = prev.map((elem) => {
          return elem.id === id
            ? { id: elem.id, quantity: elem.quantity + quantity }
            : elem;
        });
        localStorage.setItem('items', JSON.stringify(updated));
        return updated;
      } else {
        const updated = [...prev, { id: id, quantity: quantity }];
        localStorage.setItem('items', JSON.stringify(updated));
        return updated;
      }
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => {
      if (prev.filter((elem) => elem.id === id).length > 0) {
        const updated = prev.filter((elem) => elem.id !== id);

        localStorage.setItem('items', JSON.stringify(updated));
        return updated;
      } else {
        return prev;
      }
    });
  };

  const decreaseItems = (id: number) => {
    setItems((prev) => {
      const currentItem = prev.filter((elem) => elem.id === id);
      if (currentItem.length > 0) {
        if (currentItem[0].quantity === 1) {
          const updated = prev.filter((elem) => elem.id !== id);

          localStorage.setItem('items', JSON.stringify(updated));
          return updated;
        } else {
          const updated = prev.map((elem) =>
            elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem
          );
          localStorage.setItem('items', JSON.stringify(updated));
          return updated;
        }
      } else {
        return prev;
      }
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  useEffect(() => {
    const storageItems = localStorage.getItem('items');
    if (storageItems) {
      setItems(JSON.parse(storageItems));
    }
  }, []);

  const cartValue = {
    items,
    addItem,
    removeItem,
    decreaseItems,
    clearCart,
    ordered,
    setOrdered,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}
export default CartContextProvider;
