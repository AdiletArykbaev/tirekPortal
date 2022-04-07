import React from 'react'
import styles from "./styles.module.scss"


const AboutUsBlog = ({title,textBody}) => {
  return (
    <div className={styles.wrapper}>
         <h1 className={styles.main_title}>
            {title}
         </h1>
         <p className={styles.text_body}>{
           textBody
         }</p>
    </div>
  )
}

export default AboutUsBlog