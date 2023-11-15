import React from 'react';

const Counter = ({count, setCount}) => {
    return (
        <div className='counter'>
            <button onClick={()=>count > 1 && setCount((prev)=> prev - 1) }>-</button>
            <span>{count}</span>
            <button onClick={()=> setCount((prev)=> prev + 1) }>+</button>
        </div>
    );
};

export default React.memo(Counter);