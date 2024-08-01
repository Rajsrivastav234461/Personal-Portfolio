import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Social Media Website"
              description="Social Media Website Welcome to Nest, a social media website designed to connect people and foster interactions. This project is developed using HTML, CSS, JavaScript, and Bootstrap to create a visually appealing and user-friendly interface.."
              ghLink="https://github.com/Rajsrivastav234461/social-media-website-nest-"
              demoLink="https://nitesh-social-media-webapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="To-Do Application"
              description="The Simple React To-Do Application allows users to manage tasks effectively by providing features to add, edit, view, and delete tasks. It utilizes React hooks for state management and Redux for global state control."
              ghLink="https://github.com/Rajsrivastav234461/TodoApplication"
              demoLink="https://calcios2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Corrosion-Detection-Tool"
              description="Artificial Intelligence (AI) is revolutionizing the construction and manufacturing industries by enhancing efficiency, productivity, safety, and decision-making"
              ghLink="https://github.com/Rajsrivastav234461/AI-in-construction-and-manufacturing"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-Commerce-Website"
              description="The e-commerce website is a modern, scalable online shopping platform developed using the MERN stack: MongoDB, Express.js, React.js, and Node.js. This full-stack application offers a seamless shopping experience, robust backend management, and a responsive user interface"
               ghLink="https://github.com/Rajsrivastav234461/E-commerce-Quick-Mart"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Social Media Website"
              description="Nest - Social Media Website Welcome to Nest, a social media website designed to connect people and foster interactions. This project is developed using HTML, CSS, JavaScript, and Bootstrap to create a visually appealing and user-friendly interface."
               ghLink="https://github.com/Rajsrivastav234461/social-media-website-nest-"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Internship_Portal"
              description="Welcome to the Internship Portal project! This application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and is designed to manage internships and applications."
              ghLink="https://github.com/Rajsrivastav234461/Internship_Portal1"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
