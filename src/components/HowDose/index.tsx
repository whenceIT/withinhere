import React from "react";

import { Container } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
import screenshots from "../../assets/images/screenshots.jpg";

const HowDoes: React.FC = () => {
  return (
    <Container>
      <div>
      <h2>How Does Withinhere Work?</h2>
        <HeaderCenterSection title="Simplicity">
        <b>Seller</b><br></br>
        Through the Withinhere app, post a product, activiate visibility and 
        then anyone looking for that product within a certain area will
        see it and chat over details through the in app messaging system. <br></br>
        <b>Buyer</b><br></br>
        Through the Withinhere app, define an area of interest and search for 
        what you need. If product or service is not listed under that area, 
        the nearest listings shall be suggested for you.
        </HeaderCenterSection>
        <img src={screenshots} alt="screenshots" />
      </div>
    </Container>
  );
};

export default HowDoes;
