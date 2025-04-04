import { FiLink } from "react-icons/fi";
import { IoMdArrowUp } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import "./EventCard.scss";
import { useTranslation } from "react-i18next";

const EventCard = () => {
  const { t } = useTranslation();

  return (
    <div className="eventcard_parent">
      <div className="eventcard_top">
        <div className="eventcard_name">
          <h1>{t("food_marathon", { year: 2025 })}</h1>
          <span>{t("godlike_club")}</span>
        </div>

        <div className="eventcard_links">
          <RiTwitterXLine />
          <FiLink />
        </div>
      </div>

      <p>
        {t("the_food_marathon")}
      </p>

      <div className="eventcard_ctadiv">
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

        <button className="eventcard_cta">
          <IoMdArrowUp />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
