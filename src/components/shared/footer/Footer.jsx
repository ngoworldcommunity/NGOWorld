import { footerLinks as footerLinksInitial } from "@utils/footerLinksConfig";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import brand from "../../../assets/pictures/Navbar/MilanNavBrand.svg";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = footerLinksInitial(t);

  const icons = {
    FaLinkedinIn: FaLinkedinIn,
    FaXTwitter: FaXTwitter,
    FaGithub: FaGithub,
  };

  return (
    <>
      <footer>
        <div className="leftside">
          <div className="brand">
            <img src={brand} alt="" />
          </div>

          <div className="links_parent">
            <div className="product">
              <h1>{t("quick_starts")}</h1>

              {footerLinks?.quickStarts?.map((item, index) => {
                return (
                  <Link key={index} to={item?.path}>
                    {item?.name}
                  </Link>
                );
              })}
            </div>
            <div className="dev">
              <h1>{t("resources")}</h1>
              {footerLinks?.resources?.map((item, index) => {
                return item?.path.startsWith("http") ? (
                  <a
                    key={index}
                    href={item?.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item?.name}
                  </a>
                ) : (
                  <Link key={index} to={item?.path}>
                    {item?.name}
                  </Link>
                );
              })}
            </div>
            <div className="policies">
              <h1>{t("policies")}</h1>
              {footerLinks?.policies?.map((item, index) => {
                return (
                  <Link key={index} to={item?.path} target="_blank">
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="policies_mobile">
            {footerLinks?.policies?.map((item, index) => {
              return (
                <Link key={index} to={item?.path} target="_blank">
                  {item?.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="rightside">
          {footerLinks?.social?.map((item, index) => {
            const IconComponent = icons[item.icon];
            return (
              <a
                key={index}
                href={item?.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
