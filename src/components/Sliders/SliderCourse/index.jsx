import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { SLIDER_COURSE } from "../../../utils/constants";

const SliderCourse = () => {
    return (
        <section className="course-slider">
            <div className="course-slider__container">
                <h2>Кому це корисно?</h2>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                freeMode={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: false,
                }}
                speed={3000}
                breakpoints={{
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                    },

                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 40,
                    },
                }}
                modules={[FreeMode, Autoplay]}
                className="course-slider__slider"
            >
                {SLIDER_COURSE.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="course-slider__slide">
                            <div className="course-slider__img">
                                <img src={item.img} alt={item.img} />
                            </div>
                            <div className="course-slider__text">
                                <h5>Школа підходить</h5>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SliderCourse;
