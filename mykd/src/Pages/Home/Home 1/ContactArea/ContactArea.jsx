import React from "react";
import "./contactarea.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";

function ContactArea() {
  return (
    <div className="contact-area">
      <Container>
        <div className="contact-info">
          <Row >
            <div className="contact-info1">
              <Col md={3}>
                <div className="single-contact-info">
                  <div className="contactall">
                    <div className="icon1">
                      {<FiPhoneCall className="callico" />}
                    </div>

                    <div className="contactiinfo">
                      <h3>Give Us A Call</h3>
                      <a className="num" href="tel:319-490-4589">
                        +319-490-4589
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="single-contact-info">
                  <div className="sociallicons">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {<FaFacebook className="contacticons" />}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {<BsTwitterX className="contacticons" />}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {<FaInstagram className="contacticons" />}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.pinterest.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {<FaSquarePinterest className="contacticons" />}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="single-contact-info">
                  <div className="contact-submit">
                    <h3>
                      Join Our <br />
                      Newsletter
                    </h3>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Your Email"
                        />
                        <button className="submitbtn" type="submit">
                          <span>{<IoPaperPlaneOutline />}</span>Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ContactArea;
