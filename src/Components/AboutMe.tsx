import TextAnimation from "./TextAnimation";
import "../App.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <h2 className="about-me-title">Hi, I'm Neil 👋</h2>
      <p className="about-me-body"></p>
      <TextAnimation />
    </div>
  );
}
