import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        padding: '10px 0', // Reduced padding for the section
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center', // Vertically center content
        justifyContent: 'center', // Horizontally center content
        textAlign: 'center',
        minHeight: '60px', // Ensures the section has a balanced size
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col size={12} md={6}>
            <p style={{ margin: '0', fontSize: '1rem', color: '#6c757d' }}>
              Crafted with ❤️ and ☕ by Arya.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
