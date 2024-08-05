import React from "react";
import hero from "../../Assets/Images/white-logo.png";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./footer.css";
import CopyRight from "./CopyRight";
function Footer() {
  return (
    <React.Fragment>
      <footer>
        <Container>
          <div className="foooter-info">
            <Row>
              <Col md={"4"}>
                <div className="single-footer">
                  <a href="/">
                    <img src={hero} alt="logo" className="footer-logo" />
                  </a>
                  <p>
                    Cybersecurity is crucial in today's digital age, where many
                    individuals and organizations store a significant amount of
                    sensitive data on computers...
                  </p>
                </div>
              </Col>
              <Col md={"8"}>
                <Row>
                  <Col>
                    <div className="single-footer-info">
                      <ul className="footer-links">
                        <h3>Contact Us</h3>

                        <li>
                          <strong>Address:</strong>521684 Majadra Street
                          Victoria Road, New York.
                        </li>
                        <li>
                          <strong>Email:</strong>
                          <a
                            class="text-decoration-none"
                            href="mailto:Paheli@gmail.com"
                          >
                            Paheli@gmail.com
                          </a>
                        </li>
                        <li>
                          <strong>Phone:</strong>
                          <a
                            class="text-decoration-none"
                            href="tel:55472543526"
                          >
                            +5-547-254-3526
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div class="single-footer-info">
                      <ul className="footer-links">
                        <h3>Quick Links</h3>
                        <li>
                          <a class="text-decoration-none" href="/faq">
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            class="text-decoration-none"
                            href="/privacy-policy"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            class="text-decoration-none"
                            href="/terms-conditions"
                          >
                            Testimonial
                          </a>
                        </li>
                        <li>
                          <a class="text-decoration-none" href="/contact">
                            Our Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div class="single-footer-info">
                      <ul className="footer-links">
                        <h3>Resourses</h3>
                        <li>
                          <a class="text-decoration-none" href="/faq">
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a
                            class="text-decoration-none"
                            href="/privacy-policy"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            class="text-decoration-none"
                            href="/terms-conditions"
                          >
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a class="text-decoration-none" href="/contact">
                            contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
      <CopyRight/>
    </React.Fragment>
  );
}

export default Footer;
