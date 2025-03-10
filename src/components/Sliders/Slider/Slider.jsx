import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import { BASE_URL_IMG, SLIDER_BUTTON_TYPES } from "../../../utils/constants";

import "swiper/css";
import { useGetAllSlideQuery } from "../../../store/api/slider.api";
import SpinerImg from "../../Spiner/SpinerImg";

const Slider = () => {
    const { PREV, NEXT } = SLIDER_BUTTON_TYPES;
    const sliderRef = useRef();
    const { data = [] } = useGetAllSlideQuery();
    const [isLoading, setIsLoading] = useState(true);
    const filtered = data.filter((_, i) => i < 4);

    const handleButtonClick = useCallback(
        (type) => {
            if (!sliderRef.current) return;

            const { swiper } = sliderRef.current;
            type === NEXT ? swiper.slideNext() : swiper.slidePrev();
        },
        [NEXT]
    );

    return (
        <div className="sliderContainer">
            {!data.length ? (
                <SpinerImg />
            ) : (
                <Swiper
                    ref={sliderRef}
                    spaceBetween={5}
                    slidesPerView={1}
                    className="main-slider"
                    navigation
                    modules={[Navigation]}
                >
                    {filtered.map((item) => (
                        <SwiperSlide key={item._id}>
                            <div className="main-slider__content">
                                <Link
                                    to={`/coffee/${item.coffeeId}`}
                                    className="main-slider__img"
                                >
                                    {isLoading && <SpinerImg />}
                                    <img
                                        onLoad={() => setIsLoading(false)}
                                        className={isLoading ? "img-none" : ""}
                                        src={BASE_URL_IMG + item.imgs[0]}
                                        alt="#"
                                    />
                                </Link>
                                <p className="main-slider__txt">{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="main-slider__navigation">
                        <div
                            className="main-slider__prev"
                            onClick={() => handleButtonClick(PREV)}
                        >
                            <ArrowSvg />
                        </div>
                        <div
                            className="main-slider__next"
                            onClick={() => handleButtonClick(NEXT)}
                        >
                            <ArrowSvg />
                        </div>
                    </div>
                </Swiper>
            )}
        </div>
    );
};

export default Slider;
