import React from 'react';
import Iframe from 'react-iframe';
export default function AddressMap() {
    return (
      <div className="map-container">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13304.637280689636!2d73.10474390950652!3d33.52324314405562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed68dd86fca9%3A0x8d4a3cb707e87eba!2sPhase%207%20Bahria%20Town%2C%20Rawalpindi%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1684308478502!5m2!1sen!2s"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }


  