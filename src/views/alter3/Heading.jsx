import React from "react";
import { Container, Row, Col } from "reactstrap";

const Heading = () => {
  return (
    <header id="hero" className="header alter3-header section gradient gradient-primary-auxiliary text-contrast">
      <div className="shapes-container">
        <div className="animation-shape shape-ring animation--rotating-diagonal">
          <div />
        </div>
        <div className="animation-shape shape-circle animation--clockwise">
          <div />
        </div>
        <div className="animation-shape shape-triangle animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-diamond animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>

        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />
        <div className="static-shape shape-circle-1" />

        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />

        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>

      <Container className="bring-to-front">
        <Row>
          <Col md="7">
            <h1 className="extra-bold display-md-3 font-md">
              Ensimmäinen
              <span className="d-block display-md-4 light">
                aktiivinen jätehuoltomalli
              </span>
            </h1>
            <p className="lead">
              Ratkaisu tiukkoihin kierrätystavoitteisiin ja jätealan uudistuneen pelikentän hallintaan.
            </p>

            {/*<Nav className="mt-5" tag="nav">
              <NavLink
                href="#!"
                className="mr-3 btn btn btn-rounded btn-contrast"
              >
                Tutustu
                <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} className="ml-3 icon" />
              </NavLink>


  </Nav>*/}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
