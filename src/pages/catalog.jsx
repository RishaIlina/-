import { useState } from "react";
import Card from "../components/Card/Card";
import styles from "../styles/Catalog.module.css";
import Image from "next/image";

export default function Catalog() {
  // стейт для хранения товаров в корзине
  const [cartProducts, setCartProducts] = useState([]);

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
        <Card />
      </div>
    </section>
  );
}
