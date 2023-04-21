import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Banner from './components/Banner'
import config from './config'
import { getUserLanguage } from './utils/utils.js'
import translationIT from './assets/translations-it.json'
import translationEN from './assets/translations-en.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { api } = config
  const [lang, setLang] = useState(getUserLanguage())
  const [projects, setProjects] = useState([])

  useEffect(() => {
    document.querySelector('html').lang = lang
    axios.get(`${api}/translations/get/${lang}`)
      .then(result => {
        const projects = result.data.translations
        setProjects(projects)
      })
      .catch(error => {
        console.error('Error while getting data from api', error)
        // fallback in case the api fails
        if (lang === 'en') {
          setProjects(translationEN.translations)
        } else if (lang === 'it') {
          setProjects(translationIT.translations)
        }
      })
  }, [lang])

  return (
    <div className="App">
      <NavBar setLang={setLang} lang={lang} />
      <Banner />
      <Projects projects={projects} />
      <Contact lang={lang} />
    </div>
  );
}

export default App;
