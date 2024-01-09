import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Facilities from './components/Facilities'
import Business from './components/Business'
import Product_display from './components/Product_display';
function App() {
  useEffect(() => {
    const loadExternalScript = () => {
      const externalScript = document.createElement("script");
      externalScript.id = "external";
      externalScript.async = true;
      externalScript.type = "text/javascript";
      externalScript.setAttribute("crossorigin", "anonymous");
      externalScript.src = 'js/main.js';

      externalScript.onload = () => {
        console.log('External script loaded successfully');
      };

      externalScript.onerror = () => {
        console.error('Error loading external script');
      };

      document.body.appendChild(externalScript);
    };

    loadExternalScript();
    return () => {
     
    };
  }, []);

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<AboutUs></AboutUs>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/business' element={<Business></Business>}></Route>
      <Route path='/facilites' element={<Facilities></Facilities>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
    {/* <Product_display></Product_display> */}
    <Footer></Footer>
    </>
  );
}

export default App;
