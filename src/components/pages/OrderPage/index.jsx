import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {ReactComponent as CartSvg} from '../../../img/cart.svg'
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg'
import CoffeeCart from '../../Cart/CoffeeCart';
import { ROUTES } from '../../../utils/routes';
import Adress from '../../Post/Adress';
import { createOrder, createOrderOffline } from '../../../store/order/orderSlice';
import { clearCart } from '../../../store/cart/cartSlice';
import PromoCode from '../../Promo';
import { promo, promoOn } from '../../../utils/promo';

const OrderPage = () => {    
    const dispatch = useDispatch();
    let {cart,isDiscountedDrip, isDiscounted, isDiscountedLemonade, totalReg, totalOpt, isPromo, promoSale} = useSelector((state)=> state.cart);

    const [delivery, setDelivery] = useState('Pickup');
    const [payment, setPayment] = useState('Cash');
    const [call, setCall] = useState('CallBack');
    const navigate = useNavigate();

    
    const totalFunc = (total) =>{
        if(isPromo && promoSale.product === 'coffee' && !isDiscounted){
            return total - promo(cart, promoSale.product, promoSale.procent);
        }
        if(isPromo && promoSale.product === 'drip' && !isDiscounted && !isDiscountedDrip){
            return total - promo(cart, promoSale.product, promoSale.procent);
        }      
        if(isPromo && promoSale.product === 'lemonade' && !isDiscounted && !isDiscountedLemonade){
            return total - promo(cart, promoSale.product, promoSale.procent);
        }      
        if(isPromo && promoSale.product === 'merch'){
            return total - promo(cart, promoSale.product, promoSale.procent);
        }     
        return total               
    }

    const totalSale = () =>{
        if(isPromo && promoSale.product === 'coffee' && !isDiscounted){
            return true;
        }
        if(isPromo && promoSale.product === 'drip' && !isDiscounted && !isDiscountedDrip){
            return true;
        }      
        if(isPromo && promoSale.product === 'lemonade' && !isDiscounted && !isDiscountedLemonade){
            return true;
        }      
        if(isPromo && promoSale.product === 'merch'){
            return true;
        }     
        return false 
    }
    const [paymentHtml, setPaymentHtml] = useState('');
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        control
    } = useForm();

    const onSubmit = (data) =>{
        const product = cart.map((item)=>{
            const {_id, title, packing, quantity, select} = item;
            return {_id, title, packing, quantity, select: select ? select : 'none'};         
        })    
        
        const order = {
            ...data,
            order: product,
            total: totalFunc(totalOpt),            
            delivery,
            payment,
            call
        }
        
        if(payment === "OnlinePay"){
            dispatch(createOrder(order))
                .then((response)=>{
                    payment === "OnlinePay" && setPaymentHtml(response.payload);
                    
                })
                .catch((error)=>{
                    console.error("Ошибка при создании заказа:", error);
                })
        }else{
            dispatch(createOrderOffline(order))
                .then((response)=>{
                    dispatch(clearCart())
                    navigate(ROUTES.RESULT, {state:{result: response}})
                }) 
                .catch((error)=>{
                    console.error("Ошибка при создании заказа:", error);
                })    
        }        
    } 
    return (
        <div className='order'>
            <div className="order__container">
            <div className="navigate">
                <Link className='navigate__link' to={ROUTES.HOME}>головна</Link>                
                <ArrowSvg/>
                <div className='navigate__link navigate__link-this'>оформлення замовлення</div>
            </div>
                
                {!cart.length ? (
                    <div className='order__empty'>
                        <h5>Ваш кошик пустий</h5>
                        <CartSvg/>
                        <Link to={ROUTES.COFFEE}>Продовжити покупки</Link>
                    </div>
                ):(
                    <div className='order__main'>                        
                        <div className="order__left">                            
                            <div className="order__select select-order">
                                <h2 className="select-order__title">доставка:</h2>
                                <div className="select-order__radio radio-btns">                               
                                    <label className='radio-btns__label ' htmlFor='pickup'>
                                        <input 
                                        type="radio" 
                                        name="delivery" 
                                        value="Pickup" 
                                        id='pickup' 
                                        checked={delivery === "Pickup"} 
                                        onChange={(e) => setDelivery(e.target.value)} 
                                        className='radio-btns__real'/>
                                        <span className='radio-btns__custom'></span>
                                        Самовивіз (м. Дніпро, вул. Грушевського 50. З понеділка по п’ятницю з 9:00 до 17:00)
                                    </label>
                                    <label className='radio-btns__label' htmlFor='courier'>
                                        <input 
                                        type="radio" 
                                        name="delivery" 
                                        value="Courier" 
                                        id='courier' 
                                        checked={delivery === "Courier"} 
                                        onChange={(e) => setDelivery(e.target.value)} 
                                        className='radio-btns__real'/>
                                        <span className='radio-btns__custom'></span>
                                        Доставка кур'єром(Тільки по Дніпру)
                                    </label>
                                    {delivery === 'Courier' && (<div className='radio-btns__label-info'>(Адресу напишіть у поле додаткова інформація)</div>)}                   
                                    <label className='radio-btns__label' htmlFor='nova-post'>
                                        <input 
                                        type="radio" 
                                        name="delivery" 
                                        value="NovaPost" 
                                        id='nova-post' 
                                        checked={delivery === "NovaPost"} 
                                        onChange={(e) => setDelivery(e.target.value)} 
                                        className='radio-btns__real'/>
                                        <span className='radio-btns__custom'></span>
                                        Нова Пошта
                                    </label>                                
                                </div>
                                {delivery === 'NovaPost' && (<Adress control = {control}/>)}
                            </div>
                            <div className="order__payment select-order">
                                <h2 className="select-order__title">оплата:</h2>
                                <div className="select-order__radio radio-btns">                               
                                    <label className='radio-btns__label ' htmlFor='cash'>
                                        <input 
                                        type="radio" 
                                        name="payment" 
                                        value="Cash" 
                                        id='cash' 
                                        checked={payment === "Cash"} 
                                        onChange={(e)=>setPayment(e.target.value)} 
                                        className='radio-btns__real'/>
                                        <span className='radio-btns__custom'></span>
                                        Готівка при отриманні
                                    </label>                    
                                    <label className='radio-btns__label' htmlFor='score-pay'>
                                        <input 
                                        type="radio" 
                                        name="payment" 
                                        value="ScorePay" 
                                        id='score-pay' 
                                        checked={payment === "ScorePay"} 
                                        onChange={(e)=>setPayment(e.target.value)} 
                                        className='radio-btns__real'/>
                                        <span className='radio-btns__custom'></span>
                                        Оплата на розрахунковий рахунок
                                    </label>      
                                    <label className='radio-btns__label' htmlFor='online-pay'>
                                        <input 
                                        type="radio" 
                                        name="payment" 
                                        value="OnlinePay" 
                                        id='online-pay' 
                                        checked={payment === "OnlinePay"} 
                                        onChange={(e)=>setPayment(e.target.value)} 
                                        className='radio-btns__real'/>
                                        <span className='radio-btns__custom'></span>
                                        Онлайн оплата(LiqPay)
                                    </label>                                
                                                                  
                                </div>
                            </div>


                            <div className="order__form form-order">
                                <form onSubmit={handleSubmit(onSubmit)} className='form-order__form'>
                                    <div className={`form-order__input ${errors?.firstName && "form-order__input-error"}`}>
                                        <input {...register('firstName', {required: true})} placeholder='Ім’я*' type="text"/>
                                    </div>
                                    <div className={`form-order__input ${errors?.lastName && "form-order__input-error"}`}>
                                        <input {...register('lastName', {required: true})} placeholder='Прізвище*' type="text"/>
                                    </div>
                                    <div className={`form-order__input ${errors?.phone && "form-order__input-error"}`}>
                                        <input {...register('phone', {required: true})} placeholder='Номер телефону*' type="text"/>
                                    </div>
                                    <div className={`form-order__input ${errors?.email && "form-order__input-error"}`}>
                                        <input {...register('email', {required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/})} placeholder='Email*' type="text"/>
                                    </div>
                                    <div className={`form-order__input ${errors?.info && "form-order__input-error"}`}>
                                        <textarea {...register('info', {required: delivery === 'Courier' ? true : false})} placeholder='Додаткова інформація'/>
                                    </div>                                  
                                    <div className="form-order__btn">
                                        <button type='submit' className='btn'>Оформити замовлення</button>
                                        {paymentHtml && (
                                            <>
                                                <div className='order__liqpay' dangerouslySetInnerHTML={{__html: paymentHtml}}></div>
                                            </>
                                        )}                                    
                                    </div>
                                </form>
                            </div>
                            <div className="select-order__radio radio-btns">                               
                                <label className='radio-btns__label ' htmlFor='call-back'>
                                    <input 
                                    type="radio" 
                                    name="call" 
                                    value="CallBack" 
                                    id='call-back' 
                                    checked={call === "CallBack"} 
                                    onChange={(e) => setCall(e.target.value)} 
                                    className='radio-btns__real'/>
                                    <span className='radio-btns__custom'></span>
                                    Зателефонувати після замовлення
                                </label>                        
                                <label className='radio-btns__label' htmlFor='not-call-back'>
                                    <input 
                                    type="radio" 
                                    name="call" 
                                    value="NotCallBack" 
                                    id='not-call-back' 
                                    checked={call === "NotCallBack"} 
                                    onChange={(e) => setCall(e.target.value)} 
                                    className='radio-btns__real'/>
                                    <span className='radio-btns__custom'></span>
                                    Можете мені не дзвонити
                                </label>                                
                            </div>
                            
                            {/* СЮДА КНОПКУ */}
                        </div>
                            <div className='order__right'>                                
                                <h2 className="order__title">ваше замовлення</h2>
                                <div className="order__list"> 
                                    {cart && cart.map((item)=>(
                                        <CoffeeCart key={item._id + item.select + item.packing} cart={item} isDiscounted={isDiscounted} isDiscountedDrip={isDiscountedDrip} isDiscountedLemonade={isDiscountedLemonade}/>
                                    ))}
                                </div>                            
                                <div className='order__total total-cart'>
                                    <div className="total-cart__item">
                                        <div className="total-cart__title">Загалом:</div>
                                        <div className="total-cart__price">{totalReg}₴</div>
                                    </div>
                                    <div className="total-cart__item">
                                        <div className="total-cart__title">до оплати:</div>
                                        <div className="total-cart__price total-cart__price-span">{totalFunc(totalOpt, isPromo) }₴ <span className='promo__span'>{totalSale() && `(-${promoSale.procent}% на ${promoOn(promoSale.product)})`}</span></div>
                                    </div>                           
                                </div>
                                <div className="order__select select-order" style={{marginBottom: '0px', marginTop: '25px'}}>
                                    <h2 className="order__title" style={{marginBottom: '20px'}}>Промокод:</h2>
                                    <p >(Не діє при оптовій закупівлі)</p>                               
                                    <PromoCode/>
                                </div>
                            </div>
                        </div>                        
                )}                

            </div>                        
        </div>
    );
};

export default OrderPage;