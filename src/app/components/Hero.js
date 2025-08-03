// "use client";
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const images = [
//     '/images/set-e-bike-1.jpg',
//     '/images/set-e-bike-3.jpg',
//     '/images/set-e-bike-4.jpg'
//   ];

//   const titles = [
//     'Electric Road Bikes',
//     'Explore The City With Style',
//     'Built for Speed & Comfort'
//   ];

//   const subtitles = [
//     'More mileage means more fun',
//     'Redefining urban commuting',
//     'Performance that excites'
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [animateText, setAnimateText] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimateText(false);
//       setTimeout(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setAnimateText(true);
//       }, 300);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="d-flex align-items-center vh-100 position-relative text-white text-center text-md-start"
//       style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.5s ease-in-out' }}
//     >
//       <div className="container position-relative z-2">
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <h2 className={`display-5 fw-bold ${animateText ? 'animate__animated animate__fadeInDown' : ''}`}>{titles[currentImageIndex]}</h2>
//             <p className={`lead ${animateText ? 'animate__animated animate__fadeInUp' : ''}`}>{subtitles[currentImageIndex]}</p>
//             <a href="/products" className="btn btn-light rounded-1 px-4 py-2 mt-3" aria-label="Shop Electric Bikes">SHOP NOW</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import Typewriter from 'typewriter-effect';

// export default function Hero() {
//   const images = [
//     '/images/set-e-bike-1.jpg',
//     '/images/set-e-bike-3.jpg',
//     '/images/set-e-bike-4.jpg'
//   ];

//   const titles = [
//     'Electric Road Bikes',
//     'Explore The City With Style',
//     'Built for Speed & Comfort'
//   ];

//   const subtitles = [
//     'More mileage means more fun',
//     'Redefining urban commuting',
//     'Performance that excites'
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="d-flex align-items-center vh-100 position-relative text-white text-center text-md-start"
//       style={{
//         backgroundImage: `url(${images[currentImageIndex]})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         transition: 'background-image 0.5s ease-in-out'
//       }}
//     >
//       <div className="container position-relative z-2">
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <h2 className="display-5 fw-bold">
//               <Typewriter
//                 key={currentImageIndex + '-title'}
//                 options={{
//                   strings: [titles[currentImageIndex]],
//                   autoStart: true,
//                   loop: false,
//                   delay: 50,
//                   deleteSpeed: 20,
//                   pauseFor: 3500
//                 }}
//               />
//             </h2>
//             <p className="lead">
//               <Typewriter
//                 key={currentImageIndex + '-subtitle'}
//                 options={{
//                   strings: [subtitles[currentImageIndex]],
//                   autoStart: true,
//                   loop: false,
//                   delay: 30,
//                   deleteSpeed: 15,
//                   pauseFor: 3500
//                 }}
//               />
//             </p>
//             <a href="/products" className="btn btn-light rounded-1 px-4 py-2 mt-3" aria-label="Shop Electric Bikes">SHOP NOW</a>

//             {/* SEO fallback for crawlers */}
//             <noscript>
//               <h2>Electric Road Bikes</h2>
//               <p>More mileage means more fun</p>
//             </noscript>
//           </div>
//         </div>
//       </div>
//       <span className="visually-hidden">Background showcasing electric road bikes</span>
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const images = [
    '/images/02-07-2025-Latest-Hero-1.jpg',
    '/images/Set-Product-Data-Background-Hero-28-06-2025-latest.jpg',
    
  ];

  const titles = [
    'Ride Green. Ride Smart. Ride Melbourne.',
    'From City Streets to Coastal Rides — Go Electric'
    
  ];

  const subtitles = [
    'Quiet Power. Big Freedom',
    'Charge. Ride. Repeat.'
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="d-flex position-relative text-white text-center text-md-start"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
        height:'150vh'
      }}
    >
      <div className="container position-relative z-2 mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="display-5 fw-bold mb-4" style={{color:'#ff6b00'}}>
              <Typewriter
                key={currentImageIndex + '-title'}
                options={{
                  strings: [titles[currentImageIndex]],
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  deleteSpeed: 20,
                  pauseFor: 3500
                }}
              />
            </h2>
            <h4 className="fw-600 mb-4" style={{fontStyle:'italic'}}>
              {subtitles[currentImageIndex]}
            </h4>
            <a onClick={() =>router.push('/rental')} className="btn btn-light set-button-background rounded-1 px-4 py-2 mt-3" aria-label="Shop Electric Bikes"
            style={{
              backgroundColor:'#ff6b00',
              fontSize:'13px',
              color:'#fff',
              fontWeight:'600',
              border:'none'
            }}
            >RENT NOW</a>

            {/* SEO fallback for crawlers */}
            <noscript>
              <h2>Electric Road Bikes</h2>
              <p>More mileage means more fun</p>
            </noscript>
          </div>
        </div>
      </div>
      <span className="visually-hidden">Background showcasing electric road bikes</span>
    </section>
  );
}
