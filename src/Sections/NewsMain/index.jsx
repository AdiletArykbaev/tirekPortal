import React from 'react';
import styles from './newsMain.module.scss';
import './newsMain.css';
import "swiper/css";
import "swiper/css/navigation";
import SwiperCards from "../../Сomponents/atoms/SwiperCards";

const NewsMain = () => {
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <h2 className={styles.title}>Последние новости</h2>
                <p className={styles.subtitle}>Читайте последние новости нашего фонда</p>
                <SwiperCards padding={styles.container} margin={50}/>
            </div>
        </div>
    );
};

export default NewsMain;