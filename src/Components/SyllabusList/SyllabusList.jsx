import React, { useContext, useState } from 'react';
import TopicItem from '../TopicItem/TopicItem';
import { UserContext } from '../../UserContext';
import './SyllabusList.css';

const SyllabusList = ({ syllabusData }) => {
  const { submitProgress } = useContext(UserContext);
  const [submittedSubjects, setSubmittedSubjects] = useState({});

  const handleSubmit = (subject) => {
    console.log(`Submitting progress for ${subject}`);

    // Check if submitProgress is a function
    if (typeof submitProgress === 'function') {
      submitProgress(subject);

      // Update state to reflect that the subject has been submitted
      setSubmittedSubjects((prev) => ({
        ...prev,
        [subject]: true,
      }));

      // Show an alert
      alert(`Submitted for ${subject}`);
    } else {
      console.error('submitProgress is not a function');
    }
  };

  return (
    <div className="syllabus-container">
      {syllabusData.map((subject, index) => (
        <div key={index} className="subject-container">
          <h2>{subject.subject}</h2>
          <div className="topic-container">
            {subject.topics.map((topic, idx) => (
              <TopicItem key={idx} topic={topic} subject={subject.subject} />
            ))}
          </div>
          <button
            onClick={() => handleSubmit(subject.subject)}
            disabled={submittedSubjects[subject.subject]} // Disable button if submitted
          >
            {submittedSubjects[subject.subject] ? 'Submitted' : `Submit ${subject.subject}`}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SyllabusList;
