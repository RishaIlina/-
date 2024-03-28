import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import styles from "./Drawer.module.css";
import Image from "next/image";
import CartInfo from "../CartInfo/CartInfo";
import axios from "axios";

/**
 * Компонент корзины с товарами.
 * @param {Function} isOpen - Функция для открытия/закрытия корзины.
 */
export default function Drawer({ isOpen }) {
  const { cartItems, setCartItems, removeItemFromCart } =
    useContext(CartContext);

  // считаем сумму всех товаров в корзине
  const totalPrice = cartItems.reduce(
    (sum, product) => Number(product.price) + sum,
    0
  );

  // стейт для отправки заказа в корзине
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const onClickOrder = async () => {
    // заказ создан
    setIsOrderComplete(true);
    // очищаю массив корзины
    setCartItems([]);
    // удаляю товары с сервера
    for (const product of cartItems) {
      await axios.delete(
        "https://65d386d8522627d501091517.mockapi.io/cart/" + product.id
      );
    }
  };

  // стейт для скрытия тени от корзины
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  // Обработчик закрытия корзины.
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

          {cartItems.length > 0 ? (
            <>
              <div className={styles.cart__items}>
                {cartItems.map((product) => (
                  <div className={styles.cart__item} key={product.id}>
                    <Image
                      src={product.imgSrc}
                      alt={product.name}
                      width={80}
                      height={80}
                      className={styles.cart__item_img}
                    />
                    <div className={styles.cart__item_descr}>
                      <p className={styles.cart__item_title}>{product.name}</p>
                      <p className={styles.cart__item_price}>
                        {parseInt(product.price, 10)} ₽
                      </p>
                    </div>
                    <Image
                      src="/image/btn-remove.svg"
                      alt="Кнопка удаления товара"
                      width={31}
                      height={31}
                      className={styles.cart__item_remove}
                      onClick={() =>
                        product.id && removeItemFromCart(product.id)
                      }
                    />
                  </div>
                ))}
              </div>

              <div className={styles.cart__total_block}>
                <ul>
                  <li className={styles.cart__item__total_price}>
                    <span>Доставка:</span>
                    <div className={styles.cart__total_ellipsis}></div>
                    <b>500 ₽</b>
                  </li>
                </ul>
                <ul>
                  <li className={styles.cart__item__total_price}>
                    <span>Итого:</span>
                    <div className={styles.cart__total_ellipsis}></div>
                    <b>{totalPrice + 500} ₽</b>
                  </li>
                </ul>

                <button
                  onClick={onClickOrder}
                  className={` button ${styles.cart__total_btn}`}
                >
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
            </>
          ) : (
            <CartInfo
              imgSrc={
                isOrderComplete
                  ? "/image/complete-order.jpg"
                  : "/image/empty-cart.jpg"
              }
              text={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
              description={
                isOrderComplete
                  ? "В ближайшее время с вами свяжется наш менеджер для уточнения информации по заказу"
                  : "Добавьте хотя бы один товар, чтобы сделать заказ"
              }
              closeCartHandler={closeCartHandler}
            />
          )}
        </div>
      )}
    </div>
  );
}
