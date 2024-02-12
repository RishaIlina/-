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
    </>
  )
}
