import React from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'

const SubHeader = ({link}) => {
  return (
    <div className={styles.wrapper}>
        {link.map((item)=>{
            return <Link className={({isActive})=>isActive ?styles.active:styles.link} to={item.path} >{item.text}</Link>
        })}
    </div>
  )
}

export default SubHeader