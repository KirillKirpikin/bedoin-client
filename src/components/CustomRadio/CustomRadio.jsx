import React from 'react';

const CustomRadio = ({value, current, setCurrent}) => {         
    return (
        <div className='radio'>
            {value.map(v=>(<div onClick={()=>setCurrent(v.id)} key={v.id} className={`radio__btn ${current === v.id ? 'radio__btn-active' : ''}`}>{v.value}</div>))}            
        </div>
    );
};

export default CustomRadio;