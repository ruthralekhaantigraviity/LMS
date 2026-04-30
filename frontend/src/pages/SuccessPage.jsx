import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Certificate from '../components/Certificate';
import { COURSE_DATA } from '../data/courseData';
import { Award, Download, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userName, setUserName] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);

    const queryParams = new URLSearchParams(location.search);
    const courseId = queryParams.get('courseId');
    const course = COURSE_DATA.find(c => c.id === courseId) || COURSE_DATA[0];
    const courseTitle = course.title;

    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadCert = async () => {
        const element = document.getElementById('certificate-to-download');
        if (!element) return;

        setIsDownloading(true);
        try {
            // Use CDN global window objects
            const html2canvas = window.html2canvas;
            const jsPDF = window.jspdf ? window.jspdf.jsPDF : null;

            if (!html2canvas || !jsPDF) {
                alert("Loading libraries... please wait a moment and try again.");
                setIsDownloading(false);
                return;
            }

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`FIC_Certificate_${courseId}.pdf`);
        } catch (error) {
            console.error('Download failed:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) setUserName(storedName);

        // One-time big bust on entry, centered
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.5, x: 0.5 },
            zIndex: 1000,
            colors: ['#ff0080', '#7928ca', '#ffd700', '#ffffff']
        });

        // Ensure user actually completed the course (security check)
        const progress = localStorage.getItem(`completedVideos_${storedName}`);
        const completedVideosCount = progress ? JSON.parse(progress) : [];
        const isCompleted = course.videos.every(v => completedVideosCount.includes(v.id));

        if (!isCompleted) {
            // navigate('/dashboard'); 
        }
    }, [navigate, course]);

    return (
        <div className="success-page-container">
            <Navbar />
            <div className="success-page-content">
                <div className="congrats-card">
                    <h1>Congratulations, {userName}!</h1>
                    <div className="congrats-badge">
                        <Award size={20} />
                        <span>COURSE COMPLETED</span>
                    </div>
                    <p className="success-description">
                        You have successfully mastered <strong>{courseTitle}</strong>.
                        Your dedication and hard work have paid off!
                    </p>

                    <div className="certificate-preview-container">
                        <Certificate
                            userName={userName}
                            courseTitle={courseTitle}
                            isStatic={true}
                        />
                    </div>

                    <div className="action-buttons">
                        <button
                            className="btn-primary-success"
                            onClick={handleDownloadCert}
                            disabled={isDownloading}
                        >
                            <Download size={20} />
                            {isDownloading ? 'GENERATING...' : 'DOWNLOAD CERTIFICATE (PDF)'}
                        </button>
                        <button
                            className="btn-secondary-success"
                            onClick={() => navigate('/dashboard')}
                        >
                            <ArrowLeft size={18} />
                            BACK TO DASHBOARD
                        </button>
                    </div>
                </div>

                <div className="next-steps-section">
                    <h3>Next Steps for You</h3>
                    <div className="next-steps-grid">
                        <div className="step-card">
                            <div className="step-num">01</div>
                            <h4>Share on LinkedIn</h4>
                            <p>Showcase your achievement to your professional network.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-num">02</div>
                            <h4>Explore AI Interviews</h4>
                            <p>Test your new skills with our AI-powered mock interviews.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-num">03</div>
                            <h4>Join Alumni Network</h4>
                            <p>Connect with other graduates and industry mentors.</p>
                        </div>
                    </div>
                </div>
            </div>

            {showCertificate && (
                <Certificate
                    userName={userName}
                    courseTitle={courseTitle}
                    onClose={() => setShowCertificate(false)}
                />
            )}
        </div>
    );
};

export default SuccessPage;
