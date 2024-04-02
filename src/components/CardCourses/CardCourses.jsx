import styles from "../CardCourses/CardCourses.module.css";
import Image from "next/image";

/**
 * Компонент с курсами.
 */
export default function CardCourses(props) {
  const { name, time, imgSrc, price, text } = props.details;
  return (
    <>
      <div className={` ${styles.courses__item} products__item `}>
        <div className={styles.courses__item_img}>
          <Image
            className="products__item_img"
            src={imgSrc}
            width={274}
            height={310}
            alt={name}
          />
          <p className={styles.courses__title}>{name}</p>
          <p className={styles.courses__time}>
            Обучение <span> - {time}</span>
          </p>
          <p className={styles.courses__priсe}>Цена {price}</p>
        </div>
        <h3 className={` ${styles.courses__item_title} products__item_title `}>
          {name}
        </h3>
        <p className={` ${styles.courses__item_text} products__item_text `}>
          {text}
        </p>
        <button className={` button courses__btn animate-hover `} type="button">
          Купить курс
        </button>
      </div>
    </>
  );
}
