import React from "react";
import "./Loading.scss";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const { t } = useTranslation();

  return (
    <div id="spinner-wrapper" className="text-center">
      <div
        id="spinner"
        className="spinner-border text-primary m-5"
        role="status"
      ></div>
      <span className="visually-hidden">{t("loading")}</span>
    </div>
  );
};

export default Loading;
