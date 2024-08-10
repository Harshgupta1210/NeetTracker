// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header';
import UserProvider from './UserContext';
import syllabusData from './SyllabusData'; // Import syllabusData

// Import components from the dashboard folder
import Login from './Components/dashboard/Login/Login';
import Signup from './Components/dashboard/Signup/Signup';
import SyllabusList from './Components/dashboard/SyllabusList/SyllabusList';
import ProgressTracker from './Components/dashboard/ProgressTracker/ProgressTracker';
import ProfilePage from './Components/dashboard/Profile/Profile';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<SyllabusList syllabusData={syllabusData} />} />
            <Route path="/progress" element={<ProgressTracker />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
