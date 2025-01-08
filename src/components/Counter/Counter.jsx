<<<<<<< HEAD
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

=======
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

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default React.memo(Counter);