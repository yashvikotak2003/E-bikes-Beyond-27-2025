// components/ContactPage.js
"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';


export default function ContactPage() {
  return (
    <section className='mt-5' style={{background:'#f8f8f8'}}>
    <div className="container py-5 text-white" aria-label="Store Locations">
      <div className="row justify-content-center mb-4">        
          <h2 className="text-center" style={{color:'#ff6b00'}}>Contact Us on Store Location</h2>  
        
      </div>

      {/* Branch 1 */}
      <div className="row align-items-start position-relative mb-5" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="col-md-6 set-location-padding">
          {/* <h4 className="fw-bold" itemProp="name" style={{color:'#9b5402'}}>Branch 1: EBIKE100</h4> */}
          <p itemProp="address" style={{color:'#ff6b00'}}><strong>Address:-</strong>  667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia</p>
          <p itemProp="email" style={{color:'#ff6b00'}}><strong>Email Id:-</strong> info.beyondbikes@gmail.com</p>
          <p itemProp="telephone" style={{color:'#ff6b00'}}><strong>Phone Number:-</strong> +61422032961</p>
          {/* <div className="d-flex gap-3 mt-2">
            <a href="#" aria-label="Instagram"><FaInstagram size={20} className="text-white" /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp size={20} className="text-white" /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF size={20} className="text-white" /></a>
          </div> */}
        </div>
        <div className="col-md-6" >
          {/* <iframe
            title="EBIKE100 Map"
            // src="https://www.google.com/maps?q=260+Rosslyn+St,+West+Melbourne+VIC+3003,+Australia&output=embed"
            // src='https://www.google.com/maps/dir//667+Glen+Huntly+Rd+Caulfield+South,+Caulfield+VIC+3162,+Australia/@-37.8861567,144.934683,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xad2bb1333866ab51:0xa4b86ef9fc66b952!2m2!1d145.017084!2d-37.8861854?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D'
            src='https://maps.app.goo.gl/YVAjBee8rAyASSdP6'
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100764.61466673185!2d144.9346830024651!3d-37.88615668209897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751826571079!5m2!1sen!2sin" width="600" height="450" allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe> */}
  {/* <iframe
  className="responsive-map"
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100764.61466673185!2d144.9346830024651!3d-37.88615668209897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751826571079!5m2!1sen!2sin"
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/> */}
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.8929814774733!2d145.0145090756984!3d-37.886185371957446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad669a7ef0b30fd%3A0x3cfba6d3869eb26c!2s667%20Glen%20Huntly%20Rd%2C%20Caulfield%20VIC%203162%2C%20Australia!5e0!3m2!1sen!2sin!4v1752858055502!5m2!1sen!2sin" className='responsive-map' allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe> */}
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.892981477474!2d145.01450907569838!3d-37.88618537195743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad2bb1333866ab51%3A0xa4b86ef9fc66b952!2sBeyond%20Bikes!5e0!3m2!1sen!2sin!4v1752858283636!5m2!1sen!2sin" allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" className='responsive-map'></iframe>

        </div>
      </div>

      {/* Branch 2 */}
      {/* <div className="row align-items-start mb-5" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="col-md-6 set-location-padding">
          <h4 className="fw-bold" itemProp="name" style={{color:'#9b5402'}}>Branch 2: EBIKES VICTORIA</h4>
          <p itemProp="address" style={{color:'#9b5402'}}><strong>157 Langridge St, Collingwood VIC 3066, Australia</strong></p>
          <p itemProp="email" style={{color:'#9b5402'}}><strong>ebikesvictoria@gmail.com</strong></p>
          <p itemProp="telephone" style={{color:'#9b5402'}}><strong>0435795180</strong></p>
          
        </div>
        <div className="col-md-6">
          <iframe
            title="EBIKES VICTORIA Map"
            src="https://www.google.com/maps?q=157+Langridge+St,+Collingwood+VIC+3066,+Australia&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}

      {/* Branch 3 */}
      {/* <div className="row align-items-start position-relative mb-5" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="col-md-6 set-location-padding">
          <h4 className="fw-bold" itemProp="name" style={{color:'#9b5402'}}>Branch 1: EBIKE100</h4>
          <p itemProp="address" style={{color:'#9b5402'}}><strong>260 Rosslyn St, West Melbourne VIC 3003, Australia</strong></p>
          <p itemProp="email" style={{color:'#9b5402'}}><strong>ebike100au@gmail.com</strong></p>
          <p itemProp="telephone" style={{color:'#9b5402'}}><strong>0413932280</strong></p>
          
        </div>
        <div className="col-md-6" >
          <iframe
            title="EBIKE100 Map"
            src="https://www.google.com/maps?q=260+Rosslyn+St,+West+Melbourne+VIC+3003,+Australia&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}

    </div>
    </section>
  );
}
