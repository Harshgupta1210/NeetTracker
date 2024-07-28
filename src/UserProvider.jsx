import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState({
    totalTopics: 9, // Example data (total number of topics)
    completedTopics: 0, // Start with 0 completed topics
    totalSubjects: 3, // Example data (total number of subjects)
    completedSubjects: 0, // Start with 0 completed subjects
  });

  const updateTopicProgress = (completed) => {
    setUserProgress((prevProgress) => ({
      ...prevProgress,
      completedTopics: completed ? prevProgress.completedTopics + 1 : prevProgress.completedTopics - 1,
    }));
  };

  const updateSubjectProgress = (completed) => {
    setUserProgress((prevProgress) => ({
      ...prevProgress,
      completedSubjects: completed ? prevProgress.completedSubjects + 1 : prevProgress.completedSubjects - 1,
    }));
  };

  return (
    <UserContext.Provider value={{ userProgress, updateTopicProgress, updateSubjectProgress }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
