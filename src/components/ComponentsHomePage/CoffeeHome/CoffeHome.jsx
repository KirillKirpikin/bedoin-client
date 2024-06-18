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
                {item.type.length > 0 && item.type.map((t)=>(<div key={t._id} className="list-coffe__triangle"> <img src={BASE_URL_IMG + t.img} alt={t.label}/></div>))}                
            </div>                
            <div className="list-coffe__bottom">
                <div className="list-coffe__price">{item.price.standart.regular} ₴</div>
                <div className="list-coffe__opt">Оптове замовлення: {item.price.standart.opt} ₴</div>
                <div className="list-coffe__name">{item.title}</div>
               <div className="list-coffe__info">100% арабіка, {item.country}</div> 
                <Link to={`/coffee/${item._id}`} className='list-coffe__btn'>
                    <button className='btn btn-cart'>Додати у кошик <CartSvg/> </button>
                </Link>              
            </div>
        </div>
    );
};

export default CoffeHome;
