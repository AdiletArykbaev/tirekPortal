import React from 'react'
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <footer >
      <div className={styles.footer}>

        <div className={styles.divImg}>
          <img src="./images/ENE_balaga_tirek_RU_final-removebg-preview.png" alt="r" className={styles.MyImg}/>
        </div>
        <div className={styles.footerContent}>
          <h1 className={styles.fast}>Быстрые ссылки</h1>
          <div className={styles.lineTwo}></div>
          <ul className={styles.MyUl}>
            <li className={styles.MyLi}>Проекты</li>
            <li className={styles.MyLi}>Новости</li>
            <li className={styles.MyLi}>Обращение</li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <h1 className={styles.fast}>Проекты</h1>
          <div className={styles.lineThree}></div>
          <ul className={styles.MyUl}>
            <li className={styles.MyLi}>Образование</li>
            <li className={styles.MyLi}>Здравоохранение</li>
            <li className={styles.MyLi}>Правовая защита</li>
          </ul>
        </div>
        <div className={styles.footerContentTwo}>
          <h1 className={styles.fastTwo}>Контакты</h1>
          <div className={styles.lineThreeTwo}></div>
          <ul className={styles.MyUlTwo}>
            <li className={styles.MyLiTwo}>720031, Кыргызстан</li>
            <li className={styles.MyLiTwo}>ул. Ибраимова 96, Бишкек</li>
            <li className={styles.MyLiTwo}>tirek.org@gmail.com </li>
          </ul>
        </div>
        <div className={styles.lastBlock}>
        <h1 className={styles.lastFast}>Подписаться на материалы</h1>
          <div className={styles.lineFour}></div>
          <div className={styles.fildFour}>
              <input type="text" className={styles.inputFour} placeholder='Электронная почта'/>
          </div>
          <div className={styles.SendLast}><div className={styles.Subs}>Подписаться</div></div>
        </div>
      </div>
       
      <div className={styles.End}>
        <div className={styles.EndOne}>
          <h1 className={styles.EndFast}>Terms    Privacy    License</h1>
        </div>
        <div className={styles.EndTwo}>
           <h1 className={styles.EndFastTwo}>Copyright ©2022 Эне-балага тирек | This web-site is made by Fortylines.io</h1>
        </div>
        <div className={styles.EndThree}>
          <h1 className={styles.EndFastThree}>Следите за нами</h1>
          <img src="./images/Vector.png" alt="" className={styles.ins}/>
          <img src="./images/Combined-Shape.png" alt="" className={styles.ins}/>
          <img src="./images/Combined-Shape (1).png" alt="" className={styles.ins}/>
          <img src="./images/Vector (1).png" alt="" className={styles.ins}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer