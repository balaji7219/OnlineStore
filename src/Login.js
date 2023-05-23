import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

async function loginUser(credentials) {
  return fetch("http://localhost:8081/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <MDBContainer>
      <MDBRow style={{ margin: "150px", justifyContent: "center" }}>
        <MDBCol xl="6">
          <img
            style={{ borderRadius: "40px", height: "100%", width: "100%" }}
            src="https://www.kindpng.com/picc/m/732-7329685_e-commerce-website-background-image-e-commerce-website.png"
            alt=""
          />
        </MDBCol>
        <MDBCol xl="6">
          <div>
            <div className="d-flex justify-content-center text-danger ">
              {" "}
              <h3> Bts E-commerce..... </h3>
            </div>
            <h3 className="d-flex  justify-content-center text-center">
              Sign-In
            </h3>
            <hr />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input
                type="userName"
                className="form-control form-control-lg"
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder="Enter UserName"
              />
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                className="form-control form-control-lg"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Password"
              />
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" for="form1Example3">
                Remember Password
              </label>
            </div>
            <button className="btn btn-primary " type="submit">
              Submit
            </button>
            <hr /> 
            
            <p className="forgot-password text-right">
              CreateNew-Account <a href="../SignUp">Sign_Up?</a>
            </p>
          </form>
        </MDBCol>
      </MDBRow>
      {/* <div
      className="border border-dark p-3 "
      style={{ width: "100%", height: "100%" }}
    >
      <Row className="row">
        <Col className="col-lg-6 col-md-6 ">
          <img style={{borderRadius:"70px",height:"100%" , width:"100%"}} 
          src="https://www.kindpng.com/picc/m/732-7329685_e-commerce-website-background-image-e-commerce-website.png" />
        </Col>
        <Col className="col-lg-6 col-md-6 mb-4 mb-lg-0">
          <div>
            <div className="d-flex justify-content-center text-danger ">
              {" "}
              <h3> Bts E-commerce..... </h3>
            </div>

            <h3 className="">Sign-In</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input
                type="userName"
                className="form-control form-control-lg"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <label className="form-label" for="typeEmailX-2">
                UserName
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                className="form-control form-control-lg"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="form-label" for="typePasswordX-2">
                Password
              </label>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" for="form1Example3">
                Remember Password
              </label>
            </div>

            <button className="btn btn-primary " type="submit">
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </div> */}
    </MDBContainer>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
