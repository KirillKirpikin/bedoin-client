import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
const MerchHome = () => {
    return (
        <div className='home-merch'>
            <div className="home-merch__bg">
                <div className="home-merch__container">
                    <div className="home-merch__info">
                        <div className="home-merch__text"> 
                            <h2 className="home-merch__title">МЕРЧ ТА АКСЕСУАРИ</h2>
                            <div className="home-merch__txt">Будь “BE DO IN” разом з нами! Все, від крутих термочашок до стильних шоперів.</div>

                        </div>
                        <div className="home-merch__btn">
                            <Link to={ROUTES.MERCH} className="btn">Переглянути мерч</Link>
                        </div>
                    </div>
                    <div className="home-merch__img">
                        <img src="merch.png" alt="#"/>
                    </div>
                </div>            

            </div>
        </div>
    );
};

export default MerchHome;