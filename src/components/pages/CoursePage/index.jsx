import React, { useRef } from "react";
import CourseMain from "./CourseMain";
import SliderCourse from "../../Sliders/SliderCourse";
import CourseCoach from "./CourseCoach";
import CourseCards from "./CourseCards";
import CourseForm from "./CourseForm";
import ContactsHome from "../../ComponentsHomePage/ContactsHome/ContactsHome";

const CoursePage = () => {
    const courseFormRef = useRef(null);

    const scrollToForm = () => {
        courseFormRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <CourseMain scroll={scrollToForm} />
            <SliderCourse />
            <CourseCoach />
            <CourseCards scroll={scrollToForm} />
            <div ref={courseFormRef}>
                <CourseForm />
            </div>
            <ContactsHome />
        </>
    );
};

export default CoursePage;
