import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import bannerImg from "../assets/img/banner-bg.png";

export const Projects = () => {
  const tabContent_Project1 = (
    <p>
      Developed an Internal Knowledge-Sharing Portal inspired by platforms like Stack Overflow, designed to facilitate real-time collaboration and problem resolution within the organization. 
      The portal encourages peer-to-peer support, fosters innovation, and accelerates technical issue resolution.
    </p>
  );

  const tabContent_Project2 = (
    <p>
      Developed an AI-powered Code Repository Tool designed to centralize and streamline code management across cross-functional teams. 
      The tool integrates advanced search capabilities, automated backups, and bulk upload functionality to improve collaboration and reduce redundancy.
    </p>
  );

  const tabContent_Project3 = (
    <p>
      Developed an innovative Payroll Reconciliation Tool designed to automate and streamline the migration and validation of employee data from legacy systems to modern Cloud platforms. 
      The tool reduces manual errors, enhances efficiency, and ensures seamless payroll processing.
    </p>
  );

  const tabContent_Project4 = (
    <p>
      Developed a robust Online Learning Management System (LMS) designed to streamline training and upskilling within the organization. 
      The platform centralizes learning resources, online courses, tracks employee progress, and fosters continuous development through interactive and gamified features.
    </p>
  );

  return (
    <section
      className="project"
      id="projects"
      style={{
        background: `url(${bannerImg}) no-repeat center center/cover`,
        backgroundSize: '150%',
        backgroundPosition: 'center',
        backgroundColor: '#f8f9fa',
        padding: '50px 0',
      }}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="custom-nav mb-5"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">WisdomNet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">CodeFusion</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">PaySync</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">SkillSphere</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
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
      <img className="background-image-right" src={bannerImg} alt="Background" />
      <style>
        {`
          .custom-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ddd; /* Uniform border for all tabs */
            border-radius: 5px; /* Optional rounded corners */
            overflow: hidden; /* Prevents overflowing content */
          }

          .custom-nav .nav-item {
            flex: 1; /* Equal width for all tabs */
            text-align: center;
          }

          .custom-nav .nav-link {
            padding: 10px 15px;
            color: #555;
            text-decoration: none;
            background-color: #fff;
            border-right: 1px solid #ddd; /* Border between tabs */
            transition: background-color 0.3s, color 0.3s;
          }

          .custom-nav .nav-link:last-child {
            border-right: none; /* Remove border on the last tab */
          }

          .custom-nav .nav-link.active {
            color: #fff;
            background-color: #007bff; /* Active tab background */
          }

          .custom-nav .nav-link:hover {
            background-color: #e9ecef; /* Hover effect */
            color: #333;
          }
        `}
      </style>
    </section>
  );
};
