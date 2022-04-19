import React from 'react';
import styles from './item.module.scss';
import SubHeader from "../../Сomponents/moleculas/SubHeader/SubHeader";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import img from '../../Assets/images/projectImage.png'
import NewsCard from "../../Сomponents/atoms/NewsCard";
import './projectNewsItem.css';

const Item = ({title, text, image}) => {
    const links = [
        {
            text: "Образование",
            path: "/education",
        },
        {
            text: "Здравоохранение",
            path: "/health",
        },
        {
            text: "Экология",
            path: "/ecology",
        },
        {
            text: "Культура",
            path: "/culture",
        },
        {
            text: "Наука",
            path: "/science",
        },
        {
            text: "Правовая защита",
            path: "/defending",
        },
        {
            text: "Экономическое благосостояние",
            path: "/economic",
        },
    ];
    return (
        <div className={styles.wrapper}>
            <div className="wrapper projectNewsItem">
                <SubHeader link={links}/>
                <h1 className={styles.title}>Помощь в получении образования для детей-сирот</h1>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <div className={styles.box}>
                            <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]}
                                    className="mySwiper">
                                <SwiperSlide>
                                    <img src={img} alt=""/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img} alt=""/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img} alt=""/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img} alt=""/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius inventore laboriosam, saepe similique tempora tempore voluptas voluptatum! Amet, beatae consectetur culpa cum cumque deleniti harum, id ipsa minima mollitia nesciunt porro quia quis recusandae veniam veritatis, vitae. A, consequuntur dolores facere magnam molestiae quod quos saepe sed voluptate. Adipisci aliquam aperiam blanditiis cum debitis dicta distinctio doloribus excepturi explicabo fugiat, harum ipsam neque quos reiciendis sint sit temporibus ullam, ut vel voluptates? Accusamus aliquam, amet consectetur corporis culpa cupiditate deleniti dolorum eaque fuga fugiat fugit incidunt iste itaque magni nemo nihil nobis quibusdam quis, quo repudiandae, sequi tenetur ullam voluptate?</p>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.other}>смотрите другие проекты</p>
                        <NewsCard subtitle={'111'} title={'title'} image={img} cardDate={'01/02/03'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;