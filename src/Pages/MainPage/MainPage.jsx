import React from "react";
import styles from "./styles.module.scss";
import { IntroSection, AboutUs,Services} from "../../Sections";
import { Gallery } from "..";
import Contacts from "../../Sections/ContactsSection";
import NewsCard from "../../Сomponents/atoms/NewsCard";
const MainPage = () => {
  return (
    <div className={styles.wrapper}>
        <IntroSection/>
        <AboutUs/>
        <Services/>
        <Gallery page={false}/>
        <Contacts/>
        <NewsCard/>
    </div>
  );
};

export default MainPage;
