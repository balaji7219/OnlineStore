import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import React from "react";
import Carousel from "react-bootstrap/Carousel";


import Col from 'react-bootstrap/Col';
const Content = () => {
  const [products, setProducts] = useState([]);

  async function getPostsData() {
    try {
      let stateApi = await axios.get(
        "https://dummyjson.com/products"
      );
      let response = stateApi.data;
      setProducts(response.products);
      console.log(response.products);
    } catch (error) {
      return error;
    }
  }
  // async function getPostsData() {
  //   try {
  //     let stateApi = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     let response = stateApi.data;
  //     setProducts(response);
  //     console.log(response);
  //   } catch (error) {
  //     return error;
  //   }
  // }

  useEffect(() => {
    getPostsData();
  }, []);



  return (
    <>
      {/* <table className=" m-4 table table-striped table-responsive ">
        <thead className=" table-primary">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">UserTitle</th>
            <th scope="col">UserBody</th>
          </tr>
        </thead>

        <tbody>
          {users.map((users, i) => (
            <tr key={i}>
              <td>{users.id}</td>
              <td>{users.title}</td>
              <td>{users.body}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Container>
        <div className='row-wrapper'>
          {/* <Row>

            <Col xs={12} md={6} lg={4} key={products.id}>
              {products.map(products => (
                <products key={products.id} products={products} />
              ))}
              <Card style={{ width: '18rem' }}>


                <Card.Header></Card.Header>
                <Card.Img variant="top" src={products.image} />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Text>
                    {products.description}
                  </Card.Text>
                  <Button variant="primary" >Add to cart</Button><br />
                  <br />
                  <Button>Add to favs</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
          <Row className="d-flex wrap ">
            {products.map((products) => {
              return (
                <Col
                  md={4}
                  lg={3}
                  sm={4}
                  key={products}
                >
                  <Card className="card text-center" style={{ width: '18rem' }} >

                    <Card >
                      <Card.Header> {products.title}</Card.Header>
                      <Card.Img className=" d-flex card-img-top m-4" style={{ width: "250px", height: "200px" }} variant="top" src={products.thumbnail} />
                      <Card.Body>
                        <Card.Title> {products.brand} </Card.Title>

                        <Card.Text>
                          {products.description}
                        </Card.Text>
                        {/* <Card.Price>{products.price}</Card.Price> */}
                        <div className="d-flex gap-5">
                          <Button >Add to cart</Button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="currentColor" className="bi bi-heart " viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </Card.Body>
                    </Card>

                  </Card>
                </Col>
              );
            })}
          </Row>

        </div >
      </Container >


    </>
  );
};

export default Content;


const Banner = () => {


  return (
    <>
      <Carousel style={{ marginBottom: "20px" }}>
        <Carousel.Item>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src={"assets/img/3.jpg"}
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={"assets/img/2.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={"assets/img/5.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export { Banner };