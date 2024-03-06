import React, { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
