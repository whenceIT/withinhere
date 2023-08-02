import React from "react";

import { Container, Details } from "./styles";
import bg from "../../assets/images/woman2.jpg";

const WhatIs: React.FC = () => {
  return (
    <Container>
      <div>
        <picture>
          <img src={bg} alt="Withinhere" />
        </picture>
        <Details>
          <h2>What Can Withinhere Do for You?</h2>
          <h3>Visibility</h3>
          <p>
          1. Are you just starting out as an entreprenuer and need support 
          from friends, relatives or just those in your local community? <br></br>
          2. Have you ever been shocked at how people from your neighbourhood,
          community or country go to buy things from other places when you 
          can offer the same service or good, maybe even at a better price?<br></br>
          3. Are you sick and tired of enriching others in other plcaes when 
          you could be doing the same for your community by buying or seling 
          locally whenever possible? <br></br>
          4. Are you that person who only wants to buy or sell any goods or 
          services outside your community only after your own friends, relatives 
          or those in your community benefit from your value offering?<br></br>
          5. Are you someone who can offer a service or product during your free time like 
          plaitting hair, baking, tutoring or anything you are passionate about and 
          would want to get paid at times whenever you have free time to offer
          such a service? <br></br>
          <br></br>If the answer to any of these questions is YES, then 
          Withinhere is for you as it helpds sellers and buyers at any level to connect and do 
          business within a locality of their choice.Therefore, Withinhere gives you visibility
          where it matters the most..!!
          </p>
          <span className="fix">
            <a href="/" className="btn">
              Learn more
            </a>
          </span>
        </Details>
      </div>
    </Container>
  );
};

export default WhatIs;
