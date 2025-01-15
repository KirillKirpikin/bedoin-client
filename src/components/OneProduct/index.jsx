import React, { useMemo } from "react";
import ZoomImage from "../ZoomImage";
import { Link } from "react-router-dom";
import { BASE_URL_IMG } from "../../utils/constants";
import { ReactComponent as CartSvg } from "../../img/cart.svg";
import Select from "../CustomSelect/Select";
import Counter from "../Counter/Counter";

const OneProduct = ({ item, all, min }) => {
    const {
        selected,
        setSelected,
        handleAdd,
        count,
        setCount,
        currentRadio,
        setCurrentRadio,
        product,
        arr,
    } = all;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const option = useMemo(() => arr, []);

    return (
        <div className="listProduct__product">
            <Link to={`/${product}/${item._id}`} className="listProduct__img">
                <ZoomImage src={BASE_URL_IMG + item.imgs[0]} />
            </Link>
            {item.type && (
                <div className="listProduct__triangles">
                    {item.type.length > 0 &&
                        item.type.map((t) => (
                            <div key={t._id} className="listProduct__triangle">
                                {" "}
                                <img src={BASE_URL_IMG + t.img} alt={t.label} />
                            </div>
                        ))}
                </div>
            )}
            <div className="listProduct__main">
                <div className="listProduct__price">
                    {product === "coffee"
                        ? currentRadio === 250
                            ? item.price.standart.regular
                            : item.price.kg.regular
                        : item.price.standart.regular}{" "}
                    ₴
                </div>
                {item.price.standart.opt && (
                    <div className="listProduct__opt">
                        Оптове замовлення:{" "}
                        {product === "coffee"
                            ? currentRadio === 250
                                ? item.price.standart.opt
                                : item.price.kg.opt
                            : item.price.standart.opt}{" "}
                        ₴
                    </div>
                )}
                <div className="listProduct__name">{item.title}</div>
                {product === "coffee" && (
                    <div className="listProduct__info">
                        100% арабіка, {item.country}
                    </div>
                )}
                {arr && (
                    <div className="listProduct__select">
                        <Select
                            arr={option}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </div>
                )}
                {product === "coffee" && (
                    <div className="radio" style={{ marginBottom: "10px" }}>
                        <button
                            className={`radio__btn ${
                                currentRadio === 250 ? "radio__btn-active" : ""
                            }`}
                            onClick={() => setCurrentRadio(250)}
                        >
                            250
                        </button>
                        {item.packing_kg && (
                            <button
                                className={`radio__btn ${
                                    currentRadio === 1000
                                        ? "radio__btn-active"
                                        : ""
                                }`}
                                onClick={() => setCurrentRadio(1000)}
                            >
                                1кг
                            </button>
                        )}
                    </div>
                )}
                <div
                    className={`listProduct__bottom ${
                        product === "coffee" ? "listProduct__bottom-coffee" : ""
                    }`}
                >
                    <div className="listProduct__counter">
                        <button
                            className="listProduct__btn listProduct__btn-cart"
                            onClick={handleAdd}
                        >
                            <CartSvg /> Додати у кошик
                        </button>
                        <Counter count={count} setCount={setCount} min={min} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneProduct;
