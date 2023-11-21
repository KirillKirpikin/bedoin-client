import React, { useMemo } from 'react';
import ZoomImage from '../ZoomImage';
import { Link } from 'react-router-dom';
import { BASE_URL_IMG } from '../../utils/constants';
import { ReactComponent as CartSvg } from '../../img/cart.svg';
import Select from '../CustomSelect/Select';
import Counter from '../Counter/Counter';

const OneProduct = ({item, all}) => {
    const {selected, setSelected, handleAdd, count, setCount, product, arr} = all
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const option = useMemo(()=>arr,[])

    return (
        <div className='listProduct__product'>
            <Link to={`/${product}/${item._id}`} className='listProduct__img'>
                <ZoomImage src={BASE_URL_IMG + item.imgs[0]}/>
            </Link>
            {item.type && 
                <div className="listProduct__triangles">
                    {item.type.length > 0 && item.type.map((t)=>(<div key={t._id} className="listProduct__triangle"> <img src={BASE_URL_IMG + t.img} alt={t.label}/></div>))}                    
                </div>
            }                
            <div className="listProduct__main">
                <div className="listProduct__price">{item.price.standart.regular} ₴</div>
                {item.price.standart.opt && <div className="listProduct__opt">Оптове замовлення: {item.price.standart.opt} ₴</div>}
                <div className="listProduct__name">{item.title}</div>
                {product === 'coffee' && <div className="listProduct__info">100% арабіка, Колумбія</div> }
                {arr && <div className="listProduct__select">
                    <Select arr={option} selected={selected} setSelected = {setSelected} />
                </div>}
                <div className="listProduct__bottom">
                    <div className="listProduct__counter">
                        <button className='listProduct__btn listProduct__btn-cart' onClick={handleAdd}><CartSvg/> Додати у кошик</button>
                        <Counter count={count} setCount={setCount}/>
                    </div>              
                </div>               
            </div>
        </div>
    );
};

export default OneProduct;