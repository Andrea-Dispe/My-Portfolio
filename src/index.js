import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import NotificationProvider from './components/Notifications/NotificationProvider';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import './index.css';
import App from './App';
import HttpApi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icons.min.css';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'it'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'navigator', 'queryString', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage', 'sessionStorage']
    },
    backend: {
      loadPath: 'locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false
    },

    interpolation: {
      escapeValue: false
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
);

reportWebVitals();
