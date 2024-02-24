import styles from "../styles/Courses.module.css";
import Teachers from "../components/Teachers/Teachers";
import CardCourses from "../components/CardCourses/CardCourses";


export default function Courses() {
  // данные преподавателей
  const initialTeachers = [
    {
      id: "1",
      name: "Преподаватель Богдан",
      experience: "Имеет опыт преподавания и работы 4 года",
      imgSrc: "/image/team-1.jpg",
    },
    {
      id: "2",
      name: "Преподаватель Анна",
      experience: "Имеет опыт преподавания и работы 6 лет",
      imgSrc: "/image/team-2.jpg",
    },
    {
      id: "3",
      name: "Преподаватель Галина",
      experience: "Обучает сфере дизайна и декорирования",
      imgSrc: "/image/team-3.jpg",
    },
    {
      id: "4",
      name: "Маркетолог Ольга",
      experience: "Имеет опыт преподавания и работы 4 года",
      imgSrc: "/image/team-4.jpg",
    },
  ];

  // итерация по данным и отрисовка преподавателей
  const renderData =
    initialTeachers.length > 0 &&
    initialTeachers.map((teacher) => (
      <Teachers key={teacher?.id} details={teacher} />
    ));

  // данные карточки с курсами
  const initialCardCourses = [
    {
      id: "1",
      name: "Основы изготовления свечек",
      time: "24 год",
      price: "4000₽",
      text: "Будем обучать основам изготовления свечей из разных материалов.",
      imgSrc: "/image/course-1.jpg",
    },
    {
      id: "2",
      name: "Искусство ароматерапии",
      time: "24 год",
      price: "4000₽",
      text: "Будем изучать искусство ароматерапии и изготовления свечей с разными ароматами.",
      imgSrc: "/image/course-2.jpg",
    },
  ];

  // итерация по данным и отрисовка карточек с курсами
  const renderItems =
    initialCardCourses.length > 0 &&
    initialCardCourses.map((course) => (
      <CardCourses key={course?.id} details={course} />
    ));

  return (
    <>
      <section className={` ${styles.courses} pb_150 pt_150`}>
        <div className={` container section__inner`}>
          <div className="section__descr">
            <h2 className="title">Наши курсы</h2>
            <p className="section__text">
              Наши курсы позволяют сделать первый шаг в новой карьере или
              углубить знания в своей области, развиваться как профессионал, а
              также улучшить качество своей жизни.
            </p>
          </div>

          <div
            className={` ${styles.courses__content} products__content section__content_descr section__decor `}
          >
              {renderItems}
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={` container section__inner `}>
          <div className="section__descr">
            <h2 className={` title ${styles.team__title} `}>Наши учителя</h2>
            <p className="section__text">
              Эти люди работают вместе, чтобы создавать <br /> для вас курсы,
              которые помогут вам начать свой собственный бизнес или хобби.
            </p>
          </div>

          <div className={` ${styles.team__content} section__content_descr `}>
            {renderData}
          </div>
        </div>
      </section>
    </>
  );
}
