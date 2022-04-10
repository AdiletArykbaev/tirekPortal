import React from 'react'
import styles from "./styles.module.scss"

const News = ({title,body,image,data,id}) => {
  return (
    <div className={styles.wrapper}>
            <div className={styles.firstBlock}>
              <img src={image} alt="image" />
           </div>
            <div className={styles.secondBlock}>
                <h4 className={styles.data}>
                    {data}
                </h4>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.body}>
                    {body}
                </p>
            </div>
    </div>
  )
}

export default News