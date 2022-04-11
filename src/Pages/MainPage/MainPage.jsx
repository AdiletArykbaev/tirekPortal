import React from "react";
import styles from "./styles.module.scss";
import {IntroSection, AboutUs, Services} from "../../Sections";
import {Gallery} from "..";
import Contacts from "../../Sections/ContactsSection";

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <IntroSection/>
            <AboutUs/>
            <Services/>
            <Gallery page={false}/>
            <Contacts/>
        </div>
    );
};

export default MainPage;
