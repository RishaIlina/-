import React from "react";
import styles from "../styles/Reviews.module.css";
import FeedbackSlider from "../components/FeedbackSlider/FeedbackSlider";

/**
 * Страница с отзывами
 */
export default function Reviews() {

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
           <FeedbackSlider />
          </div>
        </div>
      </div>
    </section>
  );
}