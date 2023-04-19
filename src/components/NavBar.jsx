
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import i18next from "i18next";

import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'
import './NavBar.css';


const NavBar = ({setLang}) => {
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

  const flags = [{
    code: 'en',
    name: 'english',
    country_code: 'us'
  }, {
    code: 'it',
    name: 'italiano',
    country_code: 'it'
  }]

  return (

    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container style={{ padding: 0 }}>

        <Navbar.Toggle>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapsed">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <span className="navbar-text">
          <div>
            <DropdownButton
              id="dropdown-button-dark"
              variant="secondary"
              menuVariant="dark"
            title="en"
            // className="mt-2"
            >
              {flags.map(({ code, name, country_code }) => (
                // <div>d</div>
                <Dropdown.Item
                  key={code}
                  onClick={() => {
                    i18next.changeLanguage(code)
                    setLang(code)
                  }}
                >
                  <span className={`flag-icon flag-icon-${country_code}`}></span>
                  {country_code}
                </Dropdown.Item>
              ))}



            </DropdownButton>
          </div>

          <div className="social-icon">
            <a href="https://www.linkedin.com/in/andrea-dispe" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin social account that links to my linkedin profile" /></a>
            <a href="https://github.com/Andrea-Dispe" target="_blank" rel="noopener noreferrer"><img src={github} alt="github social icon that links to my github profile" /></a>
          </div>
          <Nav.Link className='connect' href="#contact">Let's Connect!</Nav.Link>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;