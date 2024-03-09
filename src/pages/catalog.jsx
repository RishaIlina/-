import { useState, useEffect, useContext } from "react";
import { CartContext } from "../components/CartContext/CartContext";
import styles from "../styles/Catalog.module.css";
import Image from "next/image";
import Card from "../components/Card/Card";

export default function Catalog() {
  const { addItemToCart, getProductsFromServer, getProductsForCartFromServer, setCartItems  } = useContext(CartContext);

  // Стейт для отображения карточек
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromServer(setProducts); // Вызов для отрисовки данных
    getProductsForCartFromServer(setCartItems); // Получение данных корзины с сервера
  }, []);

  // Стейт для поиска  товара
  const [searchValue, setSearchValue] = useState("");

  // Функция для фильтрации продуктов по значению ввода
  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Итерация по данным и отрисовка карточек
  const productList =
    products.length > 0 &&
    filterProducts.map((product) => (
      <Card
        key={product?.id}
        details={product}
        onClick={() => addItem(addItemToCart)}
      />
    ));

  // функция отвечает за обновление значения ввода поиска
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
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

        <div className={`container products_inner`}>{productList}</div>
      </section>
    </>
  );
}
