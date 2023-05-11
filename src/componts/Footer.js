import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 my-4" style={{ backgroundColor: "gray" }}>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item ">
          <a href="#" className="nav-link px-2">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2">
            products
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2">
            ContactUs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2">
            AboutUs
          </a>
        </li>
      </ul>
      <p className="text-center ">© 2022 BTS e-Commerce</p>
    </footer>
  );
};

export default Footer;
