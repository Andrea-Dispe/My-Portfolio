const express = require('express')
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config()

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json())
app.use("/", router)
app.listen("5000", () => console.log("server running"))
// console.log('process.ENV.Email_USER: ', process.ENV.EMAIL_USER);
// console.log('process.ENV.EMAIL_PASS: ', process.ENV.EMAIL_PASS);

 const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "dispe.andrea@gmail.com",
    pass: "Projektor#444"
  }
 })

 contactEmail.verify(error => {
  if(error) {
    console.log('error!!!!!!!!!!!!!: ', error);
  } else {
    console.log('Ready to send');
  }
 });


 router.get('http://localhost:5000/contact', (req, res) => {
  res.send('dedeergreggeeg')
  console.log('ddedefefefefe')
 })

 router.post("/contact", (req, res) => {
  console.log('req: ', req);
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: 'dispe.andrea@gmail.com',
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>`
  }

  contactEmail.sendMail(mail, error => {
    if(error) {
      res.json(error)
    } else {
      res.json({code: 200, status: 'Message Sent' })
    }
  })
 })

