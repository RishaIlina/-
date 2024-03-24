import styles from "./CartInfo.module.css"
import Image from "next/image";

export default function CartInfo( {imgSrc, text, description, closeCartHandler} ) {
  return (
    <div className={styles.cart__empty}>
      <Image
        width={100}
        height={110}
        src={imgSrc}
        alt="Корзина"
      />
      <h2 className={styles.cart__empty_text}>{text}</h2>
      <p className={styles.cart__empty_description}>
       {description}
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
