import React from "react";
import { Container } from "reactstrap";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";


const founders = [
  {
    name: "Joonas",
    desc: "Graafikko, ohjelmoija",
  },
  {
    name: "Christian",
    desc: "Myyjä, visionääri",
  },
  {
    name: "Samuli",
    desc: "Ohjelmoija",
  }
];
const renderProfiles = () => {
  for (let i = 1; i < 4; i++) {
    let items = [];
    for (let i = 1; i < 4; i++) {
      items.push(
        <Tilt options={{ max: 20, glare: true, maxGlare: 0.4 }} key={i}>
          <div
            className="d-flex flex-column align-items-center mb-3"
          >
            <img
              src={require(`assets/img/avatar.png`)}
              className="img-responsive"
              alt=""
            />
            <p className="lead text-muted text-center font-weight-bold">
              {founders[i - 1].name}
            </p>
            <p className="text-muted  text-center">
              {founders[i - 1].desc}
            </p>
          </div>
        </Tilt>
      );
    }
    return items;
  };
}
const MultipleDesignBlocks = () => {
  return (
    <section id="about" className="section powered-design">
      <div className="shapes-container">
        <div className="shape shape-circle shape-circle-1">
          <Fade bottom right duration={1500}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-2">
          <Fade bottom right duration={1200} delay={500}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-ring animation--rotating-diagonal">
          <div />
        </div>
        <div className="shape shape-triangle shape-animated">
          <div className="animation--rotating" />
        </div>

        <div className="d-none d-md-block shape pattern-dots-1" />

      </div>


      <Container>
        <div className="section-heading text-center">
          <h2 className="mt-3 heading-line">Keitä olemme</h2>
          <p className="lead text-muted my-4 semi-bold">
            Olemme myyjiä, graafikoita, koodareita ja visionäärejä.
          </p>
        </div>
        <div className="d-flex  justify-content-around mt-3" >{renderProfiles()}</div>
        <div className="mt-5 text-center">
          <p className="lead text-muted">
            Tavallisesti liiketoimintaan tarvittavat ohjelmistot ja tekninen osaaminen hankitaan ulkopuolisen yrityksen kautta.
            Tämä voi johtaa hitaaseen kehitysnopeuteen, innovaatioiden vähenemiseen ja korkeisiin kehityskustannuksiin.
            Tämä on Ryyberin etu.
          </p>
          <p className="lead text-muted">
            Ryyberin tiimistä löytyy jokaisen alan ammattiosaajia, jotka ovat täydellä sydämmellä kehitystyössä mukana. Tämä takaa sen,
            että kykenemme reagoimaan nopeasti murroksessa olevan jätealan kehitykseen.
          </p>

        </div>

      </Container>
    </section>
  );
};

export default MultipleDesignBlocks;
