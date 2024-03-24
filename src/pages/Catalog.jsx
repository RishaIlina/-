import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../components/CartContext/CartContext";
import styles from "../styles/Catalog.module.css";
import Image from "next/image";
import Card from "../components/Card/Card";
import ContentLoader from "react-content-loader";

export default function Catalog() {
  const { addItemToCart, getProductsFromServer } = useContext(CartContext);

  // Стейт для отображения карточек
  const [products, setProducts] = useState([]);

  // Стейт для поиска товара
  const [searchValue, setSearchValue] = useState("");

  // Подгрузка скелетона на страницу каталога
  const [isLoadingData, setIsLoadingData] = useState(false);

  // Функция для фильтрации продуктов по значению ввода
  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const fetchData = () => {
      setIsLoadingData(true); // Устанавливаем состояние загрузки в true

      getProductsFromServer(setProducts)
        .then(() => setIsLoadingData(false)) // Устанавливаем состояние загрузки в false после получения данных
        .catch((error) => {
          console.error("Ошибка при загрузке данных:", error);
          setIsLoadingData(false); // Устанавливаем состояние загрузки в false в случае ошибки
        });
    };

    fetchData();
  }, []);

  // Функция для обновления значения ввода поиска
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

   // Функция для добавления товара в корзину
   const addItem = (product) => {
    addItemToCart(product);
  };

  return (
    <>
      <section className="products">
        <div className={styles.products__top}>
          <h1 className={styles.products__top_title}>
            {searchValue ? `Поиск по запросу: "${searchValue}"` : ""}
          </h1>
          <div className={styles.products__search}>
            <div className={styles.search__block}>
              <Image
                className={styles.image__search}
                width={15}
                height={15}
                src="/image/search.svg"
                alt="Поиск"
              />
              <input
                className={styles.search__input}
                placeholder="Поиск..."
                onChange={onChangeSearchInput}
                value={searchValue}
              />
              {searchValue && (
                <button
                  className={styles.clear__button}
                  onClick={() => setSearchValue("")}
                >
                  X
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className={`container products_inner`}>
      {isLoadingData
            ? [...Array(10)].map((_, index) => (
                <ContentLoader
                  key={index}
                  speed={2}
                  width={200}
                  height={320}
                  viewBox="0 0 200 350"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="10" y="0" rx="6" ry="6" width="174" height="210" />
                  <rect x="142" y="289" rx="0" ry="0" width="3" height="0" />
                  <rect x="185" y="290" rx="0" ry="0" width="3" height="2" />
                  <rect x="167" y="296" rx="0" ry="0" width="4" height="4" />
                  <rect x="10" y="227" rx="5" ry="5" width="175" height="15" />
                  <rect x="10" y="251" rx="5" ry="5" width="119" height="15" />
                  <rect x="10" y="282" rx="6" ry="6" width="77" height="41" />
                  <rect
                    x="150"
                    y="288"
                    rx="10"
                    ry="10"
                    width="32"
                    height="32"
                  />
                </ContentLoader>
              ))
        : filterProducts.map((product) => (
          <Card
            key={product?.id}
            details={product}
            onClick={() => addItem(product)}
            isLoading={isLoadingData}
          />
        ))}
      </div>
    </>
  );
}
