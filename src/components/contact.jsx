import React from "react";
import ".././App.css";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ paddingRight: "10px" }} />
              vcky415x@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} size="xl" style={{ paddingRight: "10px" }} />
              082281415047
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/vickyalwardhie/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/vicky-alward-hie-527293199/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <a href="/src/assets/Vicky Alward Hie.pdf" download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="col-md-6 contact-right">
            <form action="https://formspree.io/f/xwkdrwlo" method="POST">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
