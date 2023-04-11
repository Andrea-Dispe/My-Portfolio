import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Banner from './components/Banner'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
