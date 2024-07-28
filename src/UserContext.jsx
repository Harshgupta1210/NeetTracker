// UserContext.jsx
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState({
    Physics: { totalTopics: 28, completedTopics: 0},
    Chemistry: { totalTopics: 21, completedTopics: 0 },
    Biology: { totalTopics: 31, completedTopics: 0 },
  });

  const updateProgress = (subject, isCompleted) => {
    setUserProgress(prev => ({
      ...prev,
      [subject]: {
        ...prev[subject],
        completedTopics: isCompleted ? prev[subject].completedTopics + 1 : prev[subject].completedTopics - 1
      }
    }));
  };

  const submitProgress = (subject) => {
    console.log(`Submitting progress for ${subject}`);
    // Implement submission logic if needed
  };

  return (
    <UserContext.Provider value={{ userProgress, updateProgress, submitProgress }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
