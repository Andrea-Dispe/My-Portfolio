import React from 'react'
import github from "../assets/img/github.svg"
import { useTranslation } from "react-i18next";
import './ProjectCard.css'

const ProjectCard = ({ project, index }) => {
  const {t} = useTranslation()

  return (
    <div key={index} className="project">
      <div className="thumb">
        <a href={project.projectShowUrl} target='_blank' rel="noopener noreferrer">
          <img src={require(`../assets/img/${project.imageUrl}`)} alt={project.title} />
        </a>
      </div>
      <div className="info-wrapper">
        <div className="title">{project.title}</div>
        <div className="description">
          <span className="subtitle">{t("description")}: </span>
          <br />
          <span> {project.description} </span>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="tags">
          <span className="subtitle">{t("tech_stack")}: </span>
          {project.tags.map((tag, index) => (
            (index === project.tags.length - 1 ? <span key={index}>{tag}</span> : <span key={index}>{tag}, </span>)
          ))}
        </div>
        <div className="subtitle">{t("view_project")}:
        <a href={project.projectShowUrl} target="_blank" rel="noopener noreferrer"> {project.projectShowUrl}</a>
        </div>
        <div className="github-link">
          <span className="subtitle">{t("source_code")}: </span>
          <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
            <img className="github-icon" src={github} alt={`Icon Github as external link to github project ${project.title}`} />
          </a>
        </div>
      </div>
    </div>

  );
}

export default ProjectCard;