import React from "react";
import Describe from "../describe";
import Templates from "../templates";
import Integration from "../integration";
import Discography from "../discography";
import DemoInstall from "../demo";
import ArtistPages from "../discography/ArtistPages";
import EasyToUse from "../easyToUse";
import ShopShowcase from "../shopShowcase";
import InnerTemplates from "../templates/InnerTemplates";
import FeaturesGrid from "../Features";
import ReviewSlider from "../reviewSlider";
import PremiumPluginsSection from "../../premium";
function Content() {
  return (
    <div>
      <div>
        <Describe></Describe>
      </div>
      <div>
        <Templates></Templates>
      </div>
      <div>
        <Integration></Integration>
      </div>
      <div>
        <Discography></Discography>
      </div>
      <div>
        <DemoInstall></DemoInstall>
      </div>
      <div>
        <ArtistPages></ArtistPages>
      </div>
      <div>
        <EasyToUse></EasyToUse>
      </div>
      <div>
        <ShopShowcase></ShopShowcase>
      </div>
      <div>
        <InnerTemplates></InnerTemplates>
      </div>
      <div>
        <FeaturesGrid></FeaturesGrid>
      </div>
      <div>
        <ReviewSlider></ReviewSlider>
      </div>
      <PremiumPluginsSection></PremiumPluginsSection>
    </div>
  );
}

export default Content;
