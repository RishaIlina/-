import styles from "../StagesOfCreation/StagesOfCreation.module.css";
import Image from "next/image";

export default function StagesOfCreation(props) {
    const { name, imgSrc, text } = props.details;

  return (
    <>
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
    </>
  );
}
