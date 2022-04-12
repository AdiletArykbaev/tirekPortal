import React from 'react'
import styles from "./styles.module.scss"

const Service = ({title, text, beforeImage}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <img className={styles.img} src={beforeImage} alt="beforeImage"/>
            </div>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{text}</p>
            </div>
        </div>
    )
}

export default Service