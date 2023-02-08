import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import Navigation from './Component/Navigation';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ClassBaseLifeCycle from './Pages/ClassBaseLifeCycleHooks/ClassBaseLifeCycle';
import 'bootstrap/dist/css/bootstrap.min.css';
const configure= (

  <Router>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/classbaselifecyclehooks' element={<ClassBaseLifeCycle/>}/>

      
    </Routes>
  </Router>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  configure
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
