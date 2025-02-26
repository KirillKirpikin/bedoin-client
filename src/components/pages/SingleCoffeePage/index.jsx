import React, { useEffect, useMemo, useState } from "react";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import { ReactComponent as CartSvg } from "../../../img/cart.svg";
import { ROUTES } from "../../../utils/routes";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SliderSingle from "../../Sliders/SliderSingle/SliderSingle";
import Counter from "../../Counter/Counter";
import CustomRadio from "../../CustomRadio/CustomRadio";
import { useGetCoffeeQuery } from "../../../store/api/api";
import { useDispatch } from "react-redux";
import { addItemtoCart, openCart } from "../../../store/cart/cartSlice";
import ContactsBorder from "../../ContactsBorder/ContactsBorder";
import Select from "../../CustomSelect/Select";
import SkeletonSlider from "../../Skeleton/SkeletonSlider";
import SkeletonSingle from "../../Skeleton/SkeletonSingle";
import Tabs from "../../Tabs";

const SingleCoffeePage = () => {
    const options = useMemo(
        () => [
            "У зерні",
            "Джезва (турка)",
            "Домашня кавоварка",
            "Еспресо",
            "V-60",
            "Аеропресс",
            "Фільтр",
            "Френч-прес",
            "Кемекс",
            "Гейзерна кавоварка",
        ],
        []
    );
    const { id } = useParams();
    let { state } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { data, isLoading, isFetching, isSuccess } = useGetCoffeeQuery({ id });

    let weight = [{ id: 1, value: "250 гр" }];
    if (data) {
        weight = data.packing_kg
            ? [
                  { id: 1, value: "250 гр" },
                  { id: 2, value: "1 кг" },
              ]
            : weight;
    }

    const [selected, setSelected] = useState(options[0]);
    const [currentRadio, setCurrentRadio] = useState();
    const [count, setCount] = useState(1);
    const isKg = (data) => {
        return data.imgs_kg.length ? data.imgs_kg[0] : data.imgs[0];
    };
    const memoizedImages = useMemo(() => {
        return data ? [...data.imgs, ...data.imgs_kg] : [];
    }, [data]);

    const handleAdd = () => {
        let payload = {
            _id: data._id,
            product: "coffee",
            title: data.title,
            packing: currentRadio === 1 ? 250 : 1000,
            img: currentRadio === 1 ? data.imgs[0] : isKg(data),
            price: currentRadio === 1 ? data.price.standart : data.price.kg,
            select: selected,
            quantity: count,
        };
        dispatch(addItemtoCart(payload));
        dispatch(openCart(true));
    };
    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetching, isLoading, isSuccess]);

    useEffect(() => {
        if (!isLoading) {
            setCurrentRadio(state ? weight[1].id : weight[0].id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        <div className="single-product">
            <div className="single-product__container">
                <div className="navigate">
                    <Link className="navigate__link" to={ROUTES.HOME}>
                        головна
                    </Link>
                    <ArrowSvg />
                    <Link className="navigate__link" to={ROUTES.COFFEE}>
                        кава
                    </Link>
                    <ArrowSvg />
                    <div className="navigate__link navigate__link-this">
                        {!data ? "кава" : data.title}
                    </div>
                </div>
                {isLoading ? (
                    <div className="main-product__top">
                        <div className="main-product__slider">
                            <SkeletonSlider viewBox="0 0 450 605" />
                        </div>
                        <div className="main-product__info">
                            <SkeletonSingle viewBox="0 0 788 605" />
                        </div>
                    </div>
                ) : data ? (
                    <div className={`${!data.in_stock ? "disabled" : ""}`}>
                        <div className="single-product__main main-product">
                            <div className="main-product__top">
                                <div className="main-product__slider">
                                    <SliderSingle
                                        img={memoizedImages}
                                        currentRadio={currentRadio}
                                    />
                                </div>
                                <div className="main-product__info">
                                    <h2 className="main-product__title">
                                        {data.title}
                                    </h2>
                                    <p className="main-product__lildescr">
                                        {data.short_description}
                                    </p>
                                    <p className="main-product__tit">
                                        100% арабіка, {data.country}
                                    </p>
                                    <div className="main-product__prices">
                                        <div className="main-product__price">
                                            <p className="main-product__tit">
                                                Звичайна ціна
                                            </p>
                                            <div>
                                                {currentRadio === 1
                                                    ? data.price.standart
                                                          .regular
                                                    : data.price.kg
                                                          .regular}{" "}
                                                ₴
                                            </div>
                                        </div>
                                        <div className="main-product__price">
                                            <p className="main-product__tit">
                                                Оптова ціна
                                            </p>
                                            <span>(Від 6 кг.)</span>
                                            <div>
                                                {currentRadio === 1
                                                    ? data.price.standart.opt
                                                    : data.price.kg.opt}{" "}
                                                ₴
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product__options">
                                        <div className="main-product__select">
                                            <Select
                                                arr={options}
                                                selected={selected}
                                                setSelected={setSelected}
                                            />
                                        </div>
                                        <div className="main-product__radio">
                                            <CustomRadio
                                                value={weight}
                                                current={currentRadio}
                                                setCurrent={setCurrentRadio}
                                            />
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
                        <div className="single-product__info info-product">
                            <div className="info-product__discount">
                                <ul>
                                    <li>
                                        Для оптової покупки: безкоштовна
                                        доставка від 6 кг (по місту та Україні)
                                    </li>
                                    <li>
                                        Для розничного покупця: безкоштовна
                                        доставка від 2 кг (по місту та Україні).
                                        Якщо заказ меньше, ніж на 2 кг, то
                                        доставка - 100 ₴
                                    </li>
                                </ul>
                            </div>
                            <h3 className="info-product__title">
                                більше про каву
                            </h3>
                            <p className="info-product__txt">
                                {data.description}
                            </p>
                            {data.recipe.length > 0 && (
                                <Tabs data={data.recipe} />
                            )}

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
                    </div>
                ) : (
                    <div>Not found</div>
                )}
            </div>
            <ContactsBorder />
        </div>
    );
};

export default SingleCoffeePage;
