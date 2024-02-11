import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__inner}`}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <Image width={70} height={70} alt="logo" className={styles.logo__img} src="/logo-header.svg" />
          </a>
        </Link>
        <nav className={`${styles.menu} ${styles.header__menu}`}>
          <button className={styles.menu__btn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles.menu__list} ${styles.header__menu_list}`}>
            <li className={styles.menu__list_item}>
              <Link legacyBehavior href="/about">
                <a className={styles.menu__list_link}>Про нас</a>
              </Link>
            </li>
            <li className={styles.menu__list_item}>
              <Link legacyBehavior href="/catalog">
                <a className={styles.menu__list_link}>Каталог</a>
              </Link>
            </li>
            <li className={styles.menu__list_item}>
              <Link legacyBehavior href="/team">
                <a className={styles.menu__list_link}>Команда</a>
              </Link>
            </li>
            <li className={styles.menu__list_item}>
              <Link legacyBehavior href="/reviews">
                <a className={styles.menu__list_link}>Отзывы</a>
              </Link>
            </li>
            <li className={styles.menu__list_item}>
              <Link legacyBehavior href="/courses">
                <a className={styles.menu__list_link}>Курсы</a>
              </Link>
            </li>
            <li className={styles.menu__list_item}>
              <Link legacyBehavior href="/contact">
                <a className={styles.menu__list_link}>Контакты</a>
              </Link>
            </li>
          </ul>
        </nav>
        <a className={styles.phone} href="tel:+79648558585">+7 964 855 85 85</a>
      </div>
    </header>
  );
};

export default Header;
