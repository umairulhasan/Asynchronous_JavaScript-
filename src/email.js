// import React from 'react';
// import useState from 'react';
// import emailjs from 'emailjs-com';
// // import { useEffect, useState }  from 'react';
// import './App.css';
// export default function email()  {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [cvFile, setCvFile] = useState(null);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
  
//     const handleNameChange = (event) => {
//       setName(event.target.value);
//     };
  
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handleCvFileChange = (event) => {
//       setCvFile(event.target.files[0]);
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       if (!cvFile) {
//         setErrorMessage('Please select a CV file');
//         return;
//       }
  
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('cvFile', cvFile);
  
//       try {
//         const templateParams = {
//           from_name: name,
//           from_email: email,
//           to_email: 'umairhaq0154@gmail.com', // replace with the recommended email address
//           message_html: 'CV attached.', // customize the message
//           cv_attachment: cvFile,
//         };
  
//         const serviceId = 'default_service'; // replace with your email service ID
//         const templateId = 'template_id'; // replace with your email template ID
//         const userId = 'user_id'; // replace with your email user ID
  
//         const response = await emailjs.sendForm(serviceId, templateId, event.target, userId);
//         console.log(response);
  
//         setSuccessMessage('CV uploaded successfully');
//         setName('');
//         setEmail('');
//         setCvFile(null);
//       } catch (error) {
//         console.error(error);
//         setErrorMessage('An error occurred. Please try again later.');
//       }
//     };
  
//     return (
//       <div className="upload-cv-container">
//         <h1>Upload Your CV</h1>
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//           <br />
//           <br />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <br />
//           <br />
//           <label htmlFor="cvFile">CV:</label>
//           <input
//             type="file"
//             id="cvFile"
//             name="cvFile"
//             accept=".pdf,.doc,.docx"
//             onChange={handleCvFileChange}
//             required
//           />
//           <br />
//           <br />
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       </div>
//     );
//   }
