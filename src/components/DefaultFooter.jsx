import React from "react";

// reactstrap components
import { Nav, Container, Row, Col } from "reactstrap";
import { Link } from "react-scroll";

const DefaultFooter = () => {
  return (
    <footer className="site-footer section bg-dark text-contrast edge top-left">
      <Container className="py-3">
        <Row className="row gap-y text-center text-md-left">
          <Col md="4" className="mr-auto">
            <Link to="hero" smooth>
              <img
                src={require("assets/img/logo-light.png")}
                alt=""
                className="logo"
              />
            </Link>
            <p>
              Ensimmäinen aktiivinen jätehuoltomalli
            </p>
          </Col>

          <Col md="2">
            <Nav className="flex-column" tag="nav">
              <Link to="what" smooth offset={-50} className="py-2 text-contrast" href="#">
                Miksi
              </Link>
              <Link to="app" smooth offset={-50} className="py-2 text-contrast" href="#">
                Sovellus
              </Link>
              <Link to="about" smooth offset={-50} className="py-2 text-contrast" href="#">
                Meistä
              </Link>
            </Nav>
          </Col>
          <Col md="2">
            <Nav className="flex-column" tag="nav">
              <Link to="roadmap" smooth offset={-50} className="py-2 text-contrast" href="#">
                Suunnitelma
              </Link>
              <Link to="faq" smooth offset={-50} className="py-2 text-contrast" href="#">
                Kysyttyä
              </Link>

            </Nav>
          </Col>
        </Row>

        <hr className="mt-5 op-5" />

        <Row className="small">
          <Col md="4">
            <p className="mt-2 mb-0 text-center text-md-left">
              © {new Date().getFullYear() + " "}
              Ryyber Oy. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default DefaultFooter;
