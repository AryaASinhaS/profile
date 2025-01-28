import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header
      style={{
        background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
        color: 'white',
        padding: '1.5rem 0',
        textAlign: 'center',
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Arya Sinha</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <nav
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap', // Ensures proper wrapping on smaller screens
              }}
            >
              <a
                href="#about"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <FaUser style={{ marginRight: '0.5rem' }} /> About
              </a>
              <a
                href="#projects"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <FaProjectDiagram style={{ marginRight: '0.5rem' }} /> Projects
              </a>
              <a
                href="#contact"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <FaEnvelope style={{ marginRight: '0.5rem' }} /> Contact
              </a>
            </nav>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          a:hover {
            transform: scale(1.1);
          }

          @media (max-width: 576px) {
            h1 {
              font-size: 2rem; /* Smaller font size for mobile screens */
            }

            a {
              font-size: 1rem; /* Adjust font size for smaller screens */
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;