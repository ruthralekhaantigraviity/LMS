import React from 'react';

const CourseTopic = ({ topic, progress, onStart }) => {
    return (
        <div className="topic-card">
            <h4>TOPIC</h4>
            <h3>{topic.title}</h3>

            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="progress-stats">
                <span>{progress}% Completed</span>
                <span>{topic.videos.length} Lessons</span>
            </div>

            <button className="btn-start-learning" onClick={() => onStart(topic)}>
                {progress === 100 ? 'REVIEW LESSONS' : progress > 0 ? 'CONTINUE LEARNING' : 'START LEARNING'}
            </button>
        </div>
    );
};

export default CourseTopic;
