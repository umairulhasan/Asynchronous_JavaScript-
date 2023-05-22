import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
export default function Header() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/CarrerComponent'); // Navigate to the specified URL
  };
    return (
      <header>
        {/* <img src="logo.png" alt="Company Logo" /> */}
       <div className='Wh1'>
        <h1>SOLTRIDGE</h1>
        </div>
        <nav>
          <div className='.sixe'>
          <ul >
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a onClick={handleClick}>Careers</a></li>
            <li><a href="#">Contact</a></li>
           
            
          </ul>
          </div>
        </nav>
      </header>
    );
  }