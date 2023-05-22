import React, { useState } from 'react';
import './CareerComponent.css';

const jobPostings = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'New York, NY',
    description: 'We are seeking a skilled Frontend Developer...',
  },
  {
    id: 2,
    title: 'Backend Developer',
    location: 'San Francisco, CA',
    description: 'Join our team as a Backend Developer and...',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'Seattle, WA',
    description: 'Looking for a talented UI/UX Designer with...',
  },
];

export default function CareerComponent() {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState('');

  const handleApply = (jobId) => {
    setShowApplyForm(true);
    setSelectedJobId(jobId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here, e.g., send data to server
    console.log('Submitted Application:', {
      jobId: selectedJobId,
      name,
      email,
      phone,
      coverLetter,
      resume,
    });
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setCoverLetter('');
    setResume('');
    // Close the form
    setShowApplyForm(false);
    setSelectedJobId(null);
  };

  return (
    <div className="career-component">
      <h2>Job Postings</h2>
      <div className="job-postings">
        {jobPostings.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <button onClick={() => handleApply(job.id)}>Apply</button>
          </div>
        ))}
      </div>

      {showApplyForm && (
        <div className="apply-form">
          <h2>Apply for Job</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label htmlFor="coverLetter">Cover Letter:</label>
            <textarea
              id="coverLetter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              required
            ></textarea>

            <label htmlFor="resume">Resume:</label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0])}

          required
        />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  )}
</div>
);
}