import { useState, useEffect } from "react";

export default function TextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Dreamer", "Lover", "Connoisseur of all noodle based dishes"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-container">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`text ${index === currentIndex ? "visible" : ""}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
