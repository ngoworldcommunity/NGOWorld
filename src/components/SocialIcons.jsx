import React from "react";

const SocialIcons = () => {
  return (
    <ul className="social-icons list-inline mt-5">
      <li className="list-inline-item mx-2">
        <a href="https://twitter.com/mrTamall" target="_blank" title="twitter">
          <i className="fa fa-2x fa-twitter" style={{color:"#9ac2fe"}}></i>
        </a>
      </li>
      <li className="list-inline-item mx-2">
        <a href="https://github.com/IAmTamal/Milan" target="_blank" title="github">
          <i className="fa fa-2x fa-github"  style={{color:"#9ac2fe"}}></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
