import React from "react";
import NavBar from "../components/NavBar";
import "../styles/main.scss";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import ProjectsContainer from "../components/ProjectsContainer";
import About from "../components/About";

const IndexPage: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Technologies />
      <ProjectsContainer />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
