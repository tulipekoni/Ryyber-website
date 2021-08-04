import React from "react";

// shared page components
import What from "../shared/PowerfulFeatures.jsx";
import AboutUs from "../shared/MultipleDesignBlocks.jsx";
import AboutApp from "../shared/FeaturesCantMiss.jsx";
import RoadMap from "../shared/WhyUs.jsx";
import Faqs from "../shared/Faqs.jsx";
import Subscribe from "../shared/Subscribe.jsx";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.jsx";
import DefaultFooter from "components/Footers/DefaultFooter.jsx";

// alternative 3 page components
import Hero1 from "../alter3/Heading.jsx";
import IsometricMockups from "../alter3/IsometricMockups.jsx";
import Hero2 from "../alter3/Partners.jsx";

class Alternative3 extends React.Component {

  render() {
    return (
      <>
        <DefaultNavbar />
        <main ref="main">
          <Hero1 />
          <IsometricMockups />
          <Hero2 />
          <What />
          <AboutApp />
          <AboutUs />
          <RoadMap />
          <Faqs />
          <Subscribe />
        </main>
        <DefaultFooter />
      </>
    );
  }
}

export default Alternative3;
