import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Nav() {
  return (
    <>
      <ul className="nav-bar">
        <AnchorLink href="#AboutMe" className="nav-link">
          About Me
        </AnchorLink>
        <AnchorLink href="#Projects" className="nav-link">
          Projects
        </AnchorLink>
        <AnchorLink href="#Contact" className="nav-link">
          Contact
        </AnchorLink>
      </ul>
      <hr className="divider" />
    </>
  );
}
