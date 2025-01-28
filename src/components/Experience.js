import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import bannerImg from "../assets/img/exp-bg.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";

export const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experiences = [
    {
      title: "Oracle",
      content: (
        <p>
          <b>Cloud Consultant</b>
          <br />
          <br />
          September, 2020 - Present
          <br />
          Technologies Used: Java, SpringBoot, JavaScript, RESTful APIs, SQL/PLSQL, Oracle APEX
        </p>
      ),
    },
    {
      title: "Practo",
      content: (
        <p>
          <b>SDET Intern</b>
          <br />
          <br />
          January, 2020 - June, 2020
          <br />
          Technologies Used: Python, JUnit, SQL, GIT, Jira
        </p>
      ),
    },
    {
      title: "IBM",
      content: (
        <p>
          <b>SDE Intern</b>
          <br />
          <br />
          January, 2019 - March, 2019
          <br />
          Technologies Used: Java, JSON, NLP (Natural Language Processing), IBM Watson
        </p>
      ),
    },
  ];

  const sliderSettings = {
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
    <section
      className="experience"
      id="experience"
      style={{
        background: `url(${bannerImg}) no-repeat center center/cover`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f8f9fa",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row>
          <Col xs={12} md={10} lg={8} className="mx-auto">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-4 experience-header">
                    Experience
                  </h2>

                  {isMobile ? (
                    <Slider {...sliderSettings}>
                      {experiences.map((experience, index) => (
                        <div key={index} style={{ textAlign: "center" }}>
                          <h3 className="experience-title">{experience.title}</h3>
                          <div className="experience-content">{experience.content}</div>
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <Tab.Container id="experience-tabs" defaultActiveKey="0">
                      <Nav
                        variant="pills"
                        className="custom-nav mb-5 justify-content-center"
                        id="pills-tab"
                        role="tablist"
                      >
                        {experiences.map((experience, index) => (
                          <Nav.Item key={index}>
                            <Nav.Link eventKey={index.toString()} aria-controls={`experience${index}-tab`}>
                              {experience.title}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={isVisible ? "animate__animated animate__slideInUp" : ""}
                      >
                        {experiences.map((experience, index) => (
                          <Tab.Pane eventKey={index.toString()} key={index}>
                            {experience.content}
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Tab.Container>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          .experience {
            overflow: hidden;
          }

          .experience-header {
            font-size: 4vw; /* Dynamic font size based on the viewport width */
            word-wrap: break-word;
            white-space: nowrap; /* Prevent text from breaking into multiple lines */
            padding: 0 5%; /* Avoid horizontal overflow */
            margin: 0;
            text-align: center;
          }

          .experience-title {
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 1rem;
            word-wrap: break-word;
            white-space: normal;
          }

          .experience-content {
            font-size: 1rem;
            padding: 0 5%;
            margin: 0 auto;
            word-wrap: break-word;
            white-space: normal;
          }

          @media (max-width: 768px) {
            .experience-header {
              font-size: 6vw; /* Dynamically reduce font size for mobile */
              white-space: nowrap; /* Ensure text stays in a single line */
            }

            .experience-title {
              font-size: 1.2rem;
            }

            .experience-content {
              font-size: 0.9rem;
              padding: 0 5%;
            }
          }
        `}
      </style>
    </section>
  );
};