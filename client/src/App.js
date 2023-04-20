import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Banner from './components/Banner'
import config from './config'
import { getUserLanguage } from './utils/utils.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const addImagesThumbs = (projects) => {
  return projects.map(project => {

    return project
  })

}

function App() {
  const { api } = config
  console.log('config in client: ', config);
  console.log('api in client: ', api);

  const [lang, setLang] = useState(getUserLanguage())
  const [projects, setProjects] = useState([])

  useEffect(() => {
    document.querySelector('html').lang = lang
    axios.get(`${api}/translations/get/${lang}`)
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
      <Contact lang={lang}/>
    </div>
  );
}

export default App;
