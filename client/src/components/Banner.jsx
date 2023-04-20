import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import JsLogo from "../assets/img/js_logo.svg"
import PhpLogo from "../assets/img/php.svg"
import ReactLogo from "../assets/img/react.svg"
import NodeLogo from "../assets/img/nodejs.svg"
import ReduxLogo from "../assets/img/redux.svg"
import CV from "../assets/Disperati-Andrea-CV.pdf"
import PdfIcon from "../assets/img/pdf-icon.svg"
import { useTranslation } from "react-i18next";

import "./Banner.css";
import "animate.css";

const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [rotateLoopNumber, setRortateLoopNumber] = useState(1);
  const [logo, setLogo] = useState(JsLogo)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Full-Stack Dev", "Web Designer"]
  const logoToRotateArray = [JsLogo, PhpLogo, ReactLogo, NodeLogo, ReduxLogo]
  const [text, setText] = useState("")
  const period = 2000
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const { t } = useTranslation();




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
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNumber(loopNumber + 1)
      setDelta(500)
    }
  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="healines-wrapper">
            <div>
              <h1>{t('hello')}
                <div className="wrap">{text}</div>
              </h1>
              <div className="tech-skills-container">
                {logoToRotateArray.map((icon, index) => (
                  <img key={index} src={icon} alt="icon tech skill" className="tech-skills-icon" />
                ))}
              </div>
              <div className="curriculum-download">{t("download_resume")}
                <a href={CV} download>
                  <img className="pdf-icon" src={PdfIcon} alt="pdf-icon" />
                </a>
              </div>
              <div className="cta-see-projects">{t("scroll_projects")}
                <Nav.Link href="#projects">
                  <span></span>
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="rotating-logo-wrapper">
            <img className="rotating-logo" src={logo} alt="Header img" />
          </Col>
        </Row>

      </Container>

    </section>
  );
}

export default Banner;