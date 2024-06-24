import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <ul className="nav-bar">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
      <hr className="divider" />
    </>
  );
};

export default NavBar;
