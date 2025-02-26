import React, { useEffect, useMemo, useState } from "react";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import { ReactComponent as CartSvg } from "../../../img/cart.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetDripQuery } from "../../../store/api/drip.api";
import { useDispatch } from "react-redux";
import { ROUTES } from "../../../utils/routes";
import SliderSingle from "../../Sliders/SliderSingle/SliderSingle";
import Counter from "../../Counter/Counter";
import { addDripToCart, openCart } from "../../../store/cart/cartSlice";

const SingleDripPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, isLoading, isFetching, isSuccess } = useGetDripQuery({ id });
    const [count, setCount] = useState(1);
    const memoizedImages = useMemo(() => {
        return data ? [...data.imgs] : [];
    }, [data]);

    const handleAdd = () => {
        let payload = {
            _id: data._id,
            product: "drip",
            packing: 10,
            title: data.title,
            price: data.price.standart,
            img: data.imgs[0],
            quantity: count,
        };
        dispatch(addDripToCart(payload));
        dispatch(openCart(true));
    };

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetching, isLoading, isSuccess]);

    return (
        <div className="single-product">
            <div className="single-product__container">
                <div className="navigate">
                    <Link className="navigate__link" to={ROUTES.HOME}>
                        головна
                    </Link>
                    <ArrowSvg />
                    <Link className="navigate__link" to={ROUTES.DRIP}>
                        drip
                    </Link>
                    <ArrowSvg />
                    <Link className="navigate__link navigate__link-this">
                        {!data ? "drip" : data.title}
                    </Link>
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : data ? (
                    <div className={`${!data.in_stock ? "disabled" : ""}`}>
                        <div className="single-product__main main-product">
                            <div className="main-product__top">
                                <div className="main-product__slider">
                                    <SliderSingle img={memoizedImages} />
                                </div>
                                <div className="main-product__info">
                                    <h2 className="main-product__title">
                                        {data.title}
                                    </h2>
                                    <p className="main-product__lildescr">
                                        {data.short_description}
                                    </p>
                                    <p className="main-product__tit">
                                        100% арабіка
                                    </p>
                                    <div className="main-product__prices">
                                        <div className="main-product__price">
                                            <p className="main-product__tit">
                                                Звичайна ціна
                                            </p>
                                            <div>
                                                {data.price.standart.regular} ₴
                                            </div>
                                        </div>
                                        <div className="main-product__price">
                                            <p className="main-product__tit">
                                                Оптова ціна
                                            </p>
                                            <span>(Від 3 уп.)</span>
                                            <div>
                                                {data.price.standart.opt} ₴
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product__counter">
                                        <button
                                            className="main-product__btn listProduct__btn"
                                            onClick={handleAdd}
                                        >
                                            <CartSvg /> Додати у кошик
                                        </button>
                                        <Counter
                                            count={count}
                                            setCount={setCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="info-product__title">більше про Drip</h3>
                        <p className="info-product__txt">{data.description} </p>
                        {data.info.length > 0 && (
                            <div className="info-product__list list-product">
                                <ul className="list-product__list">
                                    {data.info &&
                                        data.info.map((i) => (
                                            <li
                                                key={i._id}
                                                className="list-product__item"
                                            >
                                                {i.name}: {i.text}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>Not found</div>
                )}
            </div>
        </div>
    );
};

export default SingleDripPage;
