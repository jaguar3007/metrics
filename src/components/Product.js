import React , {useEffect} from 'react'
import { Helmet } from 'react-helmet'
export default function Product() {
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
      <section className="ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4">Casting V Belt Pulley</h2>
                  <p style={{ textAlign: 'justify' }}>
                  A casting V belt pulley is a mechanical device that transmits power between two rotating shafts. It is a crucial component used in various industrial applications, such as manufacturing, agriculture, automotive, and construction.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  V-belt pulleys are made from lighter materials such as steel, aluminum, or plastic, which are better suited for high-speed applications where weight is a concern.
                  <br/>Here are some types of V-belts:
                    <ul>
                      <li>Light Duty: Suitable for light-duty applications normally using fractional horsepower motors</li>
                      <li>Classical Heavy Duty: Wide range of sizes</li>
                      <li>Molded Cogged: Cogs allow the use of smaller diameter pulleys and provide heat dissipation</li>
                    </ul>
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/cast-iron-v-belt-pulley.jpg)', marginTop: '50px', marginBottom: '50px' }}></div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/Knurling_Parts.jpeg)', marginTop: '50px' }}></div>
            </div>
            <div className="col-md-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4">Knurling Parts</h2>
                  <p style={{ textAlign: 'justify' }}>
                  Knurling is a manufacturing process that creates a pattern of straight, angled, or crossed lines on the surface of a part. It's usually performed on a lathe and is mainly used on round or cylindrical parts.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Knurling can improve the aesthetic appeal, durability, and grip of a part. It can also increase surface friction.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  There are three common types of knurling patterns: 

                    <ul>
                      <li>Straight</li>
                      <li>Diagonal: (left or right-hand)</li>
                      <li>Diamond</li>
                    </ul>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Diamond knurling involves intersecting diagonal lines to create multiple diamond-shaped protrusions. It's often used to enhance grip.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Knurling is mostly performed on round or cylindrical parts, but in some cases, it's performed on flat surfaces as well. 

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
                  <h2 className="mb-4">Knurling Nuts</h2>
                  <p style={{ textAlign: 'justify' }}>
                  A knurled nut is a nut with a knurled exterior surface. The knurling provides a better grip and prevents the nut from loosening as easily. Knurled nuts can be fastened by hand.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Knurled nuts can be used as thumb nuts, which are used for tightening by hand, or insertion nuts, which secure the nut into a handle or cover.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Knurled thumb screws are a type of screw used in various industrial applications. They are distinguishable by their knurled side designs and over-sized heads. These screws can be tightened or loosened manually.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Thumb screws and nuts are generally used within computer or electronic equipment or hardware.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/Knurled_nuts.jpg)', marginTop: '50px', marginBottom: '50px' }}></div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/brass_parts.jpeg)', marginTop: '50px' }}></div>
            </div>
            <div className="col-md-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4">Brass Parts</h2>
                  <p style={{ textAlign: 'justify' }}>
                  Brass is a strong, corrosion-resistant alloy made of copper and zinc. It's often used in applications that require corrosion resistance and low friction, such as:
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Locks, Hinges, Gears, Bearings, Ammunition casings, Zippers, Plumbing, Hose couplings, Valves, Electrical plugs and sockets.
                  </p>
                  <p>Brass is also used in musical instruments like horns and bells. </p>
                  <p style={{ textAlign: 'justify' }}>
                  Here are some things to consider when buying brass parts: 
                  <ul>
                    <li>Precision: Check the level of precision guaranteed by the manufacturer and supplier.</li>
                    <li>Research: Learn about the instrument you're buying. You can research online or talk to teachers, band directors, and other students.</li>
                  </ul>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Brass is generally bright yellow-golden in color. The price of brass is determined by the ratio of copper and zinc in its composition. The higher the copper content, the more expensive the brass will be.
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
                  <h2 className="mb-4">Spary Ball</h2>
                  <p style={{ textAlign: 'justify' }}>
                  A spray ball is a device that cleans the insides of tanks and storage vessels. It's a spherical ball with many holes that spray high-pressure water in all directions. The spray ball is powered by the cleaning fluid, and it has only one moving part.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Spray balls are used in the food and pharmaceutical industries to clean tanks and piping. The process of cleaning tanks with high-velocity jets of hot water and/or chemicals is called Clean-In-Place (CIP).
                  </p>
                  <p>
                  When choosing a spray ball, you can consider factors like:
                    <ul>
                      <li>Soil type</li>
                      <li>Available flow rates</li>
                      <li>The size and makeup of the vessel to clean</li>
                      <li>Available ports or connection types</li>
                    </ul>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  Spray balls come in a variety of sizes, flow rates, and configurations. Rotary spray balls are a versatile tank cleaning system that can be inserted through openings as small as 17 mm. For smaller tanks, they can improve water efficiency over static nozzles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/spray-ball.jpg)', marginTop: '50px', marginBottom: '50px' }}></div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/sms_union.jpeg)', marginTop: '50px' }}></div>
            </div>
            <div className="col-md-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4">SMS Union</h2>
                  <p style={{ textAlign: 'justify' }}>
                  SMS unions, or Swedish Manufacturing Standard 1145 unions, are hygienic fittings that have a captive seal design. They are made up of a round slotted nut, weld liner, and weld male with an L style seal. 
                  </p>
                  <p>
                  SMS unions are also known as SMS Sanitary Unions. They are made up of four components:
                    <ul>
                      <li>A threaded male weld ferrule and female liner weld ferrule</li>
                      <li>A round slotted nut</li>
                      <li>A square cross-section gasket</li>
                    </ul>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  SMS unions are popular in sanitary process systems. Their compact structure makes them suitable for use on permanently fitted sections of pipework.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  SMS unions can be identified by their round slotted nut and square section joint ring.
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
                  <h2 className="mb-4">Flange</h2>
                  <p style={{ textAlign: 'justify' }}>
                  A flange is a protruding rim, lip, or ring that can be internal or external. Flanges are used to increase strength, stabilize and guide movements, and make it easier to attach or transfer force with another object.
                  </p>
                  <p>
                    Flanges are often attached using bolts in a bolt circle pattern. They are a method of connecting pipes, valves, pumps, and other equipment to form a piping system. Flanges are usually welded or screwed.
                 </p>
                 <p>
                 Types of flanges include:
                 <ul>
                  <li>Slip-on flange</li>
                  <li>Threaded flanges</li>
                  <li>Weld Neck flange</li>
                  <li>Socket weld flanges</li>
                  <li>Blind flanges</li>
                  <li>Lap joint flange</li>
                  <li>Long neck weld flanges</li>
                 </ul>
                 </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="img d-flex align-self-stretch" style={{ backgroundImage: 'url(images/flange.jpg)', marginTop: '50px', marginBottom: '50px' }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
