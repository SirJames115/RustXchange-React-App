import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-3">
      <Container>
        <Row>
          <Col className="text-center">
            <h5>Connect with RustXchange</h5>
            <p>
              <a
                href="https://twitter.com/your_twitter_handle"
                target="_blank"
                rel="noopener noreferrer">
                <FaTwitter className="mr-2" /> Twitter
              </a>
              {" | "}
              <a
                href="https://instagram.com/your_instagram_handle"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="mr-2" /> Instagram
              </a>
              {" | "}
              <a
                href="https://linkedin.com/in/your_linkedin_profile"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              {" | "}
              <a
                href="https://github.com/your_github_username"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} RustXchange. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
