import React, { useEffect, useState } from 'react';
import {ReactComponent as FasSvg} from '../../img/social/facebook.svg'
import {ReactComponent as InstSvg} from '../../img/social/instagram.svg'
import {ReactComponent as TelegSvg} from '../../img/social/telegram.svg'
import {ReactComponent as YouSvg} from '../../img/social/youtube.svg'
import {ReactComponent as Logo} from '../../img/logo.svg'
import FooterBgBlur from '../../img/footor-blur.jpg';
import FooterBg from '../../img/Screenshot_3.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Footer = () => {
    const [imageSrc, setImageSrc] = useState(FooterBgBlur);
    useEffect(()=>{
        const img = new Image();
        img.src = FooterBg;
        img.onload=()=>{
            setImageSrc(FooterBg)
        };
    },[]);

    return (
        <footer className='footer'>
            <div className="footer__map" style={{background:`url(${imageSrc})50% 0/cover no-repeat`}}>
                <div className="footer__container">
                    <div className="footer__info">
                        <div className="footer__address address-footer">
                            <h3 className="address-footer__title">НАША АДРЕСА:</h3>
                            <div className="address-footer__txt">м. Дніпро, вул. Грушевського 50</div>
                            <a 
                                href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x40dbe32e547c39db:0x86ebb29e3ac92eab?source=g.page.share' 
                                target="blank"
                                rel="noopener noreferrer" 
                                className="address-footer__btn">ПРОКЛАСТИ МАРШРУТ</a>
                        </div>
                        <div className="footer__right right-footer">
                            <div className="right-footer__top">
                                <div className="right-footer__buyer">
                                    <h3 className="right-footer__title">ПОКУПЦЯМ</h3>
                                    <nav className="right-footer__nav">
                                        <ul className="right-footer__list">
                                            <li className="right-footer__item"><Link to={ROUTES.COFFEE}>Кава</Link></li>
                                            <li className="right-footer__item"><Link to={ROUTES.COFFEE}>Мерч</Link></li>
                                            <li className="right-footer__item"><Link to={ROUTES.POLICY}>Політика конфіденційності</Link></li>
                                            <li className="right-footer__item"><Link to={ROUTES.OFFER}>Публічна оферта</Link></li>
                                        </ul>
                                    </nav>                                    
                                </div>
                                <div className="right-footer__contacts">
                                    <h3 className="right-footer__title">КОНТАКТИ</h3>
                                    <div className="right-footer__phone"> <a href="tel:380675001303">+38 (067) 500 13 03</a></div>
                                    <div className="right-footer__mail">coffeebedouin@gmail.com</div>
                                    <div className="right-footer__address">49054, м. Дніпро, вул.<br/>Грушевського 50</div>
                                </div>

                            </div>
                            <ul className="right-footer__socials">
                                <li className="right-footer__social"><a href="https://www.facebook.com/bedoincoffee" rel="noopener noreferrer" target="blank"><FasSvg/></a></li>
                                <li className="right-footer__social"><a href="https://t.me/joinchat/AAAAAExaE5UiUNJbuILusQ" rel="noopener noreferrer" target="blank"><TelegSvg/></a></li>
                                <li className="right-footer__social"><a href="https://www.instagram.com/bedoincoffee/?igshid=MzRlODBiNWFlZA%3D%3D" rel="noopener noreferrer" target="blank"><InstSvg/></a></li>
                                <li className="right-footer__social"><a href="https://youtube.com/@bedoincoffee3120?si=q6nm-_hC2d5rVtFc" rel="noopener noreferrer" target="blank"><YouSvg/></a></li>
                            </ul>
                        </div>
                    </div>                    
                </div>         

            </div>
            <div className="footer__container">
                <div className="footer__bottom bottom-footer">
                    <div className="bottom-footer__top">
                        <div className="bottom-footer__logo"><Logo/></div>
                        <div className="bottom-footer__text">Створення культури споживання натуральної кави для тих, хто шукає нові відчуття</div>
                    </div>
                    <div className="bottom-footer__down">
                        <div className="bottom-footer__txt">Terms and condotions</div>
                        <div className="bottom-footer__txt">© 2022 - Form | All right</div>
                    </div>               
                </div>
            </div>
        </footer>
    );
};

export default Footer;
