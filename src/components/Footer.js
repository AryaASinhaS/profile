import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        padding: '15px 0',
        borderTop: '1px solid #dee2e6', // Adds a subtle border for separation
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <p 
              style={{
                margin: 0,
                fontSize: '1rem',
                color: '#6c757d',
                wordSpacing: '0.1rem',
                lineHeight: '1.5',
              }}
            >
              Crafted with ❤️ and ☕ by Arya.
            </p>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          @media (max-width: 576px) {
            .footer p {
              font-size: 0.9rem; /* Adjust font size for smaller screens */
            }
          }

          @media (min-width: 768px) {
            .footer p {
              font-size: 1.1rem; /* Slightly larger font size for medium screens */
            }
          }
        `}
      </style>
    </footer>
  );
};
