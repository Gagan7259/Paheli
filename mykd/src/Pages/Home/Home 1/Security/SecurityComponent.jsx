import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { RiArrowRightUpLine } from "react-icons/ri";
import security from "../../../../Assets/Images/security.jpg";
import "./security.css";
import { Link } from "react-router-dom";
import security2 from "../../../../Assets/Images/security2.jpg";
import security3 from "../../../../Assets/Images/security3.jpg";
import { FaArrowRight } from "react-icons/fa6";

function SecurityComponent(props) {
  return (
    <div className="security">
      <Container className="contentt">
        <Row>
          <Col>
            <h5 className="sHead">What We Do</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="sdesc">Our Extensive Network Security Services.</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text">
            <div className="Sinfo">
              <div>
                <img src={security} alt="security" className="fImage" />
              </div>
              <div className="content">
                <p>
                  Unleashing Ability through <br />
                  Network Management.
                </p>
                <Link to="#" className="read">
                  Read More {<RiArrowRightUpLine />}
                </Link>
              </div>
            </div>
            <div className="Sinfo">
              <div>
                <img src={security} alt="security" className="fImage" />
              </div>
              <div className="content">
                <p>
                  Building a Robust Defense <br />
                  Against Cyber-Attacks
                </p>
                <Link to="#" className="read">
                  Read More {<RiArrowRightUpLine />}
                </Link>
              </div>
            </div>
            <div className="Sinfo">
              <div className="read">
                <img src={security} alt="security" className="fImage" />
              </div>
              <div className="content">
                <p>
                  Harnessing the Power of Online <br />
                  Network Security Systems.
                </p>
                <Link to="#" className="read">
                  Read More {<RiArrowRightUpLine />}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="aboutsetion">
        <Row>
          <Col>
            <div>
              <div className="sr1">
                <img src={security2} alt="security2" className="security2" />
              </div>
              <div className="sr2">
                <img src={security3} alt="security3" className="security3" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="about">
              <div className=" title">
                <span className="d-block">About Paheli</span>
                <h2>
                  The Comprehensive Solution for <br />
                  Your Needs.
                </h2>
                <p>
                  Organizations are now compelled to complete comprehensive
                  cybersecurity strategies to safeguard their systems, networks,
                  and data from the relentless onslaught of cyber threats,
                  ensuring the protection of privacy...
                </p>
              </div>
            </div>
            <div className="content-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  {...props}
                >
                  <g clipPath="url(#clip0_179_4)">
                    <path
                      d="M15 20C14.0111 20 13.0444 19.7068 12.2221 19.1574C11.3999 18.6079 10.759 17.8271 10.3806 16.9134C10.0022 15.9998 9.90315 14.9945 10.0961 14.0246C10.289 13.0546 10.7652 12.1637 11.4645 11.4645C12.1637 10.7652 13.0546 10.289 14.0245 10.0961C14.9945 9.90315 15.9998 10.0022 16.9134 10.3806C17.827 10.759 18.6079 11.3999 19.1573 12.2222C19.7068 13.0444 20 14.0111 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20ZM15 12.5C14.5055 12.5 14.0222 12.6466 13.6111 12.9213C13.2 13.196 12.8795 13.5865 12.6903 14.0433C12.5011 14.5001 12.4516 15.0028 12.548 15.4877C12.6445 15.9727 12.8826 16.4181 13.2322 16.7678C13.5819 17.1174 14.0273 17.3555 14.5123 17.452C14.9972 17.5484 15.4999 17.4989 15.9567 17.3097C16.4135 17.1205 16.804 16.8001 17.0787 16.3889C17.3534 15.9778 17.5 15.4945 17.5 15C17.5 14.337 17.2366 13.7011 16.7678 13.2322C16.2989 12.7634 15.663 12.5 15 12.5ZM22.5 28.75C22.5 26.7609 21.7098 24.8532 20.3033 23.4467C18.8968 22.0402 16.9891 21.25 15 21.25C13.0109 21.25 11.1032 22.0402 9.6967 23.4467C8.29018 24.8532 7.5 26.7609 7.5 28.75C7.5 29.0815 7.6317 29.3995 7.86612 29.6339C8.10054 29.8683 8.41848 30 8.75 30C9.08152 30 9.39946 29.8683 9.63388 29.6339C9.8683 29.3995 10 29.0815 10 28.75C10 27.4239 10.5268 26.1522 11.4645 25.2145C12.4021 24.2768 13.6739 23.75 15 23.75C16.3261 23.75 17.5979 24.2768 18.5355 25.2145C19.4732 26.1522 20 27.4239 20 28.75C20 29.0815 20.1317 29.3995 20.3661 29.6339C20.6005 29.8683 20.9185 30 21.25 30C21.5815 30 21.8995 29.8683 22.1339 29.6339C22.3683 29.3995 22.5 29.0815 22.5 28.75ZM22.5 10C21.5111 10 20.5444 9.70676 19.7221 9.15735C18.8999 8.60794 18.259 7.82705 17.8806 6.91342C17.5022 5.99979 17.4031 4.99446 17.5961 4.02455C17.789 3.05465 18.2652 2.16373 18.9645 1.46447C19.6637 0.765206 20.5546 0.289002 21.5245 0.0960758C22.4945 -0.0968503 23.4998 0.00216641 24.4134 0.380605C25.327 0.759043 26.1079 1.39991 26.6573 2.22215C27.2068 3.0444 27.5 4.0111 27.5 5C27.5 6.32609 26.9732 7.59785 26.0355 8.53554C25.0979 9.47322 23.8261 10 22.5 10ZM22.5 2.5C22.0055 2.5 21.5222 2.64662 21.1111 2.92133C20.7 3.19603 20.3795 3.58648 20.1903 4.04329C20.0011 4.50011 19.9516 5.00278 20.048 5.48773C20.1445 5.97268 20.3826 6.41814 20.7322 6.76777C21.0819 7.1174 21.5273 7.3555 22.0123 7.45197C22.4972 7.54843 22.9999 7.49892 23.4567 7.3097C23.9135 7.12048 24.304 6.80005 24.5787 6.38893C24.8534 5.9778 25 5.49446 25 5C25 4.33696 24.7366 3.70108 24.2678 3.23224C23.7989 2.76339 23.163 2.5 22.5 2.5ZM30 18.75C29.998 16.7615 29.2072 14.855 27.8011 13.4489C26.395 12.0428 24.4885 11.252 22.5 11.25C22.1685 11.25 21.8505 11.3817 21.6161 11.6161C21.3817 11.8505 21.25 12.1685 21.25 12.5C21.25 12.8315 21.3817 13.1495 21.6161 13.3839C21.8505 13.6183 22.1685 13.75 22.5 13.75C23.8261 13.75 25.0979 14.2768 26.0355 15.2145C26.9732 16.1521 27.5 17.4239 27.5 18.75C27.5 19.0815 27.6317 19.3995 27.8661 19.6339C28.1005 19.8683 28.4185 20 28.75 20C29.0815 20 29.3995 19.8683 29.6339 19.6339C29.8683 19.3995 30 19.0815 30 18.75ZM7.5 10C6.51109 10 5.54439 9.70676 4.72215 9.15735C3.8999 8.60794 3.25904 7.82705 2.8806 6.91342C2.50216 5.99979 2.40315 4.99446 2.59607 4.02455C2.789 3.05465 3.2652 2.16373 3.96447 1.46447C4.66373 0.765206 5.55464 0.289002 6.52455 0.0960758C7.49445 -0.0968503 8.49979 0.00216641 9.41342 0.380605C10.327 0.759043 11.1079 1.39991 11.6573 2.22215C12.2068 3.0444 12.5 4.0111 12.5 5C12.5 6.32609 11.9732 7.59785 11.0355 8.53554C10.0979 9.47322 8.82608 10 7.5 10ZM7.5 2.5C7.00555 2.5 6.5222 2.64662 6.11107 2.92133C5.69995 3.19603 5.37952 3.58648 5.1903 4.04329C5.00108 4.50011 4.95157 5.00278 5.04804 5.48773C5.1445 5.97268 5.3826 6.41814 5.73223 6.76777C6.08186 7.1174 6.52732 7.3555 7.01227 7.45197C7.49723 7.54843 7.99989 7.49892 8.45671 7.3097C8.91352 7.12048 9.30397 6.80005 9.57867 6.38893C9.85338 5.9778 10 5.49446 10 5C10 4.33696 9.73661 3.70108 9.26777 3.23224C8.79893 2.76339 8.16304 2.5 7.5 2.5ZM2.5 18.75C2.5 17.4239 3.02678 16.1521 3.96447 15.2145C4.90215 14.2768 6.17392 13.75 7.5 13.75C7.83152 13.75 8.14946 13.6183 8.38388 13.3839C8.6183 13.1495 8.75 12.8315 8.75 12.5C8.75 12.1685 8.6183 11.8505 8.38388 11.6161C8.14946 11.3817 7.83152 11.25 7.5 11.25C5.51149 11.252 3.60498 12.0428 2.19889 13.4489C0.792799 14.855 0.00198554 16.7615 0 18.75C0 19.0815 0.131696 19.3995 0.366117 19.6339C0.600537 19.8683 0.918479 20 1.25 20C1.58152 20 1.89946 19.8683 2.13388 19.6339C2.3683 19.3995 2.5 19.0815 2.5 18.75Z"
                      fill="#ff8408"
                    />
                  </g>
                </svg>
              </div>
              <div className="cd-content">
                <h3>Highly Professional Members</h3>
                <p>
                  Organizations are now forced to implement comprehensive cyber
                  security strategies to protect their systems,
                </p>
              </div>
            </div>
            <div className="content-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  {...props}
                >
                  <g clipPath="url(#clip0_179_2)">
                    <path
                      d="M25 13.75C25 14.4412 24.44 15 23.75 15C23.06 15 22.5 14.4412 22.5 13.75C22.5 10.3038 19.6963 7.5 16.25 7.5C15.56 7.5 15 6.94125 15 6.25C15 5.55875 15.56 5 16.25 5C21.075 5 25 8.92625 25 13.75ZM17.5 13.75C17.5 14.4412 18.06 15 18.75 15C19.44 15 20 14.4412 20 13.75C20 11.6825 18.3175 10 16.25 10C15.56 10 15 10.5588 15 11.25C15 11.9412 15.56 12.5 16.25 12.5C16.94 12.5 17.5 13.06 17.5 13.75ZM16.25 0C15.56 0 15 0.55875 15 1.25C15 1.94125 15.56 2.5 16.25 2.5C22.4525 2.5 27.5 7.54625 27.5 13.75C27.5 14.4412 28.06 15 28.75 15C29.44 15 30 14.4412 30 13.75C30 6.16875 23.8313 0 16.25 0ZM20.3075 22.9387C20.9975 23.6287 21.3338 24.58 21.2325 25.5513C21.1288 26.5325 20.5938 27.4037 19.7638 27.9437C17.65 29.3175 15.2325 29.9875 12.8275 29.9875C9.51 29.9875 6.21251 28.7137 3.75001 26.2512C-0.498745 22.0037 -1.21124 15.2687 2.05751 10.235C2.59626 9.40625 3.46751 8.87 4.44876 8.7675C5.41876 8.6625 6.37251 9.00125 7.06251 9.69125L12.8013 15.43L14.1163 14.115C14.605 13.6262 15.395 13.6262 15.8838 14.115C16.3725 14.6038 16.3725 15.3938 15.8838 15.8825L14.5688 17.1975L20.3075 22.9363V22.9387ZM18.54 24.7062L5.29376 11.46C5.12001 11.2863 4.92376 11.25 4.78751 11.25C4.47126 11.25 4.28 11.4025 4.15376 11.5963C1.52376 15.645 2.09751 21.0638 5.51626 24.4825C8.93501 27.9013 14.355 28.4737 18.4013 25.8463C18.5963 25.72 18.7213 25.5175 18.745 25.29C18.7588 25.1625 18.7513 24.9162 18.54 24.7062Z"
                      fill="#ff8408"
                    />
                  </g>
                </svg>
              </div>
              <div className="cd-content">
                <h3>Infrastructure Integration Technology</h3>
                <p>
                  Organizations are now forced to implement comprehensive cyber
                  security strategies to protect their systems,
                </p>
              </div>
            </div>
            <div>
              <button className="aboutBtn">
                <span> {<FaArrowRight className="arrow" />}</span> Know More
                About
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecurityComponent;
