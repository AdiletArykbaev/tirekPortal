import React from 'react'
import styles from "./styles.module.scss"

const Service = ({title,text,beforeImage}) => {
  return (
    <div className={styles.wrapper} >
     <div>
        <img src={beforeImage} alt="beforeImage" />
     </div>
     <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
       
    </div>
  )
}

export default Service