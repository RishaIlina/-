import { useState } from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./RegistrationForm.module.css";

export default function SigninSignupPage({ isOpen }) {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [isSignInActive, setIsSignInActive] = useState(false);

  // Обработчик события для кнопки "Sign Up"
  const handleSignUpClick = (e) => {
    e.preventDefault();
    setIsSignUpActive(true);
    setIsSignInActive(false);
    console.log("Sign Up Active State:", isSignUpActive);
  };

  // Обработчик события для кнопки "Sign In"
  const handleSignInClick = (e) => {
    e.preventDefault();
    setIsSignInActive(true);
    setIsSignUpActive(false);
    console.log("Sign In Active State:", isSignInActive);
  };

  return (
    isOpen && (
      <div className={styles.container}>
        <div
          className={`${styles.form_container} ${
            isSignUpActive ? styles.sign_up : ""
          }`}
        >
          <form>
            <h1 className={styles.modal_title}>Cоздать аккаунт</h1>
            <div className={styles.social_icons}>
              <a href="#" className={styles.icon}>
                <FaGooglePlusG />
              </a>
              <a href="#" className={styles.icon}>
                <FaFacebookF />
              </a>
              <a href="#" className={styles.icon}>
                <FaGithub />
              </a>
              <a href="#" className={styles.icon}>
                <FaLinkedinIn />
              </a>
            </div>
            <span>или используйте свой адрес электронной почты для регистрации</span>
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <button
              onClick={handleSignUpClick}
              type="button"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
        <div
          className={`${styles.form_container} ${
            isSignInActive ? styles.sign_in : ""
          }`}
        >
          <form>
            <h1>Вход</h1>
            <div className={styles.social_icons}>
              <a href="#" className={styles.icon}>
                <FaGooglePlusG />
              </a>
              <a href="#" className={styles.icon}>
                <FaFacebookF />
              </a>
              <a href="#" className={styles.icon}>
                <FaGithub />
              </a>
              <a href="#" className={styles.icon}>
                <FaLinkedinIn />
              </a>
            </div>
            <span>или используйте пароль от электронной почты</span>
            <input type="email" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <a href="#">Забыли свой пароль?</a>
            <button
              onClick={handleSignInClick}
              type="button"
            >
              Войти
            </button>
          </form>
        </div>
        <div className={styles.toggle_container}>
          <div className={styles.toggle}>
            <div className={` ${styles.toggle_panel} ${styles.toggle_left} `}>
              <h1>С возвращением!</h1>
              <p>Введите свои личные данные, чтобы использовать все функции сайта</p>
              <button type="button" className={styles.hidden}>
                Войти
              </button>
            </div>
            <div className={` ${styles.toggle_panel} ${styles.toggle_right} `}>
              <h1>Привет, друг!</h1>
              <p>
              Зарегистрируйтесь, указав свои личные данные, чтобы использовать все функции сайта
              </p>
              <button type="button" className={styles.hidden}>
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
