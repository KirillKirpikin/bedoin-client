import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LanguageSwitch = () => {
    const { i18n } = useTranslation();

    const location = useLocation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("i18nextLng", language);
    };

    const themeColor = useMemo(
        () =>
            location.pathname === "/" || location.pathname === "/course"
                ? ""
                : "color-black",
        [location.pathname]
    );
    const myClass = (blockClass, lang) => {
        return `${blockClass} ${themeColor} ${
            localStorage.getItem("i18nextLng") === lang &&
            "menu__item-lang-active"
        }`;
    };

    return (
        <div className="menu__item-langs">
            <button
                className={myClass(`menu__item-lang`, "uk")}
                onClick={() => changeLanguage("uk")}
            >
                <p>UA</p>
            </button>
            <span> | </span>
            <button
                className={myClass(`menu__item-lang`, "mat")}
                onClick={() => changeLanguage("mat")}
            >
                <p>18+</p>
            </button>
        </div>
    );
};

export default LanguageSwitch;
