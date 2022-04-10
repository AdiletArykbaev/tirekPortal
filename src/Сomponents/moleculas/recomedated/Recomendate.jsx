import React from 'react'
import styles from "./styles.module.scss"

const Recomendate = ({image,date,text,title}) => {
  return (
    <div className={styles.wrapper}>
        <div>
            <img src={image} alt="image" />
        </div>
        <div>
            <h3 className={styles.date}>{date}</h3>
            <h2>
                {title}
            </h2>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    </div>
  )
}

export default Recomendate