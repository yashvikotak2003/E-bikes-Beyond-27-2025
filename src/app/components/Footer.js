import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer-dark text-light pt-5 pb-3">
        <div className="container text-center">
          {/* Social Icons */}
          <div className="mb-4 d-flex justify-content-center gap-4">
            <a target='_blank' className="social-icon"><i className="bi bi-facebook"></i></a>
            <a target='_blank' className="social-icon"><i className="bi bi-pinterest"></i></a>
            <a target='_blank' href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D" className="social-icon"><i className="bi bi-instagram"></i></a>
            <a target='_blank' href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
            <a target='_blank' href="tel:+919428291198" className="social-icon" title="Call Us">
  <i className="bi bi-telephone-fill"></i>
</a>
          </div>

{/*           
          <ul className="nav justify-content-center mb-2">
            <li className="nav-item"><a className="nav-link link-light" href="#">HOME</a></li>
            <li className="nav-item"><a className="nav-link link-light" href="#">PRODUCTS</a></li>
            <li className="nav-item"><a className="nav-link link-light" href="#">ABOUT US</a></li>
            <li className="nav-item"><a className="nav-link link-light" href="#">REPAIRS</a></li>
            <li className="nav-item"><a className="nav-link link-light" href="#">CONTACT</a></li>
          </ul>

          
          <ul className="nav justify-content-center small mb-4">
            <li className="nav-item"><a className="nav-link link-secondary" href="#">RENTAL</a></li>
            <li className="nav-item"><span className="nav-link text-muted">|</span></li>
            <li className="nav-item"><a className="nav-link link-secondary" href="#">BASIC KNOWLEGDE</a></li>
            <li className="nav-item"><span className="nav-link text-muted">|</span></li>
            <li className="nav-item"><a className="nav-link link-secondary" href="#">WARRANTY POLICY</a></li>
            <li className="nav-item"><span className="nav-link text-muted">|</span></li>
            <li className="nav-item"><a className="nav-link link-secondary" href="#">NEWS</a></li>
          </ul> */}
          <ul className="nav justify-content-center mb-2">
  <li className="nav-item">
    <Link className="nav-link link-light" href="/">HOME</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link link-light" href="/products">PRODUCTS</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link link-light" href="/about">RENTAL</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link link-light" href="/repairs">CONTACT</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link link-light" href="/contact">ABOUT US</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link link-light" href="/contact">PRIVACY POLICY</Link>
  </li>
</ul>

{/* Sub Navigation */}

        </div>
      </footer>

      {/* Green Branding Strip */}
      <div className="footer-green text-center text-white py-3">
        <div>
          <strong>Freedom to Explore, Power to Move</strong>
        </div>
        <small className="text-uppercase">© BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED</small>
      </div>
    </>
  );
}
