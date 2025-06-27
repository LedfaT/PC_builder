import React from "react";

import { homePageStyles } from "./Home.styles.js";
import HomeFirstSection from "../../components/ui/HomeElements/HomeFirstSection/FirstSection.jsx";
import HomeSecondSection from "../../components/ui/HomeElements/HomeSecondSection/SecondSection.jsx";
import HomeThirdSection from "../../components/ui/HomeElements/HomeThirdSection/ThirdSection.jsx";

const Home = () => {
  return (
    <div className={homePageStyles.homePage}>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
    </div>
  );
};

export default Home;