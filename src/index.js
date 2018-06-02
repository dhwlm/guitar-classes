import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import ScrollToTop from './components/ScrollToTop'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
  , document.getElementById('root'));
  registerServiceWorker();
