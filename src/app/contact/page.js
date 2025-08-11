// // import Head from 'next/head';
// // import '../styles/Contact.css';
// // import Header from '../components/Header';

// // export default function Contact() {
// //   return (
// //     <>
// //       <Head>
// //         <title>Contact Us | EBIKE100</title>
// //         <meta name="description" content="Contact EBIKE100 support team. We're ready to assist you with product issues, inquiries, and services." />
// //         <meta name="robots" content="index, follow" />
// //         <link rel="canonical" href="https://yourdomain.com/contact" />
// //       </Head>

// //       <Header />
// //       <div className="container py-5">
// //         <div className="row g-5 align-items-start">
// //           {/* Form Section */}
// //           <div className="col-lg-7">
// //             <p className="text-secondary fw-semibold" style={{fontSize:'30px'}}>Send a Message</p>
// //             <h2 className="fw-bold mb-0">Reach out</h2>
// //             <h2 className="fw-bold mb-3">Get in Touch</h2>
// //             <p className="text-muted mb-4">
// //               Please be prepared to provide details about your possible issue including your bike model.
// //               The more information you can provide, the quicker our team can provide a solution.
// //             </p>

// //             <form className="contact-form">
// //               <div className="row g-3 mb-3">
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Name" required />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input type="email" className="form-control form-control-lg bg-light" placeholder="Your Email" required />
// //                 </div>
// //               </div>
// //               <div className="row g-3 mb-3">
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Subject" />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Phone Number" />
// //                 </div>
// //               </div>
// //               <div className="mb-3">
// //                 <textarea className="form-control form-control-lg bg-light" rows="5" placeholder="Your Message"></textarea>
// //               </div>
// //               <button type="submit" className="btn btn-dark fw-semibold px-4 py-2">Send Message</button>
// //             </form>
// //           </div>

// //           {/* Info Section */}
// //           <div className="col-lg-5">
// //             <div className="bg-light rounded p-4">
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase text-muted fw-bold">Address</h6>
// //                 <p className="mb-0">1200 Main St.<br />Santa Rosa, CA 93541</p>
// //               </div>
// //               <hr />
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase text-muted fw-bold">Phone</h6>
// //                 <p className="mb-0">+1 (888) 123 - 4567</p>
// //               </div>
// //               <hr />
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase text-muted fw-bold">Email</h6>
// //                 <p className="mb-0 text-warning fw-bold">support@shuma-theme.com</p>
// //               </div>
// //               <hr />
// //               <div>
// //                 <h6 className="text-uppercase text-muted fw-bold">Hours</h6>
// //                 <div className="d-flex justify-content-between border-bottom py-1">
// //                   <span>Mon–Thurs</span> <strong>9am–4pm</strong>
// //                 </div>
// //                 <div className="d-flex justify-content-between border-bottom py-1">
// //                   <span>Saturday</span> <strong>10am–11pm</strong>
// //                 </div>
// //                 <div className="d-flex justify-content-between py-1">
// //                   <span>Sunday</span> <strong>Closed</strong>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // "use client";
// // import Head from 'next/head';
// // import '../styles/Contact.css';
// // import Header from '../components/Header';
// // import { usePathname } from 'next/navigation';
// // import Footer from '../components/Footer';

// // export default function Contact() {
// //   const pathname = usePathname();

// //   return (
// //     <>
// //       <Head>
// //         <title>Contact Us | EBIKE100</title>
// //         <meta name="description" content="Contact EBIKE100 support team. We're ready to assist you with product issues, inquiries, and services." />
// //         <meta name="robots" content="index, follow" />
// //         <link rel="canonical" href="https://yourdomain.com/contact" />
// //       </Head>

// //       {/* ✅ Header will only render if NOT on home page */}
// //       {pathname !== '/' && <Header />}

// //       <div className="container py-5">
// //         <div className="row g-4 align-items-start">
// //           {/* Form Section */}
// //           <div className="col-lg-7">
// //             <h1 className="fw-bold" style={{ fontSize: '30px', color:'#f7931e' }}>Send a Message</h1>
// //             <h2 className="fw-bold mb-3 mt-3" style={{color:'#f7931e'}}>Reach out Get in Touch</h2>
// //             {/* <h2 className="fw-bold mb-3">Get in Touch</h2> */}
// //             <p className="text-dark mb-4">
// //               Please be prepared to provide details about your possible issue including your bike model.
// //               The more information you can provide, the quicker our team can provide a solution.
// //             </p>

// //             <form className="contact-form" action="https://formspree.io/f/xzzgqgyz" method="POST">
// //               <div className="row g-3 mb-3">
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Name" name='username' required/>
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input type="email" className="form-control form-control-lg bg-light" placeholder="Your Email" name='email' required />
// //                 </div>
// //               </div>
// //               <div className="row g-3 mb-3">
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Subject" name='subject'/>
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Phone Number" name='phone'/>
// //                 </div>
// //               </div>
// //               <div className="mb-3">
// //                 <textarea className="form-control form-control-lg bg-light" rows="5" placeholder="Your Message" name='message'></textarea>
// //               </div>
// //               <button type="submit" className="btn text-light fw-semibold px-4 py-2" style={{background:'#f7931e'}}>Send Message</button>
// //             </form>
// //           </div>

// //           {/* Info Section */}
// //           <div className="col-lg-5">
// //             <div className="bg-light rounded p-4">
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase fw-bold" style={{color:'#f7931e'}}>Address</h6>
// //                 <p className="mb-0">1200 Main St.<br />Santa Rosa, CA 93541</p>
// //               </div>
// //               <hr />
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase fw-bold" style={{color:'#f7931e'}}>Phone</h6>
// //                 <p className="mb-0">+1 (888) 123 - 4567</p>
// //               </div>
// //               <hr />
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase fw-bold" style={{color:'#f7931e'}}>Email</h6>
// //                 <p className="mb-0">support@shuma-theme.com</p>
// //               </div>
// //               <hr />
// //               <div>
// //                 <h6 className="text-uppercase fw-bold" style={{color:'#f7931e'}}>Hours</h6>
// //                 <div className="d-flex justify-content-between border-bottom py-1">
// //                   <span>Mon – Thurs</span> <span>9am – 4pm</span>
// //                 </div>
// //                 <div className="d-flex justify-content-between border-bottom py-1">
// //                   <span>Saturday</span> <span>10am – 11pm</span>
// //                 </div>
// //                 <div className="d-flex justify-content-between py-1">
// //                   <span>Sunday</span> <span>Closed</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {pathname === '/contact' && <Footer />}
// //     </>
// //   );
// // }

// // "use client";
// // import Head from 'next/head';
// // import '../styles/Contact.css';
// // import Header from '../components/Header';
// // import { usePathname } from 'next/navigation';
// // import Footer from '../components/Footer';

// // export default function Contact() {
// //   const pathname = usePathname();

// //   return (
// //     <>
// //       <Head>
// //         <title>Contact Us | EBIKE100</title>
// //         <meta name="description" content="Contact EBIKE100 support team. We're ready to assist you with product issues, inquiries, and services." />
// //         <meta name="robots" content="index, follow" />
// //         <link rel="canonical" href="https://yourdomain.com/contact" />
// //       </Head>

// //       {/* ✅ Header will only render if NOT on home page */}
// //       {pathname !== '/' && <Header />}

// //       <div className="container py-5">
// //         <div className="row g-4 align-items-start">

// //           {/* Form Section */}
// //           <div className="col-lg-7">
// //             <h1 className="fw-bold" style={{ fontSize: '30px', color: '#f7931e' }}>Send a Message</h1>
// //             <h2 className="fw-bold mb-3 mt-3" style={{ color: '#f7931e' }}>Reach out Get in Touch</h2>
// //             <p className="text-dark mb-4">
// //               Please be prepared to provide details about your possible issue including your bike model.
// //               The more information you can provide, the quicker our team can provide a solution.
// //             </p>

// //             {/* ✅ FORM: Using Formsubmit to send directly to Gmail */}
// //             {/* <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
              
// //               <input type="hidden" name="_captcha" value="false" />
// //               <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

// //               <div className="row g-3 mb-3">
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Name" name="username" required />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input type="email" className="form-control form-control-lg bg-light" placeholder="Your Email" name="email" required />
// //                 </div>
// //               </div>
// //               <div className="row g-3 mb-3">
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Subject" name="subject" />
// //                 </div>
// //                 <div className="col-md-6">
// //                   <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Phone Number" name="phone" />
// //                 </div>
// //               </div>
// //               <div className="mb-3">
// //                 <textarea className="form-control form-control-lg bg-light" rows="5" placeholder="Your Message" name="message"></textarea>
// //               </div>
// //               <button type="submit" className="btn text-light fw-semibold px-4 py-2" style={{ background: '#f7931e' }}>Send Message</button>
// //             </form> */}
// //             <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
// //   {/* Hidden fields */}
// //   <input type="hidden" name="_captcha" value="false" />
// //   <input type="hidden" name="_template" value="table" />
// //   <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

// //   <div className="row g-3 mb-3">
// //     <div className="col-md-6">
// //       <input
// //         type="text"
// //         className="form-control form-control-lg bg-light"
// //         placeholder="Your Name"
// //         name="Full Name"         
// //         required
// //       />
// //     </div>
// //     <div className="col-md-6">
// //       <input
// //         type="email"
// //         className="form-control form-control-lg bg-light"
// //         placeholder="Your Email"
// //         name="Email Address"     
// //         required
// //       />
// //     </div>
// //   </div>

// //   <div className="row g-3 mb-3">
// //     <div className="col-md-6">
// //       <input
// //         type="text"
// //         className="form-control form-control-lg bg-light"
// //         placeholder="Your Subject"
// //         name="Subject"
// //       />
// //     </div>
// //     <div className="col-md-6">
// //       <input
// //         type="text"
// //         className="form-control form-control-lg bg-light"
// //         placeholder="Your Phone Number"
// //         name="Phone Number"    
// //       />
// //     </div>
// //   </div>

// //   <div className="mb-3">
// //     <textarea
// //       className="form-control form-control-lg bg-light"
// //       rows="5"
// //       placeholder="Your Message"
// //       name="Message"             
// //     ></textarea>
// //   </div>

// //   <button
// //     type="submit"
// //     className="btn text-light fw-semibold px-4 py-2"
// //     style={{ background: '#f7931e' }}
// //   >
// //     Send Message
// //   </button>
// // </form>

// //           </div>

// //           {/* Info Section */}
// //           <div className="col-lg-5">
// //             <div className="bg-light rounded p-4">
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Address</h6>
// //                 <p className="mb-0">667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia</p>
// //               </div>
// //               <hr />
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Phone</h6>
// //                 <p className="mb-0">+61 422 032 961</p>
// //               </div>
// //               <hr />
// //               <div className="mb-4">
// //                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Email</h6>
// //                 <p className="mb-0">info.beyondbikes@gmail.com</p>
// //               </div>
// //               <hr />
// //               <div>
// //                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Hours</h6>
// //                 <div className="d-flex py-1">
// //                   <span className='me-2'>Mon - Sun :</span> <span>9am - 7pm</span>
// //                 </div>
                
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //       {pathname === '/contact' && <Footer />}
// //     </>
// //   );
// // }

// "use client";
// import Head from 'next/head';
// import '../styles/Contact.css';
// import Header from '../components/Header';
// import { usePathname } from 'next/navigation';
// import Footer from '../components/Footer';

// export default function Contact() {
//   const pathname = usePathname();

//   return (
//     <>
//       <Head>
//         <title>Contact Us | EBIKE100</title>
//         <meta name="description" content="Contact EBIKE100 support team. We're ready to assist you with product issues, inquiries, and services." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/contact" />
//       </Head>

//       {/* ✅ Header will only render if NOT on home page */}
//       {pathname !== '/' && <Header />}


//       <div className="container px-sm-0 px-3 py-5">
//       <h1 className='text-center pb-4' style={{color: '#f7931e'}}>Contact Us</h1>
//         <div className="row g-4 align-items-start">

//           {/* Form Section */}
//           <div className="col-lg-7">
//             <h1 className="fw-bold" style={{ fontSize: '30px', color: '#f7931e' }}>Send a Message</h1>
//             <h2 className="fw-bold mb-3 mt-3" style={{ color: '#f7931e' }}>Reach out Get in Touch</h2>
//             <p className="text-dark mb-4">
//               Please be prepared to provide details about your possible issue including your bike model.
//               The more information you can provide, the quicker our team can provide a solution.
//             </p>

//             {/* ✅ FORM: Using Formsubmit to send directly to Gmail */}
//             <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
//               {/* Hidden fields */}
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />
//               <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
//               <input type="hidden" name="_subject" value="New Contact Submission from Beyond Bikes" />

//               <div className="row g-3 mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Name"
//                     name="Full Name"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="email"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Email"
//                     name="Email Address"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="row g-3 mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Subject"
//                     name="Subject"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Phone Number"
//                     name="Phone Number"
//                   />
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <textarea
//                   className="form-control form-control-lg bg-light"
//                   rows="5"
//                   placeholder="Your Message"
//                   name="Message"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="btn text-light fw-semibold px-4 py-2"
//                 style={{ background: '#f7931e' }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Info Section */}
//           <div className="col-lg-5">
//             <div className="bg-light rounded p-4">
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Address</h6>
//                 <p className="mb-0">667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia</p>
//               </div>
//               <hr />
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Phone</h6>
//                 <p className="mb-0">+61 422 032 961</p>
//               </div>
//               <hr />
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Email</h6>
//                 <p className="mb-0">info.beyondbikes@gmail.com</p>
//               </div>
//               <hr />
//               <div>
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Hours</h6>
//                 <div className="d-flex py-1">
//                   <span className='me-2'>Mon - Sun :</span> <span>9am - 7pm</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {pathname === '/contact' && <Footer />}
//     </>
//   );
// }

