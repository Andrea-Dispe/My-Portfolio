import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"
import projectsData from "../projectsData.js"
import "./Projects.css"
import 'animate.css';

const sortProjectsByWeight = (projectsData) => {
  return projectsData.sort((a, b) => b.weight - a.weight);
}

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(sortProjectsByWeight(projectsData));
  const [activeItem, setActiveItem] = useState('All')
  const tags = ['All', 'React', 'Node', 'Web3.js'];

  const handleChangeTagProject = (tag) => {
    if (tag === 'All') {
      setVisibleProjects(projectsData);
      setActiveItem(tag)
    } else {
      const proj = projectsData.filter(project => project.tags.includes(tag))
      setVisibleProjects(proj);
      setActiveItem(tag)
    }
  }

  return (
    <section className='projects' id='projects'>
      <Container>
        <div className='headline-wrapper'>
          <h1 className="headline">Projects</h1>
        </div>
        <Row>
          <Col sm={12}>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <div className={activeItem === tag ? 'tag-button tag-button-active' : 'tag-button'} onClick={() => handleChangeTagProject(tag)}>
                  <span className="tag">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="projects">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="annoying as fuck" />
    </section>
  );
};

export default Projects;

