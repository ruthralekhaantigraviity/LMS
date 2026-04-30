import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CourseTopic from '../components/CourseTopic';
import VideoPortal from '../components/VideoPortal';
import Certificate from '../components/Certificate';
import { COURSE_DATA } from '../data/courseData';
import '../styles/DashboardPage.css';
import '../styles/LearningFlow.css';

const DashboardPage = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [completedVideos, setCompletedVideos] = useState([]);
    const [activeTopic, setActiveTopic] = useState(null);
    const [showCertificate, setShowCertificate] = useState(false);

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUserName(storedName);
            const storedProgress = localStorage.getItem(`completedVideos_${storedName}`);
            if (storedProgress) {
                setCompletedVideos(JSON.parse(storedProgress));
            } else {
                setCompletedVideos([]); // Reset if new user has no progress
            }
        }
    }, []);

    const handleCompleteVideo = (videoId) => {
        if (!completedVideos.includes(videoId)) {
            const newCompleted = [...completedVideos, videoId];
            setCompletedVideos(newCompleted);
            localStorage.setItem(`completedVideos_${userName}`, JSON.stringify(newCompleted));
        }
    };

    const getCourseProgress = (course) => {
        const completedCount = course.videos.filter(v => completedVideos.includes(v.id)).length;
        return Math.floor((completedCount / course.videos.length) * 100);
    };

    const isCourseCompleted = (course) => {
        const progress = getCourseProgress(course);
        return progress === 100;
    };

    const handleClaimCertificate = (courseId) => {
        navigate(`/course-success?courseId=${courseId}`);
    };

    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h1>Welcome, {userName}!</h1>
                    <p>Track your progress and access your courses here.</p>
                </div>

                <div className="dashboard-grid">
                    <div className="dashboard-card">
                        <h3>Active Courses</h3>
                        <div className="card-value">{COURSE_DATA.length}</div>
                        <p>{COURSE_DATA.map(c => c.title.split(' ')[0]).join(' & ')}</p>
                    </div>
                    <div className="dashboard-card">
                        <h3>Lessons Completed</h3>
                        <div className="card-value">{completedVideos.length}</div>
                        <p>Keep up the great work!</p>
                    </div>
                    <div className="dashboard-card">
                        <h3>Global Rank</h3>
                        <div className="card-value">42</div>
                        <p>Top 1% of learners</p>
                    </div>
                </div>

                <div className="courses-section">
                    {COURSE_DATA.map(course => (
                        <section key={course.id} className="learning-section">
                            <div className="section-header-flex">
                                <h2>{course.title}</h2>
                                {isCourseCompleted(course) && (
                                    <button
                                        className="btn-claim-certificate"
                                        onClick={() => handleClaimCertificate(course.id)}
                                    >
                                        🎓 CLAIM CERTIFICATE
                                    </button>
                                )}
                            </div>
                            <div className="topics-grid">
                                {course.videos.map(video => (
                                    <div key={video.id} className="topic-card">
                                        <h4>LESSON</h4>
                                        <h3>{video.title}</h3>
                                        <div className="progress-stats">
                                            <span>{completedVideos.includes(video.id) ? 'Completed' : 'Pending'}</span>
                                            <span>{video.duration}</span>
                                        </div>
                                        <button
                                            className="btn-start-learning"
                                            onClick={() => setActiveTopic({ ...course, videos: [video] })}
                                        >
                                            {completedVideos.includes(video.id) ? 'REVIEW' : 'START'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {activeTopic && (
                <VideoPortal
                    topic={activeTopic}
                    completedVideos={completedVideos}
                    onComplete={handleCompleteVideo}
                    onClose={() => setActiveTopic(null)}
                />
            )}

            {showCertificate && (
                <Certificate
                    userName={userName}
                    courseTitle={COURSE_DATA[0].title}
                    onClose={() => setShowCertificate(false)}
                />
            )}
        </div>
    );
};

export default DashboardPage;
