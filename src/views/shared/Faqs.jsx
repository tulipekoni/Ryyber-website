import React from "react";
import { Container, Row, Col, UncontrolledCollapse } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const questions = [
  {
    question: "Kuka vastaa järjestelmän kehityksestä?",
    answer:
      "Me. Tavallisesti nopeasti kehittyvien yritysten vauhtia hidastaa kaikki ulkoistettu toiminta. Meillä koko järjestelmän kehitys tapahtuu talon sisällä alan ammattilaisten toimesta. Tämän johdosta Ryyber kykenee reagoimaan muuttuvaan yrityskenttään äärimmäisen nopeasti."
  },
  {
    question: "Onko kehityksessä otettu huomioon uusi jätelaki ja sen tuomat muutokset?",
    answer:
      "Kyllä. Ryyberin lähtökohtana on alusta asti ollut tarjota ratkaisu EUn tiukkien kierrätystavoitteiden saavuttamiseen. Tavoitteena on kehittää järjestelmä, mikä nostaa alhaisia kierrätyslukuja ja samalla tarjoaa kunnille valmiin työkalun uuden jätelain tarjoamiin velvotteisiin."
  },
  {
    question: "Onko kehityksessä mukana jätealan ammattilaisia?",
    answer:
      "Jäteala on monitasoinen ja haastava toimintakenttä. Tähän mennessä järjestelmää on kyetty kehittämään ilman jätealan ammattilaisten tuomaa osaamista. Vaikka mitään kehityssuuntaa ei ole unohdettu, olisi tärkeää tuoda järjestelmä alan ammattilaisten arvioitavaksi mahdollisimman pian."
  },
  {
    question: "Olisin kiinnostunut kuulemaan järjestelmästä lisää. Miten teihin voi ottaa yhteyttä?",
    answer:
      "Hienoa kuulla että olette kiinnostuneita! Pyydän olemaan yhteydessä asiakas- ja myyntivastaavaan Cristian Weckströmiin: cristian.weckstrom@ryyber.com"
  }
];

const Faqs = () => {
  return (
    <section id="faq" className="section faqs-dd bg-light edge top-left">
      <div className="shapes-container">
        <div className="absolute icon">
          <Fade top left>
            <FontAwesomeIcon icon={["fas", "question"]} />
          </Fade>
        </div>
      </div>

      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">Usein Kysyttyä</h2>
          <p className="lead">Haluatko tietää lisää konseptistamme?</p>
        </div>

        <Row>
          <Col lg="8" className="mx-lg-auto">
            {questions.map((faq, i) => (
              <Fade bottom key={i}>
                <div className="card shadow-box shadow-hover mb-3" key={i}>
                  <div className="card-header py-3">
                    <Link
                      to="#"
                      className="card-title collapsed"
                      id={`toggler-${i}`}
                    >
                      {faq.question}
                    </Link>
                  </div>

                  <UncontrolledCollapse toggler={`#toggler-${i}`}>
                    <div className="card-body">{faq.answer}</div>
                  </UncontrolledCollapse>
                </div>
              </Fade>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
