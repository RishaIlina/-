import styles from "./CartForm.module.css";
import Image from "next/image";
import { useState } from "react";

export default function CartForm( { closeCartHandler } ) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

//   const onInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "name") {
//       setName(value);
//     } else if (name === "phone") {
//       setPhone(value);
//     }
//   };

  return (
    <div className={styles.container}>
      {isOrderPlaced ? (
        <>
          <div className={styles.cart__empty}>
            <Image
              width={100}
              height={130}
              src="/image/complete-order.jpg"
              alt="Заказ оформлен"
            />
            <h2 className={styles.cart__empty_text}>Заказ оформлен!</h2>
            <p className={styles.cart__empty_description}>
            В ближайшее время с вами свяжется наш менеджер для уточнения информации по заказу
            </p>
            <button
              className={` button ${styles.cart__total_btn} ${styles.cart__empty_btn} `}
              onClick={() => closeCartHandler()}
            >
              <Image
                className={styles.cart__empty_arrow}
                width={16}
                height={14}
                src="/image/arrow.svg"
                alt="стрелка"
              />
              Вернуться назад
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.cart__form}>
            <h2 className={styles.cart__empty_text}>
              Для оформления заказа введите информацию о себе:
            </h2>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <Image
                  src="/image/person.png"
                  alt="пользователь"
                  width={13}
                  height={13}
                />
                <input type="text" placeholder="Имя" />
              </div>
              <div className={styles.input}>
                <Image
                  src="/image/phone_input.svg"
                  alt="телефон"
                  width={18}
                  height={18}
                />
                <input type="tel" placeholder="Номер телефона" />
              </div>
            </div>
          </div>

          <div className={styles.cart__total_block}>
            <button
              className={` button ${styles.cart__total_btn}`}
              onClick={() => setIsOrderPlaced(true)} 
            >
              Отправить
              <Image
                className={styles.cart__total_arrow}
                src="/image/arrow.svg"
                alt="Стрелка"
                width={16}
                height={14}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
