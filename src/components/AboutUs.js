import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

export default function AboutUs() {
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
            <h1 className="mb-3 bread">About Us</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>About Us <i className="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>
            <section className="ftco-section services-section bg-light ftco-counter" id="section-counter">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-7 order-md-last heading-section pl-md-5 ftco-animate">
                            <h2 className="mb-4" style={{ color: 'orange' }}>Core Values</h2>
                            <p style={{ textAlign: 'justify' }}>
                            We,<b> Metrics Engineers</b> are a newly ventured firm
established by a father - son duo having a vast
experience of 40 years of father and entrepreneurial spirit of son.
<br/><b>Our Aim</b> is to provide mechanical job work service to our clients at a very
competitive rate. we provide there service using CNC , VMC and HMC machines 
to provide precise job work.
<br/>We are already providing service to <b>25 reputed clients</b> across Gujrat. 
There clients are from various different industries like Mechanical, Electrical, 
Pharma, Chemical, Construction, etc.
We are pioneer in providing job work services on the material like<b> SS, MS,
Casting , CI , Brass , Aluminium and Copper</b>
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img src="images/key_values.png" height="300px" width="350px" alt='Sorry' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-counter img" id="section-counter">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-12 pl-md-5 py-5">
                            <div className="row justify-content-start pb-3">
                                <div className="col-md-12 heading-section ftco-animate">
                                    <h2 className="mb-4" style={{ textAlign: 'center' }}>Founded in 2020, the organization is headed by Mr. Nirav Patel</h2>
                                    <p style={{ textAlign: 'center' }}>
                                        One of the most commonly used Steel Products in construction is M S Angles and we specialize in supplying Mild Steel Angles. We Manufacture Equal
                                        Angles which are available in different thickness and dimensions.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 d-flex">
                            <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/p_angles.jpg)', marginTop: '50px', marginBottom: '50px' }}></div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="ftco-section services-section bg-light ftco-counter" id="section-counter">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-7 order-md-last heading-section pl-md-5 ftco-animate">
                            <h2 className="mb-4" style={{ color: 'orange' }}>MD & Founder's Speech</h2>
                            <p style={{ textAlign: 'justify' }}>
                                At the outset, let me thank you for your interest shown in the Products offered by our Group. Since the very beginning, at Metrics Engineers, it has been our constant endeavor to be at the forefront of delivering superlative performance. Instead of resting on our laurels of past successes, we always look out for new challenges and goals to be accomplished.
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                            While my inspiration comes from the saying, Be a Leader or Be with a Leader which has been ingrained in my mind since childhood, I have always professed that one should believe in oneself to achieve the impossible. I strongly believe that if you work steadfastly towards a goal, the whole universe shall conspire together to help you achieve your goal.
                            </p>
                            <div className="row">
                                

                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src="images/nirav_patel.png" height="450px" width="400px" alt='Sorry' style={{marginLeft:'0px;', display:'flex', alignItems:'center'}}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
