import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const { userProgress } = useContext(UserContext);

  if (!userProgress) {
    return <div className="progress-tracker-container">No user progress available</div>;
  }

  // Calculate total and completed topics
  const totalTopics = Object.values(userProgress).reduce((acc, subj) => acc + (subj.totalTopics || 0), 0);
  const completedTopics = Object.values(userProgress).reduce((acc, subj) => acc + (subj.completedTopics || 0), 0);

  if (totalTopics === 0) {
    return <div className="progress-tracker-container">No topics available</div>;
  }

  const progressPercentage = (completedTopics / totalTopics) * 100;

  return (
    <div className="progress-tracker-container">
      <h2>Overall Progress</h2>
      <p>{`Completed ${completedTopics} out of ${totalTopics} topics`}</p>
      <progress value={completedTopics} max={totalTopics}></progress>
      <p>{`${progressPercentage.toFixed(2)}% completed`}</p>

      <h2>Subject-wise Progress</h2>
      {Object.entries(userProgress).map(([subject, { totalTopics, completedTopics }]) => (
        <div key={subject} className="subject-progress">
          <h3>{subject}</h3>
          <p>{`Completed ${completedTopics} out of ${totalTopics} topics`}</p>
          <progress value={completedTopics} max={totalTopics}></progress>
          <p>{`${((completedTopics / totalTopics) * 100).toFixed(2)}% completed`}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
