import React, { useCallback, useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {ReactComponent as CartSvg} from '../../../img/cart.svg'
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg'
import { BASE_URL_IMG, SLIDER_BUTTON_TYPES } from '../../../utils/constants';

import 'swiper/css';
import { useGetAllCoffeeQuery } from '../../../store/api/api';
import { randomProduct } from '../../helpers/randomProduct';
import { Link } from 'react-router-dom';
import ZoomImage from '../../ZoomImage';

const SliderOpt = () => { 
    const {PREV, NEXT} = SLIDER_BUTTON_TYPES; 
    const optSliderRef = useRef();
    const {data = []} = useGetAllCoffeeQuery();
    const filtered = data.filter((item)=> item.imgs_kg && item.imgs_kg.length > 0)

    const products = randomProduct(filtered); 
    const handleButtonClick =  useCallback((type) =>{
        if(!optSliderRef.current) return;

        const {swiper} = optSliderRef.current;
        type ===  NEXT ? swiper.slideNext() : swiper.slidePrev()
    }, [NEXT])

    return (
        <div className='home-opt'>
            <div className="home-opt__container">
                <h3 className="home-opt__subtitle">При замовленні від 6 кілограм кави - діє оптовий прайс на каву, безкоштовна доставка</h3>
                <h2 className="home-opt__title">КОМБIНУЙ СМАКИ ТА ОТРИМУЙ ЗНИЖКУ</h2>
                <Swiper
                    ref={optSliderRef}  
                    slidesPerView={1}
                    spaceBetween={0}
                    breakpoints={{
                        680: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        },
                        1001: {
                        slidesPerView: 3,
                        spaceBetween: 13,
                        },
                        1170: {
                        slidesPerView: 3,
                        spaceBetween: 77,
                        },
                    }}
                    className="slider-opt"
                    navigation
                    modules={[Navigation]}                                
                >    

                    {products.length && products.map((item) => (
                        <SwiperSlide key={item._id}>
                            <div className='slider-opt__content'>
                                <Link to={`/coffee/${item._id}`} state={{some: 1}} className='slider-opt__img'>
                                    <ZoomImage src={BASE_URL_IMG + item.imgs_kg[0]}/>
                                </Link>
                                <div className="slider-opt__triangles">                                                                     
                                    {item.type.length > 0 && item.type.map((t)=>(<div key={t._id} className="slider-opt__triangle"> <img src={BASE_URL_IMG + t.img} alt={t.label}/></div>))}
                                </div> 
                                <div className="slider-opt__bottom">
                                    <div className="slider-opt__prices">
                                        <div className="slider-opt__left">{item.price.kg.regular} ₴</div>
                                        <div className="slider-opt__right">{item.price.standart.regular * 4} ₴</div>
                                    </div>
                                    <h4 className='slider-opt__name'>{item.title}</h4>
                                    <p className="slider-opt__txt">100% арабіка, Колумбія</p>
                                    <Link to={`/coffee/${item._id}`} state={{some: 1}} className="slider-opt__btn">
                                        <button className='btn'>Додати у кошик <CartSvg/></button>
                                    </Link>
                                </div>

                            </div>
                        </SwiperSlide>                     
                    ))}             
                                         
                    <div className='slider-opt__navigation'>
                        <div className='slider-opt__prev' onClick={()=>handleButtonClick(PREV)} ><ArrowSvg/></div>
                        <div className='slider-opt__next' onClick={()=>handleButtonClick(NEXT)} ><ArrowSvg/></div>
                    </div>                      
                </Swiper>
            </div>            
        </div>
    );
};

export default SliderOpt;