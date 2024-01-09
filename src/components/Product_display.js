import React , {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { product_details } from '../product_data';
export default function Product_display() {
  useEffect(() => {
    window.scrollTo(0, 0);

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
      const externalScript = document.getElementById("external");
      if (externalScript) {
        document.body.removeChild(externalScript);
      }
    };
  }, []);
  return (
    <>
    
    <Helmet>
        
      </Helmet>
      <section className="hero-wrap hero-wrap-2 " style={{ backgroundImage: 'url(images/banner-2.jpg)', height: '420px' }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <h1 className="mb-3 bread" style={{color:'white'}}>Products</h1>
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Products<i className="ion-ios-arrow-forward"></i></span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/pulley-casting.jpg)', marginTop: '50px' }}></div>
            </div>
            <div className="col-md-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4">Casting Pulley</h2>
                  <p style={{ textAlign: 'justify' }}>
                  Casting pulleys are made from materials like gray iron, ductile iron, or cast carbon steel. The sand casting method is often used to create pulleys. After casting, the pulley groove is created using NC lathe machining.
                  <br/>
                  Cast iron pulleys are strong and dense, and can withstand high speeds and heavy loads. The rims of cast iron pulleys often have a slight convexity, called crowning. This prevents the belt from slipping axially during operation
                  </p>                
                  <p>
                  Pulleys can be divided into four types: Casting pulley, Forging pulley, Welding pulley, Nylon pulley.
                  </p>
                  <p>
                  Ordinary cranes typically use cast iron, cast steel, and rolled. Port cranes usually use rolled pulley, forged pulley, and nylon pulley.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}
