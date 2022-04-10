import React from 'react'
import styles from "./styles.module.scss"

const LastNews = ({date,text}) => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.body}>
            {text}
        </p>
        <h5 className={styles.date}>
            {date}
        </h5>
      
    </div>
  )
}

export default LastNews