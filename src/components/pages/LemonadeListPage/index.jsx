import React, { useEffect } from "react";
import { useGetAllLemonadeQuery } from "../../../store/api/lemonade.api";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import ContactsBorder from "../../ContactsBorder/ContactsBorder";
import Lemonade from "./Lemonade";
import SkeletonLemonade from "../../Skeleton/SkeletonLemonade";
import NotFound from "../../NotFound";

const LemonadeListPage = () => {
    const { isLoading, data, refetch } = useGetAllLemonadeQuery();

    const fetchData = async () => {
        await refetch();
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetch]);
    return (
        <div className="drip">
            <div className="drip__container">
                <div className="navigate">
                    <Link className="navigate__link" to={ROUTES.HOME}>
                        головна
                    </Link>
                    <ArrowSvg />
                    <div className="navigate__link navigate__link-this">
                        Напої
                    </div>
                </div>
                <div className="drip__list">
                    {isLoading ? (
                        [...new Array(3)].map((_, i) => (
                            <div key={i} className="listProduct__product">
                                <SkeletonLemonade viewBox="0 0 422 652" />
                            </div>
                        ))
                    ) : data && data.length > 0 ? (
                        data.map((item) => (
                            <Lemonade key={item._id} item={item} />
                        ))
                    ) : (
                        <NotFound product={"Lemonade"} />
                    )}
                </div>
                <p className="home-coffee__subtitle">
                    Бажаєте здивувати своїх клієнтів і подарувати їм неабиякі
                    враження? Наші кавові напої Teddy – це саме те, що вам
                    потрібно
                    <br />
                    <br />
                    Засновані на колд-брю каві, наші напої TEDDY - це унікальне
                    поєднання кавових вражень та фруктових смаків,
                    <br />
                    <br />
                    ## TEDDY BERRIEBON – Це газований напій на основі колд-брю
                    кави з додаванням малинового соку та ферментованого ананасу.
                    <br />
                    <br />
                    ## TEDDY ALEANDFANT – Апельсиновий, кавовий напій, трохи
                    газований, смакує охолодженим. Примітно, що на кожну пляшку
                    витрачено 12гр кави – тобто повноцінна порція енергії.
                    <br />
                    <br />
                    Ми пропонуємо оптові ціни на нашу спеціальну лінійку кавових
                    напоїв Teddy для бізнес-партнерів
                    <br />
                    <br />
                </p>
            </div>
            <ContactsBorder />
        </div>
    );
};

export default LemonadeListPage;
