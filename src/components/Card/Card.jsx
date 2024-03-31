import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";
import styles from "./Card.module.css";
import Image from "next/image";

/**
 * Компонент карточки товара.
 */
export default function Card(props) {
  const { name, imgSrc, price } = props.details;

  const {
    addItemToCart,
    cartItems,
    removeItemFromCart,
    addToFavourites,
    favouriteItems,
    removeFromFavourites,
  } = useContext(CartContext);

  // Стейт для смены изображения избранных товаров
  const [isFavourite, setIsFavourite] = useState(
    favouriteItems.includes(props.details.id)
  );

  // Проверяем, добавлен ли товар в корзину
  const isAdded = cartItems.some((item) => item.parentId === props.details.id);

  const onClickAddToCart = () => {
    // Если товар уже добавлен, вызывается логика удаления товара из корзины
    if (isAdded) {
      // Получаем id товара, который нужно удалить
      const itemToRemoveId = cartItems.find(
        (item) => item.parentId === props.details.id
      ).id;
      removeItemFromCart(itemToRemoveId);
    } else {
      // Если товар еще не добавлен, вызывается функция добавления товара в корзину
      addItemToCart({ ...props.details, parentId: props.details.id });
    }
  };

  useEffect(() => {
    setIsFavourite(favouriteItems.includes(props.details.id));
  }, [favouriteItems, props.details.id]);

  const onClickFavourites = () => {
    const productId = props.details.id;
    if (isFavourite) {
      removeFromFavourites(productId);
    } else {
      addToFavourites(productId);
    }
  };

  return (
    <>
      <div className={` products__item ${styles.products__item_card} `}>
        <>
          <Image
            width={174}
            height={210}
            src={imgSrc}
            alt={name}
            className={styles.products__item_img}
          />
          <div className={styles.products__item_top}>
            <p>{name}</p>
            <div
              className={`${styles.favorite} ${
                isFavourite ? styles.favorite_active : ""
              }`}
              onClick={onClickFavourites}
            >
              <Image
                width={isFavourite ? 25 : 17}
                height={isFavourite ? 25 : 17}
                src={isFavourite ? "/image/liked.svg" : "/image/heart.svg"}
                alt={
                  isFavourite
                    ? "Изображение сердца лайкнутое"
                    : "Изображение сердца не лайкнутое"
                }
              />
            </div>
          </div>
          <div className={styles.products__item_bottom}>
            <div className={styles.products__item_info}>
              <span>Цена:</span>
              <p className={styles.products__item_price}>{price} ₽</p>
            </div>
            <button className="btn_icon" onClick={onClickAddToCart}>
              <Image
                width={32}
                height={32}
                src={isAdded ? "/image/btn-checked.svg" : "/image/btn-plus.svg"}
                alt={isAdded ? "Добавлено" : "Добавить"}
              />
            </button>
          </div>
        </>
      </div>
    </>
  );
}
