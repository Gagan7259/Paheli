import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import hero from "../../../Assets/Images/homeHero.png";
import BlogComponent from "./Blog/BlogComponent";
import FaqComponent from "./Faq/FaqComponent";
import "./home1.css";
import SecurityComponent from "./Security/SecurityComponent";
import ServiceSubComponent from "./Services/ServiceSubComponent";
import SubProjects from "./Subprojectss/SubProjects";
import Team from "./Team/Team";
import Caroselllogo from "./Carosel/Caroselllogo";
import ContactArea from "./ContactArea/ContactArea";
import Footer from "../../../Componets/Footer/Footer";
import { FaPlay } from "react-icons/fa";
const Homecomponent1 = () => {
  return (
    <div>
      <div className="home">
        <Container>
          <Row>
            <Col>
              <div>
                <h2 className="head-text">
                  Essential Policy for <br />
                  Cyber security <br />
                  Protection.
                </h2>
                <p className="headpara">
                  In today's increasingly digital world, cybersecurity has
                  become paramount. With the rapid expansion of online
                  activities,
                </p>
                <div className="btn-section">
                  <div className="btnn">
                    <button className="aboutBtn">
                      <a href="/"> Request A Demo</a>{" "}
                    </button>
                  </div>
                  <div className="intro">
                    <p>{<FaPlay className="playbtn" />}</p>
                    <span className="playbtn-span">Watch Into Demo</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <img src={hero} alt="hero" className="hero" />
            </Col>
          </Row>
        </Container>
      </div>
      <SecurityComponent />
      <ServiceSubComponent />
      <SubProjects />
      <FaqComponent />
      <Team />
      <BlogComponent />
      <Caroselllogo />
      <ContactArea />
      <Footer />
    </div>
  );
};

export default Homecomponent1;
