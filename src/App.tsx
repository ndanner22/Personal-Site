import "./App.css";
import Header from "./Components/Header.tsx";
import NavBar from "./Components/NavBar.tsx";
import AboutMe from "./Components/AboutMe.tsx";
import Projects from "./Components/Projects.tsx";
import Contact from "./Components/Contact.tsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
