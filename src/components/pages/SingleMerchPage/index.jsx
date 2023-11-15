import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as CartSvg} from '../../../img/cart.svg';
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg';
import { ROUTES } from '../../../utils/routes';
import { useGetMerchQuery } from '../../../store/api/merch.api';
import Counter from '../../Counter/Counter';
import SliderSingle from '../../Sliders/SliderSingle/SliderSingle';
import Select from '../../CustomSelect/Select';
import ContactsBorder from '../../ContactsBorder/ContactsBorder';
import { useDispatch } from 'react-redux';
import { addItemtoCart, openCart } from '../../../store/cart/cartSlice';

const SingleMerchPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {data, isLoading, isFetching, isSuccess} = useGetMerchQuery({id});
    const [count, setCount] = useState(1);
    const [selected, setSelected] = useState('');

    const memoizedImages = useMemo(()=>{
        return data ? [...data.imgs]: [];
    }, [data])

    
    const handleAdd = ()=>{
        let payload ={
            _id: data._id,
            product: 'merch',
            packing: 0,
            title: data.title,
            price: data.price.standart,
            img: data.imgs[0],
            select: selected,
            quantity: count
        }
        dispatch(addItemtoCart(payload))
        dispatch(openCart(true))
    }


    useEffect(()=>{    
        if(!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME);    
        }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isFetching, isLoading, isSuccess])

    useEffect(()=>{
        if(!isLoading){
            setSelected(data.size[0])
        }
    },[data, isLoading])

    return (
        <div className='single-product'>
            <div className="single-product__container">
                <div className="navigate">
                    <Link className='navigate__link' to={ROUTES.HOME}>головна</Link>
                    <ArrowSvg/>
                    <Link className='navigate__link' to={ROUTES.MERCH}>мерч</Link>
                    <ArrowSvg/>
                    <Link className='navigate__link navigate__link-this'>{!data ? 'мерч' :data.title}</Link>                    
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
                                        <p className="main-product__tit">100% арабіка</p>
                                        <div className="main-product__prices">
                                            <div className="main-product__price">
                                                <p className="main-product__tit">Звичайна ціна</p>
                                                <div>{data.price.standart.regular} ₴</div>
                                            </div>
                                        </div>
                                        <div className="main-product__options">
                                            <div className='main-product__select'>
                                                <Select size={data.size} selected={selected} setSelected = {setSelected} /> 
                                            </div>                                            
                                        </div>
                                        <div className="main-product__counter">
                                            <button className='main-product__btn listProduct__btn' onClick={handleAdd}><CartSvg/> Додати у кошик</button>
                                            <Counter count={count} setCount={setCount}/>
                                        </div>                                
                                    </div>
                                </div>
                            </div>                            
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
            <ContactsBorder/>             
        </div>
    );
};

export default SingleMerchPage;