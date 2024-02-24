import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import styles from "../styles/Catalog.module.css";
import Image from "next/image";

export default function Catalog() {
  // Стейт для отображения карточек
  const [products, setProducts] = useState([]);

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

  // итерация по данным и отрисовка карточек
  const productList =
  products.length > 0 &&
  products.map((product) => (
      <Card key={product?.id} details={product} />
    ));

  return (
    <section className="products">
      <div className={styles.products__search}>
        <div className={styles.search__block}>
          <Image
            className={styles.image__search}
            width={15}
            height={15}
            src="/image/search.svg"
            alt="Поиск"
          />
          <input className={styles.search__input} placeholder="Поиск..." />
        </div>
      </div>

      <div className={`container products_inner`}>
        {productList}
      </div>
    </section>
  );
}
