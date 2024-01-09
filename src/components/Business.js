import { useEffect } from 'react';
import React  from 'react'
import { Helmet } from 'react-helmet'

export default function Business() {
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
        <script src="js/main.js" type="text/javascript" />
      </Helmet>
        <section className="hero-wrap hero-wrap-2 " style={{backgroundImage: 'url(images/banner-2.jpg)' , height:'420px'}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" style={{opacity:'0'}}>
          <div className="col-md-9 ftco-animate pb-5 text-center">
            <h1 className="mb-3 bread">Business</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Business<i className="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>
    <section class="ftco-counter img" id="section-counter">
    	<div class="container">
    		<div class="row d-flex">
    			<div class="col-md-6 d-flex">
    				<div class="img d-flex align-self-stretch" style={{backgroundImage:'url(images/business.png)' , marginTop: '50px' , height:'500px'}}></div>
    			</div>
    			<div class="col-md-6 pl-md-5 py-5">
    				<div class="row justify-content-start pb-3">
		          <div class="col-md-12 heading-section ftco-animate">
		            <h2 class="mb-4"> Plant Heading</h2>
		            <p style={{textAlign:'justify'}}>
                        Sponge Iron has become the preferred raw material for secondary steel production in India. With the availability of abundant raw material in India, the production of sponge is set to multiply over the years. Global market trends predict a steady upward movement. The Group has consolidated its position to meet the growing demand.
                </p>
                <p style={{textAlign:'justify'}}>
                    In its further step towards the use of in-house resources, the company has setup its own Sponge Iron manufacturing unit in the year 2007. Wherein the plant has been set up with the 2x100 TPD Kilns capable of manufacturing a total annual capacity of around 66000 M.T. The company is using higher grade Raw Material to produce the graded Sponge Iron.
                </p>
                <p style={{textAlign:'justify'}}>
                    We are a well-known sponge iron agent, presenting sponge iron. We bring sponge iron which is universally praised for its superior quality. Sponge iron is mainly used as a raw material for special steel.
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
