import React, { useEffect } from 'react';
import Modal from '../Modal/Modal';
import {ReactComponent as CartSvg} from '../../img/cart.svg'
import {ReactComponent as CloseSvg} from '../../img/close.svg'

import CoffeeCart from './CoffeeCart';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalUsual, hasDiscount, hasDiscountDrip } from '../helpers/hasDiscount';
import { Link } from 'react-router-dom';
import { clearCart, openCart, setIsDiscountedCoffee, setIsDiscountedDrip, setTotalOpt, setTotalReg } from '../../store/cart/cartSlice';

import { ROUTES } from '../../utils/routes';

const Cart = ({style}) => {
    const dispatch = useDispatch();
    let {cartOpen, cart, isDiscounted, totalReg, totalOpt, isDiscountedDrip} = useSelector((state)=> state.cart);
  
    useEffect(()=>{
        const discountedCoffee = hasDiscount(cart);
        const discountedDrip = hasDiscountDrip(cart);
        const reg = calculateTotalUsual(cart).totalReg; 
        const opt = calculateTotalUsual(cart).totalDisc; 
        dispatch(setTotalReg(reg))
        dispatch(setTotalOpt(opt))
        dispatch(setIsDiscountedCoffee(discountedCoffee))
        dispatch(setIsDiscountedDrip(discountedDrip))
    }, [cart, dispatch])

    return (         
        <Modal active={cartOpen} setActive={()=>dispatch(openCart())} style={style}>
            <div className="cart">
                <div className="cart__top">
                    <h2 className="cart__title">Кошик</h2>
                    <div className="cart__close" onClick={() => dispatch(openCart(false))}><CloseSvg/></div>
                </div>
                {!cart.length ? (
                    <div className='cart__empty'>
                        <CartSvg/>
                        <p>ваш кошик пустий</p>
                    </div>
                ):(
                    <>
                        <div className='cart__list'>
                            {cart && cart.map((item)=><CoffeeCart key={item._id + item.select + item.packing} cart={item} isDiscounted={isDiscounted} isDiscountedDrip={isDiscountedDrip}/>)}                                     
                        </div>
                        <div className='cart__total total-cart'>
                            <div className="total-cart__item">
                                <div className="total-cart__title">Загалом:</div>
                                <div className="total-cart__price">{totalReg}₴</div>
                            </div>
                            <div className="total-cart__item">
                                <div className="total-cart__title">до оплати:</div>
                                <div className="total-cart__price">{ totalOpt}₴</div>
                            </div>                           
                        </div>
                        <div className="cart__btns">
                            <Link to={ROUTES.ORDER} onClick={() => dispatch(openCart(false))} className="cart__btn btn">Оформити замовлення</Link>
                            <button className="cart__remove" onClick={() => dispatch(clearCart())}>Очистити корзину</button>
                        </div>
                    </>
                )}

            </div>
        </Modal> 
    );
};

export default React.memo(Cart);