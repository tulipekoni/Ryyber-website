import React from "react";

// shared page components
import What from "./What.jsx";
import AboutUs from "./AboutUs.jsx";
import AboutApp from "./AboutApp.jsx";
import RoadMap from "./RoadMap.jsx";
import Faqs from "./Faqs.jsx";
import EndBlock from "./EndBlock.jsx";
import Heading from "./Heading.jsx";
import HeroMockups from "./HeroMockups.jsx";
import Hero from "./Hero.jsx";

// core components
import DefaultNavbar from "components/DefaultNavbar.jsx";
import DefaultFooter from "components/DefaultFooter.jsx";



class Screens extends React.Component {

  render() {
    return (
      <>
        <DefaultNavbar />
        <main ref="main">
          <Heading />
          <HeroMockups />
          <Hero />
          <What />
          <AboutApp />
          <AboutUs />
          <RoadMap />
          <Faqs />
          <EndBlock />
        </main>
        <DefaultFooter />
      </>
    );
  }
}

export default Screens;
