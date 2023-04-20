import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import { useAddNotification } from './Notifications/NotificationProvider';
import contactImg from '../assets/img/contact-img.svg'
import config from '../config'
import './Contact.css'


const Contact = ({ lang }) => {
  const form = useRef()
  const dispatchAddNotification = useAddNotification();
  const { t } = useTranslation()

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtontext] = useState(lang === 'en' ? 'Send' : 'Invia')

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, message } = formDetails;

    if (!firstName) {
      dispatchAddNotification({ result: "ERROR", message: t("first_name_required") })
      return;
    } else if (!email) {
      dispatchAddNotification({ result: "ERROR", message: t("email_required") })
      return;
    } else if (!message) {
      dispatchAddNotification({ result: "ERROR", message: t("message_required") })
      return;
    }

    setButtontext('Sending...')
    emailjs.sendForm( config.emailServiceID, config.emailTemplateID, form.current, config.emailPublicKey)
    // emailjs.sendForm('service_tt3adfi', 'template_7pf68ki', form.current, 'w6qDx-AE1Fi2nMrIY')

      .then((res) => {
        setButtontext('Send');

        // clean form
        setFormDetails(formInitialDetails)
        if (res.text === 'OK') {
          dispatchAddNotification({ result: "SUCCESS", message: t("email_sent") });
        } else {
          dispatchAddNotification({ result: "ERROR", message: t("email_not_sent") });

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
            <h2>{t("get_in_touch")}</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder={t("first_name")} name="first_name" onChange={e => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder={t("last_name")} name="last_name" onChange={e => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder={t("email")} name="email" onChange={e => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder={t("phone_num")} name="phone_number" onChange={e => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea row="6" value={formDetails.message} placeholder={t("message")} name="message" onChange={e => onFormUpdate("message", e.target.value)} />
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