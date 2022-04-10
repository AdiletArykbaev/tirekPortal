import React from "react";
import styles from "./styles.module.scss";
import { IntroSection, AboutUs,Services} from "../../Sections";
import { Gallery } from "..";
const MainPage = () => {
  return (
    <div className={styles.wrapper}>
        <IntroSection/>
        <AboutUs/>
        <Services/>
        <Gallery page={false}/>
    </div>
  );
};

export default MainPage;
