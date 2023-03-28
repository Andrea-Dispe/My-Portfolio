import React from 'react'

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="text-center">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1}/>
              </a>
              <a href="">
                <img src={navIcon2}/>
              </a>
              <a href="">
                <img src={navIcon3}/>
              </a>
            </div>



          </Col>
        </Row>
      </Container>
    </footer>
   );
}

export default Footer;