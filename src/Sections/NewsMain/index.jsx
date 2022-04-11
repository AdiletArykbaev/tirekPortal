import React from 'react';
import styles from './newsMain.module.scss';
import './newsMain.css';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {fourteen, one} from "../../Assets/images/gallery";
import {NewsCard} from "../../Сomponents/atoms";

const NewsMain = () => {
    const recomendate = [{
        image: one,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
        title: "Holoplot",
        date: "12/12/2020"
    },
        {
            image: one,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
            title: "Holoplot",
            date: "12/12/2020"
        },
        {
            image: one,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
            title: "Holoplot",
            date: "12/12/2020"
        }, {
            image: fourteen,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
            title: "Holoplot",
            date: "12/12/2020"
        },
        {
            image: one,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
            title: "Holoplot",
            date: "12/12/2020"
        }];
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <h2 className={styles.title}>Последние новости</h2>
                <p className={styles.subtitle}>Читайте последние новости нашего фонда</p>
                <div className={styles.container}>
                    <Swiper navigation={true} modules={[Navigation]} slidesPerView={3} spaceBetween={50}
                            className="mySwiper">
                        {recomendate.map((item) => (
                            <SwiperSlide>
                                <NewsCard width={'100%'} title={item.title} cardDate={item.date} image={item.image}
                                          subtitle={item.text}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default NewsMain;