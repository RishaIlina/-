import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { chakra } from "@chakra-ui/react";
import styles from "./CustomAccordion.module.css";

export default function CustomAccordion() {
  return (
    <div>
      <Accordion allowMultiple>
        <AccordionItem className={styles.accordeon__item}>
          <AccordionButton className={styles.accordeon__arrow}>
            <chakra.div
              flex="1"
              textAlign="left"
              className={styles.accordeon__title}
            >
              Какие запахи доступны для свечей?
            </chakra.div>
            <AccordionIcon className={styles.accordeon__icon}/>
          </AccordionButton>
          <AccordionPanel className={styles.accordeon__box}>
            <chakra.ul className={styles.accordion__ol}>
              <chakra.li className={styles.accordion__li}>
                Ваниль - теплый, сладкий и уютный аромат, который напоминает о
                домашнем уюте.
              </chakra.li>
              <chakra.li className={styles.accordion__li}>
                Лаванда - приятный, успокаивающий и релаксирующий запах, который
                помогает снять стресс и напряжение.
              </chakra.li>
              <chakra.li className={styles.accordion__li}>
                Розовый грейпфрут - свежий, фруктовый и энергичный аромат, который
                помогает поднять настроение и взбодрить.
              </chakra.li>
              <chakra.li className={styles.accordion__li}>
                Кедр - древесный, земной и маскулинный аромат, который придает
                ощущение стабильности и надежности.
              </chakra.li>
              <chakra.li className={styles.accordion__li}>
                Яблоко и корица - теплый и уютный аромат, напоминающий о зимние
                праздники и домашность.
              </chakra.li>
            </chakra.ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordeon__item}>
          <AccordionButton className={styles.accordeon__arrow}>
            <chakra.div flex="1" textAlign="left" className={styles.accordeon__title}>
              Как долго горят свечи?
            </chakra.div>
            <AccordionIcon className={styles.accordeon__icon}/>
          </AccordionButton>
          <AccordionPanel className={styles.accordeon__box}>
            Время горения свечи зависит от нескольких факторов, включая размер
            свечи, материал из которого она изготовлена, качество воска и многие
            другие. Обычно обычная свеча может гореть от 4 до 8 часов, но
            существуют и специальные длительные свечи, которые могут гореть до
            24 часов.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordeon__item}>
          <AccordionButton className={styles.accordeon__arrow}>
            <chakra.div flex="1" textAlign="left" className={styles.accordeon__title}>
              Можно ли сделать заказ на индивидуальный дизайн свечи?
            </chakra.div>
            <AccordionIcon className={styles.accordeon__icon}/>
          </AccordionButton>
          <AccordionPanel className={styles.accordeon__box}>
            Да, у нас есть услуга по созданию индивидуальных дизайнов свечей. Вы
            можете выбрать форму, цвет, аромат и другие характеристики свечи,
            которые хотели бы видеть в своем заказе.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordeon__item}>
          <AccordionButton className={styles.accordeon__arrow}>
            <chakra.div flex="1" textAlign="left" className={styles.accordeon__title}>
              Какие есть варианты доставки?
            </chakra.div>
            <AccordionIcon className={styles.accordeon__icon}/>
          </AccordionButton>
          <AccordionPanel className={styles.accordeon__box}>
            Доступны следующие варианты: курьерская доставка, почтовая доставка,
            самовывоз из пункта выдачи, доставка через службы доставки.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordeon__item}>
          <AccordionButton className={styles.accordeon__arrow}>
            <chakra.div flex="1" textAlign="left" className={styles.accordeon__title}>
              Как оплачивать заказ?
            </chakra.div>
            <AccordionIcon className={styles.accordeon__icon}/>
          </AccordionButton>
          <AccordionPanel className={styles.accordeon__box}>
          Оплата заказа осуществляется различными способами, включая оплату банковской картой онлайн, наличными курьеру при получении, электронными деньгами.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordeon__item}>
          <AccordionButton className={styles.accordeon__arrow}>
            <chakra.div flex="1" textAlign="left" className={styles.accordeon__title}>
              Как долго длится курс?
            </chakra.div>
            <AccordionIcon className={styles.accordeon__icon}/>
          </AccordionButton>
          <AccordionPanel className={styles.accordeon__box}>
          Курсы по изготовлению свечей длятся 2 недели.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordeon__item}>
          <AccordionButton className={styles.accordeon__arrow}>
            <chakra.div flex="1" textAlign="left" className={styles.accordeon__title}>
              Есть ли сертификат на курс?
            </chakra.div>
            <AccordionIcon className={styles.accordeon__icon}/>
          </AccordionButton>
          <AccordionPanel className={styles.accordeon__box}>
          Мы предоставляем сертификат окончания курса. Этот сертификат может быть полезен для дальнейшего повышения квалификации или для трудоустройства в сфере изготовления свечей.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
