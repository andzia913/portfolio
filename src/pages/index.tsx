import React from "react";
import NavBar from "../components/NavBar";
import "../styles/main.scss";
import Header from "../components/Header";

const IndexPage: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Header />
    </main>
  );
};

export default IndexPage;
