import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUsers, faReceipt } from '@fortawesome/free-solid-svg-icons'

const renderFeatures = () => {
  let features = [];
  const items = [
    {
      name: "Sovelluksen julkaisu",
      icon: faPaperPlane,
      description: "Järjestelmän tärkeimpänä tukipilarina on kuluttajan sovellus. Sen loppukehitys ja julkaisu on ensimmäisiä suuria askelia Ryyberin etenemissuunnitelmassa."
    },
    {
      name: "Testijakso",
      icon: faUsers,
      description: "On ensisijaisen tärkeää selvittää konseptin toimivuus ja koeponnistaa järjestelmä mahdollisimman pian. Laaja testaus ja siitä saatu palaute on valtava apu järjestelmän jatkokehitykselle."
    },
    {
      name: "Rahoitus",
      icon: faReceipt,
      description: "Kehitystyö on vaativaa. Siitä syystä onkin aika kutsua yhteistyökumppanit mukaan rakentamaan tulevaisuuden jätehuollon menestystarinaa!"
    }
  ];

  items.forEach((f, i) => {
    features.push(
      <li className="list-item" key={i}>
        <div className="media align-items-center">
          <div className="d-none d-md-block icon-shape mr-3">
            <div className=" shape shape-pipes" />
            <FontAwesomeIcon
              icon={f.icon}
              className="icon fa-3x text-alternate"
            />
          </div>

          <div className="media-body">
            <h5 className="bold">{f.name}</h5>
            <p className="my-0">{f.description}</p>
          </div>
        </div>
      </li>
    );
  });

  return features;
};

const WhyUs = () => {
  return (
    <section id="roadmap" className="section why-choose-us text-center text-lg-left">
      <div className="shapes-container">
        <div className="pattern pattern-dots" />
      </div>

      <div className="container pb-8 bring-to-front">
        <div className="section-heading text-center">
          <h2 className="heading-line">Järjestelmän kehitys</h2>
          <h5 className="text-muted font-weight-light">
            Järjestelmää on kehitetty uutta jätelakia silmällä pitäen vuodesta 2020 alkaen.
            Kehitys on jo niin pitkällä, että mahdollinen koeponnistus ja testijakso olisi mahdollista
            suorittaa jo vuoden 2021 loppupuolella.
          </h5>
          <h5 className="text-muted mt-4 font-weight-light">
            Järjestelmä koostuu monesta eri palasesta: Kuluttajien puhelinsovellus, jätealan hallinnointisovellus sekä
            hallinnointi- ja datatyökalut kuntien että jätealan käyttöön.
          </h5>
          <h5 className="text-muted mt-4 font-weight-light">
            Tavoitteet ovat kunnianhimoisia, mutta järjestelmä kehittyy yksi palanen kerrallaan.
          </h5>
        </div>

        <div className="row gap-y">
          <div className="col-sm-12 col-lg-7">
            <h4 className="bold  text-alternate">
              Etenemissuunnitelma
            </h4>

            <ul className="list-unstyled mt-5 why-icon-list">{renderFeatures()}</ul>

            <hr className="my-5" />
          </div>

          <div className="d-none d-lg-block mockups">

            <img className="screen"
              src={require("assets/img/screens/app/iphone-mockup3.png")}
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
