import React from "react";
import NavBar from "../components/NavBar";
import "../styles/main.scss";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
