import React from 'react'
import styles from "./styles.module.scss"
import {fourteen, one} from '../../Assets/images/gallery'
import News from '../../Сomponents/organisms/News/News';
import {LastNews} from '../../Сomponents/moleculas';
import {NewsCard} from '../../Сomponents/atoms';
import NavigateBtn from "../../Сomponents/atoms/NavigateBtn";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllNews } from '../../Store/Thunks/newsThunk';


const NewsPage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state.news)

    const news = {
        title: "20 НУЖДАЮЩИМСЯ СЕМЬЯМ, КОТОРЫЕ СОСТОЯ НА УЧЕТЕ НАШЕГО ФОНДА, БЫЛА ОКАЗАНА ПОМОЩЬ В ВИДЕ ПРОДУКТОВЫХ",
        body: "Со стороны наших спонсоров 20 нуждающимся семьям, которые состоя на учете нашего фонда, была оказана помощь в виде продуктовых пакетов. Выражаем особую благодарность нашим спонсорам за доброту, отзывчивость и неравнодушие!",
        data: "12/02/2022",
        image: fourteen
    };
    const test = [{
        text: "Айгуль Жапарова оказала помощь детскому реабилитационному центру",
        date: "12/02/2022"
    },
        {
            text: "СОСТОЯЛОСЬ ЕЖЕГОДНОЕ СОБРАНИЕ ОБЩЕСТВЕННОГО БЛАГОТВОРИТЕЛЬНОГО ФОНДА “эНЕ-БАЛАГА ТИРЕК ”",
            date: "12/02/2022"
        },
        {
            text: "СОСТОЯЛОСЬ ЕЖЕГОДНОЕ СОБРАНИЕ ОБЩЕСТВЕННОГО БЛАГОТВОРИТЕЛЬНОГО ФОНДА “эНЕ-БАЛАГА ТИРЕК ”",
            date: "12/02/2022"
        },
        {
            text: "Айгуль Жапарова оказала помощь детскому реабилитационному центру",
            date: "12/02/2022"
        },
        {
            text: "Айгуль Жапарова оказала помощь детскому реабилитационному центру",
            date: "12/02/2022"
        },
        {
            text: "Айгуль Жапарова оказала помощь детскому реабилитационному центру",
            date: "12/02/2022"
        },
        {
            text: "Айгуль Жапарова оказала помощь детскому реабилитационному центру",
            date: "12/02/2022"
        }
    ];
    const recomendate = [{
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

    useEffect(()=>{
        dispatch(getAllNews)
        console.log(state)
    },[])

    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <h1 className={styles.title}>
                    Новости
                </h1>
                <div className={styles.content_wrapper}>
                    <News title={news.title} body={news.body} data={news.data} image={news.image}/>
                </div>
                <div className={styles.lastNews}>
                    <h2 className={styles.subtitle}>Последние новости</h2>
                    <div className={styles.subcontent}>
                        <div className={styles.pagination}>
                            {test.map((item) => {
                                return <LastNews date={item.date} text={item.text}/>
                            })}
                            <div className={styles.btnBox}>
                                <NavigateBtn text={'Показать предыдущие новости'} address="/news"/>
                            </div>
                        </div>
                        <div className={styles.recomendation}>
                            {recomendate.map((item) => {
                                return <>
                                    <div className={styles.box}>
                                        <NewsCard image={item.image} title={item.title} subtitle={item.text}
                                                  cardDate={item.date}/>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage