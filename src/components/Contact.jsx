import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useAddNotification } from './Notifications/NotificationProvider';

import contactImg from '../assets/img/contact-img.svg'

const Contact = () => {
  const form = useRef()
  const dispatchAddNotification = useAddNotification();

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtontext] = useState('Send')

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = formDetails;

    if (!firstName) {
      dispatchAddNotification({ result: "ERROR", message: 'First name is required' })
      return;
    } else if (!email) {
      dispatchAddNotification({ result: "ERROR", message: 'An email address is required' })
      return;
    } else if (!message) {
      dispatchAddNotification({ result: "ERROR", message: 'A short message is required' })
      return;
    }

    setButtontext('Sending...')
    emailjs.sendForm('service_tt3adfi', 'template_7pf68ki', form.current, 'w6qDx-AE1Fi2nMrIY')
      .then((res) => {
        console.log(res);
        setButtontext('Send');

        // clean form
        setFormDetails(formInitialDetails)
        if (res.text === 'OK') {
          dispatchAddNotification({ result: "SUCCESS", message: 'Email sent succesfully!' });
        } else {
          dispatchAddNotification({ result: "ERROR", message: 'Something went wrong!' });

        }
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} >
            <img src={contactImg} alt="Contact me" />
          </Col>
          <Col md={6} >
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" name="first_name" onChange={e => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" name="last_name" onChange={e => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Address" name="email" onChange={e => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone no." name="phone_number" onChange={e => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea row="6" value={formDetails.message} placeholder="Message" name="message" onChange={e => onFormUpdate("message", e.target.value)} />
                  <button type='submit' className="send" ><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>

      </Container>

    </section>
  );
}

export default Contact;