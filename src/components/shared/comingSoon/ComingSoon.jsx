import { useTranslation } from "react-i18next";
import ComingSoonLogo from "../../../assets/pictures/comingsoon.svg";
import Button from "../buttons/globalbutton/Button";
import "./ComingSoon.scss";

const ComingSoon = ({ launchitem }) => {
  const { t } = useTranslation();

  return (
    <div className="comingsoon_parent">
      <img src={ComingSoonLogo} alt="" />
      <h1>{t("launching_soon")}</h1>
      <p>
        {t("we_will_let_you_know")}{" "}
        {launchitem ? launchitem : "page"}
      </p>
      <Button to="/auth/signup">{t("sign_to_get_notified")}</Button>{" "}
    </div>
  );
};

export default ComingSoon;
