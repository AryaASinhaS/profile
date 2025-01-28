import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import bannerImg from "../assets/img/project-bg.png";

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "WisdomNet",
      content: (
        <p>
          A Knowledge-Sharing Portal designed to enable real-time collaboration within teams. Inspired by platforms like Stack Overflow, it fosters peer-to-peer support, encourages innovation, and accelerates technical issue resolution.
        </p>
      ),
    },
    {
      title: "CodeFusion",
      content: (
        <p>
          An AI-powered tool that centralizes and streamlines code management for cross-functional teams. It features advanced search, automated backups, and bulk upload capabilities to improve collaboration and reduce redundancy.
        </p>
      ),
    },
    {
      title: "PaySync",
      content: (
        <p>
          An automated reconciliation tool designed to streamline validation of employee data from legacy systems to cloud platform. It ensures seamless payroll processing by reducing manual errors and enhancing efficiency.
        </p>
      ),
    },
    {
      title: "SkillSphere",
      content: (
        <p>
          An Online Learning Management System (LMS) aimed at upskilling employees. It centralizes learning resources, tracks progress, and fosters continuous development through interactive and gamified features.
        </p>
      ),
    },
  ];

  const tabContent_Project1 = <p>A Knowledge-Sharing Portal designed to enable real-time collaboration within teams. Inspired by platforms like Stack Overflow, it fosters peer-to-peer support, encourages innovation, and accelerates technical issue resolution.</p>;
  const tabContent_Project2 = <p>An AI-powered tool that centralizes and streamlines code management for cross-functional teams. It features advanced search, automated backups, and bulk upload capabilities to improve collaboration and reduce redundancy.</p>;
  const tabContent_Project3 = <p>An automated reconciliation tool designed to streamline validation of employee data from legacy systems to cloud platform. It ensures seamless payroll processing by reducing manual errors and enhancing efficiency.</p>;
  const tabContent_Project4 = <p>An Online Learning Management System (LMS) aimed at upskilling employees. It centralizes learning resources, tracks progress, and fosters continuous development through interactive and gamified features.</p>;

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: false,
    appendDots: (dots) => (
      <div style={{ backgroundColor: "transparent", position: "absolute", bottom: "-30px", width: "100%" }}>
        <ul style={{ margin: 0, display: "flex", justifyContent: "center" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div style={{ width: "10px", height: "10px", background: "#fff", borderRadius: "50%" }} />
    ),
  };

  return (
    <section className="project" id="projects" style={{ background: `url(${bannerImg}) no-repeat center center/cover`, padding: "50px 0", color: "white" }}>
      <div style={{ width: "100vw", maxWidth: "100%", margin: "0", padding: "0" }}>
        <h2 className="text-center mb-4" style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>Projects</h2>

        {/* Conditionally render based on screen size */}
        {isMobile ? (
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", marginBottom: "1rem" }}>{project.title}</h3>
                <div style={{ fontSize: "1rem", padding: "0 2%", margin: "0 auto" }}>
                  {project.content}
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="custom-nav mb-5" id="pills-tab">
                          <Nav.Item><Nav.Link eventKey="first">WisdomNet</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="second">CodeFusion</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="third">PaySync</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="fourth">SkillSphere</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">{tabContent_Project1}</Tab.Pane>
                          <Tab.Pane eventKey="second">{tabContent_Project2}</Tab.Pane>
                          <Tab.Pane eventKey="third">{tabContent_Project3}</Tab.Pane>
                          <Tab.Pane eventKey="fourth">{tabContent_Project4}</Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        )}
      </div>

      <style>
        {`
          .slick-dots li button:before {
            color: #fff !important;
            opacity: 0.8;
          }

          .slick-dots li.slick-active button:before {
            opacity: 1;
          }

          .custom-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
          }

          .custom-nav .nav-item {
            flex: 1;
            text-align: center;
          }

          .custom-nav .nav-link {
            padding: 10px 15px;
            color: #555;
            text-decoration: none;
            background-color: #fff;
            border-right: 1px solid #ddd;
            transition: background-color 0.3s, color 0.3s;
          }

          .custom-nav .nav-link:last-child {
            border-right: none;
          }

          .custom-nav .nav-link.active {
            color: #fff;
            background-color: #007bff;
          }

          .custom-nav .nav-link:hover {
            background-color: #e9ecef;
            color: #333;
          }

          @media (max-width: 768px) {
            .custom-nav {
              display: none; /* Hide tabs on mobile */
            }
            .slick-slide {
              text-align: center; /* Ensure content is centered on mobile */
            }
            h3 {
              font-size: 1.6rem !important; /* Smaller font size for project title on mobile */
            }
            p {
              font-size: 0.75rem !important; /* Smaller font size for project description on mobile */
            }
            .slick-slide div {
              padding: 0 0.2% !important; /* Reduced padding on mobile */
            }
          }
        `}
      </style>
    </section>
  );
};