import React, { useState } from "react";

const Tabs = ({ data }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className="tabs">
            <div className="tabs__btns">
                {data.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => toggleTab(index)}
                        className={toggleState === index ? "active-tab" : ""}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className="tabs__body">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={
                            toggleState === index
                                ? "tabs__body-info tabs__body-active"
                                : "tabs__body-info"
                        }
                    >
                        {item.info.map((i, index) => (
                            <div className="tabs__body-items" key={index}>
                                <h5>{i.name}: </h5>
                                <p>{i.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
