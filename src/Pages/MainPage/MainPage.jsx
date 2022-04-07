import React from "react";
import styles from "./styles.module.scss";
import { IntroSection, AboutUs,Services} from "../../Sections";
const MainPage = () => {
  return (
    <div className={styles.wrapper}>
        <IntroSection/>
        <AboutUs/>
        <Services/>

    </div>
  );
};

export default MainPage;
