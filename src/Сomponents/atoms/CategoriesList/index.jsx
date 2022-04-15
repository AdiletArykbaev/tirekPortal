import React from 'react';
import styles from "../../../Sections/OurProjects/ourProjects.module.scss";

const CategoriesList = () => {
    return (
            <ul className={styles.list}>
                <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                    Экономическое благосостояние
                </li>
                <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                    Здравоохранение
                </li>
                <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                    Правовая защита
                </li>
                <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                    Образование
                </li>
                <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                    Экология
                </li>
                <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                    Культура
                </li>
                <li className={styles.item}><i className="ri-arrow-right-s-fill"/>
                    Наука
                </li>
            </ul>
    );
};

export default CategoriesList;