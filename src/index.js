import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './LandingPage/Home/HomePage';
import SignupPage from './LandingPage/SignUp/SignupPage'
import AboutPage from './LandingPage/About/AboutPage';
import ProductPage from './LandingPage/Product/ProductPage';
import PricingPage from './LandingPage/Pricing/PricingPage';
import SupportPage from './LandingPage/Support/SupportPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
    </Routes>
  </BrowserRouter>
  
  
);

