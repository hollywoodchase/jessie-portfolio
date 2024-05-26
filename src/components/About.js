import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import aboutpic from "../images/AboutPic.jpg"
import "../styles/About.css";

const About = () => {
  return (
    <Container className="about-page container-fluid">
      <Row className="home-row">
        <Col className="img-col">
          <Image className="about-img" src={aboutpic} rounded />
        </Col>
        <Col className="bio-col">
          <p className="bio-text">
            Hi! I'm Jessie Segal, a graphic designer specializing in pet
            portraits, patterns, and business logos.
          </p>
          <p>Let's collaborate and bring your ideas to life!</p>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
