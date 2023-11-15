import React, { useEffect, useState } from 'react';
import Counter from '../Counter/Counter';
import { BASE_URL_IMG } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { removeItemFromCart, updateQuantity } from '../../store/cart/cartSlice';
import {ReactComponent as CloseSvg} from '../../img/close.svg'
import { Link } from 'react-router-dom';

const CoffeeCart = ({cart, isDiscounted, isDiscountedDrip}) => {
    const [count, setCount] = useState(cart.quantity);
    const dispatch = useDispatch();

    const removeItem = (id)=>{
        dispatch(removeItemFromCart(id));
    }    

    const cartPacking = (pack) => {
        if(pack === 250){
            return '250 гр'
        }else if(pack === 1000 ){
            return '1 кг'  
        }else if(pack === 0){
            return '10 пакетиків'
        } else{
            return 'Standart'
        }
    }

    const linkTo = (item, id) =>{
        if(item === 'drip'){           
            return `/drip/${cart._id}`
        }
        if(item === 'coffee'){
            return `/coffee/${id}`
        }
    }

    const totalActual = (item) =>{
        if(item.product === 'coffee'){
            if(isDiscounted){
                return item.price.opt * count
            }else{
                return item.price.regular * count
            }
        }else if(item.product ==='drip'){
            if(isDiscounted || isDiscountedDrip){
                return item.price.opt * count
            }else{
                return item.price.regular * count
            }
        }else{
            return item.price.regular * count
        }
    } 
    // console.log(cart);

    useEffect(()=>{
        setCount(cart.quantity)
    }, [cart, dispatch]);
    useEffect(()=>{
        dispatch(updateQuantity({_id: cart._id, select: cart.select, packing: cart.packing, quantity: count}))
    },[cart._id,cart.select, cart.packing ,dispatch, count])



    return (
        <div className="cart__product product-cart">            
            <div className="product-cart__main">
                <Link to={linkTo(cart.product, cart._id)} className="product-cart__img">
                    <img src={BASE_URL_IMG + cart.img} alt="#"/>
                </Link>
                <div className="product-cart__info">                                        
                    <Link to={linkTo(cart.product, cart._id)} className="product-cart__name">{cart.title}</Link>
                    {cart.select ? <div className="product-cart__select">Помел: <span>{cart.select}</span></div> : <div style={{height: '30px'}}></div>}
                    <div className="product-cart__select">Упаковка: <span>{cartPacking(cart.packing)}</span></div>
                    <div className="product-cart__bottom">
                        <div className="product-cart__caunter">
                            <Counter count={count} setCount={setCount}/>
                        </div>
                        <div className='product-cart__total'>
                            {cart.product === 'drip' ?
                                (isDiscounted || isDiscountedDrip) && <div className='product-cart__total product-cart__total-old'>{+cart.price.regular * count}</div>
                            : cart.product === 'coffee' ? isDiscounted && <div className='product-cart__total product-cart__total-old'>{+cart.price.regular * count}</div>
                            : null
                            }                            
                            <div className="product-cart__total product-cart__total-actual">{totalActual(cart)} ₴</div>
                        </div>
                    </div>
                </div>
                <div className="product-cart__delete" onClick={()=>removeItem(cart._id + cart.select + cart.packing)}><CloseSvg/></div>
            </div>
        </div>
    );
};

export default CoffeeCart;