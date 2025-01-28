import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import resume from '../assets/files/Arya Sinha_Resume.pdf';

export const Banner = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Arya_Sinha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="text-center text-md-start">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Arya, `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Software Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a software developer with a strong foundation in
                    creating innovative, scalable, and reliable applications.
                    With over 4 years of experience, I have developed and
                    maintained various applications and solutions that optimize
                    processes, enhance user experience, and provide actionable
                    insights.
                  </p>
                  <button
                    className="resume-button"
                    onClick={() => {
                      handleDownloadResume();
                    }}
                  >
                    Download my resume <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
            className="d-flex justify-content-center"
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="img-fluid"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          .banner {
            padding: 50px 15px; /* Default padding for all devices */
          }

          .banner .tagline {
            font-size: 1.2rem; /* Adjust tagline font size for smaller devices */
          }

          .banner h1 {
            font-size: 2rem; /* Default headline size */
            word-wrap: break-word;
          }

          .banner p {
            font-size: 1rem; /* Default paragraph font size */
          }

          .resume-button {
            font-size: 0.9rem;
            padding: 10px 15px;
          }

          @media (max-width: 768px) {
            .banner h1 {
              font-size: 1.8rem; /* Reduce headline size for smaller screens */
            }

            .banner p {
              font-size: 0.9rem;
              margin-bottom: 20px;
            }

            .banner .tagline {
              font-size: 1rem;
            }

            .resume-button {
              font-size: 0.8rem;
              padding: 8px 12px;
            }
          }

          @media (min-width: 992px) {
            .banner {
              padding-top: 100px; /* Increase space above banner for laptops */
            }
          }
        `}
      </style>
    </section>
  );
};
