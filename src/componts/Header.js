import { Navbar, Container, Button, Form } from "react-bootstrap";
import SignUp from "./SignUp";

function Header() {


  const clickSignUp = () => {

  }


  return (
    <Navbar
      className="py-2 my-3 "
      style={{ backgroundColor: "#4cb3d4" }}
      sticky="top"
      variant="dark"
    >
      <div className="logo-wrapper d-flex align-items-center ">
        <img
          src="http://192.168.29.23:8000/front_img/icon/humburger.svg"
          alt="humburger"
          className="header-menu"
        />

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="46" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
        </svg>
      </div>
      <Container>
        <Navbar.Brand className="text-dark" href="#">
          products
        </Navbar.Brand>
        <Navbar.Brand className="text-dark" href="#">
          AboutUs
        </Navbar.Brand>
        <Navbar.Brand className="text-dark" href="#">
          Help &amp; Support
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16">
          <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </Container>
      <button onClick={clickSignUp} type="button" className="btn btn-outline-dark m-2">SignUp</button>

      <button type="button" className="btn btn-outline-dark m-2">SignIn</button>


    </Navbar>
  );
}

export default Header;
