export default function Header() {
  return (
    <div className="header-container">
      <img
        className="neil-portrait"
        src="../../public/images/portrait.png"
        alt="picture of Neil"
      />
      <div className="header-text-container">
        <h1 className="header-title">Neil Danner</h1>
        <p className="header-text">Junior Software Engineer</p>
      </div>
    </div>
  );
}
