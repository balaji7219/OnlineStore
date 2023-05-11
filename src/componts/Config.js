import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preview from "./Preview";
import Signup from "./SignUp";
import Home from "./Home";
const Config = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="Content" element={<Content />} />
        <Route path="SignUp" element={<Signup />} />
        <Route path="Products/:id" element={<Preview />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Config;
