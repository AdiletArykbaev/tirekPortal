import React from 'react'
import style from "../../../Sections/OurProjects/ourProjects.module.scss";
import styles from "./styles.module.scss"
import {Link, useParams} from 'react-router-dom'
import {Max768, Min768} from "../../../utils/mediaQuiries";

const SubHeader = ({link}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content_wrapper}>
                <Max768>
                    <ul className={style.list}>
                        {
                            link.map((item) => (
                                <>
                                    <Link className={({isActive}) => isActive ? styles.active : styles.link}
                                          to={`/projects${item.path}`}>
                                        <i className="ri-arrow-right-s-fill"/>
                                        {item.text}
                                    </Link>
                                </>
                            ))
                        }
                    </ul>
                </Max768>
                <Min768>
                    {link.map((item) => {
                        return <Link className={({isActive}) => isActive ? styles.active : styles.link}
                                     to={`/projects${item.path}`}>{item.text}</Link>
                    })}
                </Min768>
            </div>

        </div>
    )
}

export default SubHeader