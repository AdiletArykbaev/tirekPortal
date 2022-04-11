import React from "react";
import styles from "./styles.module.scss";
import { IntroSection, AboutUs,Services} from "../../Sections";
import Contacts from "../../Sections/Contacts";
const MainPage = () => {
  return (
    <div className={styles.wrapper}>
        <IntroSection/>
        <AboutUs/>
        <Services/>
        <Contacts/>
    </div>
  );
};

export default MainPage;
