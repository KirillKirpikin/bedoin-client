import React, { useState } from 'react';
import {ReactComponent as ArrowSvg} from '../../img/arrow.svg';

const SelectSlide = ({arr,selected, setSelected, setCoffee}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className= 'select'>
        <div className= {`select__btn ${isActive && 'select__btn-active'}`} onClick={() => setIsActive(!isActive)}>
            <span>{selected}</span>
            <ArrowSvg className='select__arrow'/>
        </div>
        {isActive && (
            <div className= 'select__content'>
                {arr && arr.map(option=>(
                    <div key={option._id} onClick={()=>{
                        setCoffee(option);
                        setSelected(option.title)
                        setIsActive(!isActive)
                    }} className= 'select__item'>{option.title}</div>                                    
                ))}                                                                                                               
            </div>
        )}
        
    </div>
    );
};

export default React.memo(SelectSlide);