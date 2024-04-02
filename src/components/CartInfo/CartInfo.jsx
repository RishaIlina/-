import styles from "./CartInfo.module.css"
import Image from "next/image";

/**
 * Если корзина пустая, показывается этот компонент
 */
export default function CartInfo( { closeCartHandler } ) {
  return (
    <div className={styles.cart__empty}>
      <Image
        width={100}
        height={110}
        src="/image/empty-cart.jpg"
        alt="Корзина"
      />
      <h2 className={styles.cart__empty_text}>Корзина пустая</h2>
      <p className={styles.cart__empty_description}>
      Добавьте хотя бы один товар, чтобы сделать заказ
      </p>
      <button
        className={` button ${styles.cart__total_btn} ${styles.cart__empty_btn} `}
        onClick={() => closeCartHandler()}
      >
        <Image
          className={styles.cart__empty_arrow}
          width={16}
          height={14}
          src="/image/arrow.svg"
          alt="стрелка"
        />
        Вернуться назад
      </button>
    </div>
  );
}
