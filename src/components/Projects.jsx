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
    description: `This app has been built without exetrnal libraries.
    It queries the external API and displays the content on clickable cards. Each card clicked opens a modal with information coming from the API.
    Each card can be set to be a favourite and they will be visibile in its relative page.
    The search bar and pagination filter the content accordingly.`,
    tags: ['React'],
    imgUrl: ProjImg2,
    projectUrl: 'https://github.com/Andrea-Dispe/Rick_and_Morty.git',
    weight: '6'
  },
  {
    title: 'Husky DeFi',
    description: 'Projectd escription',
    tags: ['React', 'Web3.js'],
    imgUrl: ProjImg1,
    projectUrl: '',
    weight: '9'
  },
  {
    title: 'Login Form',
    description: 'Projectd escription',
    tags: ['React', 'Node'],
    imgUrl: ProjImg3,
    projectUrl: '',
    weight: '10'
  }
]

const sortProjectsByWeight = (projects) => {
  return projects.sort((a, b) => {
    if (a.weight - b.weight) {
      return -1;
    }
    if (b.weight - a.weight) {
      return 1;
    }
    return 0;
  });
}


const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(sortProjectsByWeight(projects));
  const [activeItem, setActiveItem] = useState('All')

  const tags = ['All', 'React', 'Node', 'Web3.js'];

  const handleChangeTagProject = (tag) => {
    if(tag === 'All') {
      setVisibleProjects(projects);
      setActiveItem(tag)
    } else {
      const proj = projects.filter(project => project.tags.includes(tag))
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
          <Col>
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
                      <span> {project.description} </span>
                    </div>
                    <br />
                    <div className="tags">
                      <span className="subtitle">Tech Stack: </span>
                      {project.tags.map((tag, index) => (
                        (index === project.tags.length - 1 ? <span>{tag}</span> : <span>{tag}, </span>)
                      ))}
                    </div>
                    <div className="github-link">
                      <span className="subtitle">Source code: </span>

                      <a href={project.projectUrl} target="_blank">
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

