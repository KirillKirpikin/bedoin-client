import React, { useCallback, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import { ReactComponent as CartSvg } from "../../../img/cart.svg";
import { BASE_URL_IMG, SLIDER_BUTTON_TYPES } from "../../../utils/constants";

import { Link } from "react-router-dom";
import "swiper/css";
import { useGetAllCoffeeQuery } from "../../../store/api/api";
import ZoomImage from "../../ZoomImage";

const SliderOpt = () => {
    const { PREV, NEXT } = SLIDER_BUTTON_TYPES;
    const optSliderRef = useRef();
    const { data = [] } = useGetAllCoffeeQuery();
    const filtered = data.filter(
        (item) => item.imgs_kg && item.imgs_kg.length > 0
    );

    const handleButtonClick = useCallback(
        (type) => {
            if (!optSliderRef.current) return;

            const { swiper } = optSliderRef.current;
            type === NEXT ? swiper.slideNext() : swiper.slidePrev();
        },
        [NEXT]
    );

    return (
        <div className="home-opt">
            <div className="home-opt__container">
                <h3 className="home-opt__subtitle">
                    При замовленні від 6 кілограм кави - діє оптовий прайс на
                    каву, безкоштовна доставка
                </h3>
                <h2 className="home-opt__title">
                    КОМБIНУЙ СМАКИ ТА ОТРИМУЙ ЗНИЖКУ
                </h2>
                <Swiper
                    ref={optSliderRef}
                    slidesPerView={1}
                    spaceBetween={0}
                    breakpoints={{
                        680: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1001: {
                            slidesPerView: 3,
                            spaceBetween: 13,
                        },
                        1170: {
                            slidesPerView: 3,
                            spaceBetween: 77,
                        },
                    }}
                    className="slider-opt"
                    navigation
                    modules={[Navigation]}
                >
                    {filtered.length &&
                        filtered.map((item) => (
                            <SwiperSlide key={item._id}>
                                <div className="slider-opt__content">
                                    <Link
                                        to={`/coffee/${item._id}`}
                                        state={{ some: 1 }}
                                        className="slider-opt__img"
                                    >
                                        <ZoomImage
                                            src={BASE_URL_IMG + item.imgs_kg[0]}
                                        />
                                    </Link>
                                    <div className="slider-opt__triangles">
                                        {item.type.length > 0 &&
                                            item.type.map((t) => (
                                                <div
                                                    key={t._id}
                                                    className="slider-opt__triangle"
                                                >
                                                    {" "}
                                                    <img
                                                        src={
                                                            BASE_URL_IMG + t.img
                                                        }
                                                        alt={t.label}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                    <div className="slider-opt__bottom">
                                        <div className="slider-opt__prices">
                                            <div className="slider-opt__left">
                                                {item.price.kg.regular} ₴
                                            </div>
                                            <div className="slider-opt__right">
                                                {item.price.standart.regular *
                                                    4}{" "}
                                                ₴
                                            </div>
                                        </div>
                                        <h4 className="slider-opt__name">
                                            {item.title}
                                        </h4>
                                        <p className="slider-opt__txt">
                                            100% арабіка, Колумбія
                                        </p>
                                        <Link
                                            to={`/coffee/${item._id}`}
                                            state={{ some: 1 }}
                                            className="slider-opt__btn"
                                        >
                                            <button className="btn">
                                                Додати у кошик <CartSvg />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    <div className="slider-opt__navigation">
                        <div
                            className="slider-opt__prev"
                            onClick={() => handleButtonClick(PREV)}
                        >
                            <ArrowSvg />
                        </div>
                        <div
                            className="slider-opt__next"
                            onClick={() => handleButtonClick(NEXT)}
                        >
                            <ArrowSvg />
                        </div>
                    </div>
                </Swiper>
                <p className="home-coffee__subtitle">
                    <br />
                    <br />
                    Ласкаво просимо до світу якісної кави, де кожне зерно має
                    свою унікальну історію. Замовляй свіжообсмажену каву, яка
                    зроблена спеціально для тебе
                    <br />
                    <br />
                    Пропонуємо вибір Specialty і Premium кави для бізнесу
                    <br />
                    <br />
                    Оптова Ціна від 6 кг
                    <br />
                    <br />
                    Bedoin розуміє потреби вашого бізнесу, тому ми пропонуємо
                    оптові ціни та безкошовну доставку для замовлень від 6 кг
                    кави.
                    <br />
                    <br />
                    Ми переймаємося вашим комфортом. Тому ми пропонуємо
                    безкоштовну доставку по Дніпру та послуги Нової Пошти для
                    замовлень з усієї України. Твоя улюблена кава Bedoin завжди
                    поруч – швидко та легко.
                </p>
            </div>
        </div>
    );
};

export default SliderOpt;
