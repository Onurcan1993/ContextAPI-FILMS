import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    const value = cart.some((item) => item.id === product.id);

    value ? setCart(cart) : setCart([...cart, product]);
  };

  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
