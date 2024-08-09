import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Home Page</h1>
        <Link to="/login">
          <button className="home-button">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
