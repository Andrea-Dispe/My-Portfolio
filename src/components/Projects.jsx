import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


import ProjImg1 from "../assets/img/project-img1.png";
import ProjImg2 from "../assets/img/project-img2.png";
import ProjImg3 from "../assets/img/project-img3.png";


const lorem = "Lorel;ds lvds Lorem Ipsum.";
const projects = [
  {
    title: 'Husky DeFi',
    description: 'Projectd escription',
    tags: ['React', 'Web3.js'],
    imgUrl: ProjImg1,
  },
  {
    title: 'Rick and Morty',
    description: 'Projectd escription',
    tags: ['React'],
    imgUrl: ProjImg2,
  },
  {
    title: 'Login Form',
    description: 'Projectd escription',
    tags: ['React', 'Node'],
    imgUrl: ProjImg3,
  },
  {
    title: 'Husky DeFi',
    description: 'Projectd escription',
    tags: ['React', 'Web3.js'],
    imgUrl: ProjImg1,
  },
  {
    title: 'Rick and Morty',
    description: 'Projectd escription',
    tags: ['React'],
    imgUrl: ProjImg2,
  },
  {
    title: 'Login Form',
    description: 'Projectd escription',
    tags: ['React', 'Node'],
    imgUrl: ProjImg3,
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [activeItem, setActiveItem] = useState('')

  const tags = ['React', 'Node', 'Web3.js'];



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
                <div key={index} className={activeItem === tag ? 'tag tag-active' : 'tag'} onClick={() => handleClick(tag)}>{tag}</div>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <div className="projects">
              {visibleProjects.map((project, index) => (

                // <div key={index}>
                    <Col sm={4} key={index}>
                  {/* {({ isVisible }) => */}
                  {/* <div className={isVisible ? 'animate__animated animate__fadeInUp' : ""}> */}
                  <div className="project">
                    {/* <Row> */}
                    {/* <Col sm={4}> */}
                      <Col>
                        <img src={project.imgUrl} alt={project.title} className="thumb" />
                      </Col>

                      <Col>
                        <div className="info-wrapper">
                          <div className="title">{project.title}</div>
                          <div className="description">
                            <span className="description-title">Description: </span>
                            <span> {lorem} </span>
                          </div>
                          <div className="tags">
                            <span className="description-tags">Tags: </span>
                            <span> {project.tags} </span>
                          </div>
                        </div>
                      </Col>
                    {/* </Col> */}
                    {/* </Row> */}
                    {/* </div> */}


                  </div>
                  {/* } */}
                {/* </div> */}
                </Col>
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

