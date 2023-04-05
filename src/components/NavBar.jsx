
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'
import './NavBar.css';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    // remove the listener when the component gets removed from the DOM
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (

    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact Me</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/andrea-dispe" target="_blank"><img src={linkedin} alt="linkedin social account that links to my linkedin profile" /></a>
              <a href="https://github.com/Andrea-Dispe" target="_blank"><img src={github} alt="github social icon that links to my github profile" /></a>
            </div>
            <Nav.Link className='connect' href="#contact">Let's Connect!</Nav.Link>
            {/* <button
              className='connect'
              onClick={() => console.log('connect')}>
              Let's Connect!
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;