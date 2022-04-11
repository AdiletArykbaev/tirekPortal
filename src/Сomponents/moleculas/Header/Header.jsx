import React, { useState,useEffect} from "react";
import styles from "./styles.module.scss";
import { HeaderLogo } from "../../../Assets/icons";
import { Navigation } from "../../atoms";
import { MaxMedium,MinMedium } from "../../../utils/mediaQuiries";

const Header = () => {
  const [color,setColor] = useState("")
  const [background,setBackground] = useState("")
  const links = [
    {
      text: "Главная",
      path: "/",
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
      setColor(" 1px solid ")

    } else {
      setColor("none")

    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
        window.removeEventListener("scroll", listenScrollEvent);
    };
}, [])
console.log(color)
  return (
    <div className={styles.component_wrapper} style={{borderBottom:color}} >]
    <MinMedium>
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
    </MinMedium>
    <MaxMedium>
      burger menu
    </MaxMedium>
    </div>
  );
};

export default Header;
