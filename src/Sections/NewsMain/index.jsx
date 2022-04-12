import React from 'react';
import styles from './newsMain.module.scss';
import './newsMain.css';
import "swiper/css";
import "swiper/css/navigation";
import SwiperCards from "../../Сomponents/atoms/SwiperCards";

const NewsMain = () => {
    const swiperBreakpoints = {
        1600: {
            slidesPerView: 3,
            spaceBetween: 100,
        },
        921: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        375: {
            slidesPerView: 2,
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <h2 className={styles.title}>Последние новости</h2>
                <p className={styles.subtitle}>Читайте последние новости нашего фонда</p>
                <SwiperCards padding={styles.container} margin={50} breakpoints={swiperBreakpoints}/>
            </div>
        </div>
    );
};

export default NewsMain;