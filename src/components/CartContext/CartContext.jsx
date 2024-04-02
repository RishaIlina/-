import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

/**
 * Провайдер состояния для корзины и товаров.
 * @param {ReactNode} children - Дочерние компоненты, на которые распространяется состояние.
 */
const CartProvider = ({ children }) => {
  // Стейт для отображения карточек
  const [products, setProducts] = useState([]);

  // Состояние для товаров в корзине
  const [cartItems, setCartItems] = useState([]);

  // Стейт для подсчета количества товаров в корзине
  const [itemCounts, setItemCounts] = useState({});

  // Стейт для хранения общего количества товаров в корзине
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  // Стейт для избранных товаров
  const [favouriteItems, setFavouriteItems] = useState([]);

  // Получение товаров из базы данных
  const getProductsFromServer = async () => {
    try {
      const response = await axios.get(
        "https://65d386d8522627d501091517.mockapi.io/products"
      );
      const updatedProducts = response.data.map((product) => ({
        ...product,
        // Проверяем, есть ли товар в избранном
        isFavourite: favouriteItems.includes(product.id),
      }));
      setProducts(updatedProducts);
    } catch (error) {
      console.error(error);
    }
  };

  // Отправка данных из корзины на сервер
  const addItemToCart = (product) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(product.id)
      );

      // Проверяем, есть ли товар с таким id уже в корзине
      if (findItem) {
        // Удаляем товар с сервера
        axios
          .delete(
            `https://65d386d8522627d501091517.mockapi.io/cart/${findItem.id}`
          )

          .then(() => {
            // Если удаление успешно, удаляем товар из состояния корзины
            setCartItems((prev) =>
              prev.filter(
                (item) => Number(item.parentId) !== Number(product.id)
              )
            );
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // Если товар с таким id не найден в корзине, то отправляем данные на сервер и добавляем товар в корзину.
        axios
          .post("https://65d386d8522627d501091517.mockapi.io/cart", product)
          .then(({ data }) => {
            setCartItems((prev) => [...prev, data]);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Получение товаров из базы данных, добавленных в корзину
  const getProductsForCartFromServer = () => {
    axios
      .get("https://65d386d8522627d501091517.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);

        // Восстановление количества товаров из cartItems в itemCounts
        const initialCounts = response.data.reduce((acc, product) => {
          acc[product.id] = 1;
          return acc;
        }, {});
        setItemCounts(initialCounts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Загрузка товаров из корзины
    getProductsForCartFromServer();

    // При загрузке страницы получаем избранные товары из local storage
    const savedFavourites = localStorage.getItem("favouriteItems");
    if (savedFavourites) {
      setFavouriteItems(JSON.parse(savedFavourites));
    }
  }, []);

  // Обновление состояния itemCounts при изменениях в cartItems
  useEffect(() => {
    const newCounts = cartItems.reduce((acc, product) => {
      acc[product.id] = itemCounts[product.id] || 1;
      return acc;
    }, {});
    setItemCounts(newCounts);
  }, [cartItems]);

  // Обновление общего количества товаров в корзине при изменениях в itemCounts
  useEffect(() => {
    const totalItems = Object.values(itemCounts).reduce(
      (acc, count) => acc + count,
      0
    );
    setTotalItemsInCart(totalItems);
  }, [itemCounts]);

  // Удаление товара из корзины
  const removeItemFromCart = async (id) => {
    try {
      await axios.delete(
        `https://65d386d8522627d501091517.mockapi.io/cart/${id}`
      );
      setCartItems((prevItems) =>
        prevItems.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Функция для добавления товара в избранное
  const addToFavourites = (productId) => {
    const updatedFavourites = [...favouriteItems, productId];
    setFavouriteItems(updatedFavourites);
    localStorage.setItem("favouriteItems", JSON.stringify(updatedFavourites));
  };

  // Функция удаления товара из избранного
  const removeFromFavourites = (productId) => {
    const updatedFavourites = favouriteItems.filter(
      (item) => item !== productId
    );
    setFavouriteItems(updatedFavourites);
    localStorage.setItem("favouriteItems", JSON.stringify(updatedFavourites));
  };

  // Операции с избранными товарами обновляются в local storage
  useEffect(() => {
    localStorage.setItem("favouriteItems", JSON.stringify(favouriteItems));
  }, [favouriteItems]);

  return (
    <CartContext.Provider
      value={{
        setProducts,
        products,
        cartItems,
        setCartItems,
        addItemToCart,
        getProductsFromServer,
        getProductsForCartFromServer,
        removeItemFromCart,
        favouriteItems,
        addToFavourites,
        removeFromFavourites,
        itemCounts,
        setItemCounts,
        totalItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
