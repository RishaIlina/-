import styles from "../styles/Courses.module.css"
import Image from "next/image";
import Button from "../components/ui/Botton/Button";

export default function courses() {
  return (
    <>
    <section className={` ${styles.courses} pb_150 pt_150`}>
        <div className={` container section__inner` }>
            <div className="section__descr">
                <h2 className="title">Наши курсы</h2>
                <p className="section__text">Наши курсы позволяют сделать первый шаг в новой карьере или углубить знания в своей
                области, развиваться
                как профессионал, а также улучшить качество своей жизни.
                </p>
            </div>

            <div className={` ${styles.courses__content} products__content section__content_descr section__decor `}>
                <div className={` ${styles.courses__item} products__item `}>
                <div className={styles.courses__item_img}>
                    <Image className="products__item_img" src="/course-1.jpg" width={274} height={310} alt="Основы изготовления свечек" />
                    <p className={styles.courses__title}>Основы изготовления свечек</p>
                    <p className={styles.courses__time}>Обучение <span> - 24 год</span></p>
                    <p className={styles.courses__priсe}>Цена 4000₽</p>
                </div>
                <h3 className={` ${styles.courses__item_title} products__item_title `}>Основы изготовления свечек</h3>
                <p className={` ${styles.courses__item_text} products__item_text `}>
                    Будем обучать основам изготовления свечей из разных материалов.
                </p>
                <Button>Купить курс</Button>
                </div>
        
                <div className={` ${styles.courses__item} products__item `}>
                <div className={styles.courses__item_img}>
                    <Image className="products__item_img" src="/course-2.jpg" width={274} height={310} alt="Искусство ароматерапии" />
                    <p className={styles.courses__title}>Искусство ароматерапии</p>
                    <p className={styles.courses__time}>Обучение <span> - 24 год</span></p>
                    <p className={styles.courses__priсe}>Цена 4000₽</p>
                </div>
                <h3 className={` ${styles.courses__item_title} products__item_title `}>Искусство ароматерапии</h3>
                <p className={` ${styles.courses__item_text} products__item_text `}>Будем изучать искусство ароматерапии и изготовления
                    свечей с разными
                    ароматами.
                </p>
                <Button>Купить курс</Button>
                </div>
            </div>
        </div>
    </section>

    <section className={` ${styles.steps} pb-150 `}>
        <div className="container section__inner">
            <div className={` ${styles.steps__descr} section__descr `}>
                <h2 className={` ${styles.steps__title} title `}>Этапы <br /> создания <br /> свечей</h2>
                <p className={` ${styles.steps__text} section__text `}>Создание свечи из соевого воска <br /> cостоит из следующих этапов:</p>
            </div>
            <ol className={` ${styles.steps__list} section__content_descr section__decor `}>
                <li className={` ${styles.steps__item} ${styles.steps__item__odd} `}>
                <p className={styles.steps__item_text}>Подготовка материалов: воск, фитиль, красители, ароматические масла, формы для
                    свечей и множество творческого вдохновения.</p>
                <Image src="/s1.jpg" alt="Процесс приготовления свечи" width={160} height={220} className={styles.steps__item_img} />
                </li>
                <li className={` ${styles.steps__item} ${styles.steps__item__odd} `}>
                <p className={styles.steps__item_text}>Подготовка формы: выбор формы для свечи и подготовка ее к наполнению
                    воском.</p>
                <Image src="/s2.jpg" alt="Подготовка формы" width={160} height={220} className={styles.steps__item_img} />
                </li>
                <li className={` ${styles.steps__item} ${styles.steps__item__even} `}>
                <Image src="/s3.jpg" alt="Приготовление воска" width={160} height={220} className={styles.steps__item_img} />
                <p className={styles.steps__item_text}>Приготовление воска: расплавление соевого воска в плавильном устройстве до
                    нужной температуры. </p>
                </li>
                <li className={` ${styles.steps__item} ${styles.steps__item__even} `}>
                <Image src="/s4.jpg" alt="Добавление красителей"  width={160} height={220} className={styles.steps__item_img} />
                <p className={styles.steps__item_text}>Добавление красителей и ароматизаторов: для придания свечам уникального вида и
                    аромата, добавляем красители и ароматические масла в расплавленный воск и тщательно перемешиваем.</p>
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
                    длины.</p>
                </li>
                <li className={` ${styles.steps__item} ${styles.steps__item__even} `}>
                <Image src="/s8.jpg" alt="Подарок"  width={160} height={220} className={styles.steps__item_img} />
                <p className={styles.steps__item_text}>Подарите свечи своим близким: и, наконец, самый приятный этап - подарите свои
                    создания своим близким. Свечи, сделанные с любовью, принесут им тепло и радость.</p>
                </li>
            </ol>
        </div>
  </section>

    </>
  )
}
