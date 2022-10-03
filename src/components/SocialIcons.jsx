import React from "react";

const SocialIcons = () => {
  return (
    <ul className="social-icons list-inline mt-5">
      <li className="list-inline-item">
        <a href="https://twitter.com/mrTamall" target="_blank" title="twitter">
          <i className="fa fa-twitter" style={{color:"#9ac2fe"}}></i>
        </a>
      </li>
      {/* <li className="list-inline-item">
        <a href="#" target="_blank" title="facebook">
          <i className="fa fa-facebook"></i>
        </a>
      </li> */}
    </ul>
  );
};

export default SocialIcons;
