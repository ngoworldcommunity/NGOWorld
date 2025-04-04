import { FiLink } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import "./FeaturedEventCard.scss";
import { useTranslation } from "react-i18next";

const FeaturedEventCard = () => {
  const { t } = useTranslation();

  return (
    <div className="featured_eventcard_parent">
      <div className="featured_eventcard_top">
        <div className="featured_eventcard_name">
          <h1>{t("food_marathon", { year: 2025 })}</h1>
          <span>{t("godlike_club")}</span>
        </div>

        <div className="featured_eventcard_links">
          <RiTwitterXLine />
          <FiLink />
        </div>
      </div>

      <p>
        {t("the_food_marathon")}
      </p>

      <div className="featured_eventcard_ctadiv">
        <div className="cta_membersdiv">
          <div className="cta_members">
            <img
              src="https://avatars.githubusercontent.com/u/72851613?v=4"
              alt=""
            />
            <img
              src="https://avatars.githubusercontent.com/u/72851613?v=4"
              alt=""
            />
            <img
              src="https://avatars.githubusercontent.com/u/72851613?v=4"
              alt=""
            />
          </div>
          <p>+300 {t("participated")}</p>
        </div>

        <button className="featured_eventcard_cta">{t("register_now")}</button>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
