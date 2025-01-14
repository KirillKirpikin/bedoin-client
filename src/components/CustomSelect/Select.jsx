import React, { useState } from "react";
import { ReactComponent as ArrowSvg } from "../../img/arrow.svg";

const Select = ({ arr, selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="select">
            <div
                className={`select__btn ${isActive && "select__btn-active"}`}
                onClick={() => setIsActive(!isActive)}
            >
                <span>{selected === null ? "Оберіть" : selected}</span>
                <ArrowSvg className="select__arrow" />
            </div>
            {isActive && (
                <div className="select__content">
                    {arr &&
                        arr.map((option) => (
                            <div
                                key={option}
                                onClick={() => {
                                    setSelected(option);
                                    setIsActive(!isActive);
                                }}
                                className="select__item"
                            >
                                {option}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default React.memo(Select);
