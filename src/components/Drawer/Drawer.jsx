import { useContext } from "react";
import { useState, useEffect } from "react";
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
  const { cartItems, setCartItems, removeItemFromCart, setItemCounts, itemCounts } =
    useContext(CartContext);

  // стейт для скрытия тени от корзины
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  // Стейт для подсчета стоимости товаров
  const [totalPrice, setTotalPrice] = useState(0);

  // стейт для отправки заказа в корзине
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  // const [isFormVisible, setIsFormVisible] = useState(false);

  // Чтобы инициализировать счетчик каждого товара в корзине значением 1 по умолчанию
  useEffect(() => {
    const initialCounts = cartItems.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {});
    setItemCounts(initialCounts);
  }, [cartItems]);

  // Счетчики количества товаров в корзине
  const handleIncrement = (productId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
    }));
  };

  // Стоимость доставки
  const shippingCost = 500;

  // Итоговая стоимость товаров в корзине
  const updateTotalPrice = () => {
    const updatedPrice = cartItems.reduce((sum, product) => {
      const itemPrice = Number(product.price);
      const itemCount = itemCounts[product.id] || 0;
      return sum + itemPrice * itemCount;
    }, 0);
    setTotalPrice(updatedPrice);
  };
  
  useEffect(() => {
    updateTotalPrice();
  }, [itemCounts, cartItems]);
  
  // Итоговая стоимость, с учетом доставки
  const totalWithShipping = totalPrice + shippingCost;

  const onClickOrder = async () => {
    // Если форма видима - не отправляем заказ
    // if (isFormVisible) return;
    // заказ создан
    setIsOrderComplete(true);
    // очищаем массив корзины
    setCartItems([]);
    // удаляем товары с сервера
    for (const product of cartItems) {
      await axios.delete(
        "https://65d386d8522627d501091517.mockapi.io/cart/" + product.id
      );
    }
  };

  // Обработчик закрытия корзины.
  const closeCartHandler = () => {
    setIsOverlayOpen(false);
    isOpen(false);
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
                      width={90}
                      height={90}
                      className={styles.cart__item_img}
                    />
                    <div className={styles.cart__item_descr}>
                      <p className={styles.cart__item_title}>{product.name}</p>
                      <p className={styles.cart__item_price}>
                        {parseInt(product.price, 10)} ₽
                      </p>
                      <div className={styles.cart__counter}>
                        <button
                          onClick={() => handleDecrement(product.id)}
                          disabled={(itemCounts[product.id] || 1) === 1}
                          className={styles.counter_button}
                        >
                          -
                        </button>
                        {itemCounts[product.id] > 0 && (
                          <span className={styles.counter_value}>
                            {itemCounts[product.id]}
                          </span>
                        )}
                        <button
                          onClick={() => handleIncrement(product.id)}
                          disabled={(itemCounts[product.id] || 0) > 10}
                          className={styles.counter_button}
                        >
                          +
                        </button>
                      </div>
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
                    <b>{shippingCost} ₽</b>
                  </li>
                </ul>
                <ul>
                  <li className={styles.cart__item__total_price}>
                    <span>Итого:</span>
                    <div className={styles.cart__total_ellipsis}></div>
                    <b>{totalWithShipping} ₽</b>
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
