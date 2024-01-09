import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
export default function Facilities() {
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
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate pb-5 text-center">
            <h1 className="mb-3 bread">Facilities & Technologies</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Products<i className="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-counter img" id="section-counter">
    	<div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 d-flex">
    				<div className="img d-flex align-self-stretch" style={{backgroundImage:'url(images/SPONGE_PLANT.jpg)' , marginTop: '50px'}}></div>
    			</div>
    			<div className="col-md-6 pl-md-5 py-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		            <h2 className="mb-4"> Plant</h2>
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
    <section className="ftco-counter img" id="section-counter">
    	<div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 pl-md-5 py-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		            <h2 className="mb-4">Plant</h2>
		            <p style={{textAlign:'justify'}}>
                        An induction furnace uses a combination of electrical resistance and hysteresis losses to heat metal. The furnace heats the metal by exposing it to the magnetic field around a coil-carrying alternating current. These enclosed structures use induction heating sources to produce heat for industrial purposes. In order to withstand long-term use, induction furnaces are made with a variety of heat-resistant (refractory) elements to. The enclosed space within the furnace holds the material being heated until the desired temperature is reached.
                </p>
                <p style={{textAlign:'justify' , fontWeight: 'bold'}}>
                    The process for manufacturing steel may be broadly divided into the following stages:
                    <ol>
                        <li>
                            Melting : Through Induction Furnace.
                        </li>
                        <li>
                            Quality : Through Ladle Refining Furnace
                        </li>
                        <li>
                            Casting : Through Continuous Casting Machine
                        </li>
                    </ol>
                </p>
                
		          </div>
		        </div>   		
	        </div>
          <div className="col-md-6 d-flex">
    				<div className="img d-flex align-self-stretch" style={{backgroundImage:'url(images/induction_furnace.jpg)' , marginTop: '50px' , marginBottom:'50px'}}></div>
    			</div>
        </div>
    	</div>
    </section>
    <section className="ftco-counter img" id="section-counter">
    	<div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 d-flex">
    				<div className="img d-flex align-self-stretch" style={{backgroundImage:'url(images/structure_plant.jpg)' , marginTop: '50px'}}></div>
    			</div>
    			<div className="col-md-6 pl-md-5 py-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		            <h2 className="mb-4"> Plant</h2>
		            <p style={{textAlign:'justify'}}>
                        Metal industries are the indispensable part of an economy and form the solid foundation of industrial development of any economy. The mining Industry in India encompasses exploration of new minerals and mines and production of mineral resources from the various mines already in operation.</p>
                <p>
                    Metal mining is the process of the means to haul out metal deposits from underneath the crust of the earth, for the metals that are deposited at the top of the earths crust are very little or merely don't exist. Hauling out of the metal deposits happens with the lot of novel techniques that keeps brimming up every now and then. We will churn out the technique that are employed and even to certain extent we dig out how the metal was hauled out initially.
                </p>
		          </div>
		        </div>
		    		
	        </div>
        </div>
    	</div>
    </section>
    <section className="ftco-counter img" id="section-counter">
    	<div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 pl-md-5 py-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		            <h2 className="mb-4">Plant</h2>
		            <p style={{textAlign:'justify'}}>
                        Metal industries are the indispensable part of an economy and form the solid foundation of industrial development of any economy. The mining Industry in India encompasses exploration of new minerals and mines and production of mineral resources from the various mines already in operation.
                    </p>
                <p style={{textAlign:'justify'}}>
                    Metal mining is the process of the means to haul out metal deposits from underneath the crust of the earth, for the metals that are deposited at the top of the earths crust are very little or merely don't exist. Hauling out of the metal deposits happens with the lot of novel techniques that keeps brimming up every now and then. We will churn out the technique that are employed and even to certain extent we dig out how the metal was hauled out initially.
                </p>
		          </div>
		        </div>   		
	        </div>
          <div className="col-md-6 d-flex">
    				<div className="img d-flex align-self-stretch" style={{backgroundImage:'url(images/TMT_PLANT.jpg)' , marginTop: '50px' , marginBottom: '50px'}}></div>
    			</div>
        </div>
    	</div>
    </section>

    </>
  )
}
