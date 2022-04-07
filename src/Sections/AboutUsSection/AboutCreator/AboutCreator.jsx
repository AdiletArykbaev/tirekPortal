import React from 'react'
import { AboutUsLogo } from '../../../Assets/icons'
import {Avatar} from "../../../Assets/images"
import styles from "./styles.module.scss"


const AboutCreator = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.firstBlog}>
            <img src={AboutUsLogo} alt="AboutUsLogo" />
        </div>
        <div className={styles.secondBlog}>
            <p className={styles.text}>
            Мы стремимся в первую очередь помогать детям и матерям.  Улучшать их жизни, защищать и развивать их потенциал. Эне-балага тирек – опора для матери и ребенка. 
            </p>
            <div className={styles.image}>
                <img src={Avatar} alt="Avatar" />
            </div>
        </div>
       <h1 className={styles.author}>
       А. Жапарова
       </h1>
    </div>
  )
}

export default AboutCreator