import React from 'react'

import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  console.log('imgUrl: ', imgUrl);
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="something" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;