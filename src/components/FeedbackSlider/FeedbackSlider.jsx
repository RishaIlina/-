import { useState, useEffect } from "react";
import styles from "../FeedbackSlider/FeedbackSlider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/router";


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

  const router = useRouter();


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
      style={{
        "--swiper-pagination-color": "#BEA495",
        "--swiper-pagination-bullet-inactive-color": "#7B6152",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-width": "53px",
        "--swiper-pagination-bullet-height": "4px",
        "--swiper-pagination-bullet-border-radius": "0px",
      }}
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
                <a href="https://www.instagram.com/" className={styles.feedback__item_sociallink}>
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
                <button  onClick = {() => router.push("/Catalog")} className={` button ${styles.feedback__item_btn} `}>
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
