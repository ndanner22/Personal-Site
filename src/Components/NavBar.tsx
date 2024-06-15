import { Link } from "react-router-dom";

export default function NavBar() {
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
