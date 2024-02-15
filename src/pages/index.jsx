import Head from "next/head";
import styles from "../styles/Home.module.css"
import Image from "next/image";

/* Домашнаяя страница */
const Home = () => (
  <>
    <Head>
      <title>My first template</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <section className={styles.top}>
        <div className={`container ${styles.top__inner}`}>
          <div className={styles.top__content}>
            <h3 className={styles.top__title}>
              Создайте атмосферу уюта и гармонии!
            </h3>
            <p className={styles.top__text}>
              Создайте особую атмосферу в своем доме с нашей экологически чистой и качественной продукцией из 100%
              натурального соевого воска.
            </p>
            <button className={styles.top__btn}>
              К покупкам!
            </button>
            <picture className={styles.top__img}>
              <source srcSet="image/top-s.png" media="(max-width: 360px)" alt="ассортимент свечей" />
              <source srcSet="image/top-m.png" media="(max-width: 480px)" alt="ассортимент свечей" />
              <Image width={1073} height={693} className="top__img-l" src="/top-l.png" alt="ассортимент свечей" />
            </picture>
          </div>
        </div>
      </section>
    </main>

    <section className={` ${styles.steps} pt_150 pb_150 `}>
      <div className="container section__inner">
        <div className={` ${styles.steps__descr} section__descr `}>
          <h2 className={` ${styles.steps__title} title `}>Этапы <br /> создания свечей</h2>
          <p className={` ${styles.steps__text} section__text `}>Создание свечи из соевого воска <br /> cостоит из следующих этапов:</p>
        </div>
        <ol className={` ${styles.steps__list} section__content_descr section__decor `}>
          <li className={` ${styles.steps__item} ${styles.steps__item__odd} `}>
            <p className={styles.steps__item_text}>Подготовка материалов: воск, фитиль, красители, ароматические масла, формы для
              свечей и множество творческого вдохновения/
            </p>
            <Image src="/s1.jpg" alt="Процесс приготовления свечи" width={160} height={220} className={styles.steps__item_img} />
          </li>
          <li className={` ${styles.steps__item} ${styles.steps__item__odd} `}>
            <p className={styles.steps__item_text}>Подготовка формы: выбор формы для свечи и подготовка ее к наполнению
              воском/
            </p>
            <Image src="/s2.jpg" alt="Подготовка формы" width={160} height={220} className={styles.steps__item_img} />
          </li>
          <li className={` ${styles.steps__item} ${styles.steps__item__even} `}>
            <Image src="/s3.jpg" alt="Приготовление воска" width={160} height={220} className={styles.steps__item_img} />
            <p className={styles.steps__item_text}>Приготовление воска: расплавление соевого воска в плавильном устройстве до
              нужной температуры.
            </p>
          </li>
          <li className={` ${styles.steps__item} ${styles.steps__item__even} `}>
            <Image src="/s4.jpg" alt="Добавление красителей"  width={160} height={220} className={styles.steps__item_img} />
            <p className={styles.steps__item_text}>Добавление красителей и ароматизаторов: для придания свечам уникального вида и
              аромата, добавляем красители и ароматические масла в расплавленный воск и тщательно перемешиваем.
            </p>
          </li>
          <li className={` ${styles.steps__item} ${styles.steps__item__odd} `}>
            <p className={styles.steps__item_text}>Заливка в форму: когда воск готов, необходимо налить его в подготовленные формы
              для свечей. Фитиль распологаем в центре формы и фиксируем так, чтобы он не смещался при заливке.
            </p>
            <Image src="/s5.jpg" alt="Процесс приготовления свечи" width={160} height={220} className={styles.steps__item_img} />
          </li>
          <li className={` ${styles.steps__item} ${styles.steps__item__odd} `}>
            <p className={styles.steps__item_text}>После наполнения формы, нужно оставить свечи остывать и застывать.</p>
            <Image src="/s6.jpg" alt="Свеча" width={160} height={220} className={styles.steps__item_img} />
          </li>
          <li className={` ${styles.steps__item} ${styles.steps__item__even} `}>
            <Image src="/s7.jpg" alt="Обрезка фитиля"  width={160} height={220} className={styles.steps__item_img} />
            <p className="steps__item-text">Обрезка фитиля и украшение: после застывания свечи, обрезаем фитиль до желаемой
              длины.
            </p>
          </li>
          <li className={` ${styles.steps__item} ${styles.steps__item__even} `}>
            <Image src="/s8.jpg" alt="Подарок"  width={160} height={220} className={styles.steps__item_img} />
            <p className={styles.steps__item_text}>Подарите свечи своим близким: и, наконец, самый приятный этап - подарите свои
              создания своим близким. Свечи, сделанные с любовью, принесут им тепло и радость.
            </p>
          </li>
        </ol>
      </div>
    </section>

  </>
);

export default Home;
