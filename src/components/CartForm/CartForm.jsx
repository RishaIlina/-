import styles from "./CartForm.module.css";
import Image from "next/image";

export default function CartForm() {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");

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
          onClick={() => {
            // отправка информации о заказе на сервер
          }}
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
    </div>
  );
}
