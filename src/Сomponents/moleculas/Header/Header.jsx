import React, { useState } from "react";
import styles from "./styles.module.scss";
import { HeaderLogo } from "../../../Assets/icons";
import { Navigation } from "../../atoms";

const Header = () => {
  const [color,setColor] = useState()
  const links = [
    {
      text: "Главная",
      path: "/Main",
    },
    {
      text: "Новости",
      path: "/News",
    },
    {
      text: "Проекты",
      path: "/projects",
    },
    {
      text: "Обращение",
      path: "/appeal",
    },
    {
      text: "Фотогалерея",
      path: "/gallery",
    },
    {
      text: "Контакты",
      path: "/contacts",
    },
  ];

  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setColor("box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);")
    } else {
    }
  };
  return (
    <div className={styles.component_wrapper} >
      <div className="wrapper">
        <div className={styles.pageWrapper}>
          <div className={styles.logoBlock}>
            <img src={HeaderLogo} alt="Logo" />
          </div>
          <div className={styles.navigation}>
            <Navigation links={links} />
          </div>
          <button className={styles.button}>Связаться</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
