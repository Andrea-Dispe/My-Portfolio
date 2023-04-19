import React, { useState, useEffect } from 'react';
// import { useTranslation } from "react-i18next";
import axios from 'axios';
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Banner from './components/Banner'
import config from './config'
import { getUserLanguage } from './utils/utils.js'
import RickAndMortyThumb from "./assets/img/rick-and-morty-thumb.png";
import LoginSignupThumb from "./assets/img/login-signup-thumb.gif";
import MyDefiThumb from "./assets/img/my-defi-thumb.gif";
import MyPortfolioThumb from "./assets/img/my-portfolio-thumb.gif"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const addImagesThumbs = (projects) => {
  return projects.map(project => {
    console.log('project: ', project);
  
    return project
  })

}

function App() {
  const { api } = config
  const [lang, setLang] = useState(getUserLanguage())
  const [projects, setProjects] = useState([])

  useEffect(() => {
    document.querySelector('html').lang = lang
    axios.get(`${api}/translations//get/${lang}`)
      .then(result => {
        const projects = addImagesThumbs(result.data.translations)
        setProjects(projects)
      })
  }, [lang])



  return (
    <div className="App">
      <NavBar setLang={setLang} />
      <Banner />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
