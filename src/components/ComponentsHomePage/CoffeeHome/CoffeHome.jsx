import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL_IMG } from '../../../utils/constants';
import { ReactComponent as CartSvg } from '../../../img/cart.svg';
import ZoomImage from '../../ZoomImage';
const CoffeHome = ({item}) => {
    return (
        <div className='list-coffe__product'>
            <Link to={`/coffee/${item._id}`} className='list-coffe__img'>
                <ZoomImage src={BASE_URL_IMG + item.imgs[0]}/>
            </Link>
            <div className="list-coffe__triangles">
                {item.type.length > 0 && item.type.slice(-3).map((t, i)=>(<div key={i} className="list-coffe__triangle">{t}</div>))}                
            </div>                
            <div className="list-coffe__bottom">
                <div className="list-coffe__price">{item.price.standart.regular} ₴</div>
                <div className="list-coffe__opt">Оптове замовлення: {item.price.standart.opt} ₴</div>
                <div className="list-coffe__name">{item.title}</div>
                <div className="list-coffe__info">100% арабіка, Колумбія</div> 
                <Link to={`/coffee/${item._id}`} className='list-coffe__btn'>
                    <button className='btn btn-cart'>Додати у кошик <CartSvg/> </button>
                </Link>              
            </div>
        </div>
    );
};

export default CoffeHome;