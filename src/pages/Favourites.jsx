import React, { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext/CartContext";
import Card from "../components/Card/Card";
import styles from "../styles/Favourites.module.css";
import Head from "next/head";

/**
 * Страница с избранными товарами.
 */
export default function Favourites() {
  const {
    products,
    getProductsFromServer,
    favouriteItems,
    removeFromFavourites,
  } = useContext(CartContext);

  // useEffect(() => {
  //   // Если избранные товары еще не загружены, получаем их с сервера
  //   if (!products.length) {
  //     getProductsFromServer();
  //   }
  // }, []);

  // Фильтруем избранные товары из общего списка товаров
  const favouriteProducts = products.filter((product) =>
    favouriteItems.includes(product.id)
  );

  // Описание страницы для SEO
  const favouritesDescription =
    "Избранное из магазина свечей ручной работы. Самые понравившиеся продукты для вашего уюта и атмосферы.";

  return (
    <>
      <Head>
        <title>Избранное - Магазин свечей ручной работы</title>
        <meta name="description" content={favouritesDescription} />
      </Head>
      <section className={styles.favourites}>
        <div className={styles.products__top}>
          <h1 className={styles.products__top_title}>Избранное</h1>
        </div>

        <div
          className={`container products_inner ${styles.favourites__block} `}
        >
          {favouriteProducts.map((product) => (
            <Card
              key={product?.id}
              details={product}
              onClick={() => addItem({ ...product, parentId: product.id })}
              isFavorite={product.isFavourite}
              removeFromFavourites={removeFromFavourites}
            />
          ))}
        </div>
      </section>
    </>
  );
}
