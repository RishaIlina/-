import styles from "../Drawer/Drawer.module.css";
import Image from "next/image";

export default function Drawer() {
  return (
    <div className={styles.products__overlay}>
        <div className={styles.products__drawer}>
          <h2 className={styles.products__drawer_title}>
            Корзина
            <Image
              src="/image/btn-remove.svg"
              alt="Кнопка закрытия корзины"
              width={31}
              height={31}
              className={styles.cart__item_close}
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
        </div>
      </div>
  )
}
