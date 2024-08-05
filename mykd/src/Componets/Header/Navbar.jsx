import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import logo from "../../Assets/Images/white-logo.png";
import "../Header/navbar.css";

function NavbarComponent() {
  return (
    <div className="bg-body-tertiary">
      <Navbar expand="lg" className="header-conntent">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 lists" navbarScroll>
              <NavDropdown
                title="Home"
                as={Link}
                to="/home"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item as={Link} to="/home">
                  Home 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Home 2</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Home 3</NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link href="#action2" className="linkss">
                About
              </Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" className="linkss">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className="searchbar">
                <GoSearch className="search-icon" />
              </div>
              <div>
                <Button> {<FaArrowRight />} Get A Quote</Button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
