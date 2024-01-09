import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="ftco-footer bg-bottom" style={{backgroundImage:'url(images/footer-bg.jpg)'}}>
		<div className="container">
			<div className="row mb-5">
				<div className="col-md-6">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Metrics Engineers</h2>
						<p  style={{textAlign:'justify'}}>
							Metrics Engineers is a manufacturing company based in Ahmedbabad, Gujarat, India.
							Small in size, but with big plans, this company's main two objectives were to bring top
							class products and technical know-how to indian industries through imports, and to stimulate
							Indian exports and give it the impetus it required.
						</p>
						<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
							<li className="ftco-animate"><a href="https://www.linkedin.com/in/nirav-patel-59555b11b/"><span
										className="icon-linkedin"></span></a></li>
							<li className="ftco-animate"><a href="https://wa.me/9429208085"><span
										className="icon-whatsapp"></span></a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-6">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Address</h2>
						<div className="block-23 mb-3">
							<ul>
								<li><span className="icon icon-map-marker"></span><span className="text" style={{textAlign:'justify'}}> 
										17- ShivKrupa Ind Estate <br/>
										Near CISF Camp,Opp-Icon Estate ,
										<br/> Kathwada , Ahmedbabad-382430 , Gujarat  , India</span></li>
								<li><span className="icon icon-phone"></span><span className="text">+91
								9429208085</span></li>
								<li><a href="mailto:>metricsengineees1221@gmail.com"><span className="icon icon-envelope"></span><span
											className="text">metricsengineees1221@gmail.com</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 text-center">

					<p>
					<img src="images/reactjs.png" height="50px" width="60px" alt='Sorry' />
						<a>This Website is made by Vishwas Chhablani Using ReactJs Technology</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
    </>
  );
}

export default Footer;
