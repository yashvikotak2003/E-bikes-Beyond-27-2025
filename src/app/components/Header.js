// "use client";
// import Link from 'next/link';
// import '../styles/header.css';
// import { useState } from 'react';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-transparent position-absolute top-0 start-0 w-100 z-3">
//       <div className="container py-3 d-flex justify-content-between align-items-center">
//         <h1 className="fw-bold mb-0" style={{ color: '#9b5402' }}>RIDE</h1>
//         <button className="btn btn-outline-light d-md-none" onClick={() => setMenuOpen(!menuOpen)}>
//           <i className="bi bi-list"></i>
//         </button>
//         <nav className={`d-md-flex flex-grow-1 justify-content-center ${menuOpen ? 'd-block' : 'd-none d-md-block'}`}>
//           <ul className="nav flex-column flex-md-row text-center">
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/">Home</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/products">Products</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/blog">Rental</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/pages">Repairs</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/">Contact</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/shops">About Us</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/products">Basic Knowledge</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/blog">Warranty Policy</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/blog">News</Link></li>
//           </ul>
//         </nav>
//         <div className="d-none d-md-flex align-items-center gap-3">
//           <i className="bi bi-search text-white" aria-label="Search"></i>
//           <i className="bi bi-person text-white" aria-label="Account"></i>
//           <i className="bi bi-heart text-white" aria-label="Favorites"></i>
//           <div className="position-relative">
//             <img
//               src="/images/Cart.svg"
//               alt="Shopping Cart Icon"
//               width={30}
//               height={30}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";
// import Link from 'next/link';
// import '../styles/header.css';
// import { useState } from 'react';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="main-header w-100 sticky-top bg-white text-dark">
//       <div className="container position-relative py-3 d-flex justify-content-between align-items-center">
//         <h1 className="fw-bold mb-0" style={{ color: '#ff6b00' }}>RIDE</h1>

//         <button className="btn d-md-none menu-position" onClick={() => setMenuOpen(!menuOpen)}>
//           <img src='/images/HemburgMenu.svg' height={'30px'} width={'30px'}/>
//         </button>

//         <nav className="d-md-flex flex-grow-1 justify-content-center">
//           <ul className={`nav flex-column flex-md-row text-center ${menuOpen ? 'd-block' : 'd-none d-md-flex'}`}>
//             {[
//               ['/', 'Home'],
//               ['/products', 'Products'],
//               ['/blog', 'Rental'],
//               ['/pages', 'Repairs'],
//               ['/', 'Contact'],
//               ['/shops', 'About Us'],
//               ['/products', 'Basic Knowledge'],
//               ['/blog', 'Warranty Policy'],
//               ['/blog', 'News'],
//             ].map(([href, label], i) => (
//               <li className="nav-item" key={i}>
//                 <Link className="nav-link text-dark set-header-text" href={href}>
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="d-none d-md-flex align-items-center gap-3 icon-wrapper">
//           <i className="bi bi-search text-dark" aria-label="Search"></i>
//           <i className="bi bi-person text-dark" aria-label="Account"></i>
//           <i className="bi bi-heart text-dark" aria-label="Favorites"></i>
//           <div className="position-relative">
//             <img
//               src="/images/Cart.svg"
//               alt="Shopping Cart Icon"
//               width={30}
//               height={30}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import Link from 'next/link';
import '../styles/header.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleAddToCart = () => {
    router.push('/cart'); // navigate to your cart page
  };

  return (

    <header className="main-header w-100 sticky-top text-dark" style={{backgroundColor:'#f7931e',boxShadow: '0 4px 25px rgba(0, 0, 0, 0.8)', zIndex: 1000,}}>
      <div className="container position-relative py-3 d-flex justify-content-between align-items-center">
        {/* <h1 className="fw-bold mb-0" style={{ color: '#ff6b00' }}>RIDE</h1> */}
        <img src='/images/Logo-for-ebike-beyond-bikes-removebg-preview.png' alt='logo' className='set-logo-height'/>

        <button className="btn d-md-none menu-position" onClick={() => setMenuOpen(!menuOpen)}>
          <img src='/images/HemburgMenu.svg' height={'35px'} width={'35px'} alt='menu-bar'/>
        </button>

        <nav className="d-md-flex flex-grow-1 justify-content-end">
          {/* <ul className={`nav flex-column flex-md-row text-center ${menuOpen ? 'd-block' : 'd-none d-md-flex'}`}>
            {[
              ['/', 'Home'],
              ['/products', 'Products'],
              ['/rental', 'Rental'],
              ['/repairs', 'Repairs'],
              ['/contact', 'Contact'],
              ['/about', 'About Us'],
              ['/basicknowledge', 'Basic Knowledge'],
              ['/warranty', 'Warranty Policy'],
              ['/blog', 'News'],
              ['/cart','Cart']
            ].map(([href, label], i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link text-light set-header-text" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul> */}
          {/* <ul className={`nav flex-column flex-md-row text-center ${menuOpen ? 'd-block bg-warning' : 'd-none d-md-flex'}`}>
  {[
    ['/', 'Home'],
    ['/products', 'Products'],
    ['/rental', 'Rental'],
    ['/repairs', 'Repairs'],
    ['/contact', 'Contact'],
    ['/about', 'About Us'],
    ['/basicknowledge', 'Privacy Policy'],
    ['/warranty', 'Warranty Policy'],
    ['/blog', 'News'],
    ['/cart', 'Cart']
  ].map(([href, label], i) => (
    <li className="nav-item" key={i}>
      <Link
        href={href}
        className={`nav-link set-header-text ${pathname === href ? 'text-dark fw-bold' : 'text-light'}`}
      >
        {label}
      </Link>
    </li>
  ))}
</ul> */}
{/* <ul className={`nav flex-column flex-md-row text-center ${menuOpen ? 'd-block bg-warning' : 'd-none d-md-flex'}`}>
  {[
    ['/', 'Home'],
    ['/products', 'Products'],
    ['/rental', 'Rental'],
    ['/repairs', 'Repairs'],
    ['/contact', 'Contact'],
    ['/about', 'About Us'],
    ['/basicknowledge', 'Privacy Policy'],
    ['/cart', 'Cart']
  ].map(([href, label], i) => (
    <li className="nav-item" key={i}>
      <Link
        href={href}
        className={`nav-link set-header-text ${pathname === href ? 'text-dark fw-bold' : 'text-light'}`}
      >
        {label}
      </Link>
    </li>
  ))}
</ul> */}

{/* <ul className={`nav flex-column flex-md-row text-center ${menuOpen ? 'd-block bg-warning' : 'd-none d-md-flex'}`}>
  {[
    ['/', 'Home'],
    ['/products', 'Products'],
    ['/rental', 'Rental'],
    ['/repairs', 'Repairs'],
    ['/contact', 'Contact'],
    ['/about', 'About Us'],
    ['/basicknowledge', 'Privacy Policy'],
    // ['/cart', 'Cart'] — removed
  ].map(([href, label], i) => (
    <li className="nav-item" key={i}>
      <Link
        href={href}
        className={`nav-link set-header-text ${pathname === href ? 'text-dark fw-bold' : 'text-light'}`}
      >
        {label}
      </Link>
    </li>
  ))}
</ul> */}

<ul className={`nav flex-column flex-md-row text-center ${menuOpen ? 'd-block set-bg-header' : 'd-none d-md-flex'}`}>
  {[
    ['/', 'Home'],
    ['/products', 'Products'],
    ['/rental', 'Rental'],
    // ['/repairs', 'Repairs'], // Removed
    ['/contact', 'Contact'],
    ['/about', 'About Us'],
    ['/basicknowledge', 'Privacy Policy'],
    // ['/cart', 'Cart'] — removed
  ].map(([href, label], i) => (
    <li className="nav-item" key={i}>
      <Link
        href={href}
        className={`nav-link set-header-text ${pathname === href ? 'text-dark fw-bold' : 'text-light'}`}
      >
        {label}
      </Link>
    </li>
  ))}
</ul>




        </nav>

        <div className="d-none d-md-flex align-items-center gap-3 icon-wrapper">
          {/* <i className="bi bi-search text-light me-3" style={{fontSize:'20px'}} aria-label="Search"></i> */}
          {/* <i className="bi bi-person text-light me-3" style={{fontSize:'20px'}} aria-label="Account"></i> */}
          {/* <i className="bi bi-heart text-light me-3" style={{fontSize:'20px'}} aria-label="Favorites"></i> */}
          <div className="position-relative">
            {/* <img
              src="/images/Cart.svg"
              alt="Shopping Cart Icon"
              width={30}
              height={30}
              loading="lazy"
            /> */}
            {/* <i className="bi bi-cart text-light me-3" style={{fontSize:'20px'}} aria-label="cart" onClick={handleAddToCart}></i> */}
          </div>
        </div>
      </div>
    </header>
  );
}
