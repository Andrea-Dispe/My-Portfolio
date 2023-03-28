import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

import Banner from './components/Banner'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
