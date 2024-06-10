import { useState, useEffect } from "react";

export default function ProjectTextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    {
      image: "../../public/images/place-holder.jpeg",
      title: "project 1",
      description: "Dreamer",
    },
    {
      image: "../../public/images/portrait.png",
      title: "project 2",
      description: "Lover",
    },
    {
      image: "../../public/images/place-holder.jpeg",
      title: "project 3",
      description: "Connoisseur of all noodle based dishes",
    },
    {
      image: "../../public/images/portrait.png",
      title: "project 4",
      description: "Overall hunk",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="project-text-container">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`project-text ${
            index === currentIndex ? "project-text-visible" : ""
          }`}
        >
          <p>{text.title}</p>
          <p>{text.description}</p>
          <img src={text.image} className="rotating-project-image" />
        </div>
      ))}
    </div>
  );
}
