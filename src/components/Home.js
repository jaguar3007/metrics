import React, { useEffect  } from 'react';
import "animate.css"
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
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
	<div className="hero-wrap js-fullheight" style={{backgroundImage:'url(images/banner-4.jpg)'}}
		data-stellar-background-ratio="0.5">
		<div className="overlay"></div>
		<div className="container">
			<div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
				data-scrollax-parent="true">
				<div className="col-md-9 text text-center ">
					<h1 style={{backgroundColor:'white',opacity:'0.5',color:'black',fontWeight:'bolder',padding:"10px",borderRadius:"1em"}}>Metrics Engineers</h1>
					{/* <p>Humari Pehchaan , Mazboot Nirmaan</p> */}
				</div>
			</div>
		</div>
	</div>
	<section className="ftco-section services-section bg-light ftco-counter" id="section-counter">
		<div className="container">
			<div className="row d-flex">
				<div className="col-md-6 order-md-last heading-section pl-md-5 ftco-animate">
					<h2 className="mb-4" style={{color:'orange'}}>Our Mission</h2>
					<p style={{textAlign:'justify'}}>
						To be innovative and contribute to the "Make In India" mission by providing novel solutions with great precision in the field of machining, you can adopt a strategic approach that encompasses various aspects of innovation, technology, and precision manufacturing</p>
					<div className="row">
						<div className="col-md-6 justify-content-center counter-wrap ftco-animate">
							<div className="block-18 text-center mb-4">
								<div className="text">
									<strong className='number'>100+</strong>
									<span>Clients </span>
								</div>
							</div>
						</div>
						<div className="col-md-6 justify-content-center counter-wrap fadeInUp ftco-animated">
							<div className="block-18 text-center mb-4">
								<div className="text">
									<strong className="number">1000 Parts</strong>
									<span>Production Per Anum</span>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="col-md-6">
						<img src="images/download.jpeg" height="500px" width="400px" alt='sorry'/>
				</div>
			</div>
		</div>
	</section>
	<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center pb-4">
				<div className="col-md-12 heading-section text-center ftco-animate">
					<Link to="product">
						<h2 className="mb-4">Our Products>></h2>
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="project-destination">
						<div className="img" style={{backgroundImage:'url(images/pulley-casting.jpg)'}}>
							<div className="text">
								<button>Casting Pulley</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="project-destination">
						<div className="img" style={{backgroundImage:'url(images/cast-iron-v-belt-pulley.jpg)'}}>
							<div className="text">
								<span>Casting V belt Pulley</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="project-destination">
						<div className="img" style={{backgroundImage:'url(images/Knurling_Parts.jpeg)'}}>
							<div className="text">
								<h3>Knurling Parts</h3>
								<span>Knurling Parts</span>
							</div>
						</div>
					</div>
				</div>
				
					<div className="col-md-4 mt-5">
						<div className="project-destination">
							<div className="img" style={{backgroundImage:'url(images/Knurled_nuts.jpg)'}}>
								<div className="text">
									<h3>Round Bars</h3>
									<span>Knurling Nuts</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-5">
						<div className="project-destination">
							<div className="img" style={{backgroundImage:'url(images/brass_parts.jpeg)'}}>
								<div className="text">
									<h3>Brass Parts</h3>
									<span>Brass Parts</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-5">
						<div className="project-destination">
							<div className="img" style={{backgroundImage:'url(images/spray-ball.jpg)'}}>
								<div className="text">
									<h3>Spray Ball </h3>
									<span>Spray Ball</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-4 mt-5">
						<div className="project-destination">
							<div className="img"   style={{backgroundImage:'url(images/sms_union.jpeg)'}}>
								<div className="text">
									<h3>SMS Union </h3>
									<span>SMS Union</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-5">
						<div className="project-destination">
							<div className="img" style={{backgroundImage:'url(images/flange.jpg)'}}>
								<div className="text">
									<h3>Flange </h3>
									<span>Flange</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
			</div>
		</div>
	</section>
	<section>
		<div className="container">
			<div className="row justify-content-center pb-4">
				<div className="col-md-12 heading-section text-center ftco-animate">
					<Link to="facilites">
						<h2 className="mb-4">Failities and Technologies>></h2>
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-md-3">
					<div className="project-destination">
						<div className="img" style={{backgroundImage:'url(images/SPONGE_PLANT.jpg)'}}
						>
							<div className="text">
								<span>Sponge Plant</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="project-destination">
						<div className="img" style={{backgroundImage:'url(images/induction_furnace.jpg)'}}>
							<div className="text">
								<span>Induction Furnace</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="project-destination">
						<div className="img" style={{backgroundImage:'url(images/structure_plant.jpg)'}}
						>
							<div className="text">

								<span>Structure Plant</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="project-destination">
						<div className="img" style={{backgroundImage:'url(images/TMT_PLANT.jpg)'}}
						>
							<div className="text">
								<span>TMT Plant</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>



	<section className="ftco-section services-section bg-light ftco-counter" id="section-counter">
		<div className="container">
			<div className="row d-flex">
				<div className="col-md-6 order-md-last heading-section pl-md-5 ftco-animate ">
					<h2 className="mb-4">Key Values</h2>
					<p style={{textAlign:'justify'}}>Here at Metrics Engineers, our key values of safety, quality and productivity are
						the foundation of our business while character and integrity are the pillars of our success. The
						company strives to hold itself to the highest ethical standards in order to serve the long-term
						best interests of all of our stakeholders.</p>

				</div>
				<div className="col-md-6">
					<div className="row">
						<img src="images/key_values.png" height="300px" width="400px" alt='sorry'/>
					</div>
				</div>
			</div>
		</div>
	</section>

	
	{/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px">
			<circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
			<circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10"
				stroke="#F96D00" />
		</svg></div>       */}
    </>
  );
}

export default Home;
