import React from "react";
import AboutMe from "../AboutMe";
import HomeProjects from "../HomeProjects";
import Footer from "../Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <AboutMe />
      <HomeProjects />
      <Footer />
    </>
  );
};

export default HomePage;
