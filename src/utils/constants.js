//export const BASE_URL = "http://localhost:1337/api";

import { Card_1, Card_2, Card_3, Card_4, Card_5 } from "../img/cards-course";

// import Card_1 from "../img/cards-course/course_card_1.svg";
// import Card_2 from "../img/cards-course/course_card_2.svg";
// import Card_3 from "../img/cards-course/course_card_3.svg";
// import Card_4 from "../img/cards-course/course_card_4.svg";
import {
    Slide_1,
    Slide_2,
    Slide_3,
    Slide_4,
    Slide_5,
} from "../img/slider-course";

export const BASE_URL_IMG = process.env.REACT_APP_BASE_URL_IMG;
export const BASE_URL = process.env.REACT_APP_BASE_URL;

// export const BASE_URL = "https://bedoin.com.ua/api";
// export const BASE_URL_IMG = "https://bedoin.com.ua/";

// export const BASE_URL = "https://1603-46-98-139-214.ngrok-free.app/api";
// export const BASE_URL_IMG = "https://1603-46-98-139-214.ngrok-free.app/";
export const SLIDER_BUTTON_TYPES = {
    NEXT: "NEXT",
    PREV: "PREV",
};

export const SLIDER_COURSE = [
    { id: 1, img: Slide_1, title: "SchoolSliderText1" },
    { id: 2, img: Slide_2, title: "SchoolSliderText2" },
    { id: 3, img: Slide_3, title: "SchoolSliderText3" },
    { id: 4, img: Slide_4, title: "SchoolSliderText4" },
    { id: 5, img: Slide_5, title: "SchoolSliderText5" },
    { id: 6, img: Slide_1, title: "SchoolSliderText1" },
    { id: 7, img: Slide_2, title: "SchoolSliderText2" },
    { id: 8, img: Slide_3, title: "SchoolSliderText3" },
    { id: 9, img: Slide_4, title: "SchoolSliderText4" },
    { id: 10, img: Slide_5, title: "SchoolSliderText5" },
];

export const CARD_COURSE = [
    {
        id: 1,
        img: Card_1,
        title: "Базовий курс бариста",
        period: "12 годин",
        group: "1-5 людей",
        text: "SchoolCourseText1",
    },
    {
        id: 2,
        img: Card_4,
        title: "Базовий +  Latte Art",
        period: "14 годин",
        group: "індивідуальний",
        text: "SchoolCourseText2",
    },

    {
        id: 3,
        img: Card_3,
        title: "Професійний курс бариста",
        period: "18 годин",
        group: "індивідуальний",
        text: "SchoolCourseText3",
    },
    {
        id: 4,
        img: Card_5,
        title: "Як відкрити кав’ярню",
        period: "18 годин",
        group: "2-10 людини",
        text: "SchoolCourseText4",
    },
    {
        id: 5,
        img: Card_2,
        title: "Професійна обсмажка кави",
        period: "30 годин",
        group: "1-3 людини",
        text: "SchoolCourseText5",
    },
];
