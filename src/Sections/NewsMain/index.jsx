import React from 'react';
import styles from './newsMain.module.scss';
import './newsMain.css';
import "swiper/css";
import "swiper/css/navigation";
import SwiperCards from "../../Сomponents/atoms/SwiperCards";
import NavigateBtn from "../../Сomponents/atoms/NavigateBtn";
import {Max768, Min768} from "../../utils/mediaQuiries";

const NewsMain = () => {
    const swiperBreakpoints = {
        1600: {
            slidesPerView: 4,
            spaceBetween: 100,
        },
        921: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        375: {
            slidesPerView: 1,
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className="wrapper mainSwiper">
                <h2 className={styles.title}>Последние новости</h2>
                <p className={styles.subtitle}>Читайте последние новости нашего фонда</p>
                <Max768>
                    <NavigateBtn address={'/news'} text={'Все новости'}/>
                </Max768>
                <SwiperCards padding={styles.container} margin={50} breakpoints={swiperBreakpoints}/>
                <Min768>
                    <div className={styles.btnBox}>
                        <NavigateBtn address={'/news'} text={'Все новости'}/>
                    </div>
                </Min768>
            </div>
        </div>
    );
};

export default NewsMain;