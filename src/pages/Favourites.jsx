import React, { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext/CartContext";
import Card from "../components/Card/Card";
import styles from "../styles/Favourites.module.css";

/**
 * Страница с избранными товарами.
 */
export default function Favourites() {
  const { products, getProductsFromServer, favouriteItems } =
    useContext(CartContext);

  console.log("продукты в favourits:", products);
  console.log("избранные в favourits:", favouriteItems);

  useEffect(() => {
    // Если избранные товары еще не загружены, получаем их с сервера
    if (!products.length) {
      getProductsFromServer();
    }
  }, []);

  // Фильтруем избранные товары из общего списка товаров
  const favouriteProducts = products.filter((product) =>
    favouriteItems.includes(product.id)
  );

  return (
    <section className="favourites">
      <div className={styles.products__top}>
        <h1 className={styles.products__top_title}>Избранное</h1>
      </div>

      <div className={`container products_inner ${styles.favourites__block} `}>
        {favouriteProducts.map((product) => (
          <Card
            key={product?.id}
            details={product}
            onClick={() => addItem({ ...product, parentId: product.id })}
             isFavorite={product.isFavourite}
          />
        ))}
      </div>
    </section>
  );
}
