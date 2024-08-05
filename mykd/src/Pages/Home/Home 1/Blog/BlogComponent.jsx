import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./blog.css";
import blog1 from "../../../../Assets/Images/Blog/blog1.jpg";
import blog2 from "../../../../Assets/Images/Blog/blog2.jpg";
import blog3 from "../../../../Assets/Images/Blog/blog3.jpg";
import { RiUserLine } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

function BlogComponent() {
  return (
    <div className="blog-area">
      <Container className="blog-title">
        <div>
          <span>Our Blog</span>
          <h2>Latest Blog & Articles</h2>
        </div>
        <Row>
          <Col className="blog-cards">
            <div className="single-blog-card">
              <div className="blog-image">
                <a href="/">
                  <img src={blog1} alt="" />
                </a>
              </div>
              <div className="blog-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="/">
                      {<RiUserLine className="blogico" />}By Admin
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      {<FaCalendarDays className="blogico" />}November 6, 2024
                    </a>
                  </li>
                </ul>
                <h3>
                  Navigating the Impact of Blockchain Technology in the
                  Logistics Sector.
                </h3>
                <a href="/">Read More {<GoArrowUpRight />}</a>
              </div>{" "}
            </div>
            <div className="single-blog-card">
              <div className="blog-image">
                <a href="/">
                  <img src={blog2} alt="" />
                </a>
              </div>
              <div className="blog-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="/">
                      {<RiUserLine className="blogico" />}By Admin{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      {<FaCalendarDays className="blogico" />}November 6, 2024
                    </a>
                  </li>
                </ul>
                <h3>
                  Navigating the Impact of Blockchain Technology in the
                  Logistics Sector.
                </h3>
                <a href="/">Read More {<GoArrowUpRight />}</a>
              </div>
            </div>{" "}
            <div className="single-blog-card">
              <div className="blog-image">
                <a href="/">
                  <img src={blog3} alt="" />
                </a>
              </div>
              <div className="blog-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="/">
                      {<RiUserLine className="blogico" />}By Admin{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      {<FaCalendarDays className="blogico" />}November 6, 2024
                    </a>
                  </li>
                </ul>
                <h3>
                  Navigating the Impact of Blockchain Technology in the
                  Logistics Sector.
                </h3>
                <a href="/">Read More {<GoArrowUpRight />}</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogComponent;
