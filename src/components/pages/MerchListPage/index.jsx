import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { ReactComponent as ArrowSvg } from "../../../img/arrow.svg";
import MerchProduct from "./Merch";
import ContactsBorder from "../../ContactsBorder/ContactsBorder";
import { useGetAllMerchQuery } from "../../../store/api/merch.api";
import SkeletonLemonade from "../../Skeleton/SkeletonLemonade";
import NotFound from "../../NotFound";

const MerchListPage = () => {
    const { data, isLoading, refetch } = useGetAllMerchQuery();

    const fetchData = async () => {
        await refetch();
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetch]);

    return (
        <div className="merch">
            <div className="merch__container">
                <div className="navigate">
                    <Link className="navigate__link" to={ROUTES.HOME}>
                        головна
                    </Link>
                    <ArrowSvg />
                    <div className="navigate__link navigate__link-this">
                        Аксесуари
                    </div>
                </div>
                <div className="merch__list">
                    {isLoading ? (
                        [...new Array(3)].map((_, i) => (
                            <div key={i} className="listProduct__product">
                                <SkeletonLemonade viewBox="0 0 422 652" />
                            </div>
                        ))
                    ) : data && data.length > 0 ? (
                        data.map((item) => (
                            <MerchProduct key={item._id} item={item} />
                        ))
                    ) : (
                        <NotFound product={"Аксесуарів"} />
                    )}
                </div>
            </div>
            <ContactsBorder />
        </div>
    );
};

export default MerchListPage;
