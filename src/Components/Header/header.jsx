// Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import './header.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize navigate here

  const handleLogout = () => {
    logout(navigate); // Pass navigate to the logout function
  };

  return (
    <header className="header">
      <h1 className="header-title">NEET Syllabus Tracker</h1>
      {isAuthenticated ? (
        <>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/progress" className="nav-link">Progress Tracker</Link>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button className="login-button">
          <Link to="/Login" className="login-link">Login</Link>
        </button>
      )}
    </header>
  );
};

export default Header;
