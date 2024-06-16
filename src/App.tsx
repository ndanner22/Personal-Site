import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.tsx";
import NavBar from "./Components/NavBar.tsx";
import HomePage from "./Components/Pages/HomePage.tsx";
import ProjectsPage from "./Components/Pages/ProjectsPage.tsx";
import ContactPage from "./Components/Pages/ContactPage.tsx";
import SingleProjectPage from "./Components/Pages/SingleProjectPage.tsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:project_id" element={<SingleProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
