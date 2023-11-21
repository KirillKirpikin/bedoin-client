import React, { useState } from 'react';
import {ReactComponent as ArrowSvg} from '../../img/arrow.svg';

const SelectType = ({arr,selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className= 'select'>
        <div className= {`select__btn ${isActive && 'select__btn-active'}`} onClick={() => setIsActive(!isActive)}>
            <span>{selected.label}</span>
            <ArrowSvg className='select__arrow'/>
        </div>
        {isActive && (
            <div className= 'select__content'>
                {arr && arr.map(option=>(
                    <div key={option._id} onClick={()=>{
                        setSelected(option)
                        setIsActive(!isActive)
                    }} className= 'select__item'>{option.label}</div>                                    
                ))}
                <div onClick={()=>{
                        setSelected('')
                        setIsActive(!isActive)
                    }} className= 'select__item'>{'Done'}</div>                                                                                                               
            </div>
        )}
        
    </div>
    );
};

export default SelectType;