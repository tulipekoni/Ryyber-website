import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";
import MoreInfoButton from "components/MoreInfoButton";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const founders = [
    {
        name: "Joonas",
        title1: "Front-end -ohjelmoija, Graafikko",
        exp: "Kyvykäs suunnittelija ja devaaja",
        exp2: "UI/UX suunnittelu & appien toteutus",
    },
    {
        name: "Christian",
        title1: "Visionääri",
        exp: "Laaja kokemus myyntityöstä",
        exp2: "Yritystoiminta, kontaktointi",

    },
    {
        name: "Samuli",
        title1: "Back-end -ohjelmoija",
        exp: "Pitkä ohjelmointitausta",
        exp2: "Serverin toteutus, testaus & hallinta",

    }
];

const renderItems = () => {
    let items = [];

    for (let i = 1; i < 4; i++) {
        items.push(
            <Tilt options={{ max: 20, glare: true, maxGlare: 0.4 }} key={i}>
                <div
                    className={classNames(
                        "rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast",
                        { "mt-5": i > 1 }
                    )}
                >

                    <div className="founder-card-exp gradient gradient-primary-auxiliary">
                        <p className="lead text-light text-center font-weight-bold">
                            {founders[i - 1].exp}
                        </p>
                        <p className="text-light text-center">
                            {founders[i - 1].exp2}
                        </p>
                    </div>
                    <div className="founder-card">
                        <p className="lead text-muted text-center font-weight-bold">
                            {founders[i - 1].name}
                        </p>
                        <p className="text-muted  text-center">
                            {founders[i - 1].title1}
                        </p>
                    </div>
                </div>
            </Tilt>
        );
    }

    return items;
};

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

                <div className="shape pattern-dots-1" />
            </div>

            <Container>
                <Row className="gap-y align-items-center">
                    <Col md="8">
                        <div className="section-heading">
                            <h2 className="heading-line d-flex flex-column align-items-center d-lg-block text-center text-lg-left">
                                Keitä olemme
                            </h2>
                            <p className="lead text-muted text-center text-md-left">
                                Koemme, ettei kierrätykseen liittyviä ongelmia ratkaista mielenosoituksilla taikka lakipykälillä.
                                Tarvitaan toimintaa ja tekoja! Siksi valjastimme oman osaamisemme ongelman ratkaisemiseksi.
                            </p>
                            <p className="lead text-muted text-center text-md-left">
                                Ryyberin tiimistä löytyy jokaisen alan ammattiosaajia, jotka ovat täydellä sydämmellä kehitystyössä mukana.
                                Intohimo kierrätysongelman ratkaisuun ajaa kehitystyötä valtavalla voimalla eteenpäin.
                            </p>
                        </div>


                    </Col>

                    <Col md="4">{renderItems()}</Col>
                </Row>
            </Container>
        </section>
    );
};

export default MultipleDesignBlocks;
