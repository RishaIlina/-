import styles from "./Card.module.css";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

/**
 * Компонент карточки товара.
 */
export default function Card(props) {
  const { name, imgSrc, price } = props.details;

  // Стейт для добавления товара в корзину
  const { addItemToCart, cartItems, removeItemFromCart } =
    useContext(CartContext);

  // Стейт для смены изображения избранных товаров
  const [isFavorite, setIsFavorite] = useState(false);

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

  // При клике на кнопку "Добавить в избранное" меняется значок и товар добавляется в избранное
  const onClickFavorites = () => {
    setIsFavorite(!isFavorite);
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
                isFavorite ? styles.favorite_active : ""
              }`}
              onClick={onClickFavorites}
            >
              <Image
                width={isFavorite ? 25 : 17}
                height={isFavorite ? 25 : 17}
                src={isFavorite ? "/image/liked.svg" : "/image/heart.svg"}
                alt={
                  isFavorite
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
