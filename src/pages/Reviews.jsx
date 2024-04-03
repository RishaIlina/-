import styles from "../styles/Reviews.module.css";
import FeedbackSlider from "../components/FeedbackSlider/FeedbackSlider";
import CustomAccordion from "../components/CustomAccordion/CustomAccordion";
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
    {
      id: "2",
      imgSrc: "/image/feedback_1.jpg",
      name: "Наталья Вятчина",
      text: "Мне очень понравились свечи из данного магазина. Они прекрасно держат форму и не дымят. Очень довольна покупкой!",
    },
    {
      id: "3",
      imgSrc: "/image/feedback_3.jpg",
      name: "Елена Ершова",
      text: "Свечи из этого магазина — просто находка! У них потрясающие ароматы, которые создают уют и комфорт в доме",
    },
    {
      id: "4",
      imgSrc: "/image/feedback_4.jpg",
      name: "Влад Моисеев",
      text: "Купил подарочный набор свечей для своей мамы на День Рождения. Она была в восторге! Отличное качество и красивая упаковка. Спасибо!",
    },
  ];

  return (
    <>
      <section className={` ${styles.feedback} section pt_150 pb_150 `}>
        <div className="container">
          <div className={` ${styles.feedback__inner} section__inner `}>
            <div className={` ${styles.feedback__descr} section__descr `}>
              <h2 className="title">Отзывы от клиентов</h2>
              <p className="section__text">
                Наши покупатели имеют разный возраст, статус, занятия и
                интересы, но у них есть одна общая черта - они стремятся к
                гармонии и находят радость в маленьких радостях жизни, которые
                создают атмосферу уюта и гармонии в их доме.
              </p>
            </div>

            <div className={` ${styles.feedback__content} section__decor `}>
              <FeedbackSlider feedbackData={initialFeedback} />
            </div>
          </div>
        </div>
      </section>

      <section className={` ${styles.questions} section `}>
        <div className="container">
          <div className="section__inner">
            <div className={` ${styles.questions__descr} section__descr `}>
              <h2 className="title">Часто задаваемые вопросы</h2>
            </div>
            <div className={styles.questions__content}>
              <CustomAccordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
