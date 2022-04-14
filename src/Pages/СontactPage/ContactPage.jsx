import React from 'react'
import styles from "./styles.module.scss"
import {TextField} from "@mui/material";

const ContactPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
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
                                Просим Вас внимательно ознакомиться с правилами оформления электронных обращений в наш
                                фонд
                                для рассмотрения.
                            </div>
                        </div>
                    </div>
                    <div className={styles.appealPageTwo}>
                        <div className={styles.appealContentTwo}>
                            <div className={styles.appealTextTwo}>Электронные обращения должны содержать:</div>
                            <div className={styles.divUl}>
                                <ul>
                                    <li className={styles.liTwo}><i className="ri-arrow-right-s-fill"/>Фамилию, имя и
                                        отчество заявителя;
                                    </li>
                                    <li className={styles.liTwo}><i className="ri-arrow-right-s-fill"/>Основной текст
                                        обращения с четко изложенным вопросом
                                        обращения;
                                    </li>
                                    <li className={styles.liTwo}><i className="ri-arrow-right-s-fill"/>Электронный адрес
                                        (почта) и контактный номер заявителя;
                                    </li>
                                    <li className={styles.liTwo}><i className="ri-arrow-right-s-fill"/>Прикрепленные
                                        другие
                                        подтверждающие документы.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={styles.appealPageThree}>
                        <div className={styles.appealContentThree}>
                            <div className={styles.TextThree}><span className={styles.th}>Внимание! </span>Обращения не
                                подлежат рассмотрению, если:
                            </div>
                            <div className={styles.divUlThree}>
                                <ul>
                                    <li className={styles.liThree}><i className="ri-error-warning-line"/>Текст не
                                        подлежит
                                        чтению;
                                    </li>
                                    <li className={styles.liThree}><i className="ri-error-warning-line"/>Содержит
                                        ненормативную лексику;
                                    </li>
                                    <li className={styles.liThree}><i className="ri-error-warning-line"/>Не адресовано в
                                        общественный фонд “Эне-балага тирек”;
                                    </li>
                                    <li className={styles.liThree}><i className="ri-error-warning-line"/>Не подпадают
                                        миссии
                                        и полномочиям фонда.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputsBorder}>
                        <div className={styles.inputsPageOne}>
                            <form>
                                <div className={styles.formRow}>
                                    <div className={styles.formDiv}>
                                        <TextField className={styles.inputPhones} id="outlined-basic"
                                                   label="ФИО" variant="outlined"/>
                                        <TextField className={styles.inputPhones} id="outlined-basic"
                                                   label="Номер телефона*" variant="outlined"/>
                                        <TextField className={styles.inputPhones} id="outlined-basic"
                                                   label="Электронная почта" variant="outlined"/>
                                    </div>
                                    <div className={styles.formDiv}>
                                        <TextField multiline
                                                   rows={5} id="outlined-basic" label="Напишите сообщение*"
                                                   variant="outlined"
                                                   className={styles.inputsComment}/>
                                        <div className={styles.BtnDownload}>
                                            <i className="ri-download-2-fill"/>
                                            <div className={styles.wordDown}>Загрузить файл</div>
                                            <div className={styles.wordFail}>Файл не выбран</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btnDiv}>
                                    <button type="submit" className={styles.Button}>Отправить</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className={styles.Email}>
                        Электронные обращения могут быть отправлены в общественный фонд “Эне балага тирек” по
                        электронной
                        почте <span className={styles.emaile}>tirek.inbox@gmail.com.</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactPage