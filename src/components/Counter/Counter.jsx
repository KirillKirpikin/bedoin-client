import React from 'react';

const Counter = ({count, setCount, min}) => {
    return (
        <div className='counter'>
            <button onClick={()=>count >(min ? min : 1) && setCount((prev)=> prev - 1) }>-</button>
            <span>{count}</span>
            <button onClick={()=> setCount((prev)=> prev + 1) }>+</button>
        </div>
    );
};

export default React.memo(Counter);