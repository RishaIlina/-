import { useState } from "react";
import styles from "./RegistrationForm.module.css";
import Image from "next/image";

export default function RegistrationForm({ isOpen }) {
  const [action, setAction] = useState("Регистрация");

  // Закрытие модального окна
  const closeRegistrationForm = () => {
    isOpen(false);
  };

  return (
    isOpen && (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text_decor}>
            <div className={styles.text}>{action}</div>
            <div className={styles.underline}></div>
          </div>
          <Image
            src="/image/btn-remove.svg"
            alt="Кнопка закрытия модального окна"
            width={31}
            height={31}
            onClick={closeRegistrationForm}
            className={styles.cart__item_close}
          />
        </div>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <Image
              src="/image/person.png"
              alt="пользователь"
              width={14}
              height={15}
              priority={true}
            />
            <input type="text" placeholder="Имя" />
          </div>
          <div className={styles.input}>
            <Image
              src="/image/email.png"
              alt="почта"
              width={15}
              height={12}
              priority={true}
            />
            <input type="email" placeholder="Почта" />
          </div>
          <div className={styles.input}>
            <Image
              src="/image/password.png"
              alt="пароль"
              width={14}
              height={17}
              priority={true}
              loading="eager"
            />
            <input type="password" placeholder="Пароль" />
          </div>
          <div className={styles.forgot_password}>
            Забыли пароль?<span>Нажмите здесь</span>
          </div>
          <div className={styles.submit_container}>
            <div
              className={
                action === "Вход"
                  ? `${styles.submit} ${styles.disabled}`
                  : styles.submit
              }
              onClick={() => {
                setAction("Регистрация");
              }}
            >
              Зарегистрироваться
            </div>
            <div
              className={
                action === "Регистрация"
                  ? `${styles.submit} ${styles.disabled}`
                  : styles.submit
              }
              onClick={() => {
                setAction("Вход");
              }}
            >
              Войти
            </div>
          </div>
        </div>
      </div>
    )
  );
}
