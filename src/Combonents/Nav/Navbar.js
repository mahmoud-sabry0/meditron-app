import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

import logo from "../../images/286467435-0ba1061e-ddaf-4b3f-abd3-684a31d19fa5.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Navbars = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Navbar.Brand className="logo">
          <img src={logo} title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home" className="active">
              Home
          </Nav.Link>
            <Link className="active" to="/home">
            </Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FaQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">erroe 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Services Details
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Blogs Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link>
              Search <i class="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link>
              <i class="bi bi-telephone-fill"></i> (+01) 999 888 777
            </Nav.Link>
            <Nav.Link>
              <button>
                Contact us{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
