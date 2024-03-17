import React, { useState, createContext } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Добавление товаров в корзину
  const [cartItems, setCartItems] = useState([]);

  // Стейт для смены картинки
  const [isAdded, setIsAdded] = useState(false);
  
  // Получение товаров из базы данных.
  const getProductsFromServer = async (setProducts) => {
    try {
      const response = await axios.get(
        "https://65d386d8522627d501091517.mockapi.io/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Отправка данных из корзины на сервер
  const addItemToCart = (product) => {
    // Проверяем, есть ли товар с таким id уже в корзине
    if (cartItems.find((item) => Number(item.id) === Number(product.id))) {
    // Удаляем товар с сервера
      axios.delete(
        `https://65d386d8522627d501091517.mockapi.io/cart/${product.id}`
      );
      // Если товар с таким id уже существует в корзине, то удаляем его из корзины.
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(product.id))
      );
    } else {
      // Если товар с таким id не найден в корзине, то отправляем данные на сервер и добавляем товар в корзину.
      axios.post("https://65d386d8522627d501091517.mockapi.io/cart", product);
      setCartItems((prev) => [...prev, product]);
    }
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
  const removeItemFromCart = async (id) => {
    try {
      console.log(`Пытаемся удалить товар с id: ${id}`);
      await axios.delete(
        `https://65d386d8522627d501091517.mockapi.io/cart/${id}`
      );
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error(error);
    }
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
        isAdded,
        setIsAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
