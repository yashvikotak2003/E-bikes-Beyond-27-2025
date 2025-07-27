// "use client";
// import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import '../styles/ProductSection.css';
// import '../styles/ProductSection.css';
// import productsData from '../json/products.json';
// import { motion } from 'framer-motion';
// import Accessories from '../components/Accessories';
// import Header from '../components/Header';

// const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];

// export default function ProductTabs() {
//   const [activeTab, setActiveTab] = useState("Lastest Products");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("product-section");
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= window.innerHeight * 0.75) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const filteredProducts = productsData[activeTab] || [];

//   return (
//     <>
//     <Header />
//     <Accessories />
//     <motion.section
//       id="product-section"
//       className="container py-5"
//       aria-label="Product Categories"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <header className="text-center mb-4">
//         <ul className="nav nav-tabs justify-content-center border-0 mb-5">
//           {tabs.map((tab) => (
//             <li className="nav-item" key={tab}>
//               <button
//                 className={`nav-link fw-bold ${activeTab === tab ? 'active border-bottom border-2 border-danger' : ''}`}
//                 style={{ color: activeTab === tab ? '#000' : '#555', background: 'none' }}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </header>

//       <div className="row">
//         {filteredProducts.map((product) => (
//           <div className="col-6 col-md-3 mb-4 text-center shadow-hover" key={product.id}>
//             <article
//               className="product-card"
//               style={{
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//  borderRadius: "0.5rem",
// padding: "1rem",
// backgroundColor: "#fff",
// transition: "transform 0.2s ease, box-shadow 0.2s ease"
//               }}
//               itemScope
//               itemType="https://schema.org/Product"
//             >
//               <span
//                 className="sale-badge"
                
//                 aria-hidden="true"
//               >
//                 Sale
//               </span>
//               <img
//                 src={product.image}
//                 alt={`Image of ${product.name}`}
//                 className="img-fluid product-image"
//                 loading="lazy"
//                 width="200"
//                 height="200"
//                 itemProp="image"
//               />
//               <h3 className="product-title" itemProp="name">{product.name}</h3>
//               <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                 <span itemProp="price">{product.price}</span>
//                 <meta itemProp="priceCurrency" content="USD" />
//                 <span className="old-price">{product.oldPrice}</span>
//               </p>
//             </article>
//           </div>
//         ))}
//       </div>
      
//     </motion.section>
//     </>
//   );
// }

"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductSection.css';
import { useRouter } from 'next/navigation';

import productsData from '../json/products.json';
import { motion } from 'framer-motion';
import Accessories from '../components/Accessories';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];

export default function ProductTabs() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Lastest Products");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("product-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = productsData[activeTab] || [];

  return (
    <>
      {/* Show Header if not on the home page */}
      {pathname !== '/' && <Header />}

      {/* <Accessories /> */}

      <motion.section
        id="product-section"
        className="container py-4"
        aria-label="Product Categories"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <header className="text-center mb-4">
          <ul className="nav nav-tabs justify-content-center border-0 mb-5" style={{gap:'40px'}}>
            {tabs.map((tab) => (
              <li className="nav-item" key={tab}>
                <button
                  className={`nav-link fw-bold ${activeTab === tab ? 'active border-bottom border-2 border-warning' : ''}`}
                  style={{ color: activeTab === tab ? '#000' : '#555', background: 'none' }}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </header> */}
<h1 className='mt-3 mb-5 text-center' style={{color:'#f7931e'}}>Our Products</h1>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-6 col-md-4 mb-4 text-center shadow-hover" key={product.id}>
              {/* <article
                className="product-card"
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  backgroundColor: "#fff",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
                itemScope
                itemType="https://schema.org/Product"
              >
                <span className="sale-badge" aria-hidden="true">Sale</span>
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="img-fluid product-image"
                  loading="lazy"
                  width="200"
                  height="200"
                  itemProp="image"
                />
                <h3 className="product-title" itemProp="name">{product.name}</h3>
                <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="price">{product.price}</span>
                  <meta itemProp="priceCurrency" content="USD" />
                  <span className="old-price">{product.oldPrice}</span>
                </p>
              </article> */}
              <article
  className="product-card position-relative overflow-hidden"
  style={{
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "0.5rem",
    padding: "1rem",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  }}
  itemScope
  itemType="https://schema.org/Product"
>
  <span className="sale-badge" aria-hidden="true">Sale</span>
  
  <img
    src={product.image}
    alt={`Image of ${product.name}`}
    className="img-fluid product-image mb-3"
    loading="lazy"
    style={{cursor: 'pointer'}}
    itemProp="image"
    onClick={() =>
    product.name === 'E-bike 6-8h'
  ? router.push('/cartoonproductdetails')
  : product.name === 'E-bike 10-12h'
  ? router.push('/latestredproductdetails')
  : router.push('/productdetails')

  }
  />

  {/* <div className="product-actions d-flex justify-content-center gap-3">
    <button className="btn btn-sm btn-warning rounded-circle" aria-label="Add to Cart">
      <i className="bi bi-cart"></i>
    </button>
    
    <button
  className="btn btn-sm btn-outline-warning rounded-circle"
  aria-label="Quick View"
  
>
  
</button>

    <button className="btn btn-sm btn-outline-warning rounded-circle" aria-label="WishList">
      <i className="bi bi-heart"></i>
    </button>
  </div> */}

  <h1 className="product-title mt-3" itemProp="name">{product.name}</h1>
  <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
    <span itemProp="price">{product.price}</span>
    <meta itemProp="priceCurrency" content="USD" />
    <span className="old-price">{product.oldPrice}</span>
  </p>
</article>

            </div>
          ))}
        </div>
      </motion.section>
      {pathname === '/products' && <Footer />}
    </>
  );
}
