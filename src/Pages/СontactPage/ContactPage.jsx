import React from 'react'
import styles from "./styles.module.scss"

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.appeal}>
          <div className={styles.appealPageOne}>
               <h1 className={styles.appealWord}>Обращение</h1>
               <div className={styles.appealContent}>
                 <div className={styles.urmat}>
                    Уважаемая заявитель?
                 </div>
                 <div className={styles.p}>
                    Обращения в общественный фонд “Эне-балага тирек” принимаются в электронном формате.
                 </div>
                 <div className={styles.pTwo}>
                    Просим Вас внимательно ознакомиться с правилами оформления электронных обращений в наш фонд для рассмотрения.
                 </div>
               </div>
          </div>
          <div className={styles.appealPageTwo}>
              <div className={styles.appealContentTwo}>
                <div className={styles.appealTextTwo}>Электронные обращения должны содержать:</div>
                <div className={styles.divUl}>
                <ul>
                  <li className={styles.liTwo}>Фамилию, имя и отчество заявителя;</li>
                  <li className={styles.liTwo}>Основной текст обращения с четко изложенным вопросом обращения;</li>
                  <li className={styles.liTwo}>Электронный адрес (почта) и контактный номер заявителя;</li>
                  <li className={styles.liTwo}>Прикрепленные другие подтверждающие документы. </li>
                </ul>
                </div>
                
              </div>
          </div>
          <div className={styles.appealPageThree}>
              <div className={styles.appealContentThree}>
                  <div className={styles.TextThree}><span className={styles.th}>Внимание!</span>Обращения не подлежат рассмотрению, если:</div>
                  <div className={styles.divUlThree}>
                      <ul>
                        <li className={styles.liThree}>Текст не подлежит чтению;</li>
                        <li className={styles.liThree}>Содержит ненормативную лексику;</li>
                        <li className={styles.liThree}>Не адресовано в общественный фонд “Эне-балага тирек”;</li>
                        <li className={styles.liThree}>Не подпадают миссии и полномочиям фонда. </li>
                      </ul>
                  </div>
              </div>
              
          </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputsBorder}>
          <div className={styles.inputsPageOne}>
             <form>
               <fieldset className={styles.fildOne}>
                 <legend>ФИО<span className={styles.star}>*</span></legend>
                 <input type="text" placeholder='Фамилия Имя Отчество' className={styles.inputFio}/>
               </fieldset>
               <fieldset className={styles.fildTwo}>
                 <input type="text" placeholder='Номер телефона*' className={styles.inputPhones}/>
               </fieldset>
               <fieldset className={styles.fildTwo}>
                 <input type="text" placeholder='Электронная почта' className={styles.inputPhones}/>
               </fieldset>
             </form>
          </div>
          <div className={styles.inputsPageTwo}>
            <fieldset className={styles.fildthree}>
              <textarea placeholder='Напишите сообщение*' className={styles.inputsComment} />
            </fieldset>
            <div className={styles.BtnDownload}>
              <div className={styles.line}></div>
              <div className={styles.wordDown}>Загрузить файл</div>
              <div className={styles.wordFail}>Файл не выбран</div>
            </div>
            <div className={styles.Button}><div className={styles.pSend}>Отправить</div></div>
          </div>
        </div>
        <div className={styles.Email}>
Электронные обращения могут быть отправлены в общественный фонд “Эне балага тирек” по электронной почте <span className={styles.emaile}>tirek.inbox@gmail.com.</span>  
</div>
      </div>
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
    </div>
  )
}

export default ContactPage