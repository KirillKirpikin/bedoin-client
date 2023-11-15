import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BASE_URL_IMG } from '../../../utils/constants';
import SpinerImg from '../../Spiner/SpinerImg';

const SliderSingle = ({img, currentRadio}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMini, setIsMini] = useState(true);
    const slideRef = useRef();   
    
    useEffect(()=>{
        if(!slideRef.current) return;
        const {swiper} = slideRef.current;
        if(currentRadio === 2 && img.length > 2){
            swiper.slideTo(2);            
        }else if(currentRadio === 1){
            swiper.slideTo(0); 
        }
    },[currentRadio, img.length])



    return (
        <>
            <Swiper
                ref={slideRef}
                style={{
                '--swiper-navigation-color': '#415167',
                '--swiper-pagination-color': '#415167',
                }}                
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="slider-single"
                
            >
                {img.map((i)=>(
                    <SwiperSlide key={i}>
                        {isLoading && <SpinerImg/>}
                        <img onLoad={()=>setIsLoading(false)} className={isLoading ? 'img-none' : ''} src={BASE_URL_IMG + i} alt='#'/>
                    </SwiperSlide>
                ))}                
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="slider-thumb"
            >
                {img.map((i)=>(
                    <SwiperSlide key={i}>
                        {isMini && <SpinerImg mini={true}/>}
                        <img onLoad={()=>setIsMini(false)} className={isMini ? 'img-none' : ''} src={BASE_URL_IMG + i} alt='#'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default React.memo(SliderSingle);
