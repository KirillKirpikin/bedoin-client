import React from "react";
import { useTranslation } from "react-i18next";

export const TWithBreaks = ({ i18nKey }) => {
    const { t } = useTranslation();
    return (
        <>
            {t(i18nKey)
                .split("\n")
                .map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
        </>
    );
};
