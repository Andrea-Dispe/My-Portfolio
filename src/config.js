// const dotenv = require('dotenv');
import * as dotenv from 'dotenv'
dotenv.config();

let config = {
  env: process.env.REACT_APP_ENVIRONMENT
}

if (config.env === 'Development') {
  config.api = `${process.env.REACT_APP_DEV_API_HOST}:${process.env.REACT_APP_DEV_API_PORT}`;
  config.clientHost = `${process.env.REACT_APP_DEV_CLIENT_HOST}:${process.env.REACT_APP_DEV_CLIENT_PORT}`;  
  config.emailServiceID = process.env.REACT_APP_DEV_EMAIL_SERVICE_ID;
  config.emailTemplateID = process.env.REACT_APP_DEV_EMAIL_TEMPLATE_ID;
  config.emailPublicKey = process.env.REACT_APP_DEV_EMAIL_PUBLIC_KEY

};

if (config.env === 'Production') {
  config.api = process.env.REACT_APP_DEV_EMAIL_SERVICE_ID;
  config.clientHost = process.env.REACT_APP_PROD_CLIENT_HOST;
  config.emailServiceID = process.env.REACT_APP_PROD_EMAIL_SERVICE_ID;
  config.emailTemplateID = process.env.REACT_APP_PROD_EMAIL_TEMPLATE_ID;
  config.emailPublicKey = process.env.REACT_APP_PROD_EMAIL_PUBLIC_KEY
};

export default config