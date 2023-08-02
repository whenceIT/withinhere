import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

import { Container, Menu } from "./styles";
import Logo from "../../../assets/images/without.png";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <img src={Logo} alt="Withinhere" />
        </a>
        <Menu>
          <ul>
            <li>
              <a href="/" className="active, text-bellow">
                Contact
              </a>
            </li>
            <li>
              <a  className="text-bellow" href="/">About</a>
            </li>
            <li>
              <a className="text-bellow" href="/">Privacy</a>
            </li>
            <li>
              <a className="text-bellow" href="/">Terms</a>
            </li>
          </ul>
        </Menu>
        <Menu>
          <ul>
            <li>
              <a href="https://web.facebook.com/withinhere">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://m.youtube.com/@withinhere">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/withinhere2023/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@withinhere?is_from_webapp=1&sender_device=pc">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
