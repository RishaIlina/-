import styles from "../styles/catalog.module.css"
import Button from "../components/ui/Botton/Button";
import Image from "next/image";

export default function catalog() {
  return (
    <section className={`products pb_150 pt_150`}>
        <div className={`container ${styles.products_inner}`}>
            
                <div className={` products__item ${styles.products__item_card} `}>
                    <Image width={174} height={210} src="/image/product-1.jpg" alt="Свеча" className="products__item_img" />
                    <h4 className={styles.products__item_title}>"Пион"</h4>
                    <p className={styles.products__item_price}>650₽</p>
                    <Button>Купить</Button>
                </div>
                <div className={` products__item ${styles.products__item_card} `}>
                    <Image width={174} height={210} src="/image/product-2.jpg" alt="Свеча" className="products__item_img" />
                    <h4 className={styles.products__item_title}>"Ранункулюс"</h4>
                    <p className={styles.products__item_price}>820₽</p>
                    <Button>Купить</Button>
                </div>
                <div className={` products__item ${styles.products__item_card} `}>
                    <Image width={174} height={210} src="/image/product-3.jpg" alt="Свеча" className="products__item_img" />
                    <h4 className={styles.products__item_title}>"Вихрь любви"</h4>
                    <p className={styles.products__item_price}>700₽</p>
                    <Button>Купить</Button>
                </div>
                <div className={` products__item ${styles.products__item_card} `}>
                    <Image width={174} height={210} src="/image/product-4.jpg" alt="Свеча" className="products__item_img" />
                    <h4 className={styles.products__item_title}>"Куб"</h4>
                    <p className={styles.products__item_price}>740₽</p>
                    <Button>Купить</Button>
                </div>
            
        </div>
  </section>
  )
}
