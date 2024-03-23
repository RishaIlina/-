import styles from "../FeedbackSlider/FeedbackSlider.module.css";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import { EffectCoverFlow, Pagination } from "swiper";

/**
 * Слайдер для страницы с Отзывами
 */
export default function FeedbackSlider() {
  // данные слайда с отзывами
  const initialFeedback = [
    {
      id: "1",
      imgSrc: "/image/feedback_2.jpg",
      name: "Борис Ильин",
      text: "Я заказал свечу на День Святого Валентина для моей девушки и она была просто невероятна! Запах был очень приятным и романтичным. Моя девушка была очень довольна подарком, и я обязательно закажу ещё!",
    },
    {
      id: "2",
      imgSrc: "/image/feedback_1.jpg",
      name: "Анна Петрова",
      text: "Мне очень понравились свечи из данного магазина. Они прекрасно держат форму и не дымят. Очень довольна покупкой!",
    },
    {
      id: "3",
      imgSrc: "/image/feedback_3.jpg",
      name: "Борис Ильин",
      text: "Я заказал свечу на День Святого Валентина для моей девушки и она была просто невероятна! Запах был очень приятным и романтичным. Моя девушка была очень довольна подарком, и я обязательно закажу ещё!",
    },
    {
      id: "4",
      imgSrc: "/image/feedback_4.jpg",
      name: "Борис Ильин",
      text: "Я заказал свечу на День Святого Валентина для моей девушки и она была просто невероятна! Запах был очень приятным и романтичным. Моя девушка была очень довольна подарком, и я обязательно закажу ещё!",
    },
  ];

  return (
    <>
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        coverfloweffect={{
          rotate: 0,
          stretch: 0,
          rotate: 0,
          depth: 100,
          modifer: 2.5,
        }}
        pagination={{ el: ".swiper__pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper__button_next",
          prevEl: ".swiper__button_prev",
          clickable: true,
        }}
        modules={[EffectCoverFlow, Pagination, Navigation]}
        className={styles.swiper__container}
      > */}
        {/* <SwiperSlide> */}
          {initialFeedback.map((feedback) => (
            <div key={feedback?.id} className={styles.feedback__slider}>
              <div className={styles.feedback__item}>
                <div className={styles.feedback__item_image}>
                  <Image
                    width={380}
                    height={370}
                    src={feedback?.imgSrc}
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
                  <p className={styles.feedback__item_name}>{feedback?.name}</p>
                  <p className={styles.feedback__item_text}>
                  {feedback?.text}
                  </p>
                  <button className={` button ${styles.feedback__item_btn} `}>
                    Купить этот товар
                  </button>
                </div>
              </div>
            </div>
          ))}
        {/* </SwiperSlide>
        <div className={styles.slider__controler}>
          <div
            className={` ${styles.swiper__button_prev} ${styles.slider__arrow} `}
          >
            <ion-icon name={styles.arrow__back_outline}></ion-icon>
          </div>
          <div
            className={` ${styles.swiper__button_next} ${styles.slider__arrow} `}
          >
            <ion-icon name={styles.arrow__forward_outline}></ion-icon>
          </div>
          <div className={styles.swiper__pagination}></div>
        </div>
      </Swiper> */}
    </>
  );
}

