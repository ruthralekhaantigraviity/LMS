import React, { useState, useEffect } from 'react';
import { Book, CheckCircle, X } from 'lucide-react';

const VideoPortal = ({ topic, completedVideos, onComplete, onClose }) => {
    const [activeVideo, setActiveVideo] = useState(topic.videos[0]);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // Reset state when lesson changes
        setShowSuccess(false);
    }, [activeVideo]);

    const handleMarkComplete = () => {
        onComplete(activeVideo.id);
        setShowSuccess(true);
        // Automatically close after 2 seconds or let user click
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    if (showSuccess) {
        return (
            <div className="learning-video-overlay">
                <div className="learning-video-modal success-view">
                    <div className="success-content">
                        <CheckCircle size={80} color="#22c55e" />
                        <h2>Lesson Completed!</h2>
                        <p>Great job! You're one step closer to your certificate.</p>
                        <button className="btn-done" onClick={onClose}>BACK TO DASHBOARD</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="learning-video-overlay">
            <div className="learning-video-modal">
                <div className="video-main">
                    <div className="video-header" style={{ padding: '1.5rem', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a' }}>
                        <div>
                            <h4 style={{ color: '#888', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TOPIC: {topic.title}</h4>
                            <h2 style={{ color: 'white', fontSize: '1.2rem', marginTop: '0.3rem' }}>{activeVideo.title}</h2>
                        </div>
                        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="lesson-scroll-area">
                        {/* 1. Study Material Section */}
                        <div className="study-material">
                            <h3 className="material-title">Study Material</h3>
                            <div className="material-text">
                                {activeVideo.content?.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>

                            {!completedVideos.includes(activeVideo.id) && (
                                <button 
                                    className="btn-mark-complete-on-material" 
                                    onClick={handleMarkComplete}
                                    style={{
                                        marginTop: '2rem',
                                        padding: '1rem 2rem',
                                        background: '#ff0080',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        width: '100%',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <CheckCircle size={20} />
                                    MARK LESSON AS COMPLETED
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="video-sidebar">
                    <div className="sidebar-header">
                        <h4 style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase' }}>Lessons in Topic</h4>
                    </div>
                    <div className="lesson-list">
                        {topic.videos.map((lesson) => (
                            <div
                                key={lesson.id}
                                className={`lesson-item ${activeVideo.id === lesson.id ? 'active' : ''}`}
                                onClick={() => setActiveVideo(lesson)}
                            >
                                <div className="lesson-thumb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a', borderRadius: '4px' }}>
                                    <Book size={20} color="#ff0080" />
                                    {completedVideos.includes(lesson.id) && (
                                        <div className="thumb-status">
                                            <CheckCircle size={16} color="#22c55e" />
                                        </div>
                                    )}
                                </div>
                                <div className="lesson-info">
                                    <h5>{lesson.title}</h5>
                                    <span>{lesson.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPortal;
