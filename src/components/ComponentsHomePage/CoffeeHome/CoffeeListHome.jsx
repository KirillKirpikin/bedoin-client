import React, { useEffect } from "react";
import CoffeHome from "./CoffeHome";
import { useGetAllCoffeeQuery } from "../../../store/api/api";
import { Link } from "react-router-dom";
import SkeletonHomeCoffee from "../../Skeleton/SkeletonHomeCoffee";
import NotFound from "../../NotFound";
import { useTranslation } from "react-i18next";

const CoffeeListHome = () => {
    const { isLoading, data, refetch } = useGetAllCoffeeQuery();
    const filtered = data && data.filter((_, i) => i < 6);
    const { t } = useTranslation();

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
        <div className="home-coffee">
            <div className="home-coffee__container">
                <h3 className="home-coffee__subtitle">
                    {t("CofeeListSubTitle")}
                </h3>
                <h2 className="home-coffee__title"> {t("CofeeListTitle")}</h2>
                <div className="home-coffee__list list-coffe">
                    {isLoading ? (
                        [...new Array(2)].map((_, i) => (
                            <div key={i} className="listProduct__product">
                                <SkeletonHomeCoffee viewBox="0 0 600 907" />
                            </div>
                        ))
                    ) : data && data.length > 0 ? (
                        filtered.map((item) => (
                            <CoffeHome key={item._id} item={item} />
                        ))
                    ) : (
                        <NotFound product={"Coffee"} />
                    )}
                </div>
                <div className="home-coffee__bottom">
                    <Link to={"/coffee"} className="btn">
                        Переглянути всю каву
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeListHome;
