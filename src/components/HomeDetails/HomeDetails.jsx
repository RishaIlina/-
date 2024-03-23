import styles from "../HomeDetails/HomeDetails.module.css";
import Image from "next/image";
import StagesOfCreation from "../StagesOfCreation/StagesOfCreation";

/**
 * Главная страница.
 */
export default function HomeDetails() {
  // данные об этапах изготовления свечей
  const initialStages = [
    {
      id: "1",
      text: "Подготовка материалов: воск, фитиль, красители, ароматические масла, формы для свечей и множество творческого вдохновения",
      name: "Подготовка материалов",
      imgSrc: "/image/s1.jpg",
    },
    {
      id: "2",
      text: "Подготовка формы: выбор формы для свечи и подготовка ее к наполнению воском",
      name: "Подготовка формы",
      imgSrc: "/image/s2.jpg",
    },
    {
      id: "3",
      text: "Приготовление воска: расплавление соевого воска в плавильном устройстве до нужной температуры",
      name: "Приготовление воска",
      imgSrc: "/image/s3.jpg",
    },
    {
      id: "4",
      text: "Добавление красителей и ароматизаторов: для придания свечам уникального вида и аромата, добавляем красители и ароматические масла в расплавленный воск и тщательно перемешиваем",
      name: "Добавление красителей и ароматизаторов",
      imgSrc: "/image/s4.jpg",
    },
    {
      id: "5",
      text: "Заливка в форму: когда воск готов, необходимо налить его в подготовленные формы для свечей. Фитиль распологаем в центре формы и фиксируем так, чтобы он не смещался при заливке",
      name: "Заливка в форму",
      imgSrc: "/image/s5.jpg",
    },
    {
      id: "6",
      text: "После наполнения формы, нужно оставить свечи остывать и застывать",
      name: "Застывание свечей",
      imgSrc: "/image/s6.jpg",
    },
    {
      id: "7",
      text: "Обрезка фитиля и украшение: после застывания свечи, обрезаем фитиль до желаемой длины",
      name: "Обрезка фитиля",
      imgSrc: "/image/s7.jpg",
    },
    {
      id: "8",
      text: "Подарите свечи своим близким: и, наконец, самый приятный этап - подарите свои создания своим близким. Свечи, сделанные с любовью, принесут им тепло и радость",
      name: "Подарите свечи своим близким",
      imgSrc: "/image/s8.jpg",
    },
  ];

  // итерация по данным и отрисовка этапов изготовления свечей
  const StagessList =
    initialStages.length > 0 &&
    initialStages.map((stage) => (
      <StagesOfCreation key={stage?.id} details={stage} />
    ));
  return (
    <>
      <main className={styles.main}>
        <section className={styles.top}>
          <div className={`container ${styles.top__inner}`}>
            <div className={styles.top__content}>
              <h3 className={styles.top__title}>
                Создайте атмосферу уюта и гармонии!
              </h3>
              <p className={styles.top__text}>
                Создайте особую атмосферу в своем доме с нашей экологически
                чистой и качественной продукцией из 100% натурального соевого
                воска.
              </p>
              <button className={styles.top__btn}>К покупкам!</button>
              <picture className={styles.top__img}>
                <source
                  srcSet="image/top-s.png"
                  media="(max-width: 360px)"
                  alt="ассортимент свечей"
                />
                <source
                  srcSet="image/top-m.png"
                  media="(max-width: 480px)"
                  alt="ассортимент свечей"
                />
                <Image
                  width={1073}
                  height={693}
                  className="top__img-l"
                  src="/image/top-l.png"
                  alt="ассортимент свечей"
                />
              </picture>
            </div>
          </div>
        </section>
      </main>

      <section className={` ${styles.steps} pt_150 pb_150 `}>
        <div className="container section__inner">
          <div className={` ${styles.steps__descr} section__descr `}>
            <h2 className={` ${styles.steps__title} title `}>
              Этапы <br /> создания свечей
            </h2>
            <p className={` ${styles.steps__text} section__text `}>
              Создание свечи из соевого воска <br /> cостоит из следующих
              этапов:
            </p>
          </div>
          <ol
            className={` ${styles.steps__list} section__content_descr section__decor `}
          >
            {StagessList}
          </ol>
        </div>
      </section>
    </>
  );
}
