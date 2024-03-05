import { useState } from "react";
import styles from "./Drawer.module.css";
import Image from "next/image";

/**
 * Компонент корзины с товарами.
 * @param {Function} isOpen - Функция для открытия/закрытия корзины.
 */
export default function Drawer({ isOpen, products=[] }) {
  // стейт для скрытия тени от корзины
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  /**
   * Обработчик закрытия корзины.
   */
  const closeCartHandler = () => {
    setIsOverlayOpen(false);
    isOpen(false); // Вызов функции из props для закрытия корзины в Header
  };
  

  return (
    <div
      className={
        isOverlayOpen
          ? styles.products__overlay
          : styles.products__overlay_hidden
      }
    >
      {isOpen && (
        <div className={styles.products__drawer}>
          <h2 className={styles.products__drawer_title}>
          <p>Корзина</p>
            <Image
              src="/image/btn-remove.svg"
              alt="Кнопка закрытия корзины"
              width={31}
              height={31}
              onClick={closeCartHandler}
              className={styles.cart__item_close}
            />
          </h2>

          <div className={styles.cart__items}>
            {products.map((product) => (
              <div className={styles.cart__item} key={product.id}>
                <Image
                  src={product.imgSrc}
                  alt="Свеча"
                  width={80}
                  height={80}
                  className={styles.cart__item_img}
                />
                <div className={styles.cart__item_descr}>
                  <p className={styles.cart__item_title}>{product.name}</p>
                  <p className={styles.cart__item_price}>{product.price}</p>
                </div>
                <Image
                  src="/image/btn-remove.svg"
                  alt="Кнопка удаления товара"
                  width={31}
                  height={31}
                  className={styles.cart__item_remove}
                />
                
              </div>
            ))}
          </div>

          <div className={styles.cart__total_block}>
            <ul>
              <li className={styles.cart__item__total_price}>
                <span>Итого:</span>
                <div className={styles.cart__total_ellipsis}></div>
                <b>820₽</b>
              </li>
            </ul>

            <button className={` button ${styles.cart__total_btn} `}>
              Оформить заказ
              <Image
                className={styles.cart__total_arrow}
                src="/image/arrow.svg"
                alt="Стрелка"
                width={16}
                height={14}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
