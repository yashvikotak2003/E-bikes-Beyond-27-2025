// 'use client';
// import Head from 'next/head';
// import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function RentalEbikes() {
//   return (
//     <>
//       <Head>
//         <title>Rental E-Bikes | Affordable Weekly E-Bike Rental</title>
//         <meta name="description" content="Rent e-bikes with or without GPS. Affordable weekly rental with helmet, charger, and maintenance included. Minimum rental: 2 weeks." />
//         <meta name="keywords" content="e-bike rental, rent electric bike, ebike gps rental, delivery bike rental" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/rentals" />
//       </Head>

// <Header />
//       <div className="text-dark py-5 px-3">
//         <div className="container text-start">
//           <h1 className="fw-bold mb-4" style={{color:'#f7931e'}}>RENTAL EBIKES</h1>

//           <ul className="list-unstyled mb-4 text-dark-50 text-start" style={{ maxWidth: "700px" }}>
//             <li><strong>1.</strong> We offer two types of rental e-bikes: one with GPS tracking and one without.</li>
//             <li><strong>2.</strong> None of our rental e-bikes include insurance coverage.</li>
//             <li><strong>3.</strong> Renters are fully responsible for any loss, damage, or theft during the rental period.</li>
//           </ul>

//           <p className="fs-5 fw-bold" style={{color:'#f7931e'}}>Rental Package One Includes</p>
//           <p className="text-dark-50">Our rental bikes come with a delivery bag, 2 locks, helmet, charger, and free maintenance.</p>

//           <p className="fs-5 fw-bold mt-4" style={{color:'#f7931e'}}>Bond & Rental Terms</p>
//           <p className="mb-1">Bond: <span className="text-dark">$300</span></p>
//           <p>Minimum Rental Period: <span className="text-dark">2 weeks</span></p>

//           <div className="row mt-5 g-4">
//             {/* Bike 1 */}
//             <div className="col-md-6">
//               <div className="bg-white rounded overflow-hidden">
//                 <Image
//                   src="/images/Product-images-beyond-bikes-product-one-crop (3).png" 
//                   alt="Flyebike"
//                   width={500}
//                   height={600}
//                   className="img-fluid"
//                 />
//                 <div className="text-dark p-3 text-center">
//                   <h5 className="fw-bold text-danger">FLYEBIKES</h5>
//                   <p className="mb-1">Battery 48V 80AH &nbsp; <span className="fw-bold text-danger">$70 / $80</span> per week</p>
//                   <small className="text-muted">Battery backup 10 - 12 hours</small>
//                 </div>
//               </div>
//             </div>

//             {/* Bike 2 */}
//             <div className="col-md-6">
//               <div className="bg-white rounded overflow-hidden">
//                 <Image
//                   src="/images/Cartoon-Cycle-remove-text.png" 
//                   alt="Ebik100"
//                   width={500}
//                   height={600}
//                   className="img-fluid"
//                 />
//                 <div className="text-dark p-3 text-center">
//                   <h5 className="fw-bold text-danger">EBIKE100</h5>
//                   <p className="mb-1">Battery 48V 70AH &nbsp; <span className="fw-bold text-danger">$70 / $80</span> per week</p>
//                   <small className="text-muted">Battery backup 10 - 12 hours</small>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//       <div className="text-dark py-5 px-3">
//         <div className="container text-start">

//           <h3 className="fw-bold mb-4" style={{color:'#f7931e'}}>
//             With GPS system installed on the Battery and Frame
//           </h3>

//           <p className="fs-4 fw-bold" style={{color:'#f7931e'}}>Rental Package Two Includes</p>
//           <p className="text-dark-50">
//             Our rental bikes come with a delivery bag, 2 locks, helmet, charger, and free maintenance.
//           </p>

//           <p className="fs-4 fw-bold mt-4" style={{color:'#f7931e'}}>Bond & Rental Terms</p>
//           <p className="mb-1">Bond: <span className="text-dark">$500</span></p>
//           <p>Minimum Rental Period: <span className="text-dark">2 weeks</span></p>

//           <div className="my-5">
//             <Image
//               src="/images/Product-images-beyond-bikes-product-one-crop (3).png" 
//               alt="EBIKE100 Rental with GPS"
//               width={600}
//               height={700}
//               className="img-fluid border rounded"
//               priority
//             />
//           </div>

//           <div className="text-start mt-4">
//             <h5 className="fw-bold mb-3" style={{color:'#f7931e'}}>EBIKE100</h5>
//             <h6 className="mb-3">Battery 48V 80AH &nbsp;
//               <span className="fw-bold" style={{color:'#f7931e'}}>$80 / $90</span> per week
//             </h6>
//             <h6 className="text-dark">Battery backup 10 - 12 hours</h6>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// 'use client';
// import Head from 'next/head';
// import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { FaBicycle, FaLock, FaHelmetSafety } from 'react-icons/fa6';

// export default function RentalEbikes() {
//   return (
//     <>
//       <Head>
//         <title>Rental E-Bikes | Affordable Weekly E-Bike Rental</title>
//         <meta name="description" content="Rent e-bikes with or without GPS. Affordable weekly rental with helmet, charger, and maintenance included. Minimum rental: 2 weeks." />
//         <meta name="keywords" content="e-bike rental, rent electric bike, ebike gps rental, delivery bike rental" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/rentals" />
//       </Head>

//       <Header />

//       {/* Hero Section */}
//       <section className="bg-light py-5 text-center">
//         <div className="container">
//           <h1 className="display-5 fw-bold text-dark mb-3">Affordable E-Bike Rentals</h1>
//           <p className="lead text-muted">Choose from flexible packages — with or without GPS tracking — and enjoy worry-free riding with helmet, lock, and maintenance included.</p>
//         </div>
//       </section>

//       {/* Rental Info */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="fw-bold mb-4 text-warning">Rental Terms & Conditions</h2>
//           <ul className="list-group list-group-flush mb-4">
//             <li className="list-group-item"><strong>1.</strong> Two types of rental: with GPS & without GPS.</li>
//             <li className="list-group-item"><strong>2.</strong> No insurance included in rental.</li>
//             <li className="list-group-item"><strong>3.</strong> Renters are responsible for loss, damage, or theft.</li>
//           </ul>
//         </div>
//       </section>

//       {/* Package One */}
//       <section className="bg-white py-5">
//         <div className="container">
//           <h2 className="fw-bold text-warning mb-4">Rental Package One</h2>
//           <p className="mb-2"><FaBicycle className="text-warning me-2" /> Includes delivery bag, 2 locks, helmet, charger, and free maintenance.</p>
//           <p><FaLock className="text-warning me-2" /> Bond: <strong>$300</strong> | Minimum: <strong>2 weeks</strong></p>

//           <div className="row mt-4 g-4">
//             {/* Flyebikes */}
//             <div className="col-md-6">
//               <div className="card border-0 shadow-sm h-100">
//                 <Image src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Flyebike" width={500} height={600} className="card-img-top" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold text-danger">FLYEBIKES</h5>
//                   <p>Battery 48V 80AH – <span className="fw-bold text-danger">$70 / $80</span> per week</p>
//                   <small className="text-muted">Battery backup 10 - 12 hours</small>
//                 </div>
//               </div>
//             </div>

//             {/* Ebike100 */}
//             <div className="col-md-6">
//               <div className="card border-0 shadow-sm h-100">
//                 <Image src="/images/Cartoon-Cycle-remove-text.png" alt="Ebike100" width={500} height={600} className="card-img-top" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold text-danger">EBIKE100</h5>
//                   <p>Battery 48V 70AH – <span className="fw-bold text-danger">$70 / $80</span> per week</p>
//                   <small className="text-muted">Battery backup 10 - 12 hours</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Package Two */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="fw-bold mb-4 text-warning">Rental Package Two (With GPS)</h2>
//           {/* <p className="mb-2"><FaMapMarker className="text-warning me-2" /> GPS installed on both battery and frame</p> */}
//           <p className="mb-2"><FaHelmetSafety className="text-warning me-2" /> Includes delivery bag, 2 locks, helmet, charger, and maintenance</p>
//           <p><FaLock className="text-warning me-2" /> Bond: <strong>$500</strong> | Minimum: <strong>2 weeks</strong></p>

//           <div className="my-4 text-center">
//             <Image src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="EBIKE100 Rental with GPS" width={600} height={700} className="img-fluid border rounded" priority />
//           </div>

//           <div className="text-start">
//             <h5 className="fw-bold mb-2 text-danger">EBIKE100 with GPS</h5>
//             <h6 className="mb-2">Battery 48V 80AH – <span className="fw-bold text-danger">$80 / $90</span> per week</h6>
//             <small className="text-muted">Battery backup 10 - 12 hours</small>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-warning text-dark py-5 text-center">
//         <div className="container">
//           <h2 className="fw-bold">Ready to Ride?</h2>
//           <p className="lead mb-4">Contact us today to book your rental e-bike and hit the road worry-free!</p>
//           <a href="/contact" className="btn btn-dark btn-lg px-4">Book Now</a>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

'use client';
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBicycle, FaLock, FaTools, FaMapMarkedAlt, FaHardHat } from 'react-icons/fa';

export default function RentalEbikes() {
  return (
    <>
      <Head>
        <title>Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS</title>
        <meta name="description" content="Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance. Ideal for delivery riders and urban commuting." />
        <meta name="keywords" content="e-bike rental, electric bike hire, GPS ebike rental, delivery ebike, affordable ebike rental, weekly ebike rental, helmet and charger included" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/rentals" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-light py-5 text-center" itemScope itemType="https://schema.org/Product">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3" style={{color:'#f7931e'}} itemProp="name">Affordable Weekly E-Bike Rentals</h1>
          <p className="text-dark" itemProp="description" style={{fontSize:'18px',fontWeight:'600'}}>
            Rent e-bikes with GPS — perfect for delivery riders. Includes helmet, charger, 2 locks, and maintenance.
          </p>
        </div>
      </section>

      {/* Terms Section */}
      <section className="pb-2 pt-4" id="rental-terms">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Rental Terms & Conditions</h2>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"><strong>1.</strong> The renter agrees to waive all claims and/or causes of action against the Lessor (BEYOND
BIKES PTY LTD) arising from the operation, use, or misuse of the rented bicycle.
</li>
            <li className="list-group-item"><strong>2.</strong> The renter is responsible for all charges, including rental fees and damages to the
equipment, and agrees to return the bicycle in the same condition as received (normal
wear and tear excluded).
</li>
            <li className="list-group-item"><strong>3.</strong> Theft or total loss of the rental bike is the sole responsibility of the renter.</li>
            <li className="list-group-item"><strong>4.</strong> The customer agrees to pay a total of $1,500 in the event of a total loss of the bike or theft of
the battery. This amount is payable over a period of two (2) weeks following the occurrence
of the mishap.</li>
<li className="list-group-item"><strong>5.</strong> A minimum of 7 days notice is required prior to the scheduled return of the bike.</li>
<li className="list-group-item"><strong>6.</strong> The renter is responsible for any misplaced, lost, or unlocked equipment and accessories.</li>
          </ul>
        </div>
      </section>

      <section className="py-2">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Accessories Provided</h2>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"><strong>1.</strong> Helmet
</li>
            <li className="list-group-item"><strong>2.</strong> Delivery Bags
</li>
            <li className="list-group-item"><strong>3.</strong> GPS Tracker</li>
            <li className="list-group-item"><strong>4.</strong> Bike Lock</li>
<li className="list-group-item"><strong>5.</strong> Battery Lock</li>
<li className="list-group-item"><strong>6.</strong>Charger</li>
          </ul>
        </div>
      </section>

      {/* Rental Package One */}
      <section className="bg-white" id="no-gps">
        <div className="container px-3">
          <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Bikes For Rent:-</h2>
          {/* <p><FaBicycle className="me-2 fs-1" style={{color:'#f7931e'}}/> Includes delivery bag, 2 locks, helmet, charger, and free maintenance.</p> */}
          {/* <p><FaLock className="me-2 fs-2" style={{color:'#f7931e'}}/> Bond: <strong>$300</strong> | Minimum Rental: <strong>2 weeks</strong></p> */}

          <div className="row mt-4 mb-4 g-4">
            {/* Bike 1 */}
            
<div className="col-md-4" itemScope itemType="https://schema.org/Product">
              <div className="card border-0 shadow-sm h-100">
                <img src="/images/Cartoon-Cycle-remove-text-latest.png" alt="Ebike100 rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
                <div className="card-body text-center">
                  <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 6-8h</h5>
                  <p>Battery 48V 50A – <span style={{color:'rgb(255, 107, 0)'}} className="fw-bold">$60 AUD</span> per week</p>
                  <p className="text-muted">Battery hours 6-8 hrs.</p>
                </div>
              </div>
            </div>
            {/* Bike 2 */}
            <div className="col-md-4" itemScope itemType="https://schema.org/Product">
              <div className="card border-0 shadow-sm h-100">
                <img src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Flyebike electric bike rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
                <div className="card-body text-center">
                  <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 8-10h</h5>
                  <p>Battery 48V 70A – <span className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="priceCurrency" content="USD" />$<span itemProp="price">65 AUD</span> 
                  </span> per week</p>
                  <p className="text-muted" itemProp="description">Battery hours 8-10 hrs.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4" itemScope itemType="https://schema.org/Product">
              <div className="card border-0 shadow-sm h-100">
                <img src="/images/Latest-Change-Angle-Red-Cycle-latest.png" alt="Ebike100 rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
                <div className="card-body text-center">
                  <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 10-12h</h5>
                  <p>Battery 48V 80A – <span style={{color:'rgb(255, 107, 0)'}} className="fw-bold">$70 AUD</span> per week</p>
                  <p className="text-muted">Battery hours 10 - 12 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Package Two */}
      {/* <section className="py-5 mt-4 bg-light" id="with-gps">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Package Two: With GPS Tracking</h2>
          <p><FaMapMarkedAlt className="me-2 fs-2" style={{color:'#f7931e'}}/> GPS installed on both battery and frame for theft protection.</p>
          <p><FaHardHat className="me-2 fs-2" style={{color:'#f7931e'}}/> Comes with helmet, locks, delivery bag, charger, and maintenance.</p>
          <p><FaLock className="me-2 fs-2" style={{color:'#f7931e'}}/> Bond: <strong>$500</strong> | Minimum Rental: <strong>2 weeks</strong></p>

          <div className="my-5" itemScope itemType="https://schema.org/Product">
            <Image src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Ebike100 with GPS" width={400} height={400} className="img-fluid rounded" priority itemProp="image" />
            <h5 className="fw-bold mt-4" style={{color:'rgb(255, 107, 0)'}} itemProp="name">EBIKE100 With GPS</h5>
            <p className="h6">Battery 48V 80AH – <span className="fw-bold" style={{color:'rgb(255, 107, 0)'}}>$80 / $90</span> per week</p>
            <small className="text-dark" itemProp="description">Battery backup 10 - 12 hours</small>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="text-dark py-5 text-center" style={{background:'#f7931e'}}>
        <div className="container">
          <h2 className="fw-bold text-light">Book Your Rental Now</h2>
          <p className="mb-4 text-light" style={{fontSize:'18px'}}>Get on the road with our fully equipped electric bikes. Limited stock available!</p>
          <a href="/contact" className="btn btn-dark btn-lg px-4">Get Started</a>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
