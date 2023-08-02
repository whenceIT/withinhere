import React from "react";

import { Container } from "./styles";
import Logo from "../../assets/images/without.png";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="#">
          <h1>
            <img src={Logo} alt="WithinHere" />
          </h1>
        </a>
        <nav>
          <ul>
            <li>
            
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVthPm2uIO0WAKVvZi565YFmLo3sGNZSN7tSopuvfjcarOjA/viewform?usp=sf_link" className="btn">
                SIGN UP FOR FREE
              </a>
            </li>
            {/* <li>
              <a href="#" className="btn">
                NEW: SIGN UP FOR FREE and Get Started
              </a>
              {"                     "}
              <a href="#" className="btn">
                MEMBER: LOGIN to BUY or SELL
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;

/*<a href="/" className="active">
                Overview
              </a>
            </li>
            <li>
              <a href="/">Contagion</a>
            </li>
            <li>
              <a href="/">Symptoms</a>
            </li>
            <li>
              <a href="/">Prevention</a>*/