import Head from "next/head";
import styles from "../styles/Home.module.css"
import Image from "next/image";
import Button from "../components/ui/Botton/Button";

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
              Купить
            </button>
            <picture className={styles.top__img}>
              <source srcset="images/top-s.png" media="(max-width: 360px)" alt="ассортимент свечей" />
              <source srcset="images/top-m.png" media="(max-width: 480px)" alt="ассортимент свечей" />
              <Image width={1073} height={693} className="top__img-l" src="/top-l.png" alt="ассортимент свечей" />
            </picture>
          </div>
        </div>
      </section>
    </main>

    <section className={`${styles.products} pb_150`}>
      <div className={`container ${styles.section__inner}`}>
        <div className={`${styles.products__descr} ${styles.section__descr}`}>
          <h2 className={`${styles.products__title} title`}>Наши продукты</h2>
          <p className={`${styles.products__text} ${styles.section__text}`}>Мы используем только лучшие качественные материалы: соевый воск,
            восковые красители, высококачественные ароматические масла и хлопковые фитильцы. Оттенки свечей очень
            гармонично сочетаются с ароматом, создавая незабываемую атмосферу в вашем доме.
          </p>
        </div>
        <div className={`${styles.products__content} ${styles.section__content_descr} ${styles.section__decor}`}>
          <div className={styles.products__item}>
            <Image width={274} height={310} src="/product-1.jpg" alt="Свеча" className={styles.products__item_img} />
            <p className={styles.products__item_price}>650₽</p>
            <h4 className={styles.products__item_title}>"Пион"</h4>
            <p className={styles.products__item_text}>Запах: нежный аромат розы и ванили.
              Для чего: для атмосферы романтического настроения.
            </p>
            <Button>Купить</Button>
          </div>
          <div className={styles.products__item}>
            <Image width={274} height={310} src="/product-2.jpg" alt="Свеча" className={styles.products__item_img} />
            <p className={styles.products__item_price}>820₽</p>
            <h4 className={styles.products__item_title}>"Ранункулюс"</h4>
            <p className={styles.products__item_text}>Запах: нежный аромат лаванды.
              Для чего: для создания атмосферы уюта и спокойствия.
            </p>
            <Button>Купить</Button>
          </div>
          <div className={styles.products__item}>
            <Image width={274} height={310} src="/product-3.jpg" alt="Свеча" className={styles.products__item_img} />
            <p className={styles.products__item_price}>700₽</p>
            <h4 className={styles.products__item_title}>"Вихрь любви"</h4>
            <p className={styles.products__item_text}>Запах: свежий аромат лайма.
              Для чего: для энергии и свежести в помещении.
              </p>
            <Button>Купить</Button>
          </div>
          <div className={styles.products__item}>
            <Image width={274} height={310} src="/product-4.jpg" alt="Свеча" className={styles.products__item_img} />
            <p className={styles.products__item_price}>740₽</p>
            <h4 className={styles.products__item_title}>"Куб"</h4>
            <p className={styles.products__item_text}>Запах: нежный аромат лаванды и фрезий. Для чего: для уюта и комфорта.</p>
            <Button>Купить</Button>
          </div>
        </div>
      </div>
    </section>

  </>
);

export default Home;
