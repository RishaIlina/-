import { useState, useEffect } from "react";
import styles from "../FeedbackSlider/FeedbackSlider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


/**
 * Слайдер для страницы с Отзывами
 */
export default function FeedbackSlider({ feedbackData }) {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 5000);

    return () => clearTimeout(sliderTimer);
  }, [swiper]);


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Pagination, Navigation]}
      onSwiper={setSwiper}
      className={styles.main__swiper}
    >
      {feedbackData.map((feedback) => (
        <SwiperSlide key={feedback.id}>
          <div className={styles.feedback__slider}>
            <div className={styles.feedback__item}>
              <div className={styles.feedback__item_image}>
                <Image
                  width={380}
                  height={370}
                  src={feedback.imgSrc}
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
                <p className={styles.feedback__item_name}>{feedback.name}</p>
                <p className={styles.feedback__item_text}>{feedback.text}</p>
                <button className={` button ${styles.feedback__item_btn} `}>
                  Купить этот товар
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
