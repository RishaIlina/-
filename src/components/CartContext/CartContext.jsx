import React, { useState, createContext } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Получение товаров из базы данных.
  const getProductsFromServer = (setProducts) => {
    axios
      .get("https://65d386d8522627d501091517.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
      });
  };

  // Отправка данных из корзины на сервер
  const addItemToCart = (product) => {
    axios.post("https://65d386d8522627d501091517.mockapi.io/cart", product);
    setCartItems([...cartItems, product]);
  };

  // Получение товаров из базы данных, добавленных в корзину
  const getProductsForCartFromServer = (setCartItems) => {
    axios
      .get("https://65d386d8522627d501091517.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);
      });
  };

  // Удаление товара из корзины
  const removeItemFromCart = (id) => {
    axios
      .delete(`https://65d386d8522627d501091517.mockapi.io/cart/${id}`)
      .then(() => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItemToCart,
        getProductsFromServer,
        getProductsForCartFromServer,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
