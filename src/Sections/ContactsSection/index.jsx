import React from 'react';
import styles from './contacts.module.scss';
import geo from '../../Assets/icons/geo.png';
import email from '../../Assets/icons/email.png';
import Map from "../../Сomponents/atoms/Map";
import {MaxSmall, MinSmall} from "../../utils/mediaQuiries";
import {useNavigate} from "react-router-dom";

const Contacts = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <div className={styles.content}>
                    <h1 className={styles.title}>Наши контакты</h1>
                    <div className={styles.row}>
                        <div className={styles.box}>
                            <div>
                                <p className={styles.text}>Для обращения в наш Фонд просим Вас внимательно ознакомиться
                                    с
                                    разделом "Обращение".</p>
                                <p className={styles.text}>Нажмите на кнопку “Обратиться”, чтобы узнать подробнее об
                                    инструкциях.</p>
                            </div>
                            <button onClick={() => navigate('/appeal')} className={styles.btn}>Обратиться</button>
                        </div>
                        <div className={styles.box}>
                            <p className={styles.info}><img src={geo} alt=""/> 720021, Кыргызстан, ул. Ибраимова 96,
                                Бишкек
                            </p>
                            <p className={styles.info}><img src={email} alt=""/>tirek.org@gmail.com</p>
                            <div className={styles.icons}>
                                <a target="_blank" href="https://www.instagram.com/">
                                    <i className="ri-instagram-line"/>
                                </a>
                                <a target="_blank" href="https://www.facebook.com/">
                                    <i className="ri-facebook-box-fill"/>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/">
                                    <i className="ri-youtube-fill"/>
                                </a>
                                <a target="_blank" href="https://twitter.com/">
                                    <i className="ri-twitter-fill"/>
                                </a>
                            </div>
                            <MinSmall>
                                <Map height={220} width={'100%'}/>
                            </MinSmall>
                            <MaxSmall>
                                <Map height={150} width={'100%'}/>
                            </MaxSmall>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;