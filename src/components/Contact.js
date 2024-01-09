import React , {useRef} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact() {
  window.scrollTo(0, 0);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_llkcy8o', 'template_4tz7ga6', form.current, 'KunkzAsZiwOFurWKd')
      .then((result) => {
          console.log(result.text);
          alert("Mail Sent Successfully")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
        <section className="hero-wrap hero-wrap-2 " style={{ backgroundImage: 'url(images/banner-2.jpg)', height: '420px' }} data-stellar-background-ratio="0.5">
        
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <h1 className="mb-3 bread">Contact US</h1>
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Contact Us<i className="ion-ios-arrow-forward"></i></span></p>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section ftco-no-pb contact-section">
      <div class="container">
        <div class="row d-flex contact-info">
          <div class="col-md-4 d-flex">
          	<div class="align-self-stretch box p-4 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-map-signs"></span>
          		</div>
          		<h3 class="mb-2">Address</h3>
	            <p style={{color: "black"}}>17- ShivKrupa Ind Estate <br/>
										Near CISF Camp,Opp-Icon Estate ,
										<br/> Kathwada , Ahmedbabad-382430 , Gujarat  , India</p>
	          </div>
          </div>
          <div class="col-md-4 d-flex">
          	<div class="align-self-stretch box p-4 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-phone2"></span>
          		</div>
          		<h3 class="mb-2">Contact Number</h3>
	            <p><a href="tel://1234567920">+91 9429208085</a></p>
	          </div>
          </div>
          <div class="col-md-4 d-flex">
          	<div class="align-self-stretch box p-4 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-paper-plane"></span>
          		</div>
          		<h3 class="mb-2">Email Address</h3>
	            <p><a href="mailto:info@yoursite.com">metricsengineees1221@gmail.com</a></p>
	          </div>
          </div>
        </div>
      </div>
    </section>
			
		<section class="ftco-section contact-section">
      <div class="container">
        <div class="row block-9">
          
          <div class="col-md-6 order-md-last d-flex">
          <form action="mailto:chhablanivishwas@gmail.com" ref={form} onSubmit={sendEmail} class="bg-light p-5 contact-form was-validated">
              <div class="mb-3">
                <label for="uname" class="form-label">Full Name:</label>
                <input type="text" class="form-control" id="uname" placeholder="Enter Full Name" name="uname" required/>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div class="mb-3">
                <label for="pwd" class="form-label">Company Name</label>
                <input type="text" class="form-control" id="cname" placeholder="Enter Company Name" name="cname" required/>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div class="mb-3">
                <label for="pwd" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="pno" placeholder="Enter phone number" name="pno" required/>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div class="mb-3">
                <label for="pwd" class="form-label">Email - Address</label>
                <input type="email" class="form-control" id="mail" placeholder="Enter EMail Address" name="mail" required/>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div class="mb-3">
                <label for="pwd" class="form-label">Message</label>
                <textarea class="form-control" id="mess" placeholder="Please Enter the message" name="mess" rows="7" required></textarea>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-md-6 d-flex">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9376128327563!2d72.6692593752117!3d23.02606277917142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e872bd18259b9%3A0xe2240181afe9cd07!2sMetric%20Engineers!5e0!3m2!1sen!2sin!4v1703834643453!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
      </div>
    </section>
    </>
  )
}
