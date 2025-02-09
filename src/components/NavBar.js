import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon3 from "../assets/img/envelope-regular.svg";
import navIcon2 from "../assets/img/github.svg";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // Track if the nav is open

  const navbarRef = useRef(null); // To handle click outside

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Close the navbar when clicking outside
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsNavOpen(false); // Close the navbar when a link is clicked
  };

  const handleLetConnectClick = () => {
    setIsNavOpen(false); // Close the navbar when "Let's Connect" is clicked
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      ref={navbarRef}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsNavOpen(!isNavOpen)} // Toggle navbar open state
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeLink === "experience" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text d-flex align-items-center gap-2 flex-column flex-md-row justify-content-md-end">
            <div className="social-icon d-flex gap-2">
              <a href="https://www.linkedin.com/in/aryasinha" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/AryaASinhaS" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="mailto:arya__sinha@outlook.com">
                <img src={navIcon3} alt="Email" />
              </a>
            </div>
            <HashLink to="#connect" onClick={handleLetConnectClick}>
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .navbar {
            padding: 0.5rem 1rem;
          }
          .navbar.scrolled {
            background-color: rgba(0, 0, 0, 0.8);
            transition: background-color 0.3s ease-in-out;
          }
          .navbar-link {
            color: #fff;
            font-size: 0.9rem;
            margin-right: 0.8rem;
            transition: color 0.3s ease;
          }
          .navbar-link.active {
            color: rgb(232, 239, 240);
          }
          .navbar-link:hover {
            color: rgb(230, 239, 241);
          }
          .social-icon img {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1); /* White by default */
            transition: filter 0.3s ease; /* Smooth transition */
          }
          .social-icon img:hover {
            filter: brightness(0) invert(0.5); /* Grey when hovered */
          }
          .vvd {
            border: 2px solid rgb(231, 242, 244);
            background: transparent;
            color: rgb(250, 252, 252);
            padding: 3px 8px;
            font-size: 0.75rem;
            border-radius: 5px;
          }
          .vvd:hover {
            background-color: rgb(241, 246, 247);
            color: #fff;
          }
          @media (max-width: 768px) {
            body {
              padding-top: 70px;
            }
            .navbar {
              padding: 0.5rem 0.5rem;
            }
            .navbar-collapse {
              background-color: rgba(0, 0, 0, 0.9);
              padding: 1rem;
              position: relative;
              z-index: 10;
            }
            .navbar-collapse.show {
              display: block;
              margin-bottom: 1rem;
            }
            .navbar-link {
              display: block;
              margin-bottom: 0.5rem;
            }
            .navbar-text {
              flex-direction: column; /* Align text items vertically */
              margin-left: 0;
            }
            .social-icon {
              margin-bottom: 1rem; /* Space between icons and Let's Connect button */
            }
          }
        `}
      </style>
    </Navbar>
  );
};
