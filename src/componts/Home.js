import React from "react";
import { Carousel, Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Carousel style={{ marginBottom: "20px" }}>
        <Carousel.Item>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={"assets/img/2.jpg"}
            alt="First slide"
          />

          <Carousel.Caption className="text-dark">
            {" "}
            Bts e-Commerce
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={"assets/img/3.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption className="text-dark">
            {" "}
            Bts e-Commerce
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={"assets/img/5.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
            Bts e-Commerce
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <section className="section2">
          <div className="fivesteps">
            <div className="wrapper">
              <div className="fivesteps-content fl">
                <p
                  className="desc-line to-animate fadeInUp animated"
                  data-animate="fadeInUp animated"
                  data-delay="100"
                >
                  Your ecommerce website in
                </p>
                <p
                  className="tag-line to-animate fadeInUp animated"
                  data-animate="fadeInUp animated"
                  data-delay="200"
                >
                  5 Steps
                </p>
                <ul className="step-points">
                  <li
                    className="to-animate fadeInUp animated"
                    data-animate="fadeInUp animated"
                    data-delay="300"
                  >
                    <p className="sub-title">Design effortlessly</p>
                    <p className="points-text fivesteps-text">
                      Drag and drop your&nbsp;ecommerce&nbsp;website to life.
                      <br />
                      If you have&nbsp;coding&nbsp;experience,&nbsp;you'll
                      never&nbsp;need&nbsp;it.
                    </p>
                  </li>
                  <li
                    className="to-animate fadeInUp animated"
                    data-animate="fadeInUp animated"
                    data-delay="400"
                  >
                    <p className="sub-title">Add products</p>
                    <p className="points-text fivesteps-text">
                      Add or import your products,&nbsp;including descriptions,
                      specifications, and images.
                    </p>
                  </li>
                  <li
                    className="to-animate fadeInUp animated"
                    data-animate="fadeInUp animated"
                    data-delay="500"
                  >
                    <p className="sub-title">Showcase them with care</p>
                    <p className="points-text fivesteps-text">
                      Organize your products into categories and
                      collections.&nbsp;When you&nbsp;make it easy for customers
                      to find them, you&nbsp;make it easier&nbsp;to sell them.
                    </p>
                  </li>
                  <li
                    className="to-animate fadeInUp animated"
                    data-animate="fadeInUp animated"
                    data-delay="600"
                  >
                    <p className="sub-title">Instantly&nbsp;live</p>
                    <p className="points-text fivesteps-text">
                      Go online with one click and see updates reflected on your
                      mobile-optimized website, instantly.
                    </p>
                  </li>
                  <li
                    className="to-animate fadeInUp animated"
                    data-animate="fadeInUp animated"
                    data-delay="700"
                  >
                    <p className="sub-title">
                      Payments,&nbsp;taxes, and&nbsp;shipping
                    </p>
                    <p className="points-text fivesteps-text last-text">
                      Include multiple payments gateways, and location-specific
                      tax rates and shipping options to your store.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="fivesteps-content fr">
                <div className="fivesteps-top-img">
                  <img
                    alt="Your ecommerce website in 5 Steps"
                    className="to-animate data-loaded fadeInUp animated"
                    data-animate="fadeInUp animated"
                    data-delay="700"
                    data-lazy=""
                    height="349"
                    src="//www.zohowebstatic.com/sites/zweb/images/commerce/ecommerce-website-builder-step-top-image.png"
                    width="425"
                  />
                </div>
              </div>
            </div>
            <div
              className="side-img-top slideAnimate active animated"
              data-animate="active animated"
              data-delay="100"
            >
              &nbsp;
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
