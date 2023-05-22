import React from 'react';
import './AboutSection.css';
import img1 from './images/gfg.png';
import {FcCallback} from 'react-icons/fc';
import {TiTick} from 'react-icons/ti'
import { FaBeer } from 'react-icons/fa';
// import img from "../assets/gfg.png";
export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
        At Soltridge, we are evolving as a Technology Company by looking at our external marketplace so that we can continue to deliver, exceed and bring innovative solutions to our communities. Our aspiration is to become a leading global company via both organic growth and strategic acquisitions
        </p>
        <div className="contact-info">
          <p><TiTick size={32} style={{ color: 'black' }}/>Professional Staff</p>
          <p><TiTick size={32} style={{ color: 'black' }}/>24/7 Support</p>
          <p><FcCallback size={32} style={{ color: 'black' }}/>Phone: +92 (0)3262932684  </p>
          {/* Add more contact information as needed */}
        </div>
      </div>
      <div className="about-image">
      <img src={img1} alt="" />
      </div>
    </section>
  );
}
