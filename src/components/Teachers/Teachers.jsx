import styles from "../Teachers/Teachers.module.css";
import Image from "next/image";

export default function Teachers(props) {
  const { name, experience, imgSrc } = props.details;
  return (
    <div className={styles.team__item}>
      <Image
        className={styles.team__img}
        src={imgSrc}
        width={224}
        height={220}
        alt={name}
      />
      <div className={styles.team__item_box}>
        <p className={styles.team__item_name}>{name}</p>
        <p className={styles.team__item_descr}>{experience}</p>
      </div>
    </div>
  );
}
