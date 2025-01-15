import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import bannerImg from "../assets/img/banner-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

  const tabContent_experience1 = (
    <p>
      <b>Cloud Consultant</b><br></br><br></br>
      September, 2020 - Present<br></br>
      Technologies Used : Java, SpringBoot, JavaScript, RESTful APIs, SQL/PLSQL, Oracle APEX
    </p>    
  );

  const tabContent_experience2 = (
    <p>
      <b>SDET Intern</b><br></br><br></br>
      January, 2020 - June, 2020<br></br>
      Technologies Used : Python, JUnit, SQL, GIT, Jira
    </p>
  );

  const tabContent_experience3 = (
    <p>
      <b>SDE Intern</b><br></br><br></br>
      January, 2019 - March, 2019<br></br>
      Technologies Used : Java, JSON, NLP(Natural Language Processing), IBM Watson
    </p>
  );

  return (
    <section
      className="experience"
      id="experience"
      style={{
        background: `url(${bannerImg}) no-repeat center center/cover`,
        backgroundSize: '150%', // Zoom the image to 150% of its original size
        backgroundPosition: 'center',
        backgroundColor: '#f8f9fa', // Fallback background color
        padding: '50px 0',
      }}
    >
     <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <br></br>
                  <Tab.Container id="experience-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Oracle</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Practo</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">IBM</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">{tabContent_experience1}</Tab.Pane>
                      <Tab.Pane eventKey="second">{tabContent_experience2}</Tab.Pane>
                      <Tab.Pane eventKey="third">{tabContent_experience3}</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={bannerImg}></img>
    </section>
  );
};