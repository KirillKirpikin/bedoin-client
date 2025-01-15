import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import CoffeeProduct from "./CoffeeProduct";
import ContactsBorder from "../../ContactsBorder/ContactsBorder";
import { useGetAllCoffeeQuery } from "../../../store/api/api";
import SkeletonCoffee from "../../Skeleton/SkeletonCoffee";
import NotFound from "../../NotFound";

const CoffeeListPage = () => {
    const { data, isLoading, refetch } = useGetAllCoffeeQuery();

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
        <div className="coffee">
            <div className="coffee__container">
                <div className="navigate">
                    <Link className="navigate__link" to={ROUTES.HOME}>
                        головна
                    </Link>
                    <ArrowSvg />
                    <div className="navigate__link navigate__link-this">
                        кава
                    </div>
                </div>
                <div className="coffee__text">
                    При замовленні від 6 кілограм кави - діє оптовий прайс на
                    каву, безкоштовна доставка
                </div>
                <h1 className="coffee__title">
                    КОМБIНУЙ СМАКИ ТА ОТРИМУЙ ЗНИЖКУ
                </h1>
                <div className="coffee__list">
                    {isLoading ? (
                        [...new Array(3)].map((_, i) => (
                            <div key={i} className="listProduct__product">
                                <SkeletonCoffee viewBox="0 0 422 765" />
                            </div>
                        ))
                    ) : data && data.length > 0 ? (
                        data.map((item) => (
                            <CoffeeProduct key={item._id} item={item} />
                        ))
                    ) : (
                        <NotFound product={"Мерча"} />
                    )}
                </div>
                <p className="home-coffee__subtitle">
                    Унікальні Пропозиції від Bedoin для Вашого Бізнесу
                    <br />
                    <br />
                    Bedoin пропонує умови для співпраці: Оптові ціни від 6 кг та
                    Індивідуальний Підхід: Кожен Партнер - Особливий
                    <br />
                    <br />
                    Ми розуміємо, що кожен бізнес має свої особливості та
                    смакові уподобання. Bedoin надає індивідуальний підхід для
                    кожного партнера, незалежно від того, чи це кав'ярня,
                    готель, ресторан чи офіс. Ми працюємо, щоб кожна чашка кави
                    відповідала вашим унікальним очікуванням.
                    <br />
                    <br />
                    Наша кава - це не просто напій, це досвід, який ми
                    пропонуємо вашим клієнтам. Кожне зерно обсмажене з любов'ю
                    та майстерністю, щоб Ваш бізнес завжди мав конкурентну
                    перевагу.
                </p>
            </div>

            <ContactsBorder />
        </div>
    );
};

export default CoffeeListPage;
