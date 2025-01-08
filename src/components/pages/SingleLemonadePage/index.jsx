<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg';
import {ReactComponent as CartSvg} from '../../../img/cart.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../../utils/routes';
import SliderSingle from '../../Sliders/SliderSingle/SliderSingle';
import { addDripToCart, openCart } from '../../../store/cart/cartSlice';


import { useGetLemonadeQuery } from '../../../store/api/lemonade.api';
import Counter from '../../Counter/Counter';


const SingleLemonadePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data, isLoading, isFetching, isSuccess} = useGetLemonadeQuery({id});
    const [count, setCount] = useState(24);

    const memoizedImages = useMemo(()=>{
        return data ? [...data.imgs]: [];
    }, [data])

    const handleAdd = () =>{
        let payload ={
            _id: data._id,
            product: 'lemonade',
            packing: 22,
            title: data.title,
            price: data.price.standart,
            img: data.imgs[0],            
            quantity: count
        }
        dispatch(addDripToCart(payload))
        dispatch(openCart(true));
    }
    useEffect(()=>{    
        if(!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME);    
        }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isFetching, isLoading, isSuccess])
    return (
        <div className='single-product'>
            <div className="single-product__container">
                <div className="navigate">
                    <Link className='navigate__link' to={ROUTES.HOME}>Головна</Link>
                    <ArrowSvg/>
                    <Link className='navigate__link' to={ROUTES.LEMONADE}>Напої</Link>
                    <ArrowSvg/>
                    <Link className='navigate__link navigate__link-this'>{!data ? 'Напої' :data.title}</Link>                    
                </div>
                {isLoading ?
                    <div>Loading...</div>
                    : data ? (
                        <>
                            <div className="single-product__main main-product">
                                <div className="main-product__top">
                                    <div className="main-product__slider">
                                        <SliderSingle img={memoizedImages}/>
                                    </div>
                                    <div className="main-product__info">
                                        <h2 className="main-product__title">{data.title}</h2>
                                        <p className="main-product__lildescr">{data.short_description}</p>
                                        <div className="main-product__prices">
                                            <div className="main-product__price">
                                                <p className="main-product__tit">Звичайна ціна</p>
                                                <div>{data.price.standart.regular} ₴</div>
                                            </div>
                                            <div className="main-product__price">
                                                <p className="main-product__tit">Оптова ціна</p>
                                                <span>(Від 24 шт)</span>
                                                <div>{data.price.standart.opt} ₴</div>
                                            </div>
                                        </div>
                                        <div className="main-product__counter">
                                            <button className='main-product__btn listProduct__btn' onClick={handleAdd}><CartSvg/> Додати у кошик</button>
                                            <Counter count={count} setCount={setCount} min={24}/>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <h3 className="info-product__title">бiльше про НапоЇ</h3>
                            <p className="info-product__txt">{data.description} </p>
                            {data.info.length > 0 && (
                                <div className="info-product__list list-product">                                
                                    <ul className='list-product__list'>
                                        {data.info && data.info.map(i=>(<li key={i._id} className='list-product__item'>{i.name}: {i.text}</li>))}                                        
                                    </ul>
                                </div>
                            )}

                        </>
                    ):<div>Not found</div>                
                }
            </div>
        </div>
    );
};

=======
import { useEffect, useMemo, useState } from 'react';
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg';
import {ReactComponent as CartSvg} from '../../../img/cart.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../../utils/routes';
import SliderSingle from '../../Sliders/SliderSingle/SliderSingle';
import { addDripToCart, openCart } from '../../../store/cart/cartSlice';


import { useGetLemonadeQuery } from '../../../store/api/lemonade.api';
import Counter from '../../Counter/Counter';


const SingleLemonadePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data, isLoading, isFetching, isSuccess} = useGetLemonadeQuery({id});
    const [count, setCount] = useState(24);

    const memoizedImages = useMemo(()=>{
        return data ? [...data.imgs]: [];
    }, [data])

    const handleAdd = () =>{
        let payload ={
            _id: data._id,
            product: 'lemonade',
            packing: 22,
            title: data.title,
            price: data.price.standart,
            img: data.imgs[0],            
            quantity: count
        }
        dispatch(addDripToCart(payload))
        dispatch(openCart(true));
    }
    useEffect(()=>{    
        if(!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME);    
        }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isFetching, isLoading, isSuccess])
    return (
        <div className='single-product'>
            <div className="single-product__container">
                <div className="navigate">
                    <Link className='navigate__link' to={ROUTES.HOME}>Головна</Link>
                    <ArrowSvg/>
                    <Link className='navigate__link' to={ROUTES.LEMONADE}>Напої</Link>
                    <ArrowSvg/>
                    <Link className='navigate__link navigate__link-this'>{!data ? 'Напої' :data.title}</Link>                    
                </div>
                {isLoading ?
                    <div>Loading...</div>
                    : data ? (
                        <>
                            <div className="single-product__main main-product">
                                <div className="main-product__top">
                                    <div className="main-product__slider">
                                        <SliderSingle img={memoizedImages}/>
                                    </div>
                                    <div className="main-product__info">
                                        <h2 className="main-product__title">{data.title}</h2>
                                        <p className="main-product__lildescr">{data.short_description}</p>
                                        <div className="main-product__prices">
                                            <div className="main-product__price">
                                                <p className="main-product__tit">Звичайна ціна</p>
                                                <div>{data.price.standart.regular} ₴</div>
                                            </div>
                                            <div className="main-product__price">
                                                <p className="main-product__tit">Оптова ціна</p>
                                                <span>(Від 24 шт)</span>
                                                <div>{data.price.standart.opt} ₴</div>
                                            </div>
                                        </div>
                                        <div className="main-product__counter">
                                            <button className='main-product__btn listProduct__btn' onClick={handleAdd}><CartSvg/> Додати у кошик</button>
                                            <Counter count={count} setCount={setCount} min={24}/>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <h3 className="info-product__title">бiльше про НапоЇ</h3>
                            <p className="info-product__txt">{data.description} </p>
                            {data.info.length > 0 && (
                                <div className="info-product__list list-product">                                
                                    <ul className='list-product__list'>
                                        {data.info && data.info.map(i=>(<li key={i._id} className='list-product__item'>{i.name}: {i.text}</li>))}                                        
                                    </ul>
                                </div>
                            )}

                        </>
                    ):<div>Not found</div>                
                }
            </div>
        </div>
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default SingleLemonadePage;