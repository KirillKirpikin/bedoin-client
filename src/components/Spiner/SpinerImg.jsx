import React from 'react';
import './spinerImg.scss'

const SpinerImg = ({mini}) => {
    return (
        <div className={`skeleton ${mini && 'skeleton-mini'}` }>
            <div className='skeleton__object'></div>
        </div>
    );
};

export default SpinerImg;