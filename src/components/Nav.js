import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Nav = () => {
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
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html" style={{backgroundColor:'transparent'}}><img src="images/metrics_logo.png" height="50px" width="200px" alt='sorry' /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                  
                    <div className="collapse navbar-collapse " id="ftco-nav">
                        <ul className="navbar-nav ml-auto ">
                            <li  className="nav-link" style={{fontSize:'16px' , color:'white'}}><Link className='nav-link' to="/">Home</Link></li>
                            <li  className="nav-link" style={{fontSize:'16px'}}><Link className='nav-link' to="about">About Us</Link></li>
                            <li  className="nav-link" style={{fontSize:'16px'}}><Link className='nav-link' to="product">Products</Link></li>
                            <li  className="nav-link" style={{fontSize:'16px'}}><Link className='nav-link' to="facilites">Facilities & Technologies</Link></li>
                            <li  className="nav-link" style={{fontSize:'16px'}}><Link className='nav-link' to="contact">Contact Us</Link></li>
                            <li  className="nav-link" style={{fontSize:'16px',backgroundColor:'orange'}}><a className='nav-link' href="Files/Metrics_brochure.pdf" style={{color:'white'}}>Download Brochure</a></li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
            
        </>
    );
}

export default Nav;
