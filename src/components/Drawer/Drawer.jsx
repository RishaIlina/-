import { useState, useEffect } from "react";
import styles from "./Drawer.module.css";
import Image from "next/image";

/**
 * Компонент корзины с товарами.
 * @param {Function} closeCart - Функция для закрытия корзины.
 */
export default function Drawer({ closeCart }) {
  // стейт закрытия корзины при клике на кнопку
  const [isCartOpen, setIsCartOpen] = useState(true);

  // стейт для скрытия тени от корзины
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  /**
   * Обработчик закрытия корзины.
   */
  const closeCartHandler = () => {
    setIsCartOpen(false);
    setIsOverlayOpen(false);
    closeCart(); // Вызов функции из props для закрытия корзины в Header
  };

  // закрытие корзины при клике за ее пределами
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isCartOpen && !e.target.closest(".products__drawer")) {
        closeCartHandler();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isCartOpen]);

  return (
    <div
      className={
        isOverlayOpen
          ? styles.products__overlay
          : styles.products__overlay_hidden
      }
    >
      {isCartOpen && (
        <div className={styles.products__drawer}>
          <h2 className={styles.products__drawer_title}>
            Корзина
            <Image
              src="/image/btn-remove.svg"
              alt="Кнопка закрытия корзины"
              width={31}
              height={31}
              className={styles.cart__item_close}
              onClick={closeCartHandler}
            />
          </h2>

          <div className={styles.cart__items}>
            <div className={styles.cart__item}>
              <Image
                src="/image/shopping__card-candle-1.jpg"
                alt="Свеча"
                width={80}
                height={80}
                className={styles.cart__item_img}
              />
              <div className={styles.cart__item_descr}>
                <p className={styles.cart__item_title}>Свеча "Ранункулюс"</p>
                <p className={styles.cart__item_price}>820₽</p>
              </div>
              <Image
                src="/image/btn-remove.svg"
                alt="Кнопка удаления товара"
                width={31}
                height={31}
                className={styles.cart__item_remove}
              />
            </div>
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
