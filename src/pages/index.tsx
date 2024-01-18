import React from "react";
import NavBar from "../components/NavBar";
import "../styles/main.scss";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";

const IndexPage: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
