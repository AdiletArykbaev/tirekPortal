import React, {useState, useEffect} from "react";
import styles from "./styles.module.scss";
import {HeaderLogo} from "../../../Assets/icons";
import {Navigation} from "../../atoms";
import {MaxMedium, MinMedium} from "../../../utils/mediaQuiries";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [color, setColor] = useState("");
    const [background, setBackground] = useState("");
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
    }, []);
    const navigate = useNavigate();

    const [menu, setMenu] = useState(false);
    return (
        <div className={styles.component_wrapper} style={{borderBottom: color}}>
            <div className="wrapper">
                <div className={styles.pageWrapper}>
                    <div className={styles.logoBlock}>
                        <Link to="/">
                            <img src={HeaderLogo} alt="Logo"/>
                        </Link>
                    </div>
                    <MinMedium>
                        <div className={styles.navigation}>
                            <Navigation links={links}/>
                        </div>
                        <button onClick={() => navigate('/appeal')} className={styles.button}>Обратиться</button>
                    </MinMedium>
                    <MaxMedium>
                        <div className={styles.burger}>
                            {
                                menu ? <i onClick={() => {
                                        document.querySelector('body').style.overflow = 'auto';
                                        setMenu(!menu)
                                    }} className="ri-close-line"/> :
                                    <i onClick={() => {
                                        document.querySelector('body').style.overflow = 'hidden';
                                        setMenu(!menu)
                                    }} className="ri-menu-line"/>
                            }
                        </div>
                        <div className={menu ? styles.popupOpen : styles.popup}>
                            <div className={styles.popupContent}>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            Главная
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Новости
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Проекты
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Обращение
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Фотогалерея
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Контакты
                                        </Link>
                                    </li>
                                </ul>
                                <div className={styles.email}>
                                    <i className="ri-mail-line"/>
                                    <a href="mailto:tirek.org@gmail.com ">tirek.org@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </MaxMedium>
                </div>
            </div>
        </div>
    );
};

export default Header;
