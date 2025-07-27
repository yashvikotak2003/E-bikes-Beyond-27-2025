'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { useState } from 'react';
// import '../styles/productdetails.css';
import '../styles/productdetails.css'
import Header from '../components/Header';
import { useRouter } from 'next/navigation';



const images = {
  front: '/images/CartoonCycleProductdetailsFrontBlur.jpg',
  back: '/images/CartoonCycleProductdetailsBackBlur.jpg',
  middle: '/images/CartoonCycleProductdetailsAngleBlur.jpg',
  battery:'/images/CartoonCycleProductdetailsWholeBlur.jpg'
};

export default function CartoonDetailsPage() {
  const [selectedColor, setSelectedColor] = useState('front');
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  // const handleAddToCart = () => {
  //   router.push('/rental'); // navigate to your cart page
  //   alert('sbhs')
  // };

  useEffect(() => {
    // Ensures Bootstrap's JS is loaded once
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>Cartoon Bikes | Electric Bike</title>
        <meta name="description" content="Buy Cali Cruiser – a powerful all-terrain mid-drive electric bicycle for both trails and city roads. Available now!" />
        <meta name="keywords" content="electric bike, e-bike, Cali Cruiser, green transport" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/product" />
      </Head>

      <Header />
      <div className="container py-5">
        <div className="row align-items-start">
          {/* Left Image */}
          <div className="col-md-7 mb-4">
            <Image src={images[selectedColor]} alt="Cali Cruiser" width={600} height={600} className='set-image-bikes'/>

            <div className="d-flex mt-3 gap-3">
              {Object.keys(images).map(color => (
                <Image
                  key={color}
                  src={images[color]}
                  alt={color}
                  width={138}
                  height={120}
                  className={`thumb ${selectedColor === color ? 'border border-dark' : ''}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Right Info */}
          <div className="col-md-5">
            <h1 className="text-orange fw-bold">Cartoon Bikes</h1>
            {/* <small className="text-muted" style={{fontSize:'20px'}}>★ ★ ★ ☆ ☆ (3 Reviews)</small> */}
            <p className="mt-3">
              Take to the streets or trails with this powerful all-terrain mid-drive electric bicycle. The City Surfer delivers unmatched performance you won’t find anywhere else.
            </p>

            <div className="fs-4 fw-bold">PRICE : $65 <del className="text-muted fs-4 ms-2">$70</del></div>
            <div className="mt-5">
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
        <li>Front and rear indicators</li>
        <li>Breathing light strips on frame and rear rack</li>
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
{/* 
            <div className="mt-4 d-flex align-items-center gap-3">
              
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
  </button>
              <button className="btn" style={{background:'#f7931e'}}><i className="bi bi-cart text-light me-2" aria-label="cart" onClick={handleAddToCart}></i><span className='text-light'>Add to cart</span></button>
            </div> */}

            {/* <div className="mt-3">
              <span className="badge rounded-pill border border-dark text-dark">Urban</span>
            </div> */}
            <button className="btn" style={{background:'#f7931e'}} onClick={() =>router.push('/rental')}><i className="bi bi-cart text-light me-2" aria-label="cart" ></i><span className='text-light'>Rental</span></button>
          </div>
        </div>
      </div>
      <div className="container text-center py-5">
        <ul className="nav nav-tabs justify-content-center border-0 mb-4">
          <li className="nav-item">
            <a className="nav-link active fw-bold" aria-current="page" href="#">Description</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Additional information</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Reviews (1)</a>
          </li>
        </ul>

        <h2 className="fw-bold display-5">Conquer the city streets or <br /><span className="text-secondary">the mountain trails</span></h2>
        <p className="mt-3 fs-5 text-muted px-2 px-md-5">
         The MK220 new generation 20 Cargo E-Bike comes with our Battery Efficiency Saving (BES) technology.  This new BES technology give riders 20% more of their trips distance and 10% more of the gradeability and 10% less of its weight than our old generation .  
         </p>

        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/speed.svg" alt="Top Speed" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Top Speed</p>
              <h5 className="text-orange fw-bold">45 MPH</h5>
            </div>
          </div>
          <div className="col">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/running.svg" alt="Average Miles" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Battery Hour</p>
              <h5 className="text-orange fw-bold">6-8 hours</h5>
            </div>
          </div>
          <div className="col">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/battery.svg" alt="Battery Life" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Battery Life</p>
              <h5 className="text-orange fw-bold">48V 50A</h5>
            </div>
          </div>
          <div className="col">
            <div className="border rounded py-4 px-2 h-100">
              <Image src="/images/motor.svg" alt="Motor Output" width={40} height={40} />
              <p className="text-muted mb-1 mt-3 small">Motor Output</p>
              <h5 className="text-orange fw-bold">5,000 Watts</h5>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
