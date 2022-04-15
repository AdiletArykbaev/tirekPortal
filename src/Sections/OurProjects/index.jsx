import React from 'react';
import styles from './ourProjects.module.scss';
import NavigateBtn from "../../Сomponents/atoms/NavigateBtn";
import SwiperCards from "../../Сomponents/atoms/SwiperCards";
import CategoriesList from "../../Сomponents/atoms/CategoriesList";

const OurProjects = () => {
    const swiperBreakpoints = {
        1600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        577: {
            slidesPerView: 1,
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className="wrapper mainSwiper">
                <h2 className={styles.title}>Наши проекты</h2>
                <NavigateBtn text={'Все проекты'} address={'projects'}/>
                <div className={styles.row}>
                    <CategoriesList/>
                    <div className={styles.box}>
                        <SwiperCards padding={styles.small} margin={30} breakpoints={swiperBreakpoints}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;