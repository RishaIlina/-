import styles from "./Card.module.css";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

/**
 * Компонент карточки товара.
 */
export default function Card(props) {
  const { name, imgSrc, price } = props.details;
  // Стейт для смены картинки
  const [isAdded, setIsAdded] = useState(false);

  // Стейт для добавления товара в корзину
  const { addItemToCart } = useContext(CartContext);

  // При клике на кнопку меняется значок и товар добавляется в корзину
  const onClickAddToCart = () => {
    setIsAdded(!isAdded);
    addItemToCart(props.details);
  };

  return (
    <>
      <div className={` products__item ${styles.products__item_card} `}>
        <Image
          width={174}
          height={210}
          src={imgSrc}
          alt={name}
          className={styles.products__item_img}
        />
        <div className={styles.products__item_top}>
          <p>{name}</p>
          <div className={styles.favorite}>
            <Image
              width={17}
              height={17}
              src="/image/heart.svg"
              alt="Сердце не лайкнутое"
            />
          </div>
        </div>
        <div className={styles.products__item_bottom}>
          <div className={styles.products__item_info}>
            <span>Цена:</span>
            <p className={styles.products__item_price}>{price}</p>
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
      </div>
    </>
  );
}
