import React from "react";
import {
    NavLink as Link
  } from "react-router-dom";
import styles from "./styles.module.scss"
const Navigation = ({ links }) => {
  return(<nav className={styles.wrapper}>{
        links.map((item)=>{
           return  <Link  to={item.path}  className={({isActive})=>isActive ?styles.active:styles.link} >{item.text}</Link>
        })
      }</nav>);
};

export default Navigation;
