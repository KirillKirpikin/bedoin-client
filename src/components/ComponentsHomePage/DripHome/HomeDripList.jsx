import React, { useEffect } from "react";
import DripHome from "./DripHome";
import { useGetAllDripQuery } from "../../../store/api/drip.api";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const DripListHome = () => {
    const { isLoading, data, refetch } = useGetAllDripQuery();
    const filtered = data && data.filter((_, i) => i < 2);
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
        <div className="home-drip">
            <div className="home-drip__container">
                <h3 className="home-drip__subtitle">{t("DripListSubTitle")}</h3>
                <h2 className="home-drip__title"> {t("DripListTitle")}</h2>
                <div className="home-drip__list list-drip">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : data && data.length > 0 ? (
                        filtered.map((item) => (
                            <DripHome key={item._id} item={item} />
                        ))
                    ) : (
                        <div>Not Found</div>
                    )}
                </div>
                <div className="home-drip__bottom">
                    <Link to={"/drip"} className="btn">
                        Переглянути drip
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DripListHome;
