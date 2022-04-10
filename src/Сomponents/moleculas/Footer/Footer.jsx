import React from 'react'

import logo from '../../../Assets/images/footerLogo.png';
import inst from '../../../Assets/images/instagram.png';
import facebook from '../../../Assets/images/facebook.png';
import youtube from '../../../Assets/images/youtube.png';
import twitter from '../../../Assets/images/twitter.png';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__row">
                    <img src={logo} alt="Tirek"/>
                    <div className="footer__menu">
                        <ul>
                            <h2 className="footer__title">Быстрые ссылки</h2>
                            <li>
                                <Link to="/">Проекты</Link>
                            </li>
                            <li>
                                <Link to="/">Новости</Link>
                            </li>
                            <li>
                                <Link to="/">Обращение</Link>
                            </li>
                        </ul>
                        <ul>
                            <h2 className="footer__title">Проекты</h2>
                            <li>
                                <Link to="/">Образование</Link>
                            </li>
                            <li>
                                <Link to="/">Здравоохранение</Link>
                            </li>
                            <li>
                                <Link to="/">Правовая защита</Link>
                            </li>
                        </ul>
                        <ul>
                            <h2 className="footer__title">Контакты</h2>
                            <li>
                                <Link to="/">720031, Кыргызстан</Link>
                            </li>
                            <li>
                                <Link to="/">ул. Ибраимова 96, Бишкек</Link>
                            </li>
                            <li>
                                <Link to="/">tirek.org@gmail.com </Link>
                            </li>
                        </ul>
                    </div>
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
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>License</p>
                    </div>
                    <p className="footer__center">Copyright ©2022 Эне-балага тирек | This web-site is made by
                        Fortylines.io</p>
                    <div className="footer__right">
                        <p>Следите за нами</p>
                        <div className="footer__icons">
                            <img src={inst} alt="inst"/>
                            <img src={facebook} alt="facebook"/>
                            <img src={youtube} alt="youtube"/>
                            <img src={twitter} alt="twitter"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer