import React from 'react'
import logo from '../../../Assets/images/footerLogo.png';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__row">
                    <img src={logo} alt="Tirek"/>
                    <ul className="footer__menu">
                        <h2 className="footer__title">Быстрые ссылки</h2>
                        <li>
                            <Link to="/projects">Проекты</Link>
                        </li>
                        <li>
                            <Link to="/news">Новости</Link>
                        </li>
                        <li>
                            <Link to="/">Обращение</Link>
                        </li>
                    </ul>
                    {/*<div className="footer__menu">*/}
                    {/*    <ul>*/}
                    {/*        <h2 className="footer__title">Проекты</h2>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/">Образование</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/">Здравоохранение</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/">Правовая защита</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <ul className="footer__menu">
                        <h2 className="footer__title">Контакты</h2>
                        <li>
                            <p>720031, Кыргызстан</p>
                        </li>
                        <li>
                            <p>ул. Ибраимова 96, Бишкек</p>
                        </li>
                        <li>
                            <a href="mailto:tirek.org@gmail.com">tirek.org@gmail.com</a>
                        </li>
                    </ul>
                    <div className="footer__form">
                        <h2 className="footer__title">Подписаться на материалы</h2>
                        <form>
                            <label>
                                <input className="footer__input" placeholder="Электронная почта" type="text"/>
                            </label>
                            <button className="footer__btn">Подписаться</button>
                        </form>
                    </div>
                </div>
                <div className="footer__contact">
                    <div className="footer__left">
                        <Link to="/">Terms</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">License</Link>
                    </div>
                    <p className="footer__center">Copyright ©2022 Эне-балага тирек | This web-site is made by
                        Fortylines.io</p>
                    <div className="footer__right">
                        <p>Следите за нами</p>
                        <div className="footer__icons">
                            <a target="_blank" href="https://www.instagram.com/">
                                <i className="ri-instagram-line"/>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/">
                                <i className="ri-facebook-box-fill"/>
                            </a>
                            <a target="_blank" href="https://www.youtube.com/">
                                <i className="ri-youtube-fill"/>
                            </a>
                            <a target="_blank" href="https://twitter.com/">
                                <i className="ri-twitter-fill"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer