'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { useState } from 'react';
// import '../styles/productdetails.css';
import '../styles/productdetails.css'
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from '../components/Footer';
import Instagram from '../../../public/images/instagram-latest.svg';
import Google from '../../../public/images/google-latest.svg';
import Call from '../../../public/images/phone-latest.svg';



const images = {
  front: '/images/BlueCycleProductDetailsFront.jpg',
  back: '/images/BlueCycleProductDetailsAngleBlur.jpg',
  middle: '/images/BlueCycleProductDetailsFrontLatest.jpg',
  battery:'/images/BlueCycleProductDetailsBackBlur.jpg'
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState('middle');
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    router.push('/rental'); // navigate to your cart page
    alert('sbhs')
  };

  const documentsForRent = [
    'Name',
    'Phone Number',
    'Address & Unit Number',
    'Email',
    'Valid Visa Grant',
    'Passport',
  ];

  const importantInformation = [
    'Delivery bag',
    'Locks (2)',
    'Helmet',
    'Charger',
    'Basic maintenance',
  ];

  const handleClick = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Ensures Bootstrap's JS is loaded once
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>Cali Cruiser | Electric Bike</title>
        <meta name="description" content="Buy Cali Cruiser – a powerful all-terrain mid-drive electric bicycle for both trails and city roads. Available now!" />
        <meta name="keywords" content="electric bike, e-bike, Cali Cruiser, green transport" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/product" />
      </Head>

      <Header />
      <div className="container py-5">
        <div className="row align-items-start">
          {/* Left Image */}
          <div className="col-xl-7 mb-4 only-mobile-center">
            <Image src={images[selectedColor]} alt="Cali Cruiser" width={600} height={600} className='set-image-bikes'/>

            <div className="d-sm-flex thumbnail-gallery mt-3 gap-3">
              {Object.keys(images).map(color => (
                <Image
                  key={color}
                  src={images[color]}
                  alt={color}
                  width={138}
                  height={120}
                  // className={`thumb me-4 me-sm-0 mt-3 mt-sm-0 ${selectedColor === color ? 'border border-dark' : ''}`}
                  className={`thumb ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Right Info */}
          <div className="col-xl-5">
            <h1 className="text-orange fw-bold">E-bike 8-10h</h1>
            {/* <small className="text-muted" style={{fontSize:'20px'}}>★ ★ ★ ☆ ☆ (3 Reviews)</small> */}
            <p className="mt-3">
              Take to the streets or trails with this powerful all-terrain mid-drive electric bicycle. The City Surfer delivers unmatched performance you won’t find anywhere else.
            </p>

            <div className="fs-4 fw-bold">PRICE : $65 AUD <del className="text-muted fs-4 ms-2">$70 AUD</del></div>
            <div className="mt-3">
  <h5 className="fw-bold text-orange mb-3">Specifications</h5>
  <ul className="list-unstyled">
    <li className="mb-3">
      <strong>Speed Modes:</strong>
      <ul className="ps-3 mt-1">
        <li>Gear 1: 25 km/h</li>
        <li>Gear 2: 35 km/h</li>
        <li>Gear 3: 45 km/h</li>
      </ul>
    </li>

    <li className="mb-3">
      <strong>Display:</strong> Multifunctional LED display, clearly visible under sunlight.
    </li>

    <li className="mb-3">
      <strong>Lighting:</strong>
      <ul className="ps-3 mt-1">
        <li>Front high-brightness headlight with wide aperture</li>
        <li>Rear light with laser projection for night safety</li>
        {/* <li>Front and rear indicators</li>
        <li>Breathing light strips on frame and rear rack</li> */}
      </ul>
    </li>

    <li className="mb-3">
      <strong>Phone Holder:</strong> Comes with USB port (2.1A output) — no need for a power bank.
    </li>

    <li className="mb-3">
      <strong>Safety System:</strong>
      <ul className="ps-3 mt-1">
        <li>Smart anti-theft remote (alarm + keyless start)</li>
        <li>NFC smart unlock feature</li>
      </ul>
    </li>

    <li className="mb-3">
      <strong>Braking System:</strong> Hydraulic disc brakes (optimized for high power engine).
    </li>
    <li className="mb-3">
      <strong>Battery Hours:</strong> 8-10 hrs.
    </li>
    <li className="mb-3">
      <strong>Battery Life:</strong> 48V 70A.
    </li>
  </ul>
</div>


            {/* <div className="p-3 rounded mt-3">
              <label className="fw-semibold">Color: <span className="text-capitalize">{selectedColor}</span></label>
              <div className="d-flex gap-3 mt-2">
                <button className={`color-swatch ${selectedColor === 'green' ? 'active' : ''}`} style={{ backgroundColor: 'green' }} onClick={() => setSelectedColor('green')}></button>
                <button className={`color-swatch ${selectedColor === 'red' ? 'active' : ''}`} style={{ backgroundColor: 'red' }} onClick={() => setSelectedColor('red')}></button>
                <button className={`color-swatch ${selectedColor === 'blue' ? 'active' : ''}`} style={{ backgroundColor: 'blue' }} onClick={() => setSelectedColor('blue')}></button>
              </div>
              <div className="mt-2"><a href="#" className="text-danger small">Clear</a></div>
            </div> */}
{/* <div class="mb-3 mt-4">
  <label htmlFor="batteryOption" class="form-label fw-bold">
    Battery Capacity Option <span class="text-danger">*</span>
  </label>
  <select class="form-select" id="batteryOption" required>
    <option selected disabled>Select</option>
    <option value="10Ah">10Ah</option>
    <option value="13Ah">13Ah</option>
    <option value="15Ah">15Ah</option>
  </select>
</div> */}

{/* <div class="mb-3">
  <label htmlFor="wheelSize" class="form-label fw-bold">
    Wheel Size <span class="text-danger">*</span>
  </label>
  <select class="form-select" id="wheelSize" required>
    <option selected disabled>Select</option>
    <option value="26in">26 inch</option>
    <option value="27.5in">27.5 inch</option>
    <option value="29in">29 inch</option>
  </select>
</div> */}

            <div className="mt-4 d-flex align-items-center gap-3">
{/*               
              <button
    className="btn px-3"
    style={{border:'1px solid #f7931e',color:'#f7931e'}}
    onClick={() => setQuantity(prev => prev + 1)}
  >
   
    +
  </button>

  <div className="px-3 py-2 border rounded text-center ">
    {quantity}
  </div>

  <button
    className="btn px-3"
    style={{border:'1px solid #f7931e',color:'#f7931e'}}
    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
  >
    
    -
  </button> */}
              {/* <button className="btn" style={{background:'#f7931e'}} onClick={() =>router.push('/rental')}><i className="bi bi-bike text-light me-2" aria-label="bike"></i><span className='text-light'>Rental</span></button> */}
              <button 
        className="btn" 
        style={{ background: '#f7931e' }} 
        onClick={handleClick}
      >
        {/* <i className="bi bi-bike text-light me-2" aria-label="bike"></i> */}
        <span className="text-light">Rental</span>
      </button>

      {/* {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Social Media Links</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
                    <div>Instagram</div>
                  </div>
                  <div className="text-center">
                    <i className="bi bi-google" style={{ fontSize: '2rem' }}></i>
                    <div>Google</div>
                  </div>
                  <div className="text-center">
                    <i className="bi bi-telephone" style={{ fontSize: '2rem' }}></i>
                    <div>Call</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {/* {showModal && (
        <div 
          className="modal fade show" 
          style={{ display: 'block', opacity: 1, transition: 'opacity 0.3s ease' }} 
          aria-labelledby="exampleModalLabel" 
          aria-hidden="true"
        >
          <div 
            className="modal-dialog" 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              minHeight: '100vh' 
            }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Social Media Links</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
                    <div>Instagram</div>
                  </div>
                  <div className="text-center">
                    <i className="bi bi-google" style={{ fontSize: '2rem' }}></i>
                    <div>Google</div>
                  </div>
                  <div className="text-center">
                    <i className="bi bi-telephone" style={{ fontSize: '2rem' }}></i>
                    <div>Call</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {showModal && (
              <div
                className="modal fade show"
                style={{
                  display: 'block',
                  opacity: 1,
                  transition: 'opacity 0.3s ease',
                }}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                {/* Modal backdrop with blur effect */}
                <div
                  className="modal-backdrop fade show"
                  style={{
                    backdropFilter: 'blur(5px)',  // Apply blur effect to the background
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,  // Make sure the backdrop is behind the modal
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
                  }}
                ></div>
      
                <div
                  className="modal-dialog"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                  }}
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel" style={{color:'rgb(247, 147, 30)'}}>Social Media Links</h5>
                      <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      {/* Icons and Labels for Instagram, Google, and Call */}
                      <div className="d-flex justify-content-around">
                        <a target='_blank'  href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D" className="text-decoration-none text-center"><Image src={Instagram} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Instagram</span></a>
                  <a target='_blank' href="https://g.co/kgs/66Atysa" className="text-decoration-none text-center"><Image src={Google} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Google</span></a>
                  <a target='_blank' href="tel:+61422032961" className="text-decoration-none text-center" title="Call Us">
        <Image src={Call} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Call</span>
      </a>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{background:'#f7931e',color:'white'}} onClick={handleClose}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            )}


      
            </div>

            {/* <div className="mt-3">
              <span className="badge rounded-pill border border-dark text-dark">Urban</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container text-center py-4">
            {/* <h1 className="fw-bold" aria-current="page" href="#">Description</h1>
            <h2>Insurance offered</h2>
            <h3>Insurance only covers theft of battery.</h3>
            <h4>No accident compensation.</h4>
            <h4>No third party costs insured.</h4>
      <div style={{ padding: '20px' }}>
      <h2 className='mb-4' style={{ textAlign: 'center' }}>Rental Information</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>        
        <table style={{ width: '48%', margin: '0 10px', padding:'10px', textAlign: 'left',borderRadius:'10px' }}>
          <thead>
            <tr>
              <th>Documents for Rent</th>
            </tr>
          </thead>
          <tbody>
            {documentsForRent.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}. {item}</td>
              </tr>
            ))}
          </tbody>
        </table>        
        <table style={{ width: '48%', margin: '0 10px', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Our rental fee includes</th>
            </tr>
          </thead>
          <tbody>
            {importantInformation.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}. {item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> */}
    <div className="description-section">
  <h1 className="section-title" style={{color:'rgb(247,147,30)'}}>Description</h1>

  <div className="insurance-box">
    <h2 className="insurance-title">Insurance Offered</h2>
    <p className="positive">✔ Insurance only covers theft of battery.</p>
    <p className="negative">✘ No accident compensation.</p>
    <p className="negative">✘ No third-party costs insured.</p>
  </div>

  <h2 className="rental-title">Rental Information</h2>

  <div className="info-cards">
    <div className="info-card">
      <div className="info-header">Documents for Rent</div>
      <ul className="info-list">
        <li>1. Name</li>
        <li>2. Phone Number</li>
        <li>3. Address & Unit Number</li>
        <li>4. Email</li>
        <li>5. Valid Visa Grant</li>
        <li>6. Passport</li>
      </ul>
    </div>

    <div className="info-card">
      <div className="info-header">Our Rental Fee Includes</div>
      <ul className="info-list">
        <li>1. Delivery bag</li>
        <li>2. Locks(2)</li>
        <li>3. Helmet</li>
        <li>4. Charger</li>
        <li>5. Basic maintenance</li>
      </ul>
    </div>
  </div>
</div>

        {/* <p className="mt-3 fs-5 text-muted px-2 px-md-5">
         The MK220 new generation 20 Cargo E-Bike comes with our Battery Efficiency Saving (BES) technology.  This new BES technology give riders 20% more of their trip is distance and 10% more of the gradeability and 10% less of its weight than our old generation .  </p> */}

        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/speed.svg" alt="Top Speed" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Top Speed</p>
              <h5 className="text-orange fw-bold">45 MPH</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/running.svg" alt="Average Miles" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Battery Hours</p>
              <h5 className="text-orange fw-bold">8-10 hrs</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/battery.svg" alt="Battery Life" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Battery Life</p>
              <h5 className="text-orange fw-bold">48V 70A</h5>
            </div>
          </div>
          {/* <div className="col">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/motor.svg" alt="Motor Output" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Motor Output</p>
              <h5 className="text-orange fw-bold">5,000 Watts</h5>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="container py-5">
        <h1 className="mb-4 fw-bold" style={{color:'#f7931e'}}>Specifications</h1>

        <div className="accordion" id="specAccordion">

          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-light"
                style={{background:'#f7931e'}}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Specifications
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#specAccordion"
            >
              

              <div className="accordion-body">
  <div className="table-responsive">
    <table className="table table-bordered align-middle">
      <tbody>
        <tr>
          <th scope="row">Frame</th>
          <td>Stainless Steel (Heavy Duty enhanced)</td>
        </tr>
        <tr>
          <th scope="row">Fork</th>
          <td>Front Suspension</td>
        </tr>
        <tr>
          <th scope="row">Tyres</th>
          <td><strong>F&R Kenda</strong> 20" × <strong>2.5 Tubeless Tyre</strong></td>
        </tr>
        <tr>
          <th scope="row">Rim</th>
          <td>Aluminium Alloy wheel (matt black color)</td>
        </tr>
        <tr>
          <th scope="row">Motor</th>
          <td>200W High Torque Brushless Rear Hub Drive Motor</td>
        </tr>
        <tr>
          <th scope="row">Saddle</th>
          <td>Large & Soft saddle with Spring and Lock</td>
        </tr>
        <tr>
          <th scope="row">Brake</th>
          <td>F & R Hydraulic Disc Brake With Power Cut-Off</td>
        </tr>
        <tr>
          <th scope="row">Gear</th>
          <td><strong>Bigger Flywheel</strong> Single Speed</td>
        </tr>
        <tr>
          <th scope="row">Display</th>
          <td>LCD Multi-function</td>
        </tr>
        <tr>
          <th scope="row">Light</th>
          <td>F & R LED Light</td>
        </tr>
        <tr>
          <th scope="row">Phone Holder</th>
          <td>With 2.1A Output USB Port</td>
        </tr>
        <tr>
          <th scope="row">Speed Sensor</th>
          <td>1:3</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

            </div>
          </div>

          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed text-light"
                type="button"
                style={{background:'#f7931e'}}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Performance
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#specAccordion"
            >
              <div className="accordion-body">
                <p>Speed: Up to 45 km/h<br />Range: 65 miles per charge<br />Climbing: Handles 30° inclines</p>
              </div>
            </div>
          </div>

          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed text-light"
                type="button"
                style={{background:'#f7931e'}}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Warranty
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#specAccordion"
            >
              <div className="accordion-body">
                <p>Frame Warranty: 1 Year<br />Battery & Motor: 6 Months<br />Parts Replacement: 3 Months</p>
              </div>
            </div>
          </div>

        </div>
      </div> */}
      <Footer />
    </>
  );
}
