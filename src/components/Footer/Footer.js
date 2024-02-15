import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__inner}`}>
                <Link legacyBehavior href="/">
                    <a className={styles.logo}>
                    <Image width={70} height={70} alt="logo" className={styles.logo__Image} src="image/logo-header.svg" />
                    </a>
                </Link>
                <nav className={`menu ${styles.footer__menu}`}>
                    <button className={styles.menu__btn}></button>
                    <ul className={` menu__list ${styles.footer__menu_list}`}>
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
                <div className={styles.footer__contacts}>
                        <a className={styles.footer__phone} href="tel:+79648558585">
                            <Image width={20} height={21} src="image/phone.svg" alt="phone" />
                            +7 964 855 85 85
                        </a>
                   
                        <a className={styles.email} href="mailto:candelsCandels@gmail.com">
                            <Image width={20} height={20} src="image/mail.svg" alt="mail" />
                            candelsCandels@gmail.com  
                        </a>

                    <div className={styles.footer__social_contacts}>
                        <ul className={styles.footer__social}>
                            <li className={styles.footer__social_item}>
                                    <a href="#" className={styles.footer__social_link}>
                                        <Image width={22} height={22} src="image/facebook-logo.svg" alt="facebook" className={styles.footer__social_Image} />
                                    </a>
                            </li>
                        </ul>
                        <ul className={styles.footer__social}>
                            <li className={styles.footer__social_item}>
                                    <a href="#" className={styles.footer__social_link}>
                                        <Image width={22} height={22} src="image/instagram-logo.svg" alt="instagram" className={styles.footer__social_Image} />
                                    </a>
                            </li>
                        </ul>
                        <ul className={styles.footer__social}>
                            <li className={styles.footer__social_item}>
                                <Link legacyBehavior href="#">
                                    <a href="#" className={styles.footer__social_link}>
                                        <Image width={22} height={22} src="image/linkedin-logo.svg" alt="linkedin" className={styles.footer__social_Image} />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={styles.footer__social}>
                            <li className={styles.footer__social_item}>
                                <Link legacyBehavior href="#">
                                    <a href="#" className={styles.footer__social_link}>
                                        <Image width={22} height={22} src="image/youtube-logo.svg" alt="youtube" className={styles.footer__social_Image} />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </footer>
    );
};

export default Footer;