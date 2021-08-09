import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-reveal";
import MoreInfoButton from "components/MoreInfoButton";
const FeaturesCantMiss = () => {
  return (
    <section id="what" className="section features-cant-miss">
      <div className=" shapes-container overflow-clear">
        <div className="d-none d-lg-block  shape shape-circle shape-circle-1">
          <Fade bottom right>
            <div />
          </Fade>
        </div>
        <div className="d-none d-lg-block shape shape-circle shape-circle-2">
          <Fade bottom left delay={300}>
            <div />
          </Fade>
        </div>
        <div className="d-none d-lg-block shape shape-circle shape-circle-3">
          <Fade bottom right delay={400}>
            <div />
          </Fade>
        </div>
        <div className="d-none d-lg-block shape shape-circle shape-circle-4">
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
          <Col lg="6" className="order-lg-last">
            <div className="section-heading ">
              <p className="px-2 text-alternate text-uppercase bold text-lg-left text-center">
                Miksi Ryyber?
              </p>
              <h2 className="heading-line d-flex flex-column align-items-center d-lg-block text-center text-lg-left">
                Liian passiivinen järjestelmä
              </h2>


              <p className="lead text-muted text-lg-left text-center">
                Nykyinen järjestelmä passivoi ihmisiä. Jätehuollosta on tehty liian helppoa, jolloin kierrätyksestä tulee
                toissijainen asia.
              </p>
              <p className="lead text-muted text-lg-left text-center">
                Ryyberin tarkoitus on tuoda roskalaatikot ihmisten aktiiviseen mieliin. Tällöin kierrätyksestä tulee itsestäänselvyys.
              </p>
              <div className="d-flex d-lg-block justify-content-center">
                <MoreInfoButton
                  className="btn btn-primary text-contrast bold"
                  text="Miten Ryyber aktivoi?"
                  to="app"
                />
              </div>

            </div>
          </Col>

          <Col md="6" className="d-none d-lg-block">
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
