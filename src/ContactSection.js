import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactSection.css';
export default function ContactSection() {
  const [state, handleSubmit] = useForm("xoqzbplq");
  if (state.succeeded) {
      return <p>Thanks for Contact</p>;
  }
  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Your Email 
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="Name">
        Your Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />


{/* <input name="attachment" id="attachment" type="file"></input>
<ValidationError 
        prefix="Attachment" 
        field="attachment"
        errors={state.errors}
      /> */}

      <label htmlFor="email">
        Subject
      </label>
      <input
        id="subject"
        type="subject" 
        name="subject"
      />
      <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />


{/* <label htmlFor="cvFile"></label>
          <input
            type="file"
            id="cvFile"
            name="cvFile"
            accept=".pdf,.doc,.docx"
            
          />
          <ValidationError 
        prefix="CvFile" 
        field="cvFile"
        errors={state.errors}
      /> */}






      <label htmlFor="Message">
        Enter your Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send Message
      </button>
    </form>
    </section>
  );
}
  
