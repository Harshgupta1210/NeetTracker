// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header';
import SyllabusList from './Components/SyllabusList/SyllabusList';
import ProgressTracker from './Components/ProgressTracker/ProgressTracker';
import ProfilePage from './Components/Profile/Profile'; // Ensure this import is correct
import UserProvider from './UserContext';
import syllabusData from './SyllabusData'; // Import syllabusData

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
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
