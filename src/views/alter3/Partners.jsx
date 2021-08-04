import React from "react";
import { Container, Row, Col, } from "reactstrap";


const Partners = () => {
  return (
    <section className="section alter3-partners bg-contrast edge top-left">
      <Container className="bring-to-front pb-md-9">
        <Row>
          <Col md="7">
            <div className="section-heading">

              <h3 className="text-alternate heading-line">
                Ratkaisu jätehuollon ja kierrätyksen ongelmiin
              </h3>

              <p className="lead">
                Ratkaisua alhaisiin kierrätyslukemiin on pyritty ratkaisemaan lukuisilla eri menetelmillä. Jokainen tekninen
                ratkaisu on kuitenkin unohtanut sen tärkeimmän kulmakiven koko järjestelmässä: Ihmisen.
              </p>
              <p className="lead">
                Jätehuoltoa voidaan optimoida lukuisilla eri teknisillä välineillä, mutta ratkaisu kierrätykseen löytyy
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
