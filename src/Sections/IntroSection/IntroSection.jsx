import React from "react";
import styles from "./styles.module.scss";
import { MainImage } from "../../Assets/images";


const IntroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstPart}>
        <h1 className={styles.MainTitle}> <span className={styles.imageText}>Эне</span> <span className={styles.text}>балага  тирек</span> </h1>
      </div>
      <div className={styles.secondPart}>
        <img src={MainImage} alt="MainImage" />
      </div>
    </div>
  );
};

export default IntroSection;
