import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import bannerImg from "../assets/img/contact-banner-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState(null);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formDetails.firstName.trim() || !formDetails.email.trim()) {
      setStatus({ success: false, message: "Name and Email are mandatory fields!" });
      return;
    }

    setButtonText("Sending...");
    let response = await fetch("https://formspree.io/f/mvggypva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
      }),
    });

    if (response.ok) {
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
    } else {
      setStatus({ success: false, message: "Something went wrong. Please try again later." });
    }
    setButtonText("Send");
  };

  return (
    <section
      className="contact"
      id="connect"
      style={{
        background: `url(${bannerImg}) no-repeat center center/cover`,
        padding: '50px 0',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn contact-img img-fluid" : "contact-img img-fluid"}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center text-md-start">Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-2 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-2 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-2 mb-3">
                        <input
                          type="email"
                          className="form-control"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-2 mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} className="px-2 mb-3">
                        <textarea
                          rows="6"
                          className="form-control"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} className="text-center text-md-start px-2 mb-3">
                        <button className="btn btn-primary" type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status && (
                        <Col xs={12} className="px-2">
                          <p className={status.success ? "text-success" : "text-danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
