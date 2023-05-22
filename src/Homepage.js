import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import AddressMap from './AddressMap';
// import Slider from './Slider';

import CareerComponent from './CareerComponent';
import './App.css';
import ContactComponentNew from './ContactComponentNew';
export default function Homepage() {
  return (
    <div>
       <Header />
      
       {/* <Slider/> */}
      {/* <CareerComponent/> */}
      <HeroSection />
      <AboutSection />

<ContactComponentNew/>

      <div className="main-content">
        <div className="left-column">
          <ContactSection />
        </div>
        <div className="right-column">
          <AddressMap />
        </div>
      </div>





      {/* <ContactSection />
      <AddressMap/> */}
      <Footer/>




    </div>
  );
  
}


