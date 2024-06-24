import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img
            className="header-photo"
            src="../../images/portrait.png"
            alt="picture of Neil"
          />
        </Link>
        <div className="header-text">
          <h1>Neil Danner</h1>
          <p>Junior Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
