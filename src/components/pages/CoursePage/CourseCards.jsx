import React from "react";
import { CARD_COURSE } from "../../../utils/constants";

const CourseCards = ({ scroll }) => {
    return (
        <section className="course-cards">
            <div className="course-cards__container">
                {CARD_COURSE.map((item) => (
                    <div key={item.id} className="course-cards__card">
                        <div className="course-cards__header">
                            <h2>{item.title}</h2>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="course-cards__info">
                            <h4>
                                Тривалість: <span>{item.period}</span>
                            </h4>
                            <h4>
                                Група: <span>{item.group}</span>
                            </h4>
                        </div>
                        <p>{item.text}</p>
                    </div>
                ))}
                <div className="course-cards__btn">
                    <button onClick={() => scroll()} className="btn">
                        Записатись на курс
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CourseCards;
