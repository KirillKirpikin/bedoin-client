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
        title: "Базовий курс бариста",
        period: "12 годин",
        group: "1-5 людей",
        text: "Дізнайтеся основи кавової справи: теорія кави, її походження, смак і аромати. Ідеально підходить для початківців.",
    },
    {
        id: 2,
        img: Card_4,
        title: "Базовий +  Latte Art",
        period: "14 годин",
        group: "індивідуальний",
        text: "Опануйте основи кавового мистецтва та навчіться створювати ефектні малюнки на каві за допомогою латте-арту.",
    },

    {
        id: 3,
        img: Card_3,
        title: "Професійний курс бариста",
        period: "18 годин",
        group: "індивідуальний",
        text: "Поглиблене навчання всіх аспектів кавової справи: робота за баром, альтернативні методи, калібрування смаку та використання професійного обладнання.",
    },
    {
        id: 4,
        img: Card_5,
        title: "Як відкрити кав’ярню",
        period: "18 годин",
        group: "2-10 людини",
        text: "Практичний курс для майбутніх власників кав’ярень: організація робочого процесу, налаштування обладнання та секрети успішного бізнесу.",
    },
    {
        id: 5,
        img: Card_2,
        title: "Професійна обсмажка кави",
        period: "30 годин",
        group: "1-3 людини",
        text: " Дізнайтеся все про обсмажування кави, включаючи дефекти, калібрування смаку та створення ідеального продукту.",
    },
];
