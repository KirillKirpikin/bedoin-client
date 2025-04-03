import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as CartSvg } from "../../../img/cart.svg";
import { clearCart } from "../../../store/cart/cartSlice";
import { ROUTES } from "../../../utils/routes";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

const ResultPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("orderId");
    const total = searchParams.get("total");
    const saUid = Cookies.get("SAuid");

    const [trackingUrl, setTrackingUrl] = useState("");

    useEffect(() => {
        dispatch(clearCart());
        if (orderId && total && saUid) {
            axios
                .post(
                    `${BASE_URL}/orders/register-conversion`,
                    {
                        orderId,
                        tariffParam: total,
                    },
                    {
                        withCredentials: true,
                    }
                )
                .catch((err) => console.error("S2S Error:", err));
            const tariffId = 4567;
            const trackingUrl = `https://sellaction.net/reg.php?id=${saUid}-${tariffId}_${total}&order_id=${orderId}`;
            setTrackingUrl(trackingUrl);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="result">
            <div className="result__container">
                <h2 className="result__title">ваше замовлення</h2>
                <div className="result__main">
                    <div className="result__txt">
                        Ваше замовлення {orderId} відправилось нашим менеджерам.
                        Скоро з вами зв’яжуться
                    </div>
                    <CartSvg />
                    <Link to={ROUTES.COFFEE}>Продовжити покупки</Link>
                </div>
            </div>
            {trackingUrl && (
                <img
                    src={trackingUrl}
                    width="1"
                    height="1"
                    alt="tracking pixel"
                    style={{ display: "none" }}
                />
            )}
        </div>
    );
};

export default ResultPage;
