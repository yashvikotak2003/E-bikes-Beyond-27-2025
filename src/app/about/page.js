// import Head from 'next/head';
// import Image from 'next/image';
// import aboutImg from '../../../public/images/togethering-cycling.jpg'; 
// import aboutImg1 from '../../../public/images/ridinghapply.jpg'; 
// import '../styles/About.css';
// import Header from '../components/Header';

// export default function About() {dhs
//   return (
//     <>
//       <Head>
//         <title>About Us | EBIKE100</title>
//         <meta name="description" content="Get to know the team behind EBIKE100 and our passion for sustainable transport in Melbourne." />
//         <meta name="keywords" content="About EBIKE100, electric bikes, Melbourne, sustainable transport" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/about" />
//       </Head>
// <Header />
//       <section className='aboutSection'>
//       <h1 className='text-center' style={{marginBottom:'80px',color:'#f7931e'}}>About Us</h1>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <Image
//                 src={aboutImg}
//                 alt="About EBIKE100"
//                 className='ovalImage'
//                 width={500}
//                 height={400}
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className='orangeHeading'>MISSION</h2>
//               <p>
//                 Founded in 2017, EBIKE100 was created with a singular goal: to bring a premium electric bike retail experience to the heart of Melbourne. From day one, our commitment to quality, innovation, and customer satisfaction has guided our journey.
//               </p>
//               <p>
//                 We are more than just a shop — we are a community hub for e-bike enthusiasts, commuters, and explorers alike. Our passion for excellence is reflected in every product we offer and every interaction we have. We strive to make eco-friendly transportation more accessible, reliable, and enjoyable for everyone.​
//               </p>
//               <p className='fw-600'>Visit us and experience the EBIKE100 difference — where quality meets service.</p>
//             </div>
//           </div>
//           <div className="row mt-5 align-items-center">
            
//             <div className="col-md-6">
//               <h2 className='orangeHeading'>STORE BACKGROUND</h2>
//               <p>
//                At EBIKE100 PTY LTD, we believe that exceptional service starts with passionate people and deep industry knowledge. That’s why our team is composed of experienced professionals who are not only experts in e-bikes but also committed to delivering honest advice and personalised support.
//               </p>
//               <p>
//                 We offer a carefully curated range of electric bikes and accessories, each selected for performance, reliability, and value. Whether you're a first-time rider or a seasoned cyclist, we’re here to help you find the perfect solution that fits your lifestyle and budget.​
//               </p>
              
//               <p className='fw-600'>We’re proud of our roots — and even more excited about where we’re going.</p>
//             </div>

//             <div className="col-md-6 text-end mb-4 mb-md-0">
//               <Image
//                 src={aboutImg1}
//                 alt="About EBIKE100"
//                 className='ovalImage'
//                 width={500}
//                 height={400}
//               />
//             </div>
//           </div>
//           <div className="row mt-5 align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <Image
//                 src={aboutImg}
//                 alt="About EBIKE100"
//                 className='ovalImage'
//                 width={500}
//                 height={400}
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className='orangeHeading'>BRAND PHILOSOPHY</h2>
//               <p>
//                 At EBIKE100, we believe that sustainable mobility is not just a trend — it's the future. Our brand philosophy is rooted in the idea that transportation should be smart, accessible, and environmentally responsible. By promoting the use of electric bikes, we aim to inspire a shift towards greener urban living and healthier lifestyles.
//               </p>
//               <p>
//                 We view every customer interaction as an opportunity to share our passion for innovation, quality, and community. EBIKE100 is more than a business — it’s a movement powered by people who care about the planet and the freedom to move.
//               </p>
//               <p className='fw-600'>Ride with purpose. Choose a better way forward.
// </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import Head from 'next/head';
import Image from 'next/image';
import aboutImg from '../../../public/images/Latest-admin-image.jpg'; 
import aboutImg1 from '../../../public/images/Latest-admin-cycles-images-size.jpg'; 
import aboutthree from '../../../public/images/about-image.jpg';
import '../styles/About.css';
import Header from '../components/Header';
import { usePathname } from 'next/navigation';
import Footer from '../components/Footer';

export default function About() {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <title>About Us | EBIKE100</title>
        <meta name="description" content="Get to know the team behind EBIKE100 and our passion for sustainable transport in Melbourne." />
        <meta name="keywords" content="About EBIKE100, electric bikes, Melbourne, sustainable transport" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      {/* ✅ Only render Header when not on homepage */}
      {pathname !== "/" && <Header />}

      <section className='aboutSection mb-5'>
        <h1 className='text-center' style={{marginBottom:'60px',color:'#f7931e',marginTop:'60px'}}>About Us</h1>
        <div className="container px-3 px-sm-0">
          {/* Section 1 */}
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                src={aboutImg}
                alt="About EBIKE100"
                className='ovalImage'
                width={500}
                height={500}
              />
            </div>
            <div className="col-md-6">
              <h2 className='orangeHeading'>MISSION</h2>
              <p>
                Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility.
              </p>
              
            </div>
          </div>

          {/* Section 2 */}
          <div className="row mt-sm-5 mt-2 align-items-center">
            <div className="col-md-6 order-sm-1 order-2">
              <h2 className='orangeHeading'>STORE BACKGROUND</h2>
              <p>
                At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues.              </p>
            </div>
            <div className="col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0">
              <Image
                src={aboutImg1}
                alt="About EBIKE100"
                className='ovalImage'
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Section 3 */}
          {/* <div className="row mt-5 align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                src={aboutthree}
                alt="About EBIKE100"
                className='ovalImage'
                width={500}
                height={400}
              />
            </div>
            <div className="col-md-6">
              <h2 className='orangeHeading'>BRAND PHILOSOPHY</h2>
              <p>
                At Beyond Bikes, we believe that sustainable mobility is not just a trend — it's the future...
              </p>
              <p>
                We view every customer interaction as an opportunity to share our passion...
              </p>
              <p className='fw-600'>Ride with purpose. Choose a better way forward.</p>
            </div>
          </div> */}
        </div>
      </section>
      {pathname === '/about' && <Footer />}
    </>
  );
}
