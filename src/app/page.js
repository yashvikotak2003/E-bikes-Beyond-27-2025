import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
// import Product from './components/Product'
import Product from './products/page';
import Accessories from './components/Accessories'
import Promotion from './components/Promotion'
import ContactPage from './components/ContactPage'
// import About from './components/About'
import About from './about/page';
import Footer from './components/Footer'
// import ProductPage from './components/ProductDetails'
import ProductPage from './E-bike-8-10h/page'
// import WarrantyPage from './components/Warranty'
// import Contact from './components/Contact'
import Contact from './contact/page';
// import Repairs from './components/Repairs'
import Repairs from './repairs/page';
import ChatWidget from './components/ChatWidget'
import Cart from './cart/page';
import BasicKnowlegePage from './basicknowledge/page';
import RentalEbikes from './rental/page';
import Review from './review/page';
import AmazingOffers from './amazingoffers/page';


export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond Bikes | Reliable Electric Bike Rentals Melbourne</title>
        <meta name="description"
          content="Beyond Bikes offers reliable and affordable electric bike rentals in Melbourne – ideal for commuters and delivery riders. Rent your e-bike today!"
        />
      </Head>
      <Header />
      <Hero />
      {/* <Accessories /> */}
      <Product />
      <Promotion />
      {/* <About /> */}
      <About />
      <AmazingOffers />
      <ContactPage />
      
      {/* <ProductPage /> */}
      {/* <WarrantyPage /> */}
      
      {/* <Contact /> */}
      {/* <Contact /> */}
      {/* <Repairs /> */}
      {/* <ChatWidget /> */}
      {/* <Cart /> */}
      {/* <BasicKnowlegePage /> */}
      {/* <RentalEbikes /> */}
      <Review />
      <Footer />
    </>
  )
}
