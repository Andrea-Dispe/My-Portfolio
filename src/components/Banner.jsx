import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import HeaderImg from "../assets/img/header-img.svg";
import JsLogo from "../assets/img/js_logo.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Banner = () => {

  const [loopNumber, setLoopNumber] = useState(0)
  const [vis, setVis] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Web Developer", "Web Designer", "Ui/UX Designer"]
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
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__fadeIn' : "d-none"}>
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>{`Hello, I am Andrea `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit accusamus quas totam. Ut commodi omnis aperiam excepturi soluta amet unde quis repellat? Veniam non ab mollitia adipisci, nemo possimus!</p>
                  <button onClick={() => { console.log('connect') }}> Let's Connect
                    <ArrowRightCircle size={25}></ArrowRightCircle>
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={JsLogo} alt="Header img" />
          </Col>
        </Row>

      </Container>

    </section>
  );
}

export default Banner;