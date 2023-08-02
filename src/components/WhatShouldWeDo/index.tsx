import React from "react";

import { Container, Grids } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
import Grid from "./Grid";

import ListTutorial from "../../constants/WhatShouldWeDoConstant";

const WhatShouldWeDo: React.FC = () => {
  return (
    <Container>
      <div>
      <h2>GET STARTED...!!!</h2>
        <HeaderCenterSection title="How to Get Started With Withinhere">
        Sign up on either <a href="#" target="_blank">Google Playstore</a> or 
         <a href="#" target="_blank">App Store</a> for free and a world 
        of endless possibilities shall be opened to you.
        </HeaderCenterSection>
        <Grids>
          {ListTutorial.map((tutorial, index) => (
            <Grid
              title={tutorial.title}
              image={tutorial.image}
              index={index}
              key={index}
            >
              {tutorial.description}
            </Grid>
          ))}
        </Grids>
      </div>
    </Container>
  );
};

export default WhatShouldWeDo;
