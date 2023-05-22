import React from 'react';
import './HeroSection.css';

export default function HeroSection(){
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Think Local Connect Global</h1>
        {/* <p>We offer a variety of services to help you achieve your goals.</p> */}
        <button>Contact Us</button>
      </div>
    </section>
  );
}