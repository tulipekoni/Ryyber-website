import React from "react";
import { Container, Row, Col } from "reactstrap";
import PowerfulCard from "./PowerfulCard.jsx";

const createCards = use => {
  let features = [];
  let cards = [
    {
      class: "mt-6 mt-6 mx-lg-auto",
      icon: "paint-bucket",
      title: "Joustava",
      animation: { delay: 0 },
      description: "Tilaa tyhjennys vasta tarvittaessa"
    },

    {
      class: "mx-lg-auto",
      icon: "light",
      title: "Tehokas",
      animation: { delay: 800 },
      description: "Tarjoamme kuluttajalle helpot työkalut oman kulutuksen tarkasteluun"
    },

    {
      class: "mr-lg-auto",
      icon: "diamond",
      title: "Kustannukset",
      animation: { delay: 500 },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
    },

    {
      class: "mt-6n mr-lg-auto",
      icon: "cash",
      title: "Affordable",
      animation: { delay: 1200 },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
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
    <section id="what" className="section alter3-features">
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
          <Col lg="5" className="order-lg-last">
            <div className="section-heading">
              <p className="px-2 text-alternate text-uppercase bold">
                Mikä Ryyber?
              </p>
              <h2 className="heading-line">
                Sovellus jolla voit tilata tyhjennyksen vasta tarvittaessa
              </h2>

              <p className="lead text-muted my-4 semi-bold">
                Ryyber ei tehosta, se aktivoi.
              </p>

              <p className="lead text-muted ">
                Nykyisen järjestelmän ongelmakohta on sen helppous. Kun ihminen ei aktiivisesti joudu miettimään
                jätettään, siitä tulee toissijainen asia. Ryyberin tarkoitus on aktivoida, ei tehostaa.
              </p>

              {/*<MoreInfoButton
                className="btn btn-primary text-contrast bold"
                text="Know More"
                to="#!"
              />*/}
            </div>
          </Col>

          <Col lg="7" className="pr-lg-6">
            <Row>
              <Col lg="6" className="rotated-cards">
                {createCards(0)}
              </Col>
              <Col lg="6" className="rotated-cards">
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
