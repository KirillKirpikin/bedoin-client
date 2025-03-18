import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as CartSvg } from "../../img/cart.svg";
import { ReactComponent as PhoneSvg } from "../../img/phone.svg";
import { ReactComponent as ArrowSvg } from "../../img/arrow.svg";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Dropdown from "../Dropdown/Dropdown";
import { useClickOutside } from "../../utils/useClickOutside";

import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../store/cart/cartSlice";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropDown, setDropdown] = useState(false);
    const { cart } = useSelector(({ cart }) => cart);
    const location = useLocation();
    const dispatch = useDispatch();
    const menuRef = useRef(null);

    const lockScroll = () => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const handleClose = () => {
        isOpen && setIsOpen(false);
    };

    useClickOutside(menuRef, () => {
        if (dropDown) setTimeout(() => setDropdown(false), 50);
    });
    const toggleDropdown = useCallback(() => {
        setDropdown((prevState) => !prevState);
    }, []);

    const themeColor = useMemo(
        () =>
            location.pathname === "/" || location.pathname === "/course"
                ? ""
                : "color-black",
        [location.pathname]
    );
    const myClass = (blockClass) => {
        return `${blockClass} ${themeColor}`;
    };

    const setActiveCart = useCallback(() => {
        dispatch(openCart(true));
    }, [dispatch]);

    useEffect(() => {
        lockScroll();
        // eslint-disable-next-line
    }, [isOpen]);

    return (
        <header
            className="header"
            style={
                location.pathname === "/" || location.pathname === "/course"
                    ? {}
                    : { backgroundColor: "#F9F9F9" }
            }
        >
            <div className="header__container">
                <div className="header__menu menu">
                    <nav
                        className={`menu__body ${
                            isOpen ? "menu__body-active" : ""
                        }`}
                    >
                        <ul className="menu__list">
                            <li
                                className={`${myClass(
                                    "menu__item menu__item-drop"
                                )} ${dropDown ? "menu__item-drop-active" : ""}`}
                                onClick={toggleDropdown}
                                ref={menuRef}
                            >
                                <p>КАВА</p>
                                <ArrowSvg />
                                <Dropdown
                                    handleClose={handleClose}
                                    open={dropDown}
                                />
                            </li>
                            <li className={myClass("menu__item")}>
                                <Link to={ROUTES.MERCH} onClick={handleClose}>
                                    АКСЕСУАРИ
                                </Link>
                            </li>
                            <li className={myClass("menu__item")}>
                                <Link to={ROUTES.COURSE} onClick={handleClose}>
                                    ШКОЛА БАРИСТА
                                </Link>
                            </li>
                            <li className={myClass("menu__item")}>
                                <Link
                                    to={ROUTES.CONTACTS}
                                    onClick={handleClose}
                                >
                                    КОНТАКТИ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to={ROUTES.HOME} className={myClass("menu__logo")}>
                        <Logo />
                    </Link>
                    <div className="menu__info">
                        <div
                            className={myClass("menu__cart")}
                            onClick={setActiveCart}
                        >
                            <p>КОШИК</p>
                            <CartSvg />
                            {cart && cart.length > 0 && (
                                <span className="menu__length">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                        <div className={myClass("menu__phone")}>
                            <a href="tel:380675001303">
                                <p>+38 (067) 500 13 03</p> <PhoneSvg />
                            </a>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={myClass(
                                `icon-menu ${isOpen ? "menu-open" : ""}`
                            )}
                        >
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
