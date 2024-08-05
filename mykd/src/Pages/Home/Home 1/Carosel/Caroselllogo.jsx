import React from "react";
import "./caro.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import trust from "../../../../Assets/Images/Slider/Trrust.png";
import Vapt from "../../../../Assets/Images/Slider/Vapt.png";
import simmen from "../../../../Assets/Images/Slider/Simen.png";
import Event from "../../../../Assets/Images/Slider/Event.png";
import Dlp from "../../../../Assets/Images/Slider/Dlp.png";

function Carosellogo() {
  const logos = [trust, Vapt, Event, Dlp, simmen];
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    
  };
  return (
    <div className="carosel-section">
      <Container>
        <Row>
          <Col>
            <div className="logo-area">
              <Slider {...settings}>
                {logos.map((logo, index) => (
                  <div key={index}>
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      style={{ width: "70%", outline: "none", border: "none" }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Carosellogo;
