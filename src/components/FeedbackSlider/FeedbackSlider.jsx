import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../FeedbackSlider/FeedbackSlider.module.css";
import Image from "next/image";

/**
 * Слайдер для страницы с Отзывами
 */
export default function FeedbackSlider(props) {
    const { name, text, imgSrc } = props.details;

  return (
    <>

          <div className={styles.feedback__item}>
            <div className={styles.feedback__item_image}>
              <Image
                width={380}
                height={370}
                src={imgSrc}
                alt="Отзыв"
              />
            </div>
            <div className={styles.feedback__item_content}>
              <a href="#" className={styles.feedback__item_sociallink}>
                <Image
                  width={22}
                  height={22}
                  src="/image/instagram-logo.svg"
                  target="_blank"
                  alt="инстаграм"
                />
              </a>
              <p className={styles.feedback__item_name}>{name}</p>
              <p className={styles.feedback__item_text}>
              {text}
              </p>
              <button className={` button ${styles.feedback__item_btn} `}>
                Купить этот товар
              </button>
            </div>
          </div>
    </>
  );
}
