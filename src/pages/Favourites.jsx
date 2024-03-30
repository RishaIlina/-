import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartContext/CartContext";
import Card from "../components/Card/Card";
import styles from "../styles/Favourites.module.css";

/**
 * Страница с избранными товарами.
 */
export default function Favourites() {
  const { products, favouriteItems } = useContext(CartContext);

  const [favouriteProducts, setFavouriteProducts] = useState([]);

  // Обновляем список избранных товаров
  useEffect(() => {
    setFavouriteProducts(products.filter((product) => favouriteItems.includes(product.id)));
  }, [products, favouriteItems]);

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
