import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import github from '../assets/img/github.svg'


import ProjImg1 from "../assets/img/project-img1.png";
import ProjImg2 from "../assets/img/project-img2.png";
import ProjImg3 from "../assets/img/project-img3.png";


const lorem = "Lorel;ds lvds Lorem Ipsum.";
const projects = [
  {
    title: 'Rick and Morty',
    description: 'Projectd escription',
    tags: ['React'],
    techStack: '',
    imgUrl: ProjImg2,
    projectUrl: ''
  },
  {
    title: 'Husky DeFi',
    description: 'Projectd escription',
    tags: ['React', 'Web3.js'],
    techStack: '',
    imgUrl: ProjImg1,
    projectUrl: ''
  },
  {
    title: 'Login Form',
    description: 'Projectd escription',
    tags: ['React', 'Node'],
    techStack: '',
    imgUrl: ProjImg3,
    projectUrl: ''
  }
]

const sortProjectsByTitle = (projects) => {
  return projects.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
}


const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(sortProjectsByTitle(projects));
  const [activeItem, setActiveItem] = useState('')

  const tags = ['React', 'Node', 'Web3.js'];

  useEffect(() => {
    console.log('visibleProjects: ', visibleProjects);
  }, [])

  const handleClick = (tag) => {
    const proj = projects.filter(project => project.tags.includes(tag))
    setVisibleProjects(proj);
    setActiveItem(tag)
    console.log('activeItem: ', activeItem);
  }

  return (
    <section className='projects' id='projects'>
      <Container>
        <div className='headline-wrapper'>
          <h1 className="headline">Projects</h1>
        </div>
        <Row>
          <Col>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <div className={activeItem === tag ? 'tag-button tag-button-active' : 'tag-button'} onClick={() => handleClick(tag)}>
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

                // <div key={index}>
                <div key={index} className="project">
                  {/* {({ isVisible }) => */}
                  {/* <div className={isVisible ? 'animate__animated animate__fadeInUp' : ""}> */}
                  {/* <div className="project"> */}
                  {/* <Row> */}
                  {/* <Col sm={4}> */}
                  <div className="thumb">
                    <img src={project.imgUrl} alt={project.title} />
                  </div>

                  <div className="info-wrapper">
                    <div className="title">{project.title}</div>
                    <div className="description">
                      <span className="subtitle">Description: </span>
                      <span> {lorem} </span>
                    </div>
                    <div className="tags">
                      <span className="subtitle">Tags: </span>
                      {project.tags.map((tag, index) => (
                        (index === project.tags.length - 1 ?  <span>{tag}</span> :  <span>{tag}, </span> )
                      ))}
                    </div>
                    <div className="tech">
                      <span className="subtitle">Tech stack: </span>
                      <span> {project.techStack} </span>
                    </div>
                    <div className="github-link">
                    <span className="subtitle">Source code: </span>

                      <a href={project.projectUrl}>
                      <img className="github-icon" src={github} alt={`Icon Github as external link to github project ${project.title}`} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*

              <div className="projects-wrapper">
                {visibleProjects.map((project, index) => (
                  <div key={index} className="c">
                    <div className="title">{project.title}</div>
                    <div className="description">{project.description}</div>
                    <div className="tags">{project.tags}</div>
                    <img src={project.imgUrl} alt={project.title} className="thumb" />


                  </div>
                ))}
              </div> */}
          </Col>

        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="annoying as fuck" />
    </section>
  );
};

export default Projects;

