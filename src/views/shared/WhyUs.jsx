import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUsers, faReceipt } from '@fortawesome/free-solid-svg-icons'

const renderFeatures = () => {
  let features = [];
  const items = [
    {
      name: "Sovelluksen julkaisu",
      icon: faPaperPlane,
      description: "Järjestelmän tärkeimpänä tukipilarina on kuluttajan sovellus. Sen loppukehitys ja julkaisu on välttämätön askel koko järjestelmän kehityksen kannalta."
    },
    {
      name: "Testijakso",
      icon: faUsers,
      description: "On ensisijaisen tärkää selvittää konseptin toimivuus ja selvittää, aktivoiko sovellus ihmisiä kierrättämään. Testijaksosta saadaan myös korvaamatonta tietoa järjestelmän toimivuudesta."
    },
    {
      name: "Rahoitus",
      icon: faReceipt,
      description: "Ryyberin kaltaisen järjestelmän kehitys on hidasta hommaa, eikä sitä tulla saamaan maaliin ilman ulkopuolista tukea. Rahoituksen saaminen on ensiarvoisen tärkeää koko projektin kannalta."
    }
  ];

  items.forEach((f, i) => {
    features.push(
      <li className="list-item" key={i}>
        <div className="media align-items-center">
          <div className="icon-shape mr-3">
            <div className="shape shape-pipes" />
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
    <section id="roadmap" className="section why-choose-us">
      <div className="shapes-container">
        <div className="pattern pattern-dots" />
      </div>

      <div className="container pb-8 bring-to-front">
        <div className="section-heading text-center">
          <h2 className="heading-line">Järjestelmän kehitys</h2>
          <h5 className="text-muted font-weight-light">
            Järjestelmää on kehitetty Helmikuusta 2021 lähtien sivutyönä muiden päivätöiden ohella.
            Kehitys on jo niin pitkällä, että mahdollinen koeponnistus ja testijakso olisi mahdollista
            suorittaa jo vuoden 2021 loppupuolella.
          </h5>
          <h5 className="text-muted mt-4 font-weight-light">
            Järjestelmä koostuu monesta eri palasesta: Kuluttajien puhelinsovellus, jätealan hallinnointisovellus,
            Hallinnointityökalut kuntien että jätealan käyttöön sekä koko maan kattava hallinnointi- ja datatyökalu.
          </h5>
        </div>

        <div className="row gap-y">
          <div className="col-sm-12  col-lg-7">
            <h4 className="bold text-alternate">
              Etenemissuunnitelma
            </h4>
            <p className="text-muted lead mb-5">
              Järjestelmän tavoitteet ovat kunnianhimoisia, ja niitä ei saavuteta ilman ulkopuolista tukea. Järjestelmän
              jokainen osa-alue edistyy jatkuvasti eteenpäin. Tässä tärkeimmät tulevat tavoitteet:
            </p>

            <ul className="list-unstyled why-icon-list">{renderFeatures()}</ul>

            <hr className="my-5" />
            {/*<div className="text-center text-md-left">
              <Link to="#!" className="btn btn-primary text-contrast">
                Know More
              </Link>
  </div>*/}
          </div>

          <div className="d-none d-lg-block col-md-5">
            <div className="rotated-mockups device-twin">
              <div className="browser absolute shadow-lg">
                <img
                  src={require("assets/img/screens/tablet/1.png")}
                  alt="..."
                />
              </div>

              <div className="front iphone light">
                <div className="screen">
                  <img
                    src={require("assets/img/screens/app/1.png")}
                    alt="..."
                  />
                </div>

                <div className="notch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
