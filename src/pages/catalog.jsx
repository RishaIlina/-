import styles from "../styles/catalog.module.css"
import Button from "../components/ui/Botton/Button";
import Image from "next/image";

export default function catalog() {
  return (
    <section className={`products pb_150 pt_150`}>
        <div className={`container section__inner`}>
            <div className={`${styles.products__descr} section__descr`}>
                <h2 className={`${styles.products__title} title`}>Наши продукты</h2>
                <p className={`${styles.products__text} section__text`}>Мы используем только лучшие качественные материалы: соевый воск,
                восковые красители, высококачественные ароматические масла и хлопковые фитильцы. Оттенки свечей очень
                гармонично сочетаются с ароматом, создавая незабываемую атмосферу в вашем доме.
                </p>
            </div>
            <div className={`products__content section__content_descr `}>
                <div className="products__item">
                    <Image width={274} height={310} src="/product-1.jpg" alt="Свеча" className="products__item_img" />
                    <p className="products__item_price">650₽</p>
                    <h4 className="products__item_title">"Пион"</h4>
                    <p className="products__item_text">Запах: нежный аромат розы и ванили.
                        Для чего: для атмосферы романтического настроения.
                    </p>
                    <Button>Купить</Button>
                </div>
                <div className="products__item">
                    <Image width={274} height={310} src="/product-2.jpg" alt="Свеча" className="products__item_img" />
                    <p className="products__item_price">820₽</p>
                    <h4 className="products__item_title">"Ранункулюс"</h4>
                    <p className="products__item_text">Запах: нежный аромат лаванды.
                        Для чего: для создания атмосферы уюта и спокойствия.
                    </p>
                    <Button>Купить</Button>
                </div>
                <div className="products__item">
                    <Image width={274} height={310} src="/product-3.jpg" alt="Свеча" className="products__item_img" />
                    <p className="products__item_price">700₽</p>
                    <h4 className="products__item_title">"Вихрь любви"</h4>
                    <p className="products__item_text">Запах: свежий аромат лайма.
                        Для чего: для энергии и свежести в помещении.
                    </p>
                    <Button>Купить</Button>
                </div>
                <div className="products__item">
                    <Image width={274} height={310} src="/product-4.jpg" alt="Свеча" className="products__item_img" />
                    <p className="products__item_price">740₽</p>
                    <h4 className="products__item_title">"Куб"</h4>
                    <p className="products__item_text">Запах: нежный аромат лаванды и фрезий. Для чего: для уюта и комфорта.</p>
                    <Button>Купить</Button>
                </div>
            </div>
        </div>
  </section>
  )
}
