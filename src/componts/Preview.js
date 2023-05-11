import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./Preview.css";
import Col from "react-bootstrap/Col";

const Preview = () => {
  const [products, setProducts] = useState([]);

  let key = useParams();

  const ReqHeader = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const handleInitLoad = async () => {
    let dataState;
    try {
      dataState = await axios.get(
        `https://dummyjson.com/products/${key.id}`,
        ReqHeader
      );

      const datt = dataState.data;
      console.log("datt", datt);
      setProducts(datt);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleInitLoad();
  }, [key.id]);

  return (
    <>
      <h2 className="d-flex justify-content-center "> product Preview</h2>
      <Card.Header
        className=" d-flex justify-content-center "
        style={{ color: "red" }}
        id={products.id}
      >
        {products.title}
      </Card.Header>

      <Container id="div" className="border border-dark mt-3">
        <Row>
          <Col>
            {" "}
            <Card
              className="card m-3 p-3 justify-content-center content-center "
              style={{ width: "60vh", heignt: "60vh" }}
              id={products.id}
            >
              <Card.Header className="bg-dark text-white" id={products.id}>
                {products.title}
              </Card.Header>

              <Card.Img
                className="  img-wrapper
                    hover-zoom rounded mx-auto d-block mt-2"
                style={{ width: "345px", height: "280px" }}
                variant="top"
                src={products.thumbnail}
              />
            </Card>
          </Col>
          <Col className="mt-3 ">
            <ul>
              <li className="m-2">
                <Card.Title> product Name-{products.brand} </Card.Title>
              </li>
              <li className="m-2">
                <Card.Title> product Price-{products.price}$ </Card.Title>
              </li>
              <li className="m-2">
                <Card.Title> product Rating-{products.rating} </Card.Title>
              </li>
              <li className="m-2">
                <Card.Title>
                  {" "}
                  product Discount-{products.discountPercentage}%{" "}
                </Card.Title>
              </li>
              <li className="m-2">
                <Card.Title> Product Stock-{products.stock} </Card.Title>
              </li>
              <li className="m-2">
                <Card.Title>category-{products.category} </Card.Title>
              </li>
            </ul>
            <h5>"{products.description}"</h5>
            <div>
              {" "}
              <StarRating />
            </div>

            <div className="text-white">
              <button
                onClick={() => {
                  alert(`Product Buy: ${products.title}`);
                }}
                className="d-flex-inline  m-2 btn btn-outline-dark  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-cart-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg>
              </button>

              <button
                onClick={() => {
                  alert(`Product  Cancel :${products.title}`);
                }}
                className="d-flex-inline  m-2 btn btn-outline-dark"
              >
                Cancel
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Preview;

const StarRating = () => {
  const [rating, setRating] = useState(3);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export { StarRating };
