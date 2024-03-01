import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import styles from "../styles/Catalog.module.css";
import Image from "next/image";

export default function Catalog() {
  // Стейт для отображения карточек
  const [products, setProducts] = useState([]);

  // Стейт для добавления товара в корзину
  const [cartItems, setCartItems] = useState([]);

  // Стейт для поиска  товара
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getProductsFromServer(); // Вызов для отрисовки данных
  }, []);

  /**
   * Функция для получения товаров из базы данных.
   */
  const getProductsFromServer = () => {
    fetch("https://65d386d8522627d501091517.mockapi.io/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error(error);
      });
  };

  // Добавление товара в корзину
  const handleAddProductToCart = (product) => {
    setCartItems([...cartItems, product]); // при каждом клике беру старые данные, к ним плюсую новый объект
    console.log("Товар добавлен в корзину:", product);
    console.log(cartItems);
  };
  console.log(cartItems);

  // поиск по названию
  const filterProducts = products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))

  // итерация по данным и отрисовка карточек
  const productList =
    products.length > 0 &&
    filterProducts.map((product) => (
        <Card
          key={product?.id}
          details={product}
          onClickAddToCart={handleAddProductToCart}
        />
      ));

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
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

      <div className={`container products_inner`}>{productList}</div>
    </section>
  );
}
