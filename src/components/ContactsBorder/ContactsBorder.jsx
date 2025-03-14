import React from 'react';
import {ReactComponent as GpsSvg} from '../../img/gps.svg';
import {ReactComponent as FasSvg} from '../../img/social/facebook.svg';
import {ReactComponent as InstSvg} from '../../img/social/instagram.svg';
import {ReactComponent as TelegSvg} from '../../img/social/telegram.svg';
import {ReactComponent as YouSvg} from '../../img/social/youtube.svg';

const ContactsBorder = () => {
    return (
        <div className="border-contacts">
            <div className="border-contacts__container">
                <div className="border-contacts__bar">
                    <div className="border-contacts__socials">
                        <div className="border-contacts__social"><a target="blank" href="https://t.me/joinchat/AAAAAExaE5UiUNJbuILusQ"><TelegSvg/></a></div>
                        <div className="border-contacts__social"><a target="blank" href="https://www.instagram.com/bedoincoffee/?igshid=MzRlODBiNWFlZA%3D%3D"><InstSvg/></a></div>
                        <div className="border-contacts__social"><a target="blank" href="https://www.facebook.com/bedoincoffee"><FasSvg/></a></div>
                        <div className="border-contacts__social border-contacts__social-last"><a target="blank" href="https://youtube.com/@bedoincoffee3120?si=q6nm-_hC2d5rVtFc"><YouSvg/></a></div>
                    </div>
                    <div className="border-contacts__phone"> <a href="tel:380675001303">+38 (067) 500 13 03</a></div>
                    <div className="border-contacts__address"><GpsSvg/> Днiпро,  вул. Грушевського 50</div>
                </div>
            </div>  
        </div>
    );
};

export default ContactsBorder;



