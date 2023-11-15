import React from 'react';
import {ReactComponent as TeddySvg} from '../../img/teddy.svg'
import { Link } from 'react-router-dom';

const NotFound = ({product}) => {
    return (
        <div className='not-found'>            
            <div className="not-found__info">
                <h2 className="not-found__title">OOPS</h2>
                <p className="not-found__txt">На жаль, {product} у наявності немає, але ти можеш обрати інший товар</p>
                <div className="not-found__btn">
                    <Link to={'/coffee'} className='btn'>Переглянути каву</Link>
                </div>
            </div>
            <div className="not-found__img">
                <TeddySvg/>
            </div>
                       
        </div>
    );
};

export default NotFound;