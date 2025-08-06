import React, { useEffect, useState } from "react";
import BgSmall from "../../../img/courseBgMin.jpeg";
import BgNorm from "../../../img/courseBgMax.jpeg";
import { TWithBreaks } from "../../TWithBreaks";

const CourseMain = ({ scroll }) => {
    const [imageSrc, setImageSrc] = useState(BgSmall);
    useEffect(() => {
        const img = new Image();
        img.src = BgNorm;
        img.onload = () => {
            setImageSrc(BgNorm);
        };
    }, []);
    return (
        <section
            className="course-main"
            style={{ background: `url(${imageSrc})  0 66%/cover no-repeat` }}
        >
            <div className="course-main__overlay"></div>
            <div className="course-main__container">
                <div className="course-main__info">
                    <h1 className="course-main__title">школа бариста</h1>
                    <p className="course-main__txt">
                        <TWithBreaks i18nKey="SchoolMainTxt" />
                    </p>
                    <div className="course-main__btns">
                        <button onClick={() => scroll()} className="btn-white">
                            <TWithBreaks i18nKey="SchoolBtn" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseMain;
