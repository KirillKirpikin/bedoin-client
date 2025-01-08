<<<<<<< HEAD
import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import { ReactComponent as CartSvg } from "../../img/cart.svg";
import { ReactComponent as CloseSvg } from "../../img/close.svg";

import CoffeeCart from "./CoffeeCart";
import { useDispatch, useSelector } from "react-redux";
import {
    calculateTotalUsual,
    hasDiscount,
    hasDiscountDrip,
    hasDiscountLemon,
} from "../helpers/hasDiscount";
import { Link } from "react-router-dom";
import {
    clearCart,
    openCart,
    setIsDiscountedCoffee,
    setIsDiscountedDrip,
    setIsDiscountedLemonade,
    setTotalOpt,
    setTotalReg,
} from "../../store/cart/cartSlice";

import { ROUTES } from "../../utils/routes";

const CART_EXPIRATION_TIME = 30 * 60 * 1000;

const Cart = ({ style }) => {
    const dispatch = useDispatch();
    let {
        cartOpen,
        cart,
        isDiscounted,
        totalReg,
        totalOpt,
        isDiscountedDrip,
        isDiscountedLemonade,
    } = useSelector((state) => state.cart);

    const saveCartToLocalStorage = (cart) => {
        const expirationTime = new Date().getTime() + CART_EXPIRATION_TIME;
        const cartData = {
            cart,
            expiration: expirationTime,
        };
        localStorage.setItem("cart", JSON.stringify(cartData));
    };

    const checkCartExpiration = () => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            const parsedCart = JSON.parse(cartData);
            const currentTime = new Date().getTime();
            if (currentTime > parsedCart.expiration) {
                dispatch(clearCart());
                localStorage.removeItem("cart"); // Очистить localStorage
            }
        }
    };

    useEffect(() => {
        // Проверяем корзину каждые 30 секунд
        const interval = setInterval(() => {
            console.log(1);
            checkCartExpiration();
        }, 300 * 1000); // 30 секунд

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            saveCartToLocalStorage(cart); // Сохраняем корзину при каждом изменении
        }
    }, [cart]);

    useEffect(() => {
        const discountedCoffee = hasDiscount(cart);
        const discountedDrip = hasDiscountDrip(cart);
        const discountedLemon = hasDiscountLemon(cart);
        const reg = calculateTotalUsual(cart).totalReg;
        const opt = calculateTotalUsual(cart).totalDisc;
        dispatch(setTotalReg(reg));
        dispatch(setTotalOpt(opt));
        dispatch(setIsDiscountedCoffee(discountedCoffee));
        dispatch(setIsDiscountedDrip(discountedDrip));
        dispatch(setIsDiscountedLemonade(discountedLemon));
    }, [cart, dispatch]);

    return (
        <Modal
            active={cartOpen}
            setActive={() => dispatch(openCart())}
            style={style}
        >
            <div className="cart">
                <div className="cart__top">
                    <h2 className="cart__title">Кошик</h2>
                    <div
                        className="cart__close"
                        onClick={() => dispatch(openCart(false))}
                    >
                        <CloseSvg />
                    </div>
                </div>
                {!cart.length ? (
                    <div className="cart__empty">
                        <CartSvg />
                        <p>ваш кошик пустий</p>
                    </div>
                ) : (
                    <>
                        <div className="cart__list">
                            {cart &&
                                cart.map((item) => (
                                    <CoffeeCart
                                        key={
                                            item._id +
                                            item.select +
                                            item.packing
                                        }
                                        cart={item}
                                        isDiscounted={isDiscounted}
                                        isDiscountedDrip={isDiscountedDrip}
                                        isDiscountedLemonade={
                                            isDiscountedLemonade
                                        }
                                    />
                                ))}
                        </div>
                        <div className="cart__total total-cart">
                            <div className="total-cart__item">
                                <div className="total-cart__title">
                                    Загалом:
                                </div>
                                <div className="total-cart__price">
                                    {totalReg}₴
                                </div>
                            </div>
                            <div className="total-cart__item">
                                <div className="total-cart__title">
                                    до оплати:
                                </div>
                                <div className="total-cart__price">
                                    {totalOpt}₴
                                </div>
                            </div>
                        </div>
                        <div className="cart__btns">
                            <Link
                                to={ROUTES.ORDER}
                                onClick={() => dispatch(openCart(false))}
                                className="cart__btn btn"
                            >
                                Оформити замовлення
                            </Link>
                            <button
                                className="cart__remove"
                                onClick={() => dispatch(clearCart())}
                            >
                                Очистити корзину
                            </button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default React.memo(Cart);
=======
import React, { useEffect } from 'react';
import Modal from '../Modal/Modal';
import {ReactComponent as CartSvg} from '../../img/cart.svg'
import {ReactComponent as CloseSvg} from '../../img/close.svg'

import CoffeeCart from './CoffeeCart';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalUsual, hasDiscount, hasDiscountDrip, hasDiscountLemon } from '../helpers/hasDiscount';
import { Link } from 'react-router-dom';
import { clearCart, openCart, setIsDiscountedCoffee, setIsDiscountedDrip, setIsDiscountedLemonade,setTotalOpt, setTotalReg } from '../../store/cart/cartSlice';

import { ROUTES } from '../../utils/routes';

const Cart = ({style}) => {
    const dispatch = useDispatch();
    let {cartOpen, cart, isDiscounted, totalReg, totalOpt, isDiscountedDrip, isDiscountedLemonade} = useSelector((state)=> state.cart);
  
    useEffect(()=>{
        const discountedCoffee = hasDiscount(cart);
        const discountedDrip = hasDiscountDrip(cart);
        const discountedLemon = hasDiscountLemon(cart)
        const reg = calculateTotalUsual(cart).totalReg; 
        const opt = calculateTotalUsual(cart).totalDisc; 
        dispatch(setTotalReg(reg))
        dispatch(setTotalOpt(opt))
        dispatch(setIsDiscountedCoffee(discountedCoffee))
        dispatch(setIsDiscountedDrip(discountedDrip))
        dispatch(setIsDiscountedLemonade(discountedLemon))
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
                            {cart && cart.map((item)=><CoffeeCart key={item._id + item.select + item.packing} cart={item} isDiscounted={isDiscounted} isDiscountedDrip={isDiscountedDrip} isDiscountedLemonade={isDiscountedLemonade}/>)}                                     
                        </div>
                        <div className='cart__total total-cart'>
                            <div className="total-cart__item">
                                <div className="total-cart__title">Загалом:</div>
                                <div className="total-cart__price">{totalReg}₴</div>
                            </div>
                            <div className="total-cart__item">
                                <div className="total-cart__title">до оплати:</div>
                                <div className="total-cart__price">{totalOpt}₴</div>
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
>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
