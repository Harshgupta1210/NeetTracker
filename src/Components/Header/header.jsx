
import { Link } from 'react-router-dom';
import './header.css'; // Importing CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">NEET Syllabus Tracker</h1>
      <button className="login-button">
        <Link to="/Login" className="login-link">Login</Link>
      </button>
    </header>
  );
};

export default Header;
