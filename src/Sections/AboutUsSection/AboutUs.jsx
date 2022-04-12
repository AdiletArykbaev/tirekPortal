import React from 'react'
import styles from "./AboutUs.module.scss"
import {AboutUsBlog} from '../../Сomponents/atoms'
import AboutCreator from './AboutCreator/AboutCreator'

const AboutUs = () => {
    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <div className={styles.content_wrapper}>
                    <div className={styles.firstPart}>
                        <AboutUsBlog title={"О нас"}
                                     textBody={`Общественный фонд "Эне балага тирек" (ранее ОФ "Умут булагы") работает под инициативой первой леди Кыргызской Республики Айгуль Жапаровой. `}/>
                        <AboutUsBlog title={"Миссия фонда"}
                                     textBody={`Основная миссия фонда заключается в оказании всесторонней поддержки матерям и детям Кыргызской Республики.`}/>
                    </div>
                    <div className={styles.secondPart}>
                        <AboutCreator/>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default AboutUs