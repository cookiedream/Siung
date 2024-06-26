import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleReCaptchaProvider
    reCaptchaKey="6LdRG7YjAAAAACSR25ig06t37JzztK3WaBkiW00Q"
    useRecaptchaNet="false">

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleReCaptchaProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
