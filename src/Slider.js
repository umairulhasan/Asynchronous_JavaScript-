// import React from 'react';
// import { useState } from 'react';

// export default function slider() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [attachment, setAttachment] = useState(null);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleAttachmentChange = (e) => {
//     const file = e.target.files[0];
//     setAttachment(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('message', message);
//     formData.append('attachment', attachment);

//     fetch('https://formspree.io/f/{form_id}', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         Accept: 'application/json',
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Success: Do something with the response
//           console.log('Form submitted successfully!');
//         } else {
//           // Error: Handle the error appropriately
//           console.log('Form submission failed!');
//         }
//       })
//       .catch((error) => {
//         // Error: Handle the error appropriately
//         console.log('Form submission failed!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Your Name</label>
//       <input
//         id="name"
//         type="text"
//         value={name}
//         onChange={handleNameChange}
//         required
//       />

//       <label htmlFor="email">Your Email</label>
//       <input
//         id="email"
//         type="email"
//         value={email}
//         onChange={handleEmailChange}
//         required
//       />

//       <label htmlFor="message">Your Message</label>
//       <textarea
//         id="message"
//         value={message}
//         onChange={handleMessageChange}
//         required
//       />

//       <label htmlFor="attachment">Attach File</label>
//       <input
//         id="attachment"
//         type="file"
//         onChange={handleAttachmentChange}
//         accept=".pdf,.doc,.docx"
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };