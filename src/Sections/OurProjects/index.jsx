import React from 'react';
import styles from './ourProjects.module.scss';
import NavigateBtn from "../../Сomponents/atoms/NavigateBtn";
import SwiperCards from "../../Сomponents/atoms/SwiperCards";

const OurProjects = () => {
    const swiperBreakpoints = {
        1600: {
            slidesPerView: 3,
            spaceBetween: 30,
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
                    <ul className={styles.list}>
                        <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                            Экономическое благосостояние
                        </li>
                        <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                            Здравоохранение
                        </li>
                        <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                            Правовая защита
                        </li>
                        <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                            Образование
                        </li>
                        <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                            Экология
                        </li>
                        <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                            Культура
                        </li>
                        <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                            Наука
                        </li>
                    </ul>
                    <div className={styles.box}>
                        <SwiperCards padding={styles.small} margin={30} breakpoints={swiperBreakpoints}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;