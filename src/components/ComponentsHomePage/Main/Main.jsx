<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Slider from '../../Sliders/Slider/Slider';
import BgSmall from "../../../img/bg-blur.jpg";
import BgMin from "../../../img/bg-minMin.jpg";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';

const Main = () => {
    const [imageSrc, setImageSrc] = useState(BgSmall);

    useEffect(()=>{
        const img = new Image();
        img.src = BgMin;
        img.onload=()=>{
            setImageSrc(BgMin)
        };
    },[])

    return (
        <section className='home-main' style={{background:`url(${imageSrc})  0 0/cover no-repeat`}}>
            <div className='home-main__container'>
                <div className='home-main__info'>
                    <h1 className='home-main__title'>BEDOIN COFFEE</h1>
                    <p className='home-main__txt'>Виробництво і продаж якісної кави в Україні</p>
                    <div className='home-main__btns'>
                        <Link to={ROUTES.COFFEE} className='btn'>Перейти в магазин</Link>
                    </div>
                </div>                
                <Slider/>               
            </div>
        </section>
    );
};

=======
import React, { useEffect, useState } from 'react';
import Slider from '../../Sliders/Slider/Slider';
import BgSmall from "../../../img/bg-blur.jpg";
import BgMin from "../../../img/bg-minMin.jpg";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';

const Main = () => {
    const [imageSrc, setImageSrc] = useState(BgSmall);

    useEffect(()=>{
        const img = new Image();
        img.src = BgMin;
        img.onload=()=>{
            setImageSrc(BgMin)
        };
    },[])

    return (
        <section className='home-main' style={{background:`url(${imageSrc})  0 0/cover no-repeat`}}>
            <div className='home-main__container'>
                <div className='home-main__info'>
                    <h1 className='home-main__title'>BEDOIN COFFEE</h1>
                    <p className='home-main__txt'>Виробництво і продаж якісної кави в Україні</p>
                    <div className='home-main__btns'>
                        <Link to={ROUTES.COFFEE} className='btn'>Перейти в магазин</Link>
                    </div>
                </div>                
                <Slider/>               
            </div>
        </section>
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default Main;