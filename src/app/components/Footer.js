// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../styles/Footer.css';
// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <>
//       <footer className="footer-dark text-light pt-5 pb-3">
//         <div className="container text-center">
//           {/* Social Icons */}
//           <div className="mb-4 d-flex justify-content-center gap-4">
//             <a target='_blank' href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D" className="social-icon"><i className="bi bi-instagram fs-1 me-3"></i></a>
//             <a target='_blank' href="https://g.co/kgs/66Atysa" className="social-icon"><i className="bi bi-google fs-1 me-3"></i></a>
//             <a target='_blank' href="tel:+61422032961" className="social-icon" title="Call Us">
//   <i className="bi bi-telephone-fill fs-1"></i>
// </a>
//           </div>

//           <ul className="nav justify-content-center mb-2">
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/">HOME</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/products">PRODUCTS</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/rental">RENTAL</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/contact">CONTACT</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/about">ABOUT US</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/basicknowledge">PRIVACY POLICY</Link>
//   </li>
// </ul>

// {/* Sub Navigation */}

//         </div>
//       </footer>

//       {/* Green Branding Strip */}
//       <div className="footer-green text-center text-white py-3">
//         <div>
//           <strong>Freedom to Explore, Power to Move</strong>
//         </div>
//         <small className="text-uppercase">© BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED</small>
//       </div>
//     </>
//   );
// }

'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Footer.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter,usePathname } from 'next/navigation';

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href) => {
    setLoading(true);
    setTimeout(() => {
      router.push(href);
    }, 1000); // 5 seconds
  };

  return (
    <>
      {/* Loader Overlay */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(255, 255, 255, 0.9)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className="spinner-border text-warning"
            style={{ width: '4rem', height: '4rem' }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <footer className="footer-dark text-light pt-5 pb-3">
        <div className="container text-center">
          {/* Social Icons */}
          <div className="mb-4 d-flex justify-content-center gap-4">
            <a
              target="_blank"
              href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D"
              className="social-icon"
            >
              <i className="bi bi-instagram fs-1 me-3"></i>
            </a>
            <a
              target="_blank"
              href="https://g.co/kgs/66Atysa"
              className="social-icon"
            >
              <i className="bi bi-google fs-1 me-3"></i>
            </a>
            <a
              target="_blank"
              href="tel:+61422032961"
              className="social-icon"
              title="Call Us"
            >
              <i className="bi bi-telephone-fill fs-1"></i>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="nav justify-content-center mb-2">
            {[
              ['/', 'HOME'],
              ['/products', 'PRODUCTS'],
              ['/rental', 'RENTAL'],
              ['/contact', 'CONTACT'],
              ['/about', 'ABOUT US'],
              ['/basicknowledge', 'PRIVACY POLICY'],
            ].map(([href, label]) => (
              <li className="nav-item" key={href}>
                <button
                  className={`nav-link link-light bg-transparent border-0 ${pathname === href
                      ? 'text-success fw-bold'
                      : 'text-light'
                      }`}
                  onClick={() => handleNavigation(href)}
                  style={{ cursor: 'pointer' }}
                  
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      {/* Branding Strip */}
      <div className="footer-green text-center text-white py-3">
        <div>
          <strong>Freedom to Explore, Power to Move</strong>
        </div>
        <small className="text-uppercase">
          © BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED
        </small>
      </div>
    </>
  );
}
