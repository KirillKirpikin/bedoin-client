import { useEffect } from "react";
import Cookies from "js-cookie";

const saveReferralParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const saUid = urlParams.get("SAuid");
    const utmSource = urlParams.get("utm_source");

    if (saUid) {
        Cookies.set("SAuid", saUid, { expires: 30 });
    }
    if (utmSource) {
        Cookies.set("utm_source", utmSource, { expires: 30 });
    }
};

export const useReferralTracking = () => {
    useEffect(() => {
        saveReferralParams();
    }, []);
};
