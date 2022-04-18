import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {NewsCard} from "../index";
import {fourteen, one} from "../../../Assets/images/gallery";
import styles from "../../../Sections/NewsMain/newsMain.module.scss";

const SwiperCards = ({margin, padding, breakpoints}) => {
    const recomendate = [{
        image: one,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        title: "Holoplot",
        date: "12/12/2020"
    },
        {
            image: one,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            title: "Holoplot",
            date: "12/12/2020"
        },
        {
            image: one,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            title: "Holoplot",
            date: "12/12/2020"
        }, {
            image: fourteen,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            title: "Holoplot",
            date: "12/12/2020"
        },
        {
            image: one,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            title: "Holoplot",
            date: "12/12/2020"
        }];
    return (
        <div className={padding}>
            <Swiper navigation={true} modules={[Navigation]} spaceBetween={margin}
                    breakpoints={breakpoints}
                    className="mySwiper">
                {recomendate.map((item) => (
                    <SwiperSlide>
                        <NewsCard width={'100%'} title={item.title} cardDate={item.date} image={item.image}
                                  subtitle={item.text}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperCards;