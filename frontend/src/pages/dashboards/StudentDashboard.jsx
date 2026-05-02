import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  PlayCircle, 
  Book, 
  FileText, 
  LogOut, 
  Award,
  ChevronRight,
  Clock,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Volume2,
  Maximize,
  Upload,
  Download,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle';
import Modal from '../../components/Modal';
import { useToast } from '../../context/ToastContext';
import '../../styles/Dashboards.css';

const StudentDashboard = () => {
    const { user, logout } = useAuth();
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('learning');
    const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [isExamModalOpen, setIsExamModalOpen] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [passedExams, setPassedExams] = useState([]);
    const [currentExam, setCurrentExam] = useState(null);
    const [examStep, setExamStep] = useState(0);
    const [adminCourses, setAdminCourses] = useState([]);

    React.useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('fic_courses') || '[]');
        setAdminCourses(stored.filter(c => c.status === 'Active'));
    }, [activeTab]);

    const [enrolledCourses] = useState([
        { id: 1, title: 'Full Stack Web Development', instructor: 'David Miller', progress: 40, lessons: '12/30', img: 'tech-bg' },
        { id: 2, title: 'Modern UI/UX Design', instructor: 'Sarah Connor', progress: 15, lessons: '2/15', img: 'design-bg' },
    ]);

    const [assignments, setAssignments] = useState([
        { id: 1, title: 'React Todo App with Context', due: 'In 2 days', status: 'pending' },
        { id: 2, title: 'Figma Landing Page Design', due: 'In 5 days', status: 'pending' },
    ]);

    const examQuestions = [
        { q: "What is the primary purpose of React Hooks?", options: ["State Management", "Direct DOM Manipulation", "CSS Styling", "Data Fetching"], correct: 0 },
        { q: "Which hook is used for side effects?", options: ["useState", "useMemo", "useEffect", "useCallback"], correct: 2 },
        { q: "What does JSX stand for?", options: ["Java Syntax XML", "JavaScript XML", "JSON Syntax Extension", "JavaScript Xerox"], correct: 1 }
    ];

    const videoPlaylist = [
        { id: 1, title: 'Introduction to React Hooks', duration: '12:34', active: false },
        { id: 2, title: 'useState and useEffect Deep Dive', duration: '18:22', active: false },
        { id: 3, title: 'Custom Hooks Pattern', duration: '15:10', active: false },
        { id: 4, title: 'Performance Optimization', duration: '22:45', active: true },
        { id: 5, title: 'React.memo & useMemo', duration: '14:30', active: false },
    ];

    const handleOpenVideoPlayer = (course) => {
        setCurrentVideo(course || { title: 'Advanced React', module: 'Module 4: Performance Optimization' });
        setIsVideoPlayerOpen(true);
    };

    const handleOpenSubmitModal = (task) => {
        setSelectedAssignment(task);
        setIsSubmitModalOpen(true);
    };

    const handleSubmitAssignment = (e) => {
        e.preventDefault();
        setAssignments(prev => prev.map(a => 
            a.id === selectedAssignment.id ? { ...a, status: 'submitted' } : a
        ));
        setIsSubmitModalOpen(false);
        addToast(`Assignment "${selectedAssignment.title}" submitted successfully!`, 'success');
    };

    const handleStartExam = (cert) => {
        setCurrentExam(cert);
        setExamStep(0);
        setIsExamModalOpen(true);
    };

    const handleNextExamStep = () => {
        if (examStep < examQuestions.length - 1) {
            setExamStep(examStep + 1);
        } else {
            handleFinishExam();
        }
    };

    const handleFinishExam = () => {
        setPassedExams([...passedExams, currentExam.id]);
        setIsExamModalOpen(false);
        addToast(`Congratulations! You passed the exam for ${currentExam.title}`, 'success');
    };

    const handleDownloadPDF = (cert) => {
        addToast(`Generating high-quality certificate for ${cert.title}...`, 'info');
        
        setTimeout(() => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 1000;
            canvas.height = 700;

            // Background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Border
            ctx.strokeStyle = '#e6005c';
            ctx.lineWidth = 20;
            ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
            
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 2;
            ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

            // Logo Text
            ctx.fillStyle = '#e6005c';
            ctx.font = 'bold 40px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('FIC LEARNER', canvas.width / 2, 120);

            // Title
            ctx.fillStyle = '#1e293b';
            ctx.font = '30px serif';
            ctx.fillText('CERTIFICATE OF COMPLETION', canvas.width / 2, 200);

            ctx.font = '20px sans-serif';
            ctx.fillText('This is to certify that', canvas.width / 2, 260);

            // Student Name
            ctx.fillStyle = '#e6005c';
            ctx.font = 'bold 50px sans-serif';
            ctx.fillText(user?.name || 'John Student', canvas.width / 2, 340);

            // Course Details
            ctx.fillStyle = '#1e293b';
            ctx.font = '20px sans-serif';
            ctx.fillText(`has successfully completed the ${cert.domain} course:`, canvas.width / 2, 400);

            ctx.font = 'bold 35px sans-serif';
            ctx.fillText(cert.title, canvas.width / 2, 470);

            // Footer
            ctx.font = '18px sans-serif';
            ctx.fillStyle = '#64748b';
            ctx.fillText(`Issued on ${cert.date}`, canvas.width / 2, 550);
            
            ctx.font = 'italic 16px sans-serif';
            ctx.fillText('Authorized Signature: FIC Learning Team', canvas.width / 2, 620);

            // Trigger Download
            const link = document.createElement('a');
            link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            addToast(`${cert.title} Certificate downloaded!`, 'success');
        }, 2000);
    };

    return (
        <div className="dashboard-container student-dashboard">
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2>FIC LEARNER</h2>
                    <div className="user-badge student">
                        <Award size={14} /> Student Pro
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <button className={activeTab === 'learning' ? 'active' : ''} onClick={() => setActiveTab('learning')}>
                        <PlayCircle size={20} /> My Learning
                    </button>
                    <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>
                        <Book size={20} /> Browse Courses
                    </button>
                    <button className={activeTab === 'assignments' ? 'active' : ''} onClick={() => setActiveTab('assignments')}>
                        <FileText size={20} /> Assignments
                    </button>
                    <button className={activeTab === 'certificates' ? 'active' : ''} onClick={() => setActiveTab('certificates')}>
                        <Award size={20} /> Certificates
                    </button>
                    <button className="logout-btn" onClick={logout}>
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            <main className="dashboard-content">
                <header className="content-header">
                    <div className="header-title">
                        <h1>Hello, {user?.name || 'Learner'}! 👋</h1>
                        <p>You have completed 4 modules this week. Keep it up!</p>
                    </div>
                    <div className="header-actions">
                        <ThemeToggle />
                        <div className="daily-streak-pill">
                            <span>🔥 7 Day Streak</span>
                        </div>
                    </div>
                </header>
                
                <div className="content-body">
                    {activeTab === 'learning' && (
                        <>
                            <section className="currently-watching-section">
                                <div className="section-header">
                                    <h3>Continue Watching</h3>
                                </div>
                                <div className="resume-learning-card">
                                    <div className="video-preview-thumb">
                                        <PlayCircle size={40} color="white" />
                                    </div>
                                    <div className="resume-info">
                                        <span className="course-tag">Advanced React</span>
                                        <h4>Module 4: Performance Optimization</h4>
                                        <div className="progress-wrapper">
                                            <div className="progress-bar-container">
                                                <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                                            </div>
                                            <span>75% Complete</span>
                                        </div>
                                    </div>
                                    <button className="resume-btn" onClick={() => handleOpenVideoPlayer()}>
                                        Resume <ChevronRight size={18} />
                                    </button>
                                </div>
                            </section>

                            <div className="manage-section">
                                <div className="section-header">
                                    <h3>My Enrolled Courses</h3>
                                </div>
                                <div className="course-grid">
                                    {enrolledCourses.map((course, idx) => (
                                        <div className="dashboard-course-card student-card" key={idx}>
                                            <div className={`course-card-img student-img ${course.img}`}></div>
                                            <div className="course-card-body">
                                                <h4>{course.title}</h4>
                                                <p className="instructor-name">Instructor: {course.instructor}</p>
                                                <div className="progress-container">
                                                    <div className="progress-text">
                                                        <span>{course.progress}% Complete</span>
                                                        <span>{course.lessons} Lessons</span>
                                                    </div>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                                                    </div>
                                                </div>
                                                <button className="view-btn" onClick={() => handleOpenVideoPlayer(course)}>Go to Class</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'courses' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3 className="programs-section-header" style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '800' }}>ONLINE PROGRAMS</h3>
                            </div>
                            <div className="programs-grid" style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                                gap: '1.5rem' 
                            }}>
                                {/* Hardcoded Popular Programs */}
                                <div className="program-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center', transition: 'var(--transition)', cursor: 'pointer' }}>
                                    <div className="program-icon-box" style={{ background: '#0052cc', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0, color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        <div style={{ margin: 'auto' }}>{"</>"}</div>
                                    </div>
                                    <div className="program-info">
                                        <div className="program-badge popular" style={{ fontSize: '0.65rem', background: '#f59e0b', color: 'white', padding: '2px 8px', borderRadius: '4px', width: 'fit-content', fontWeight: 'bold', marginBottom: '4px' }}>POPULAR</div>
                                        <h4 className="program-title" style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>Software Development</h4>
                                        <p className="program-subtitle" style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>with Specialisation in AI</p>
                                    </div>
                                </div>

                                <div className="program-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center', transition: 'var(--transition)', cursor: 'pointer' }}>
                                    <div className="program-icon-box" style={{ background: '#9333ea', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0, color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        <div style={{ margin: 'auto' }}>≡</div>
                                    </div>
                                    <div className="program-info">
                                        <div className="program-badge popular" style={{ fontSize: '0.65rem', background: '#f59e0b', color: 'white', padding: '2px 8px', borderRadius: '4px', width: 'fit-content', fontWeight: 'bold', marginBottom: '4px' }}>POPULAR</div>
                                        <h4 className="program-title" style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>Data Science</h4>
                                        <p className="program-subtitle" style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>with Specialisation in AI</p>
                                    </div>
                                </div>

                                {/* Dynamic Admin Courses */}
                                {adminCourses.map((course) => (
                                    <div className="program-card" key={course.id} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center', transition: 'var(--transition)', cursor: 'pointer' }} onClick={() => addToast(`Exploring ${course.title}...`, 'info')}>
                                        <div className="program-icon-box" style={{ background: '#e6005c', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0, color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                            <div style={{ margin: 'auto' }}>{course.title.charAt(0)}</div>
                                        </div>
                                        <div className="program-info">
                                            <div className="program-badge new" style={{ fontSize: '0.65rem', background: '#e6005c', color: 'white', padding: '2px 8px', borderRadius: '4px', width: 'fit-content', fontWeight: 'bold', marginBottom: '4px' }}>NEW</div>
                                            <h4 className="program-title" style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>{course.title}</h4>
                                            <p className="program-subtitle" style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{course.dur} • {course.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'certificates' && (
                        <div className="certificates-view">
                            <div className="manage-section">
                                <div className="section-header">
                                    <h3>Course Certifications</h3>
                                </div>
                                <div className="certificate-grid">
                                    {[
                                        { id: 'c1', title: 'Advanced React Architecture', domain: 'Frontend Development', date: 'April 2026' },
                                        { id: 'c2', title: 'Full Stack Mastery', domain: 'Web Development', date: 'March 2026' }
                                    ].map((cert, i) => {
                                        const isUnlocked = passedExams.includes(cert.id);
                                        return (
                                            <div className={`cert-card ${!isUnlocked ? 'locked' : ''}`} key={i}>
                                                <div className="cert-badge-icon">
                                                    {isUnlocked ? <Award size={32} /> : <Book size={32} />}
                                                </div>
                                                <div className="cert-info">
                                                    <span className="cert-domain">{cert.domain}</span>
                                                    <h4>{cert.title}</h4>
                                                    <span className={`cert-status-tag ${!isUnlocked ? 'pending' : 'success'}`}>
                                                        {isUnlocked ? <CheckCircle size={12} /> : <Clock size={12} />}
                                                        {isUnlocked ? 'Exam Passed' : 'Exam Not Started'}
                                                    </span>
                                                </div>
                                                <div className="cert-footer">
                                                    {isUnlocked ? (
                                                        <>
                                                            <span className="cert-date">Issued: {cert.date}</span>
                                                            <button className="action-btn-small edit" onClick={() => handleDownloadPDF(cert)}>
                                                                <Download size={12} /> Download
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <button className="view-btn small" onClick={() => handleStartExam(cert)}>Attend Exam to Unlock</button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'assignments' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Pending Tasks</h3>
                            </div>
                            <div className="assignment-list">
                                {assignments.map((task) => (
                                    <div className="task-item" key={task.id}>
                                        <div className="task-info">
                                            <strong>{task.title}</strong>
                                            <span>Due: {task.due}</span>
                                        </div>
                                        {task.status === 'submitted' ? (
                                            <span className="badge active"><CheckCircle size={14} /> Submitted</span>
                                        ) : (
                                            <button className="view-btn small" onClick={() => handleOpenSubmitModal(task)}>Submit Now</button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Video Player Modal */}
                <Modal 
                    isOpen={isVideoPlayerOpen} 
                    onClose={() => { setIsVideoPlayerOpen(false); setIsPlaying(false); }} 
                    title={currentVideo?.module || currentVideo?.title || 'Video Player'}
                    className="video-modal"
                >
                    <div className="video-player-container">
                        <div className="video-screen">
                            <div className="video-placeholder-gradient">
                                <div className="video-center-content">
                                    <button className="play-pause-big" onClick={() => setIsPlaying(!isPlaying)}>
                                        {isPlaying ? <Pause size={48} /> : <Play size={48} />}
                                    </button>
                                    <p>{isPlaying ? 'Playing...' : 'Click to Play'}</p>
                                </div>
                                <div className="video-bottom-controls">
                                    <div className="video-progress-bar">
                                        <div className="video-progress-fill" style={{ width: isPlaying ? '35%' : '0%' }}></div>
                                    </div>
                                    <div className="video-controls-row">
                                        <div className="controls-left">
                                            <button className="control-btn" onClick={() => setIsPlaying(!isPlaying)}>
                                                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                                            </button>
                                            <button className="control-btn"><SkipBack size={16} /></button>
                                            <button className="control-btn"><SkipForward size={16} /></button>
                                            <span className="time-display">08:12 / 22:45</span>
                                        </div>
                                        <div className="controls-right">
                                            <button className="control-btn"><Volume2 size={16} /></button>
                                            <button className="control-btn"><Maximize size={16} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video-playlist">
                            <h4>Playlist</h4>
                            {videoPlaylist.map((v) => (
                                <div className={`playlist-item ${v.active ? 'active' : ''}`} key={v.id}>
                                    <PlayCircle size={14} />
                                    <span className="playlist-title">{v.title}</span>
                                    <span className="playlist-dur">{v.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal>

                {/* Submit Assignment Modal */}
                <Modal isOpen={isSubmitModalOpen} onClose={() => setIsSubmitModalOpen(false)} title={`Submit: ${selectedAssignment?.title}`}>
                    <form className="dashboard-form" onSubmit={handleSubmitAssignment}>
                        <div className="form-group">
                            <label>Assignment</label>
                            <input type="text" value={selectedAssignment?.title || ''} disabled />
                        </div>
                        <div className="form-group">
                            <label>GitHub Repository Link</label>
                            <input type="url" placeholder="https://github.com/your-repo" required />
                        </div>
                        <div className="form-group">
                            <label>Notes for Instructor</label>
                            <textarea placeholder="Any additional notes..." rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Attach Files</label>
                            <div className="file-upload-area">
                                <Upload size={24} />
                                <p>Drag & drop files or click to browse</p>
                                <input type="file" style={{ display: 'none' }} />
                            </div>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => setIsSubmitModalOpen(false)}>Cancel</button>
                            <button type="submit" className="submit-btn">Submit Assignment</button>
                        </div>
                    </form>
                </Modal>

                {/* Exam Modal */}
                <Modal isOpen={isExamModalOpen} onClose={() => setIsExamModalOpen(false)} title={`Final Exam: ${currentExam?.title}`}>
                    <div className="exam-container">
                        <div className="exam-progress-header">
                            <span>Question {examStep + 1} of {examQuestions.length}</span>
                            <div className="exam-timer"><Clock size={14} /> 14:55 remaining</div>
                        </div>
                        <div className="exam-question-box">
                            <h3>{examQuestions[examStep].q}</h3>
                            <div className="exam-options-grid">
                                {examQuestions[examStep].options.map((opt, i) => (
                                    <button key={i} className="exam-option-btn" onClick={handleNextExamStep}>
                                        <div className="option-letter">{String.fromCharCode(65 + i)}</div>
                                        <span>{opt}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="exam-footer">
                            <button className="cancel-btn" onClick={() => setIsExamModalOpen(false)}>Quit Exam</button>
                            <div className="helper-text"><HelpCircle size={14} /> Choose the most appropriate answer</div>
                        </div>
                    </div>
                </Modal>
            </main>
        </div>
    );
};

export default StudentDashboard;
