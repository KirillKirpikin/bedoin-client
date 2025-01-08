<<<<<<< HEAD
import React, { useEffect } from 'react';
import {ReactComponent as CartSvg} from '../../../img/cart.svg'
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../store/cart/cartSlice';

const ResultPage = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(clearCart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className='result'>
            <div className="result__container">
                <h2 className="result__title">ваше замовлення</h2>
                <div className="result__main">
                    <div className="result__txt">Ваше замовлення {state && state && state.result.payload} відправилось нашим менеджерам. Скоро з вами зв’яжуться</div>
                    <CartSvg/>
                    <Link to={ROUTES.COFFEE}>Продовжити покупки</Link>
                </div>
            </div>            
        </div>
    );
};

=======
import React, { useEffect } from 'react';
import {ReactComponent as CartSvg} from '../../../img/cart.svg'
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../store/cart/cartSlice';

const ResultPage = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(clearCart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className='result'>
            <div className="result__container">
                <h2 className="result__title">ваше замовлення</h2>
                <div className="result__main">
                    <div className="result__txt">Ваше замовлення {state && state && state.result.payload} відправилось нашим менеджерам. Скоро з вами зв’яжуться</div>
                    <CartSvg/>
                    <Link to={ROUTES.COFFEE}>Продовжити покупки</Link>
                </div>
            </div>            
        </div>
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default ResultPage;