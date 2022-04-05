import React from 'react'
import styles from "./styles.module.scss"
import { HeaderLogo } from '../../../Assets/icons'
import { Navigation } from '../../atoms'

const Header = () => {
  const links = [{
    text:"Главная",
    path:"/"
  },{
    text:"Новости",
    path:"/News"
  },
  {
    text:"Проекты",
    path:"/projects"
  },
  {
    text:"Обращение",
    path:"/appeal"
  },
  {
    text:"Фотогалерея",
    path:"/gallery"
  },
  {
    text:"Контакты",
    path:"/contacts"
  },
]
  return (
    <div className={styles.wrapper}>
       <div className={styles.logoBlock}>
          <img src={HeaderLogo} alt="Logo" /> 
        </div>
        <div className={styles.navigation}>
            <Navigation links={links}/>
        </div>
        <button className={styles.button}>
          Связаться
        </button>
     </div>
  )
}

export default Header