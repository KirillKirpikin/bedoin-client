import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import CoffeeProduct from "./CoffeeProduct";
import ContactsBorder from "../../ContactsBorder/ContactsBorder";
import { useGetAllCoffeeQuery } from "../../../store/api/api";
import SkeletonCoffee from "../../Skeleton/SkeletonCoffee";
import NotFound from "../../NotFound";
import { TWithBreaks } from "../../TWithBreaks";

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
                    <TWithBreaks i18nKey="CoffeText" />
                </div>
                <h1 className="coffee__title">
                    <TWithBreaks i18nKey="CoffeTitle" />
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
                    <TWithBreaks i18nKey="CoffeSubTitle" />
                </p>
            </div>

            <ContactsBorder />
        </div>
    );
};

export default CoffeeListPage;
