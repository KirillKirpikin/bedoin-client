import React from "react";

import MaksImg from "../../../img/maks.jpeg";
import DmyitroImg from "../../../img/dima.jpeg";

const CourseCoach = () => {
    return (
        <section className="course-coach">
            <div className="course-coach__container">
                <h2>Тренера центра</h2>
                <div className="course-coach__coachs">
                    <div className="course-coach__item course-coach__item-first">
                        <div className="course-coach__info">
                            <h3>Максим Биковець</h3>
                            <ul>
                                <li>
                                    Обсмажчик кави, засновник школи і компанії
                                    Bedoin Coffee
                                </li>
                                <li>
                                    Працює у ресторанній сфері вже понад 10
                                    років, учасник та фіналіст кавових
                                    чемпіонатів
                                </li>
                                <li>
                                    Наша мета передати знання та досвід усім
                                    охочим, тим людям, які вирішили стати на
                                    шлях кави і не володіють часом, щоб пройти
                                    наш шлях
                                </li>
                            </ul>
                        </div>
                        <div className="course-coach__img">
                            <img className="max" src={MaksImg} alt="maxim" />
                        </div>
                    </div>
                    <div className="course-coach__item course-coach__item-second">
                        <div className="course-coach__img">
                            <img className="dima" src={DmyitroImg} alt="dima" />
                        </div>
                        <div className="course-coach__info">
                            <h3>Котигорошко Дмитро</h3>
                            <ul>
                                <li>
                                    Працює у кавовій індустрії понад 5 років
                                </li>
                                <li>Шеф бариста</li>
                                <li>
                                    Завдяки педагогічній освіті він легко
                                    знаходить спільну мову з кожним і зрозуміло
                                    пояснює складні речі
                                </li>
                                <li>
                                    Діма любить заглиблюватися у всі тонкощі
                                    заварювання і вважає, що будь-яке зерно
                                    по-своєму смачне
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="course-coach__numbers">
                    <div className="course-coach__number">
                        <h4>20</h4>
                        <p>років досвіду в кавовому бізнесі</p>
                    </div>
                    <div className="course-coach__number">
                        <h4>100+</h4>
                        <p>навчили бариста</p>
                    </div>
                    <div className="course-coach__number">
                        <h4>10</h4>
                        <p>відкритих кав’ярень</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCoach;
