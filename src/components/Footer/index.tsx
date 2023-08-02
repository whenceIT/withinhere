import React, { FormEvent } from "react";

import { Container, Form, Menu2, BottomContainer } from "./styles";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import Menu from "./Menu";

const Footer: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Sending...");

    setTimeout(() => {
      alert("Thanks!");
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Do You Have a Question?
          <br />
          <strong>You can also reach us on..!!</strong>
        </label>
        <Container>
         <Menu2 className="mediaIcons">
         <ul>
            <li className="column">
              <a href="https://web.facebook.com/withinhere">
                <FaFacebookF className="facebookIcon" />
              </a>
            </li>
            <li>
              <a href="https://m.youtube.com/@withinhere">
                <FaYoutube className="youtubeIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/withinhere2023/">
                <FaInstagram className="instagramIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@withinhere?is_from_webapp=1&sender_device=pc">
                <FaTiktok className="tiktokIcon" />
              </a>
            </li>
          </ul>
        </Menu2>
        </Container>
        {/* <div className="group">
          <input name="email" type="email" placeholder="info@withinhere.com" />
          <button type="submit" className="btn active">
            Send
          </button>
        </div> */}
      </Form>
      <BottomContainer>
        <h4>
        HEAD OFFICE <br></br>
        <br></br>ZIMCO HOUSE, <br></br>4th FLOOR, Suite 402 & 403,<br></br> Cairo RD, <br></br>Lusaka, Zambia.<br></br>
        <br></br>✉ info@withinhere.com <br></br> ☏ +260 971 089 407 | +260 211 235 019<br></br>
        </h4>
        

      <Menu />
      <p className="copyright">
        <a href="#">Copyright</a>{" "}
        © {" "}{new Date().getFullYear()}{" "}
        <a href="#">Withinhere</a>
      </p>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
