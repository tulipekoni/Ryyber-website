import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-reveal";

const FeaturesCantMiss = () => {
  return (
    <section id="app" className="section features-cant-miss">
      <div className="shapes-container overflow-clear">
        <div className="shape shape-circle shape-circle-1">
          <Fade bottom right>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-2">
          <Fade bottom left delay={300}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-3">
          <Fade bottom right delay={400}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-4">
          <Fade bottom right delay={600}>
            <div />
          </Fade>
        </div>

        <div className="shape shape-triangle shape-animated">
          <div className="animation--rotating" />
        </div>
      </div>
      <Container>
        <Row className="gap-y">
          <Col md={{ size: 6, order: "last" }}>
            <div className="section-heading">

              <h2 className="heading-line">Mihin kaikkeen Ryyber soveltuu?</h2>
            </div>

            <ul className="list-unstyled">
              <li className="media flex-column flex-md-row text-center text-md-left">
                <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users pe-3x" />
                <div className="media-body mt-3 mt-md-0">
                  <h5 className="bold mt-0 mb-1">Ihmisten aktivointi</h5>
                  <p className="m-0">
                    Ryyber on ensisijaisesti kehitetty aktivoimaan ihmisiä kierrättämään.
                    Tämä tapahtuu aktivoimalla käyttäjä seuraamaan omaa jätteenkulutustaan.
                  </p>
                </div>
              </li>

              <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x" />
                <div className="media-body mt-3 mt-md-0">
                  <h5 className="bold mt-0 mb-1">Datan keräys</h5>
                  <p className="m-0">
                    Ryyber on rakennettu siten, että sillä kyetään keräämään valtavan tarkkaa dataa
                    ihmisten kierrätyksestä ja jätehuollon toiminnasta. Tätä tietoa voidaan hyödyntää monipuolisesti
                    päätöksen teon tukena.
                  </p>
                </div>
              </li>

              <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x" />
                <div className="media-body mt-3 mt-md-0">
                  <h5 className="bold mt-0 mb-1">Lorem ipsum</h5>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet aut autem eum laudantium quas recusandae repellendus
                    voluptate.
                  </p>
                </div>
              </li>
            </ul>
          </Col>

          <Col md="6">
            <img
              src={require("assets/img/screens/app/iphone-mockup1.png")}
              className="img-responsive"
              alt=""
            />

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesCantMiss;
