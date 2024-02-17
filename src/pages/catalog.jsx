import Card from "../components/Card/Card";
import Drawer from "../components/Drawer/Drawer";
import styles from "../styles/catalog.module.css";
import Image from "next/image";

export default function catalog() {
  return (
    <section className="products">
      <Drawer />

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

      <div className={`container products_inner`}>
        <Card />
      </div>
    </section>
  );
}
