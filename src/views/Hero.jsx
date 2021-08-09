import React from "react";
import { Container, Row, Col, } from "reactstrap";


const Partners = () => {
  return (
    <section className="section alter3-partners bg-contrast edge top-left-hero">
      <Container className="bring-to-front pb-md-9">
        <Row>
          <Col md="7">
            <div className="section-heading">

              <h3 className="text-alternate heading-line">
                Ratkaisu jätehuollon ja kierrätyksen ongelmiin
              </h3>

              <p className="lead">
                Jäteala on murroksessa. Uudet EUn asettamat kierrätysmääräykset ovat synnyttäneet lukuisia innovaatioita
                kierrätyksen, logistiikan ja jätteen uusiokäyttöön.
              </p>
              <p className="lead">
                Jokainen innovaatio on kuitenkin unohtanun järjestelmän tärkeimmän yksilön: Ihmisen.
              </p>
              <p className="lead">
                Jätehuollon logistiikkaa voidaan optimoida lukuisilla eri teknisillä välineillä, mutta ratkaisu kierrätykseen löytyy
                jätteen alkulähteen luota, ihmisestä.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
