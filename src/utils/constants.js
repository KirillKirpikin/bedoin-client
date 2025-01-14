//export const BASE_URL = "http://localhost:1337/api";

import { Card_1, Card_2, Card_3, Card_4 } from "../img/cards-course";

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

// export const BASE_URL_IMG = "http://localhost:1337/";
// export const BASE_URL = "https://bedoin.com.ua/api";
export const BASE_URL = "http://localhost:1337/api";
export const BASE_URL_IMG = "https://bedoin.com.ua/";

// export const BASE_URL = "https://1603-46-98-139-214.ngrok-free.app/api";
// export const BASE_URL_IMG = "https://1603-46-98-139-214.ngrok-free.app/";
export const SLIDER_BUTTON_TYPES = {
    NEXT: "NEXT",
    PREV: "PREV",
};

export const SLIDER_COURSE = [
    { id: 1, img: Slide_1, title: "Початківцям і професійним бариста" },
    { id: 2, img: Slide_2, title: "Власникам кавового бізнесу" },
    { id: 3, img: Slide_3, title: "Адміністраторам та керуючим Horeca" },
    { id: 4, img: Slide_4, title: "Любителям кави" },
    { id: 5, img: Slide_5, title: "Тим, хто мріє відкрити власну кав'ярню" },
    { id: 6, img: Slide_1, title: "Початківцям і професійним бариста" },
    { id: 7, img: Slide_2, title: "Власникам кавового бізнесу" },
    { id: 8, img: Slide_3, title: "Адміністраторам та керуючим Horeca" },
    { id: 9, img: Slide_4, title: "Любителям кави" },
    { id: 10, img: Slide_5, title: "Тим, хто мріє відкрити власну кав'ярню" },
];

export const CARD_COURSE = [
    {
        id: 1,
        img: Card_1,
        title: "Вступний бариста",
        period: "6 годин",
        group: "до 15 людей",
        text: "Цей курс — ваш перший крок у професію! За 12 годин ви дізнаєтесь про основи приготування кави, роботу з обладнанням та правильні техніки.",
    },
    {
        id: 2,
        img: Card_2,
        title: "Баріста базовий",
        period: "12 годин",
        group: "1-5 людей",
        text: "Курс підходить для всіх — і початківців, і кавових ентузіастів. Теорія + практика в міні-групах забезпечують якісне навчання.",
    },
    {
        id: 3,
        img: Card_3,
        title: "Професійний бариста",
        period: "14 годин",
        group: "індивідуальний",
        text: "Ідеальний вибір для тих, хто прагне стати справжнім професіоналом. Усе про каву: від зерна до ідеального еспресо",
    },
    {
        id: 4,
        img: Card_4,
        title: "Базовий + латте-арт",
        period: "14 годин",
        group: "індивідуальний",
        text: "Додайте творчості у свої навички! Поглиблений курс, що включає базові знання бариста та основи латте-арту",
    },
];
