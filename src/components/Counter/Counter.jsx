import React from "react";

const Counter = ({ count, setCount, min, isLemonade = false }) => {
    const handleIncrement = () => {
        if (isLemonade) {
            if (count < 24) {
                setCount((prev) => prev + 1);
            } else {
                setCount((prev) => prev + 12);
            }
        } else {
            setCount((prev) => prev + 1);
        }
    };
    const handleDecrement = () => {
        if (isLemonade) {
            if (count > 24) {
                setCount((prev) => Math.max(prev - 12, min));
            } else if (count > min) {
                setCount((prev) => prev - 1);
            }
        } else {
            if (count > min) {
                setCount((prev) => prev - 1);
            }
        }
    };
    return (
        <div className="counter">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default React.memo(Counter);
