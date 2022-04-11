import React from 'react';
import styles from './contacts.module.scss';
import geo from '../../Assets/icons/geo.png';
import email from '../../Assets/icons/email.png';
import inst from '../../Assets/images/instagram.png';
import facebook from '../../Assets/images/facebook.png';
import youtube from '../../Assets/images/youtube.png';
import twitter from '../../Assets/images/twitter.png';
import Map from "../../Сomponents/atoms/Map";

const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <h1 className={styles.title}>Наши контакты</h1>
                <div className={styles.row}>
                    <div>
                        <p className={styles.text}>Для обращения в наш Фонд просим Вас внимательно ознакомиться с
                            разделом "Обращение"</p>
                        <p className={styles.text}>Нажмите на кнопку “Обратиться”, чтобы узнать подробнее об
                            инструкциях.</p>
                        <button className={styles.btn}>Обратиться</button>
                    </div>
                    <div>
                        <p className={styles.text}><img src={geo} alt=""/> 720021, Кыргызстан, ул. Ибраимова 96, Бишкек
                        </p>
                        <p className={styles.text}><img src={email} alt=""/> 720021, Кыргызстан, ул. Ибраимова 96,
                            Бишкек</p>
                        <div>
                            <img src={inst} alt=""/>
                            <img src={facebook} alt=""/>
                            <img src={youtube} alt=""/>
                            <img src={twitter} alt=""/>
                        </div>
                        <Map height={260}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;