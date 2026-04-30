import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, X, ArrowDown } from 'lucide-react';

const VideoPortal = ({ topic, completedVideos, onComplete, onClose }) => {
    const [activeVideo, setActiveVideo] = useState(topic.videos[0]);
    const [isVideoFinished, setIsVideoFinished] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // Reset state when video changes
        setIsVideoFinished(false);
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

                            <div className="scroll-indicator">
                                <span>Continue to Video</span>
                                <ArrowDown size={14} className="bounce" />
                            </div>
                        </div>

                        {/* 2. Video Section (At the last) */}
                        <div className="video-section" id="lecture-video">
                            <h3 className="material-title">Lecture Video</h3>
                            <div className="video-player-container-new">
                                {activeVideo.videoUrl ? (
                                    <div className="youtube-wrapper">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={activeVideo.videoUrl}
                                            title={activeVideo.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>

                                        {!isVideoFinished ? (
                                            <button className="simulate-finish-btn" onClick={() => setIsVideoFinished(true)}>
                                                FINISHED WATCHING?
                                            </button>
                                        ) : (
                                            <div className="video-finished-overlay">
                                                <CheckCircle size={48} color="#22c55e" />
                                                <p>Video Completed!</p>
                                                {!completedVideos.includes(activeVideo.id) && (
                                                    <button
                                                        className="btn-mark-complete-on-video"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleMarkComplete();
                                                        }}
                                                    >
                                                        MARK AS COMPLETED
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="video-placeholder-new" onClick={() => setIsVideoFinished(true)}>
                                        {!isVideoFinished ? (
                                            <>
                                                <Play size={48} color="#ff0080" />
                                                <p>Click to start lesson video ({activeVideo.duration})</p>
                                            </>
                                        ) : (
                                            <div className="video-finished-overlay">
                                                <CheckCircle size={48} color="#22c55e" />
                                                <p>Video Completed!</p>
                                                {!completedVideos.includes(activeVideo.id) && (
                                                    <button
                                                        className="btn-mark-complete-on-video"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleMarkComplete();
                                                        }}
                                                    >
                                                        MARK AS COMPLETED
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-sidebar">
                    <div className="sidebar-header">
                        <h4 style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase' }}>Lessons in Topic</h4>
                    </div>
                    <div className="video-list">
                        {topic.videos.map((video) => (
                            <div
                                key={video.id}
                                className={`video-item ${activeVideo.id === video.id ? 'active' : ''}`}
                                onClick={() => setActiveVideo(video)}
                            >
                                <div className="video-thumb-container">
                                    <img src={video.thumbnail} alt={video.title} className="video-thumb" />
                                    {completedVideos.includes(video.id) && (
                                        <div className="thumb-status">
                                            <CheckCircle size={16} color="#22c55e" />
                                        </div>
                                    )}
                                </div>
                                <div className="video-info">
                                    <h5>{video.title}</h5>
                                    <span>{video.duration}</span>
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
