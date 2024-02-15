import styles from "../styles/catalog.module.css";
import Image from "next/image";

export default function catalog() {
  return (
    <section className="products">
      <div className={styles.products__search}>
        <div className={styles.search__block}>
          <Image
            className={styles.image__search}
            width={15}
            height={15}
            src="/image/search.svg"
            alt="Поиск"
          />
          <input className={styles.search__input} placeholder="Поиск..." />
        </div>
      </div>

      <div className={`container ${styles.products_inner}`}>
        <div className={` products__item ${styles.products__item_card} `}>
          <Image
            width={174}
            height={210}
            src="/image/product-1.jpg"
            alt="Свеча"
            className={styles.products__item_img}
          />
          <div className={styles.products__item_top}>
            <p>Свеча "Пион"</p>
            <div className={styles.favorite}>
              <Image
                width={17}
                height={17}
                src="/image/heart.svg"
                alt="Сердце не лайкнутое"
              />
            </div>
          </div>

          <div className={styles.products__item_bottom}>
            <div className={styles.products__item_info}>
              <span>Цена:</span>
              <p className={styles.products__item_price}>650₽</p>
            </div>
            <button className={` btn_icon ${styles.btn_icon_add} `}>
              <Image
                width={11}
                height={11}
                src="/image/plus.svg"
                alt="Добавить"
              />
            </button>
          </div>
        </div>
        <div className={` products__item ${styles.products__item_card} `}>
          <Image
            width={174}
            height={210}
            src="/image/product-2.jpg"
            alt="Свеча"
            className={styles.products__item_img}
          />

          <div className={styles.products__item_top}>
            <p>Свеча "Ранункулюс"</p>
            <div className={styles.favorite}>
              <Image
                width={17}
                height={17}
                src="/image/heart.svg"
                alt="Сердце не лайкнутое"
              />
            </div>
          </div>
          <div className={styles.products__item_bottom}>
            <div className={styles.products__item_info}>
              <span>Цена:</span>
              <p className={styles.products__item_price}>820₽</p>
            </div>
            <button className={` btn_icon ${styles.btn_icon_add} `}>
              <Image
                width={11}
                height={11}
                src="/image/plus.svg"
                alt="Добавить"
              />
            </button>
          </div>
        </div>
        <div className={` products__item ${styles.products__item_card} `}>
          <Image
            width={174}
            height={210}
            src="/image/product-3.jpg"
            alt="Свеча"
            className={styles.products__item_img}
          />
            <div className={styles.products__item_top}>
                <p>Свеча "Вихрь любви"</p>
                <div className={styles.favorite}>
                    <Image
                        width={17}
                        height={17}
                        src="/image/heart.svg"
                        alt="Сердце не лайкнутое"
                    />
                </div>
            </div>
          <div className={styles.products__item_bottom}>
            <div className={styles.products__item_info}>
              <span>Цена:</span>
              <p className={styles.products__item_price}>700₽</p>
            </div>
            <button className={` btn_icon ${styles.btn_icon_add} `}>
              <Image
                width={11}
                height={11}
                src="/image/plus.svg"
                alt="Добавить"
              />
            </button>
          </div>
        </div>
        <div className={` products__item ${styles.products__item_card} `}>
          <Image
            width={174}
            height={210}
            src="/image/product-4.jpg"
            alt="Свеча"
            className={styles.products__item_img}
          />
          <div className={styles.products__item_top}>
            <p>Свеча "Куб"</p>
            <div className={styles.favorite}>
              <Image
                width={17}
                height={17}
                src="/image/heart.svg"
                alt="Сердце не лайкнутое"
              />
            </div>
          </div>
          <div className={styles.products__item_bottom}>
            <div className={styles.products__item_info}>
              <span>Цена:</span>
              <p className={styles.products__item_price}>740₽</p>
            </div>
            <button className={` btn_icon ${styles.btn_icon_add} `}>
              <Image
                width={11}
                height={11}
                src="/image/plus.svg"
                alt="Добавить"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
