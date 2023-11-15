import React, { useState } from 'react';
import {useInView} from 'react-intersection-observer';
import './zoom.scss'
import SpinerImg from '../Spiner/SpinerImg';

const ZoomImage = ({ src }) => {  
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [ref, inView] = useInView({triggerOnce: true});
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleMouseMove = (e) => {
        const imageRect = e.target.getBoundingClientRect();
        const x = (e.clientX - imageRect.left) / imageRect.width;
        const y = (e.clientY - imageRect.top) / imageRect.height;
        setPosition({ x, y });
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };
    return (
        <div ref={ref} className={`zoom ${isZoomed ? 'zoomed' : ''}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {isLoading &&  <SpinerImg/>}
            {inView && <img className={isLoading ? 'img-none' : ''}  onLoad={handleImageLoad}  src={src} alt={src}  style={{ transformOrigin: `${position.x * 100}% ${position.y * 100}%`, transform: isZoomed ? 'scale(2)' : 'scale(1)', transition: 'transform 0.2s ease-in-out' }}/>}                  
        </div>
    );
};


export default ZoomImage;