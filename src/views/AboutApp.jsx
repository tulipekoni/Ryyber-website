import React from "react";
import { Container, Row, Col } from "reactstrap";
import PowerfulCard from "../components/PowerfulCard.jsx";

const createCards = use => {
  let features = [];
  let cards = [
    {
      class: "mt-6 mt-6 mx-lg-auto",
      icon: "diamond",
      title: "Joustava",
      animation: { delay: 0 },
      description: "Tyhjennät astian silloin kun haluat."
    },

    {
      class: "mx-lg-auto",
      icon: "vector",
      title: "Seuraa",
      animation: { delay: 800 },
      description: "Helppojen työkalujen avulla seuraat omaa kulutustasi."
    },

    {
      class: "mr-lg-auto",
      icon: "cash",
      title: "Kustannukset",
      animation: { delay: 500 },
      description: "Maksat tyhjennyksestä vain sen mitä tilaat."
    },

    {
      class: "mt-6n mr-lg-auto",
      icon: "sun",
      title: "Kaikki mukaan",
      animation: { delay: 1200 },
      description: "Jokainen voi osallistua omalla panoksella"
    }
  ];

  cards.forEach((el, i) => {
    if (i % 2 === use) {
      features.push(<PowerfulCard {...el} key={i} />);
    }
  });

  return features;
};

const PowerfulFeatures = () => {
  return (
    <section id="app" className="section alter3-features">
      <div className="shapes-container">
        <div className="shape shape-ring shape-ring-1">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-ring shape-ring-2">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-circle animation--clockwise">
          <div />
        </div>

        <div className="shape background-shape-main" />
      </div>

      <Container>
        <Row>
          <Col lg={{ size: 5, order: "last" }}>
            <div className="section-heading">
              <h2 className="heading-line d-flex flex-column align-items-center d-lg-block text-center text-lg-left">Sovellus jolla tilaat jätetyhjennyksen</h2>
            </div>

            <ul className="list-unstyled">
              <li className="media flex-column flex-md-row text-center text-md-left">
                <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users pe-3x" />
                <div className="media-body mt-3 mt-md-0">
                  <h5 className="bold mt-0 mb-1">Jätteen seuranta</h5>
                  <p className="m-0">
                    Harva ihminen seuraa omaa jätteentuotantoaan. Monille roskalaatikko on pelkkä musta aukko,
                    jonka roska-auto käy silloin tällöin tyhjentämässä.
                  </p>
                  <p className="mt-4">
                    Koska Ryyber laittaa ihmiset itse vastuuseen jätetyhjennyksen tilauksesta, pakottaa se näin
                    aktiiviseen roskalaatikon seurantaan.
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


            </ul>
          </Col>

          <Col xs="12" lg="7" className="d-none d-lg-block pr-lg-6">
            <Row>
              <Col xs="6" className="rotated-cards">
                {createCards(0)}
              </Col>
              <Col xs="6" className="rotated-cards">
                {createCards(1)}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PowerfulFeatures;
