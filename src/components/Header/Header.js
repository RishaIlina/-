import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__inner}`}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <Image width={70} height={70} alt="logo" className={styles.logo__img} src="image/logo-header.svg" />
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
          <ul className={` menu__list ${styles.header__menu_list}`}>
            <li className="menu__list_item">
              <Link legacyBehavior href="/about">
                <a className="menu__list_link">Про нас</a>
              </Link>
            </li>
            <li className="menu__list_item">
              <Link legacyBehavior href="/catalog">
                <a className="menu__list_link">Каталог</a>
              </Link>
            </li>
            <li className="menu__list_item">
              <Link legacyBehavior href="/reviews">
                <a className="menu__list_link">Отзывы</a>
              </Link>
            </li>
            <li className="menu__list_item">
              <Link legacyBehavior href="/courses">
                <a className="menu__list_link">Курсы</a>
              </Link>
            </li>
          </ul>
        </nav>
        
        <button id="open_basket" className="btn_icon">
        <HiOutlineShoppingBag size={30}/>
        </button>
        


      </div>
    </header>
  );
};

export default Header;
