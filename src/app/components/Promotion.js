// // components/OpeningHours.js
// "use client";
// import React from 'react';
// import Image from 'next/image';
// import openingImage from '../../../public/images/multiple-e-bikes.jpg'; 
// import '../styles/OpeningHours.css';

// export default function Promotion() {
//   return (
//     <section
//       className="position-relative text-white"
//       aria-labelledby="opening-hours-heading"
//       itemScope
//       itemType="https://schema.org/OpeningHoursSpecification"
//     >
//       <Image
//         src={openingImage}
//         alt="Bikes in store"
//         className="img-fluid w-100 position-relative"
//         style={{ objectFit: 'cover', height: '80vh' }}
//         priority
//       />
      
//       <div className="position-absolute set-start-50 translate-middle text-center bg-white text-dark px-5 py-5 rounded shadow-lg opening-box animate-opening">
//         <h1 id="opening-hours-heading" className="fw-bold fs-3 mb-3" itemProp="name">
//           OPENING HOURS
//         </h1>
//         <h5 className="mb-3" itemProp="opens">Mon - Sat: <time dateTime="10:00">10am</time> - <time dateTime="18:00">6pm</time></h5>
//         <h5 className="mb-0 text-danger fw-semibold" itemProp="closes">Sunday: Closed</h5>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import openingImage from '../../../public/images/multiple-e-bikes.jpg';
import '../styles/OpeningHours.css';

export default function Promotion() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="position-relative text-white"
      aria-labelledby="opening-hours-heading"
      itemScope
      itemType="https://schema.org/OpeningHoursSpecification"
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Image
        src={openingImage}
        alt="Bikes in store"
        className="img-fluid w-100 position-relative"
        style={{ objectFit: 'cover', height: '80vh' }}
        priority
      />

      <div className="position-absolute set-start-50 translate-middle text-center bg-white text-dark px-5 py-5 rounded shadow-lg opening-box animate-opening">
        <h1 id="opening-hours-heading" className="fw-bold fs-3 mb-3" itemProp="name">
          OPENING HOURS
        </h1>
        <h4 className="mb-3" itemProp="opens">
          Mon - Sun: <time dateTime="10:00">9am</time> - <time dateTime="18:00">7pm</time>
        </h4>
        <h4 className="mb-0 text-dark fw-semibold" itemProp="closes">All E-bikes avaliable at anytime</h4>
      </div>
    </motion.section>
  );
}
