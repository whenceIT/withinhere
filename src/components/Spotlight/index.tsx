import React from "react";

import { Container, Details } from "./styles";
import banner from "../../assets/images/woman.jpg";

const Spotlight: React.FC = () => {
  return (
      <div>
    <Container>
      <img src={banner} alt="Withinhere..Global Starts Local..!!" />
      <Details>
        <h2>Withinhere...</h2>
        <h3>Your Local Marketplace which Unite Communities, Empower Dreams and  Enrich Lives </h3>
        <h1>It's possible...!!</h1>
        <p>
        Join Withinhere to find or sell unique goods & services locally and discover the 
        hidden treasures within your community.
        <a href="/" className="link"> Learn more...</a>
        </p>
        {/* <a href="/" className="btn active">
        SIGN UP FOR FREE
        </a> */}
        <nav>
          <ul>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVthPm2uIO0WAKVvZi565YFmLo3sGNZSN7tSopuvfjcarOjA/viewform?usp=sf_link" className="btn active">
                SIGN UP FOR FREE AND GET STARTED
              </a>
            </li>
            <li>
              {"                     "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVthPm2uIO0WAKVvZi565YFmLo3sGNZSN7tSopuvfjcarOjA/viewform?usp=sf_link" className="btn active">
                LOGIN TO BUY OR SELL
              </a>
            </li>
          </ul>
        </nav>
      </Details>
    </Container>
      </div>
  );
};

export default Spotlight;
