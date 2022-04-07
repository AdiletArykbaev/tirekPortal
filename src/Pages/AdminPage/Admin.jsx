import React from 'react'
import styles from "./styles.module.scss"

const Admin = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <input type="text" />
          <input type="password" />
          <button type='submit'>войти</button>
        </div>
          
    </div>
  )
}

export default Admin