import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Home from './home.js';
import Page from './page.js';
import FactContentPage from './components/factpage.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Register from './components/register.js';
import Login from './components/login.js';
// import ProfilePage from './components/profile.js';
// import MockTestPage from './components/mocktest.js';
import ForgetPassword from './components/forgetpage.js';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page' element={<Page />} />
          <Route path='/page/:pageName' element={<FactContentPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/install' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/profile' element={<ProfilePage />} />
          <Route path='/mock' element={<MockTestPage />} /> */}
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
