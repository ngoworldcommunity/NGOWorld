import React, { useContext } from "react";
import "./Header.css";
import data from "./HeaderData";
import { modeContext } from "../../App";

const Header = ({ type }) => {
  const { dark } = useContext(modeContext);
  const headerData = data.find((item) => item.key === type);

  if (!headerData) {
    return (
      <header className="pageheader_parent">
        <div className="pageheader_textdiv">
          <h1 className="pageheader_header1">Default Header</h1>
          <p className="pageheader_header2">Default Description</p>
        </div>
      </header>
    );
  }

  const { topheader_large, bottomheader_large, bottomheader_small } =
    headerData.value;

  return (
    <header className="pageheader_parent">
      <div className="pageheader_textdiv">
        <h1 className={`pageheader_header1 ${dark ? "topheader-dark" : ""}`}>
          {topheader_large}
        </h1>
        {window.innerWidth < 800 ? (
          <p className={`pageheader_header2 ${dark ? "headerbody-dark" : ""}`}>
            {bottomheader_small}
          </p>
        ) : (
          <p className={`pageheader_header2 ${dark ? "headerbody-dark" : ""}`}>
            {bottomheader_large}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
