// TopicItem.jsx
import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import './TopicItem.css';

const TopicItem = ({ topic, subject }) => {
  const { updateProgress } = useContext(UserContext);
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
    updateProgress(subject, !completed);
  };

  return (
    <div className="topic-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <label>{topic}</label>
    </div>
  );
};

export default TopicItem;
