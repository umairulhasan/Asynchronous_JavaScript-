import React from 'react';
import Header from './Header';
import Practice from './practice';
import Homepage from './Homepage';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import CareerComponent from './CareerComponent';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div>
       <Practice/>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        
       <Route path = 'CarrerComponent' element= {<CareerComponent/>}/>
        

      </Routes>    
      </Router>
    </div>
  );}
export default App;

