import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"
import { useTranslation } from "react-i18next";
import "./Projects.css"
import 'animate.css';



const sortProjectsByWeight = (projects) => {
  if (projects.length > 0) {
    return projects.sort((a, b) => b.weight - a.weight);
  } else {
    return projects
  }
}



const Projects = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [activeItem, setActiveItem] = useState('All')
  const tags = ['All', 'React', 'Node', 'Web3.js'];
  const {t} = useTranslation()

  const handleChangeTagProject = (tag) => {
    if (tag === 'All') {
      setVisibleProjects(projects);
      setActiveItem(tag)
    } else {
      const proj = projects.filter(project => project.tags.includes(tag))
      setVisibleProjects(proj);
      setActiveItem(tag)
    }
  }

  useEffect(() => {

    setVisibleProjects(sortProjectsByWeight(projects))
  }, [projects])



  return (
    <section className='projects' id='projects'>
      <Container>
        <div className='headline-wrapper'>
          <h1 className="headline">{t("projects")}</h1>
        </div>
        <Row>
          <Col sm={12}>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <div key={index} className={activeItem === tag ? 'tag-button tag-button-active' : 'tag-button'} onClick={() => handleChangeTagProject(tag)}>
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
                  key={index}
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

