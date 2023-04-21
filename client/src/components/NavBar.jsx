
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'
import './NavBar.css';


const NavBar = ({ setLang, lang}) => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation();


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

  const getCurrentLanguageName = () => {
    let currentLanguageName = ''
    flags.forEach(flag => {
      if(flag.code === lang) {
        console.log({flagCode:flag.code, lang});
        currentLanguageName = flag.name
      }
    })
    console.log('currentLanguageName: ', currentLanguageName);
    return currentLanguageName
  }

  return (

    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container style={{ padding: 0 }}>

        <Navbar.Toggle>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapsed">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t("home")}</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t("projects")}</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>{t("contact_me")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <span className="navbar-text">
          <div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#323232", border: 'none' }}>
                {getCurrentLanguageName()}
              </Dropdown.Toggle>

              <Dropdown.Menu
                id="dropdown-menu"
                style={{ padding: "5px 0px", backgroundColor: "#fff" }}
              >
                {flags.map(({ code, name, country_code }) => (
                  <Dropdown.Item
                    key={code}
                    onClick={() => {
                      i18next.changeLanguage(code)
                      setLang(code)
                    }}
                    id="dropdown-item"
                    style={{ padding: '5px 10px', color: "#000" }}
                  >

                    <span className={`flag-icon flag-icon-${country_code}`} style={{ marginRight: "5px" }}></span>
                    {country_code}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="social-icon">
            <a href="https://www.linkedin.com/in/andrea-dispe" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin social account that links to my linkedin profile" /></a>
            <a href="https://github.com/Andrea-Dispe" target="_blank" rel="noopener noreferrer"><img src={github} alt="github social icon that links to my github profile" /></a>
          </div>
          <Nav.Link className='connect' href="#contact">{t('lets_connect')}</Nav.Link>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;