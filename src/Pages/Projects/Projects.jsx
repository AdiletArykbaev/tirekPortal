import React from 'react'
import { Route,Routes } from 'react-router-dom';
import SubHeader from '../../Сomponents/moleculas/SubHeader/SubHeader';
import EducationPage from './Pages/EducationPage/EducationPage';
import styles from "./styles.module.scss"

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
    
  return (
    <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
                
            <SubHeader link={links}/>
            <div className={styles.content_wrapper}>
               <h1 className={styles.title}>Наши проекты</h1>
               <div className={styles.content}>
                
               <Routes>
                 <Route path='/project/education' element={<EducationPage/>}/>
                 <Route path='/education'/>
                 <Route path='/education'/>
                 <Route path='/education'/>

               </Routes>
               
               </div>
               
            </div>
        </div>
    
    </div>
  )
}

export default Projects