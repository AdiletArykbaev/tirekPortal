import React from 'react';
import girl from '../../../Assets/images/newscard/girl.png';
import styles from './newsCard.module.scss';
import {Button} from "@mui/material";

const NewsCard = () => {
    return (
        <div className={styles.box}>
            <img className={styles.img} src={girl} alt=""/>
            <div className={styles.content}>
                <h3 className={styles.title}>Помощь в получении образования для детей-сирот</h3>
                <p className={styles.subtitle}>Мы помогаем подросткам в детских домах КР, а также выпускникам
                    сиротских...</p>
                <div className={styles.btnBox}>
                    <Button variant="text" className={styles.btn}>
                        Подробнее
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 0.333374L8.2375 1.86087L15.2125 7.91671H0V10.0834H15.2125L8.2375 16.1392L10 17.6667L20 9.00004L10 0.333374Z"
                                fill="#4A99D3"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;