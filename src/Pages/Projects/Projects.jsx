import React from 'react'
import {Route, Routes, useParams} from 'react-router-dom';
import SubHeader from '../../Сomponents/moleculas/SubHeader/SubHeader';
import EducationPage from './Pages/EducationPage/EducationPage';
import styles from "./styles.module.scss"
import ProjectImage from "../../Assets/images/projectImage.png"
import {one, fourteen} from '../../Assets/images/gallery';
import {NewsCard} from '../../Сomponents/atoms';
import axios from '../../Requests/axios';
import News from "../../Сomponents/organisms/News/News";
import SwiperCards from "../../Сomponents/atoms/SwiperCards";
import NavigateBtn from "../../Сomponents/atoms/NavigateBtn";

const Projects = () => {

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
    ];
    const news = {
        title: "20 НУЖДАЮЩИМСЯ СЕМЬЯМ, КОТОРЫЕ СОСТОЯ НА УЧЕТЕ НАШЕГО ФОНДА, БЫЛА ОКАЗАНА ПОМОЩЬ В ВИДЕ ПРОДУКТОВЫХ",
        body: "Со стороны наших спонсоров 20 нуждающимся семьям, которые состоя на учете нашего фонда, была оказана помощь в виде продуктовых пакетов. Выражаем особую благодарность нашим спонсорам за доброту, отзывчивость и неравнодушие!",
        data: "12/02/2022",
        image: ProjectImage
    };
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <SubHeader link={links}/>
                <div className={styles.content_wrapper}>
                    <h1 className={styles.title}>Наши проекты</h1>
                    <News title={news.title} body={news.body} data={news.data} image={news.image}/>
                    <div className={styles.recomendate}>
                        {recomendate.map((item => <div className={styles.box}>
                            <NewsCard title={item.title} cardDate={item.date}
                                      image={item.image} subtitle={item.text}/>
                        </div>))}
                    </div>
                    <div className={styles.btnBox}>
                        <NavigateBtn address={'/projects'} text={'Все проекты'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects