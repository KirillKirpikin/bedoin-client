import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import MerchPng from "../../../img/merch.png";
import { useTranslation } from "react-i18next";
import { TWithBreaks } from "../../TWithBreaks";
const MerchHome = () => {
    const { t } = useTranslation();
    return (
        <div className="home-merch">
            <div className="home-merch__bg">
                <div className="home-merch__container">
                    <div className="home-merch__info">
                        <div className="home-merch__text">
                            <h2 className="home-merch__title">
                                {t("HomeMerchTitle")}
                            </h2>
                            <div className="home-merch__txt">
                                <TWithBreaks i18nKey="HomeMerchText" />
                            </div>
                        </div>
                        <div className="home-merch__btn">
                            <Link to={ROUTES.MERCH} className="btn">
                                Переглянути мерч
                            </Link>
                        </div>
                    </div>
                    <div className="home-merch__img">
                        <img src={MerchPng} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchHome;
