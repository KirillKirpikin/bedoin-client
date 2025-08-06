import React from "react";

import MaksImg from "../../../img/maks.jpeg";
import DmyitroImg from "../../../img/dima.jpeg";
import { useTranslation } from "react-i18next";

const CourseCoach = () => {
    const { t } = useTranslation();
    return (
        <section className="course-coach">
            <div className="course-coach__container">
                <h2>{t("SchoolCoachTitle")}</h2>
                <div className="course-coach__coachs">
                    <div className="course-coach__item course-coach__item-first">
                        <div className="course-coach__info">
                            <h3>Максим Биковець</h3>
                            <ul>
                                <li>{t("SchoolCoachMaxLi1")}</li>
                                <li>{t("SchoolCoachMaxLi2")}</li>
                                <li>{t("SchoolCoachMaxLi3")}</li>
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
                                <li>{t("SchoolCoachDimLi1")}</li>
                                <li>{t("SchoolCoachDimLi2")}</li>
                                <li>{t("SchoolCoachDimLi3")}</li>
                                <li>{t("SchoolCoachDimLi4")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="course-coach__numbers">
                    <div className="course-coach__number">
                        <h4>20+</h4>
                        <p>{t("SchoolCoachNumber1")}</p>
                    </div>
                    <div className="course-coach__number">
                        <h4>100+</h4>
                        <p>{t("SchoolCoachNumber2")}</p>
                    </div>
                    <div className="course-coach__number">
                        <h4>10+</h4>
                        <p>{t("SchoolCoachNumber3")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCoach;
