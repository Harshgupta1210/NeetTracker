import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import neet from '../../assets/neet.jpg';

const Header = () => (
  <header>
    {/* <img src={neet} alt="NEET Syllabus Tracker Logo" className="header-logo" /> */}
    <h1>NEET Syllabus Tracker</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  </header>
);

export default Header;