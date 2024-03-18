import React from "react";
import styles from "../styles/Reviews.module.css";
import FeedbackSlider from "../components/FeedbackSlider/FeedbackSlider";

/**
 * Страница с отзывами
 */
export default function Reviews() {
  // данные слайда с отзывами
  const initialFeedback = [
    {
      id: "1",
      imgSrc: "/image/feedback_2.jpg",
      name: "Борис Ильин",
      text: "Я заказал свечу на День Святого Валентина для моей девушки и она была просто невероятна! Запах был очень приятным и романтичным. Моя девушка была очень довольна подарком, и я обязательно закажу ещё!",
    },
    // {
    //   id: "2",
    //   imgSrc: "/image/feedback_1.jpg",
    //   name: "Борис Ильин",
    //   text: "Я заказал свечу на День Святого Валентина для моей девушки и она была просто невероятна! Запах был очень приятным и романтичным. Моя девушка была очень довольна подарком, и я обязательно закажу ещё!",
    //   text_btn: "Купить этот товар",
    // },
    // {
    //   id: "3",
    //   imgSrc: "/image/feedback_3.jpg",
    //   name: "Борис Ильин",
    //   text: "Я заказал свечу на День Святого Валентина для моей девушки и она была просто невероятна! Запах был очень приятным и романтичным. Моя девушка была очень довольна подарком, и я обязательно закажу ещё!",
    //   text_btn: "Купить этот товар",
    // },
    // {
    //   id: "4",
    //   imgSrc: "/image/feedback_4.jpg",
    //   name: "Борис Ильин",
    //   text: "Я заказал свечу на День Святого Валентина для моей девушки и она была просто невероятна! Запах был очень приятным и романтичным. Моя девушка была очень довольна подарком, и я обязательно закажу ещё!",
    //   text_btn: "Купить этот товар",
    // },
  ];

  // итерация по данным и отрисовка карточек с курсами
  const feedbackList =
    initialFeedback.length > 0 &&
    initialFeedback.map((feedback) => (
      <FeedbackSlider key={feedback?.id} details={feedback} />
    ));

  return (
    <section className={` ${styles.feedback} section pt_150`}>
      <div className="container">
        <div className={` ${styles.feedback__inner} section__inner `}>
          <div className={` ${styles.feedback__descr} section__descr `}>
            <h2 className="title">Отзывы от клиентов</h2>
            <p className="section__text">
              Наши покупатели имеют разный возраст, статус, занятия и интересы,
              но у них есть одна общая черта - они стремятся к гармонии и
              находят радость в маленьких радостях жизни, которые создают
              атмосферу уюта и гармонии в их доме.
            </p>
          </div>

          <div className={` ${styles.feedback__content} section__decor `}>
            <div className={styles.feedback__slider}></div>
            {feedbackList}
          </div>
        </div>
      </div>
    </section>
  );
}
