import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import team1 from "../../../../Assets/Images/Team/team1.jpg";
import team2 from "../../../../Assets/Images/Team/team2.jpg";
import team3 from "../../../../Assets/Images/Team/team3.jpg";
import team4 from "../../../../Assets/Images/Team/team4.jpg";
import "./team.css";
import Socialicons from "./Socialicons";

function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="team">
      <Container className="team-content">
        <div>
          <span>Our Team</span>
          <h2>Meet Our Awesome Team Members.</h2>
        </div>
        <Row>
          <Col className="cardss">
            <div
              onMouseEnter={() => setHoveredMember("team1")}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="single-card">
                <a href="/">
                  <img src={team1} alt="" className="teamimg" />
                </a>
              </div>
              <div className="teamnames">
                <h2>Bonnie Acosta</h2>
                <p>Lead Developer</p>
              </div>
              <div className="social-list">
                {hoveredMember === "team1" && <Socialicons />}
              </div>
            </div>
            <div
              onMouseEnter={() => setHoveredMember("team2")}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="single-card">
                <a href="/">
                  <img src={team2} alt="" className="teamimg" />
                </a>
              </div>
              <div className="teamnames">
                <h2>Warren Riner</h2>
                <p>CEO & Founder</p>
              </div>
              <div className="social-list">
                {hoveredMember === "team2" && <Socialicons />}
              </div>
            </div>
            <div
              onMouseEnter={() => setHoveredMember("team3")}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="single-card">
                <a href="/">
                  <img src={team3} alt="" className="teamimg" />
                </a>
              </div>
              <div className="teamnames">
                <h2>Helen Kurt</h2>
                <p>Developer</p>
              </div>
              <div className="social-list">
                {hoveredMember === "team3" && <Socialicons />}
              </div>
            </div>
            <div
              onMouseEnter={() => setHoveredMember("team4")}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="single-card">
                <a href="/">
                  <img src={team4} alt="" className="teamimg" />
                </a>
              </div>
              <div className="teamnames">
                <h2>Wanda Wagner</h2>
                <p>CO-Founder</p>
              </div>
              <div className="social-list">
                {hoveredMember === "team4" && <Socialicons />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Team;
