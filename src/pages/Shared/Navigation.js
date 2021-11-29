import React from "react";
import logo from "../../images/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavStyle = {
  backgroundColor: "#2c2d32",
  displau: "flex",
  alignItems: "center",
};
const NavLinks = {
  marginTop: "8px",
  // color: "#FEFFA6",
  // color: "#01FFFD",
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  marginRight: "20px",
  fontWeight: "600",
  fontFamily: `"Sora", sans-serif`,
  letterSpacing: "1.5px",
};
const NavLogo = {
  width: "150px",
  height: "60px",
  filter: "brightness(600%)",
};

const Navigation = () => {
  return (
    <div style={NavStyle}>
      <Navbar collapseOnSelect expand="lg" className="ms-5 me-5">
        <NavLink to="/home">
          <Navbar.Brand>
            <img
              style={NavLogo}
              src={logo}
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          className="text-white"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink style={NavLinks} to="/home">
              Home
            </NavLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Ozsi8HfcbeVnjCIsguhrV2T8PIeio8ku/view?usp=sharing"
              style={NavLinks}
              download="promise_resume"
            >
              Download Resume
            </a>
            <NavLink style={NavLinks} to="/skills">
              Skills
            </NavLink>
            <NavLink style={NavLinks} to="/projects">
              Projects
            </NavLink>
            <NavLink style={NavLinks} to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
