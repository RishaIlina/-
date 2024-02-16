import styles from "../Card/Card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={` products__item ${styles.products__item_card} `}>
          <Image
            width={174}
            height={210}
            src="/image/product-1.jpg"
            alt="Свеча"
            className={styles.products__item_img}
          />
          <div className={styles.products__item_top}>
            <p>Свеча "Пион"</p>
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
              <p className={styles.products__item_price}>650₽</p>
            </div>
            <button className={` btn_icon ${styles.btn_icon_add} `}>
              <Image
                width={11}
                height={11}
                src="/image/plus.svg"
                alt="Добавить"
              />
            </button>
          </div>
        </div>
  )
}
