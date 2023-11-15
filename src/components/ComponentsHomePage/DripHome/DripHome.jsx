import React from 'react';
import { BASE_URL_IMG } from '../../../utils/constants';
import { Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../../../img/cart.svg';
import ZoomImage from '../../ZoomImage';
const DripHome = ({item}) => {

    return (
        <div className='list-drip__product' >
            <Link to={`/drip/${item._id}`} className='list-drip__img'>                
                <ZoomImage src={BASE_URL_IMG + item.imgs[0]}/>
            </Link>
            <div className="list-drip__bottom">
                <div className="list-drip__price">{item.price.standart.regular} ₴</div>
                <div className="list-drip__opt">Оптове замовлення: {item.price.standart.opt} ₴</div>
                <div className="list-drip__name">{item.title}</div>
                <div className="list-drip__info">100% арабіка, Колумбія</div>
                <Link to={`/drip/${item._id}`} className="list-drip__btn">
                    <button className='btn btn-cart'>Додати у кошик <CartSvg/></button>
                </Link> 
            </div>
            
        </div>
    );
};

export default DripHome;