import React from "react";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import ContactsHome from "../../ComponentsHomePage/ContactsHome/ContactsHome";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { TWithBreaks } from "../../TWithBreaks";

const ContactsPage = () => {
    return (
        <div className="contacts">
            <div className="contacts__container">
                <div className="navigate">
                    <Link className="navigate__link" to={ROUTES.HOME}>
                        головна
                    </Link>
                    <ArrowSvg />
                    <div className="navigate__link navigate__link-this">
                        КОНТАКТИ
                    </div>
                </div>
                <h2 className="coffee__title">
                    <TWithBreaks i18nKey="ContactTitle" />
                </h2>
            </div>
            <ContactsHome />
        </div>
    );
};

export default ContactsPage;
