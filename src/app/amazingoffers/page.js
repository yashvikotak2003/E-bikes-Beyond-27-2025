// "use client";

// import Image from "next/image";

// export default function AmazingOffers() {
//   return (
//     <section className="student-offers">
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="heading">🎓 Amazing Student Offers</h2>
//           <p className="subheading">
//             Unlock exclusive benefits just for students — ride smarter, save
//             bigger, and stand out!
//           </p>
//         </div>

//         {/* --- Image Section --- */}
//         <div className="row mb-5">
//           <div className="col-md-6 mb-4">
//             <Image
//               src="/images/student-discount.jpg"
//               alt="Student Discount"
//               width={600}
//               height={400}
//               className="img-fluid rounded image-shadow"
//             />
//           </div>
//           <div className="col-md-6 mb-4">
//             <Image
//               src="/images/student-gear.jpg"
//               alt="Student with Gear"
//               width={600}
//               height={400}
//               className="img-fluid rounded image-shadow"
//             />
//           </div>
//         </div>

//         {/* --- Offers Grid --- */}
//         <div className="row g-4">
//           {[
//             {
//               icon: "bi-percent",
//               title: "Up to 25% OFF",
//               desc: "Valid student ID gets you crazy discounts on all bikes and accessories.",
//             },
//             {
//               icon: "bi-gift",
//               title: "Free Starter Kit",
//               desc: "Helmet, phone holder, and safety gear included with every student order.",
//             },
//             {
//               icon: "bi-credit-card-2-front",
//               title: "0% EMI for 6 Months",
//               desc: "Split your payment — no interest, no hassle.",
//             },
//             {
//               icon: "bi-stars",
//               title: "Giveaways & Contests",
//               desc: "Win speakers, gear, or cashback by joining our monthly contests!",
//             },
//             {
//               icon: "bi-people",
//               title: "Refer & Earn ₹500",
//               desc: "Refer your friends & earn every time they buy. More friends, more money!",
//             },
//             {
//               icon: "bi-truck",
//               title: "Free Doorstep Delivery",
//               desc: "We deliver your ride to your hostel or campus for free.",
//             },
//           ].map((offer, i) => (
//             <div className="col-md-6 col-lg-4" key={i}>
//               <div className="offer-card text-center p-4 h-100 rounded">
//                 <i className={`bi ${offer.icon} fs-2 icon-animated`}></i>
//                 <h5 className="fw-bold mt-3">{offer.title}</h5>
//                 <p className="small">{offer.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center mt-5">
//           <a
//             href="/student-offers"
//             className="btn btn-lg btn-light text-orange px-5 py-3 fw-bold shadow rounded-pill"
//           >
//             🎁 Claim Your Student Offer
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         .student-offers {
//           background: linear-gradient(135deg, #ff6f61, #ff9a8b);
//           padding: 4rem 1rem;
//           color: white;
//           position: relative;
//           overflow: hidden;
//         }

//         .heading {
//           font-weight: 700;
//           font-size: 2.5rem;
//         }

//         .subheading {
//           font-size: 1.1rem;
//           color: #fff;
//         }

//         .image-shadow {
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
//           border-radius: 12px;
//         }

//         .offer-card {
//           background-color: rgba(255, 255, 255, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           backdrop-filter: blur(8px);
//           color: white;
//           transition: transform 0.3s ease;
//         }

//         .offer-card:hover {
//           transform: translateY(-5px);
//         }

//         .icon-animated {
//           animation: pulse 2s infinite;
//           color: #fff9c4;
//         }

//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//             opacity: 0.9;
//           }
//           50% {
//             transform: scale(1.1);
//             opacity: 1;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 0.9;
//           }
//         }

//         .text-orange {
//           color: #ff6f00 !important;
//         }

//         @media (max-width: 768px) {
//           .heading {
//             font-size: 2rem;
//           }

//           .subheading {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

'use client';

import Image from 'next/image';
import Head from 'next/head';
import '../styles/amazingoffers.css';

export default function AmazingOffers() {
  return (
    <>
      <Head>
        <title>Restaurant Food Menu</title>
        <meta name="description" content="Delicious food items on our restaurant menu with special discounts!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <section style={styles.heroSection}>
        <h1 style={styles.title}>SCHOOL STUDENTS DISCOUNT</h1>
        <h2 style={styles.subtitle}>Student dress</h2>

        <div style={styles.foodContainer}>
          {foodData.map((item, idx) => (
            <div style={styles.foodItem} key={idx}>
              <div style={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.label}
                  width={200}
                  height={200}
                  style={styles.image}
                />
              </div>
              <p style={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>

        
      </section> */}
      <section className="hero-section">
  <h1 className="hero-title">ONLY STUDENTS DEAL</h1>
  <h2 className="hero-subtitle">Coming Soon....</h2>

  <div className="food-container">
    {foodData.map((item, idx) => (
      <div className="food-item" key={idx}>
        <div className="image-wrapper">
          <Image
            src={item.image}
            alt={item.label}
            width={200}
            height={200}
          />
        </div>
        <p className="food-label">{item.label}</p>
      </div>
    ))}
  </div>

  {/*
  <div className="offer-box">
    <h3 className="offer-text">
      5% <span className="offer-off">OFF</span>
    </h3>
    <p className="offer-note">ALL YOU CAN EAT</p>
    <small className="small-note">
      Lunch & Dinner · Limited Time Promotion
    </small>
  </div>
  */}
</section>

    </>
  );
}

const foodData = [
  {
    label: 'BEYOND BIKES CAPS',
    image: '/images/cap-ebike.jpeg',
  },
  {
    label: 'BEYOND BIKES HELMET',
    image: '/images/helmetebikes.jpeg',
  },
  {
    label: 'BEYOND BIKES T-SHIRT',
    image: '/images/tshirtebikes.jpeg',
  },
];




