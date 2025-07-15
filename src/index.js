import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Home from './home.js';
import Page from './page.js';
import FactContentPage from './components/factpage.js';
import About from './components/about.js';
import Contact from './components/contact.js';
// import Register from './components/register.js';
// import Login from './components/login.js';
// import ProfilePage from './components/profile.js';
// import MockTestPage from './components/mocktest.js';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ import HelmetProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ Wrap your entire app here */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page' element={<Page />} />
          <Route path='/page/:pageName' element={<FactContentPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/mock' element={<MockTestPage />} /> */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
