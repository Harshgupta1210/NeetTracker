import { Link } from 'react-router-dom';
import './header.css';
import Login from '../dashboard/Login/Login';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">NEET Syllabus Tracker</h1>
      <Link to="/profile" className="nav-link">Profile</Link>
      <Link to="/progress" className="nav-link">Progress Tracker</Link>
	  <Link to="/login" className="nav-link">Login</Link>
    </header>
  );
};

export default Header;
