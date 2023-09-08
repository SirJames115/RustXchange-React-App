import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ECall from "../Images/Ecall.jpg";
import Chatbot from "../Images/Chatbot.jpg";
import eCommunity from "../Images/eCommunity.jpg";
import Email from "../Images/Email.jpg";
import Movie from "../Images/Movie.jpg";
import note from "../Images/note.jpg";
import Social_Media from "../Images/Social_Media.jpg";
import TextToSpeech from "../Images/TextToSpeech.png";
import threads from "../Images/threads.png";
import What_Poster from "../Images/What_Poster.jpg";

const ImagesListing = () => {
  const bodyStyle = {
    transition: "transform 0.15s, box-shadow 0.15s",
    cursor: "pointer",
  };
  const mouseOver = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  };
  const mouseOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };
  return (
    <Container className="mt-1">
      <p className="h3 justify-content-start">
        Here are List of products you can access with our native coin
        (Stainless)
      </p>
      <Row>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={ECall} alt="" />
              <Card.Body>
                <Card.Title>ECall</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={Email} alt="" />
              <Card.Body>
                <Card.Title>Email</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a
            href="https://jai-two.vercel.app"
            style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={Chatbot} alt="" />
              <Card.Body>
                <Card.Title>Chatbot</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={eCommunity} alt="" />
              <Card.Body>
                <Card.Title>eCommunity</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={Movie} alt="" />
              <Card.Body>
                <Card.Title>Movie</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={Social_Media} alt="" />
              <Card.Body>
                <Card.Title>Social Media</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={TextToSpeech} alt="" />
              <Card.Body>
                <Card.Title>Text To Speech</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={threads} alt="" />
              <Card.Body>
                <Card.Title>Threads</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={note} alt="" />
              <Card.Body>
                <Card.Title>Note</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              className="mb-4 bg-primary text-white"
              style={bodyStyle}
              onMouseOver={(e) => {
                mouseOver(e);
              }}
              onMouseOut={(e) => {
                mouseOut(e);
              }}>
              <Card.Img variant="top" src={What_Poster} alt="" />
              <Card.Body>
                <Card.Title>What Poster</Card.Title>
                <Card.Text>description</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ImagesListing;
