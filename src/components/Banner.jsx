import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import JsLogo from "../assets/img/js_logo.svg"
import PhpLogo from "../assets/img/php.svg"
import ReactLogo from "../assets/img/react.svg"
import NodeLogo from "../assets/img/nodejs.svg"
import ReduxLogo from "../assets/img/redux.svg"
import './Banner.css';
import 'animate.css';

const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [rotateLoopNumber, setRortateLoopNumber] = useState(1);
  const [logo, setLogo] = useState(JsLogo)
  const [vis, setVis] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Full-Stack Dev", "Web Designer"]
  const logoToRotateArray = [JsLogo, PhpLogo, ReactLogo, NodeLogo, ReduxLogo]
  const [text, setText] = useState('')
  const period = 2000
  const [delta, setDelta] = useState(300 - Math.random() * 100)


  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [text])


  useEffect(() => {
    const ticker = setInterval(() => {
      rotateLogos()
    }, 1500)
    return () => {
      clearInterval(ticker)
    }
  }, [rotateLoopNumber])


  const rotateLogos = () => {
    let i = rotateLoopNumber % logoToRotateArray.length
    const newLogo = logoToRotateArray[i]
    if (rotateLoopNumber === logoToRotateArray.length - 1) {
      setRortateLoopNumber(0)
    } else {
      setRortateLoopNumber(rotateLoopNumber + 1)
    }
    setLogo(newLogo)
  }

  const tick = () => {
    let i = loopNumber % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNumber(loopNumber + 1)
      setDelta(500)
    }
  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my portfolio</span>
              <h1>{`Hello, I am Andrea `}
                <div className="wrap">{text}</div>
              </h1>
              <p>Scroll down to see some of my projects:</p>
              <div className="tech-skills-container">
                {logoToRotateArray.map(icon => (
                  <img src={icon} alt="icon tech skill" className="tech-skills-icon" />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="rotating-logo" src={logo} alt="Header img" />
          </Col>
        </Row>

      </Container>

    </section>
  );
}

export default Banner;