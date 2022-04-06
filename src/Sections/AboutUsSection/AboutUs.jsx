import React from 'react'
import styles from "../AboutUsSection"
import AboutUsBlog from "../../Сomponents/atoms"

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <AboutUsBlog title={"О нас"} text={"Миссия фонда"}/>
      <AboutUsBlog title={"Миссия фонда"} text={"Миссия фонда"}/>
      <AboutUsBlog title={"О нас"} text={"Миссия фонда"}/>

    </div>
  )
}

export default AboutUs