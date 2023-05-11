import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import React from "react";
import Col from "react-bootstrap/Col";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  const [products, setProducts] = useState([]);
  const ReqHeader = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  };
  async function getPostsData() {
    try {
      let stateApi = await axios.get(
        "https://dummyjson.com/products",
        ReqHeader
      );
      let response = stateApi.data;
      // console.log("response",response)
      setProducts(response.products);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <>
      <Container>
        <div>
          <Container>
            <Row className="d-flex">
              {products.map((products, index) => {
                return (
                  <Col md={4} lg={3} sm={4} key={index} id={products.id}>
                    <Card
                      className="card m-3 "
                      style={{ width: "18rem" }}
                      id={products.id}
                    >
                      <Card.Header
                        className="bg-dark text-white"
                        id={products.id}
                      >
                        {" "}
                        {products.title}{" "}
                      </Card.Header>
                      <Card.Img
                        className=" img-wrapper
                      hover-zoom rounded mx-auto d-block mt-2"
                        style={{ width: "225px", height: "210px" }}
                        variant="top"
                        src={products.thumbnail}
                      />
                      <Card.Body id={products.id}>
                        <Card.Title> {products.brand} </Card.Title>
                        <Card.Title> ${products.price} </Card.Title>

                        <Card.Title>
                          {" "}
                          Discount-{products.discountPercentage}%{" "}
                        </Card.Title>
                        <div className="d-flex gap-3 d-inline">
                          <button
                            onClick={() => {
                              alert(" Add Card 1 !");
                            }}
                            type="button"
                            className="btn btn-outline-dark "
                          >
                            Add cart
                          </button>
                          <Link to={`/products/${products.id}`}>Details</Link>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="36"
                            fill="dark"
                            className="bi bi-heart "
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Content;
