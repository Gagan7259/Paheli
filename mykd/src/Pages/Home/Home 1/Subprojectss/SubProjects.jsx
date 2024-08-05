import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { MdOutlineArrowOutward } from "react-icons/md";
import project1 from "../../../../Assets/Images/Projects-images/project1.jpg";
import project2 from "../../../../Assets/Images/Projects-images/project2.jpg";
import project3 from "../../../../Assets/Images/Projects-images/project3.jpg";
import project4 from "../../../../Assets/Images/Projects-images/project4.jpg";
import project5 from "../../../../Assets/Images/Projects-images/project5.jpg";
import "./sProjects.css";

function SubProjects() {
  return (
    <section className="projects">
      <Container className="projectshead">
        <Row className="align-items-center">
          <Col md={9}>
            <div className="projects-title ">
              <span>Our Projects</span>
              <h2>
                Feat to Celebrate: Showcasing Some <br /> of Our Proud Projects.
              </h2>
            </div>
          </Col>
          <Col md={3}>
            <div className="allprojrcts">
              <a href="/">View All Projects</a>
            </div>
          </Col>
          <Col>
            <div className="imageanimation Container Fluid">
              <div className=" projects-box">
                <ul className="main-box d-flex">
                  <li style={{ width: "25%" }}>
                    <span>
                      <img src={project1} alt="project1" />
                    </span>
                    <div className="pcardDetail">
                      <div className="pcardContent">
                        <h3>
                          <a class="text-decoration-none" href="/">
                            Data Loss Prevention (DLP)
                          </a>
                        </h3>
                        <p>
                          This includes implementing strategies and tools to
                          prevent sensitive data...
                        </p>
                        <a
                          class="read-more text-decoration-none"
                          href="/service-details"
                        >
                          Read More{<MdOutlineArrowOutward />}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li style={{ width: "25%" }}>
                    <span>
                      <img src={project2} alt="project1" />
                    </span>
                    <div className="pcardDetail">
                      <div className="pcardContent">
                        <h3>
                          <a class="text-decoration-none" href="/">
                            Data Loss Prevention (DLP)
                          </a>
                        </h3>
                        <p>
                          This includes implementing strategies and tools to
                          prevent sensitive data...
                        </p>
                        <a
                          class="read-more text-decoration-none"
                          href="/service-details"
                        >
                          Read More{<MdOutlineArrowOutward />}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li style={{ width: "25%" }}>
                    <span>
                      <img src={project3} alt="project1" />
                    </span>
                    <div className="pcardDetail">
                      <div className="pcardContent">
                        <h3>
                          <a class="text-decoration-none" href="/">
                            Data Loss Prevention (DLP)
                          </a>
                        </h3>
                        <p>
                          This includes implementing strategies and tools to
                          prevent sensitive data...
                        </p>
                        <a
                          class="read-more text-decoration-none"
                          href="/service-details"
                        >
                          Read More{<MdOutlineArrowOutward />}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li style={{ width: "25%" }}>
                    <span>
                      <img src={project4} alt="project1" />
                    </span>
                    <div className="pcardDetail">
                      <div className="pcardContent">
                        <h3>
                          <a class="text-decoration-none" href="/">
                            Data Loss Prevention (DLP)
                          </a>
                        </h3>
                        <p>
                          This includes implementing strategies and tools to
                          prevent sensitive data...
                        </p>
                        <a
                          class="read-more text-decoration-none"
                          href="/service-details"
                        >
                          Read More{<MdOutlineArrowOutward />}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li style={{ width: "25%" }}>
                    <span>
                      <img src={project5} alt="project1" className="img5" />
                    </span>
                    <div className="pcardDetail">
                      <div className="pcardContent">
                        <h3>
                          <a class="text-decoration-none" href="/">
                            Data Loss Prevention (DLP)
                          </a>
                        </h3>
                        <p>
                          This includes implementing strategies and tools to
                          prevent sensitive data...
                        </p>
                        <a
                          class="read-more text-decoration-none"
                          href="/service-details"
                        >
                          Read More{<MdOutlineArrowOutward />}
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SubProjects;
