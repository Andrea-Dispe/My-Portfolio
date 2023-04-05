import { Container, Row, Col } from "react-bootstrap";
import React from 'react'

import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="text-center">
            <div className="social-icon">
              <a href="">
                <img src={linkedin}/>
              </a>
              <a href="">
                <img src={github}/>
              </a>
            </div>



          </Col>
        </Row>
      </Container>
    </footer>
   );
}

export default Footer;