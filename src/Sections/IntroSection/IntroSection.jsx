import React from "react";
import styles from "./styles.module.scss";
import {MainImage} from "../../Assets/images";
import {useNavigate} from "react-router-dom";


const IntroSection = () => {

    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.firstPart}>
                <h1 className={styles.MainTitle}><span className={styles.imageText}>Эне</span> <span
                    className={styles.text}>балага  тирек</span></h1>
                <p className={styles.subtext}>
                    Помощь матерям-одиночкам и <br/>
                    детям-сиротам по всему Кыргызстану
                </p>
                <button onClick={() => navigate('/appeal')} className={styles.button}>
                    Обратиться
                </button>
            </div>
            <div className={styles.secondPart}>
                <img src={MainImage} alt="MainImage"/>
            </div>
        </div>
    );
};

export default IntroSection;
