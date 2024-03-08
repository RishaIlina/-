import styles from "../StagesOfCreation/StagesOfCreation.module.css";
import Image from "next/image";

/**
 * Блок Этапы создания свечей с главной страницы
 */
export default function StagesOfCreation(props) {
  const { name, imgSrc, text } = props.details;

  return (
    <>
      <ul>
        <li className={` ${styles.steps__item} ${styles.steps__item__odd} `}>
          <p className={styles.steps__item_text}>{text}</p>
          <Image
            src={imgSrc}
            alt={name}
            width={160}
            height={220}
            className={styles.steps__item_img}
          />
        </li>
      </ul>
    </>
  );
}
