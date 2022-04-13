import React from 'react'
import { Route,Routes } from 'react-router-dom';
import SubHeader from '../../Сomponents/moleculas/SubHeader/SubHeader';
import EducationPage from './Pages/EducationPage/EducationPage';
import styles from "./styles.module.scss"
import ProjectImage from "../../Assets/images/projectImage.png"
import { one,fourteen } from '../../Assets/images/gallery';
import { NewsCard } from '../../Сomponents/atoms';
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
  return (
    <div className={styles.wrapper}>
                    <SubHeader link={links}/>

        <div className={styles.content_wrapper}>
                
               <h1 className={styles.title}>Наши проекты</h1>
               <div className={styles.content}>
                   <div className={styles.firstPart}>
                        <img src={ProjectImage} alt="one" />
                   </div>
                   <div className={styles.secondPart}>
                        <h2 className={styles.title}>
                          Помощь в получении образования для детей-сирот
                        </h2>
                        <p className={styles.textBody}>
                         Со стороны наших спонсоров 20 нуждающимся семьям, которые состоя на учете нашего фонда, была оказана помощь в виде продуктовых пакетов. Выражаем особую благодарность нашим спонсорам за доброту, отзывчивость и неравнодушие!
                        </p>
                     
                    
                   </div>


               </div>
               <div className={styles.recomendate}>
                        {recomendate.map((item=> <NewsCard width={'354.32px'} title={item.title} cardDate={item.date} image={item.image}
                                          subtitle={item.text}/>))}  
                        </div>  
        </div>
    
    </div>
  )
}

export default Projects