import React from "react";

import "./App.css";
import Header from "./componts/Footer";
import Footer from "./componts/Header";
import Content, { Banner } from "./componts/Content";

const App = () => {
  return (
    <>

      <Footer />
      <Banner />
      <Content />
      <Header />

    </>
  );
};

export default App;
