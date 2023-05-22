import React from 'react';
import {BiPhoneCall} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import './ContactComponentNew.css';
export default function ContactComponentNew() {
    return (
      <div className="contact-component">
      <h3 className="contact-heading">CONTACT US</h3>
      <p className="contact-subheading">Got questions or feedback?</p>
      <div className="contact-details">
      <div className="contact-item">
          <BiPhoneCall className="contact-icon" />
          <p className="contact-text">Call: +1 123 456 7890</p>
        </div>
        <div className="contact-item">
          <GrLocation className="contact-icon" />
          <p className="contact-text">Location: Your Location</p>
        </div>
        <div className="contact-item">
          <AiOutlineMail className="contact-icon" />
          <p className="contact-text">Email: your-email@example.com</p>
        </div>
        
      </div>
    </div>
    );
  };
