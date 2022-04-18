import React from 'react';
import styles from './projectItem.module.scss';
import SubHeader from "../../Сomponents/moleculas/SubHeader/SubHeader";

const ProjectItem = () => {
    const links = [
        {
            text: "Образование",
            path: "/education",
        },
        {
            text: "Здравоохранение",
            path: "/health",
        },
        {
            text: "Экология",
            path: "/ecology",
        },
        {
            text: "Культура",
            path: "/culture",
        },
        {
            text: "Наука",
            path: "/science",
        },
        {
            text: "Правовая защита",
            path: "/defending",
        },
        {
            text: "Экономическое благосостояние",
            path: "/economic",
        },
    ];
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <SubHeader link={links}/>
            </div>
        </div>
    );
};

export default ProjectItem;