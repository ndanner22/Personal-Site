import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [commonLinks, setCommonLinks] = useState([
    "Home",
    "Projects",
    "Contact",
  ]);
  return (
    <>
      <ul className="nav-bar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/Projects">
          Projects
        </Link>
        <Link className="nav-link" to="/Contact">
          Contact
        </Link>
      </ul>
      <hr className="divider" />
    </>
  );
}
