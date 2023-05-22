import React from 'react';
import './Footer.css';
import {BiPhoneCall} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3 className="company-name">SOLTRIDGE</h3>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <ul className="contact-list">
                <li><i className="fa fa-map-marker"></i><GrLocation/>Phase 7 Bahria Town, Islamabad</li>
                <li><i className="fa fa-phone"></i><BiPhoneCall/>+92 (0)3262932684</li>
                <li><i className="fa fa-envelope"></i><AiOutlineMail/>info@soltridge.com</li>
              </ul>
            </div>
            <div className="social-links">
              <h3>Follow Us</h3>
              <ul className="social-list">
                <li><a href="#asdasd"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
