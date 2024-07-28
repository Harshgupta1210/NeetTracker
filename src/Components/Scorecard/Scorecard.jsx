// Scorecard.jsx
import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import './Scorecard.css';

const Scorecard = () => {
  const { userProgress } = useContext(UserContext);

  if (!userProgress) {
    return <div className="scorecard-container">No progress data available</div>;
  }

  const totalTopics = Object.values(userProgress).reduce((acc, subj) => acc + (subj.totalTopics || 0), 0);
  const completedTopics = Object.values(userProgress).reduce((acc, subj) => acc + (subj.completedTopics || 0), 0);
  const scorePercentage = totalTopics === 0 ? 0 : (completedTopics / totalTopics) * 100;

  return (
    <div className="scorecard-container">
      <h2>Scorecard</h2>
      <p>Total Topics: {totalTopics}</p>
      <p>Completed Topics: {completedTopics}</p>
      <p>Completion Rate: {scorePercentage.toFixed(2)}%</p>
      <h3>Subject-wise Progress</h3>
      {Object.entries(userProgress).map(([subject, { totalTopics, completedTopics }]) => (
        <div key={subject} className="subject-progress">
          <h4>{subject}</h4>
          <p>Completed {completedTopics} out of {totalTopics} topics</p>
          <progress value={completedTopics} max={totalTopics}></progress>
          <p>{`${((completedTopics / totalTopics) * 100).toFixed(2)}% completed`}</p>
        </div>
      ))}
    </div>
  );
};

export default Scorecard;
