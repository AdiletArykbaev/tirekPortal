import React from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'

const SubHeader = ({link}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
            {link.map((item)=>{
                return <Link className={({isActive})=>isActive ?styles.active:styles.link} to={`/projects${item.path}`} >{item.text}</Link>
            })}
        </div>
      
    </div>
  )
}

export default SubHeader