import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  BookOpen, 
  Users, 
  Clock, 
  LogOut, 
  Video, 
  FileText,
  MoreVertical,
  Mail,
  Plus,
  Edit,
  ClipboardList,
  CheckCircle
} from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle';
import Modal from '../../components/Modal';
import { useToast } from '../../context/ToastContext';
import '../../styles/Dashboards.css';

const TrainerDashboard = () => {
    const { user, logout } = useAuth();
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('courses');
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [newTask, setNewTask] = useState({ title: '', course: '', due: '', difficulty: 'Medium' });
    const [hrTasks, setHrTasks] = useState([]);

    React.useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('hr_trainer_tasks') || '[]');
        setHrTasks(storedTasks);
    }, [activeTab]);

    const [tasks, setTasks] = useState([
        { id: 1, title: 'React Hooks Deep Dive', course: 'Advanced React', submissions: 12, due: 'Tomorrow', difficulty: 'Medium' },
        { id: 2, title: 'Express Middleware Logic', course: 'Node.js Backend', submissions: 8, due: 'In 2 days', difficulty: 'Hard' },
        { id: 3, title: 'AWS S3 Integration', course: 'AWS Cloud', submissions: 0, due: 'In 4 days', difficulty: 'Medium' },
    ]);

    const [trainerCourses, setTrainerCourses] = useState([
        { id: 1, title: 'Advanced React Architecture', students: 45, progress: 65, time: 'Next Class: 4 PM', status: 'Upcoming' },
        { id: 2, title: 'Node.js Backend Mastery', students: 38, progress: 40, time: 'Next Class: Tomorrow', status: 'Upcoming' },
        { id: 3, title: 'Cloud Native Apps with AWS', students: 22, progress: 15, time: 'Next Class: Fri 10 AM', status: 'Draft' },
    ]);

    const handleLaunchClass = (id) => {
        setTrainerCourses(prev => prev.map(c => 
            c.id === id ? { ...c, status: 'Live', time: 'Class in Progress' } : c
        ));
        addToast(`Classroom launched successfully!`, 'success');
        setActiveTab('live');
    };

    const handleReviewTask = (task) => {
        setSelectedTask(task);
        setIsReviewModalOpen(true);
    };

    const handleCreateTask = (e) => {
        e.preventDefault();
        const taskToAdd = {
            id: Date.now(),
            ...newTask,
            submissions: 0
        };
        setTasks([taskToAdd, ...tasks]);
        setIsCreateTaskModalOpen(false);
        setNewTask({ title: '', course: '', due: '', difficulty: 'Medium' });
        addToast('Curriculum task created successfully!', 'success');
    };

    const handleOpenGradeEditor = (student) => {
        setSelectedStudent(student);
        setIsGradeModalOpen(true);
    };

    const handleSubmitGrade = (e) => {
        e.preventDefault();
        addToast(`Grade submitted for ${selectedStudent?.name}!`, 'success');
        setIsGradeModalOpen(false);
    };

    const handleCompleteHrTask = (taskId) => {
        const updatedTasks = hrTasks.map(t => 
            t.id === taskId ? { ...t, status: 'Completed' } : t
        );
        setHrTasks(updatedTasks);
        localStorage.setItem('hr_trainer_tasks', JSON.stringify(updatedTasks));
        addToast('Task marked as completed!', 'success');
    };

    return (
        <div className="dashboard-container trainer-dashboard">
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2>TRAINER PORTAL</h2>
                    <div className="user-badge trainer">
                        <Video size={14} /> Instructor Mode
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>
                        <BookOpen size={20} /> My Courses
                    </button>
                    <button className={activeTab === 'students' ? 'active' : ''} onClick={() => setActiveTab('students')}>
                        <Users size={20} /> My Students
                    </button>
                    <button className={activeTab === 'live' ? 'active' : ''} onClick={() => setActiveTab('live')}>
                        <Video size={20} /> Go Live
                    </button>
                    <button className={activeTab === 'assignments' ? 'active' : ''} onClick={() => setActiveTab('assignments')}>
                        <FileText size={20} /> Assignments
                    </button>
                    <button className={activeTab === 'hrtasks' ? 'active' : ''} onClick={() => setActiveTab('hrtasks')}>
                        <ClipboardList size={20} /> Admin Tasks
                    </button>
                    <button className="logout-btn" onClick={logout}>
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            <main className="dashboard-content">
                <header className="content-header">
                    <div className="header-title">
                        <h1>{activeTab === 'courses' ? 'Teaching Schedule' : activeTab === 'students' ? 'Student Progress' : activeTab === 'live' ? 'Live Classroom' : activeTab === 'hrtasks' ? 'Operational Tasks' : 'Curriculum Tasks'}</h1>
                        <p>{activeTab === 'hrtasks' ? 'Complete tasks assigned to you by Administration and HR' : 'Manage your classes and mentor your students'}</p>
                    </div>
                    <div className="header-actions">
                        <ThemeToggle />
                        <div className="trainer-status-pill">
                            <span className="pulse-dot"></span> Online
                        </div>
                    </div>
                </header>
                
                <div className="content-body">
                    {activeTab === 'courses' && (
                        <>
                            <div className="overview-cards">
                                <div className="stat-card">
                                    <div className="stat-icon info"><Users size={24} /></div>
                                    <div className="stat-info">
                                        <h3>Active Students</h3>
                                        <p>145</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon success"><Clock size={24} /></div>
                                    <div className="stat-info">
                                        <h3>Avg. Attendance</h3>
                                        <p>92%</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon pending"><BookOpen size={24} /></div>
                                    <div className="stat-info">
                                        <h3>Batches This Week</h3>
                                        <p>12 Sessions</p>
                                    </div>
                                </div>
                            </div>

                            <div className="manage-section">
                                <div className="section-header">
                                    <h3>My Active Courses</h3>
                                    <button className="add-btn" onClick={() => setIsCalendarModalOpen(true)}><Clock size={18} /> View Calendar</button>
                                </div>
                                <div className="course-grid">
                                    {trainerCourses.map((course) => (
                                        <div className="dashboard-course-card" key={course.id}>
                                            <div className="course-card-img trainer-img">
                                                <div className={`course-card-badge ${course.status.toLowerCase()}`}>{course.status}</div>
                                            </div>
                                            <div className="course-card-body">
                                                <h4>{course.title}</h4>
                                                <div className="course-card-meta">
                                                    <span><Users size={14} /> {course.students} Enrolled</span>
                                                    <span><Clock size={14} /> {course.time}</span>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="progress-text">Course Roadmap: {course.progress}%</div>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                                                    </div>
                                                </div>
                                                <div className="card-actions">
                                                    <button 
                                                        className="view-btn" 
                                                        onClick={() => handleLaunchClass(course.id)}
                                                        disabled={course.status === 'Live'}
                                                    >
                                                        {course.status === 'Live' ? 'Class in Progress' : 'Launch Classroom'}
                                                    </button>
                                                    <button className="icon-btn-small" onClick={() => addToast('Opening course settings...', 'info')}><MoreVertical size={16} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'students' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Student Roster</h3>
                            </div>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Student</th>
                                        <th>Current Course</th>
                                        <th>Last Active</th>
                                        <th>Performance</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: 'John Doe', course: 'React Architecture', last: '10m ago', perf: 'A+' },
                                        { name: 'Jane Smith', course: 'Node.js Backend', last: '1h ago', perf: 'B' },
                                        { name: 'Alex Hunt', course: 'AWS Cloud', last: 'Yesterday', perf: 'A' },
                                    ].map((s, i) => (
                                        <tr key={i}>
                                            <td><strong>{s.name}</strong></td>
                                            <td>{s.course}</td>
                                            <td>{s.last}</td>
                                            <td><span className="badge active">{s.perf}</span></td>
                                            <td><button className="action-btn-small edit" onClick={() => addToast(`Starting chat with ${s.name}...`, 'success')}><Mail size={14} /> Contact</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'live' && (
                        <div className="live-session-container">
                            {trainerCourses.some(c => c.status === 'Live') ? (
                                <div className="live-layout">
                                    <div className="video-area">
                                        <div className="video-placeholder-gradient">
                                            <div className="live-indicator-tag">
                                                <span className="pulse-dot"></span> LIVE
                                            </div>
                                            <div className="video-center-content">
                                                <Video size={64} />
                                                <h3>Broadcasting Live...</h3>
                                                <p>Course: {trainerCourses.find(c => c.status === 'Live')?.title}</p>
                                            </div>
                                            <div className="video-controls-overlay">
                                                <button className="control-btn"><Users size={16} /> 124 Viewers</button>
                                                <button className="control-btn"><Clock size={16} /> 45:12</button>
                                                <button className="end-session-btn" onClick={() => setTrainerCourses(prev => prev.map(c => ({...c, status: 'Upcoming', time: 'Next Class: 4 PM'})))}>End Session</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-sidebar">
                                        <div className="chat-container">
                                            <div className="chat-header">Live Chat</div>
                                            <div className="chat-messages">
                                                <div className="chat-msg"><strong>Alice:</strong> Hello Sir! Can you explain Hooks again?</div>
                                                <div className="chat-msg"><strong>Bob:</strong> The audio is clear. 👍</div>
                                                <div className="chat-msg"><strong>Charlie:</strong> Getting started with the lab now.</div>
                                            </div>
                                            <div className="chat-input">
                                                <input type="text" placeholder="Send a message..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <Video size={48} />
                                    <h3>No Live Session Active</h3>
                                    <p>Start a session from the "My Courses" tab to broadcast to your students.</p>
                                    <button className="add-btn" onClick={() => handleLaunchClass(trainerCourses[0].id)}>Start Quick Meeting</button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'assignments' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Active Curriculum Tasks</h3>
                                <button className="add-btn" onClick={() => setIsCreateTaskModalOpen(true)}><Plus size={18} /> Create New Task</button>
                            </div>
                            <div className="assignment-grid">
                                {tasks.map((task) => (
                                    <div className="task-card-wide" key={task.id}>
                                        <div className="task-info-main">
                                            <div className="task-icon-bg"><FileText size={20} /></div>
                                            <div className="task-titles">
                                                <h4>{task.title}</h4>
                                                <span>Course: {task.course}</span>
                                            </div>
                                        </div>
                                        <div className="task-stats-horizontal">
                                            <div className="task-stat">
                                                <strong>{task.submissions}</strong>
                                                <span>Submissions</span>
                                            </div>
                                            <div className="task-stat">
                                                <strong>{task.due}</strong>
                                                <span>Due Date</span>
                                            </div>
                                            <div className="task-stat">
                                                <strong>{task.difficulty}</strong>
                                                <span>Level</span>
                                            </div>
                                        </div>
                                        <button className="view-btn small" onClick={() => handleReviewTask(task)}>Review Submissions</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'hrtasks' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Tasks from HR & Administration</h3>
                            </div>
                            <div className="assignment-grid">
                                {hrTasks.map((task) => (
                                    <div className={`task-card-wide ${task.status === 'Completed' ? 'completed-task' : ''}`} key={task.id}>
                                        <div className="task-info-main">
                                            <div className="task-icon-bg" style={{background: task.status === 'Completed' ? 'rgba(32, 201, 151, 0.1)' : 'rgba(102, 126, 234, 0.1)', color: task.status === 'Completed' ? '#20c997' : '#667eea'}}>
                                                {task.status === 'Completed' ? <CheckCircle size={20} /> : <ClipboardList size={20} />}
                                            </div>
                                            <div className="task-titles">
                                                <h4 style={{ textDecoration: task.status === 'Completed' ? 'line-through' : 'none', color: task.status === 'Completed' ? '#a0aec0' : 'inherit' }}>{task.title}</h4>
                                                <span>Assigned: {task.date} • Priority: {task.priority}</span>
                                            </div>
                                        </div>
                                        <div className="task-description-box" style={{ padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '6px', fontSize: '0.9rem', color: '#cbd5e0', flex: 1, margin: '0 1rem' }}>
                                            {task.description}
                                        </div>
                                        {task.status !== 'Completed' ? (
                                            <button className="view-btn small" onClick={() => handleCompleteHrTask(task.id)}>Mark Completed</button>
                                        ) : (
                                            <div style={{ color: '#20c997', fontWeight: 600, fontSize: '0.9rem', padding: '0 1rem' }}>Done ✓</div>
                                        )}
                                    </div>
                                ))}
                                {hrTasks.length === 0 && (
                                    <div className="empty-state" style={{gridColumn: '1 / -1'}}>
                                        <CheckCircle size={48} style={{color: '#20c997', opacity: 0.5, marginBottom: '1rem'}} />
                                        <p>You have no pending operational tasks from HR!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Submissions Modal */}
                <Modal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} title={`Submissions: ${selectedTask?.title}`}>
                    <div className="manage-section no-shadow" style={{ padding: 0, border: 'none' }}>
                        <table className="data-table">
                            <thead>
                                <tr><th>Student</th><th>Status</th><th>Action</th></tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'John Doe', status: 'Graded' },
                                    { name: 'Jane Smith', status: 'Pending Review' },
                                    { name: 'Alex Hunt', status: 'Late Submission' },
                                ].map((s, i) => (
                                    <tr key={i}>
                                        <td>{s.name}</td>
                                        <td><span className={`badge ${s.status === 'Graded' ? 'active' : 'pending'}`}>{s.status}</span></td>
                                        <td><button className="action-btn-small edit" onClick={() => handleOpenGradeEditor(s)}><Edit size={12} /> Grade</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Modal>

                {/* Calendar Modal */}
                <Modal isOpen={isCalendarModalOpen} onClose={() => setIsCalendarModalOpen(false)} title="Teaching Schedule">
                    <div className="calendar-mini">
                        <div className="calendar-header-days">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                        <div className="calendar-grid-mini">
                            {Array.from({ length: 31 }).map((_, i) => (
                                <div key={i} className={`calendar-day ${(i+1) === 5 ? 'has-event' : ''}`}>
                                    {i + 1}
                                    {(i+1) === 5 && <div className="event-dot"></div>}
                                </div>
                            ))}
                        </div>
                        <div className="upcoming-events-list">
                            <h4>Events for May 05</h4>
                            <div className="event-item-mini">
                                <div className="event-time">04:00 PM</div>
                                <div className="event-desc">
                                    <strong>React Advanced</strong>
                                    <span>Live Session • Batch A</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

                {/* Create Task Modal */}
                <Modal isOpen={isCreateTaskModalOpen} onClose={() => setIsCreateTaskModalOpen(false)} title="Create New Task">
                    <form className="dashboard-form" onSubmit={handleCreateTask}>
                        <div className="form-group">
                            <label>Task Title</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Build a REST API" 
                                value={newTask.title}
                                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Course</label>
                            <select 
                                value={newTask.course}
                                onChange={(e) => setNewTask({...newTask, course: e.target.value})}
                                required
                            >
                                <option value="" disabled>Select a course</option>
                                {trainerCourses.map(c => (
                                    <option key={c.id} value={c.title}>{c.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Due Date</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Tomorrow or In 3 days" 
                                value={newTask.due}
                                onChange={(e) => setNewTask({...newTask, due: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Difficulty Level</label>
                            <select 
                                value={newTask.difficulty}
                                onChange={(e) => setNewTask({...newTask, difficulty: e.target.value})}
                            >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => setIsCreateTaskModalOpen(false)}>Cancel</button>
                            <button type="submit" className="submit-btn">Create Task</button>
                        </div>
                    </form>
                </Modal>

                {/* Grading Modal */}
                <Modal isOpen={isGradeModalOpen} onClose={() => setIsGradeModalOpen(false)} title={`Grade Submission: ${selectedStudent?.name}`}>
                    <form className="dashboard-form" onSubmit={handleSubmitGrade}>
                        <div className="form-group">
                            <label>Assignment</label>
                            <input type="text" value={selectedTask?.title} disabled />
                        </div>
                        <div className="form-group">
                            <label>Marks (Out of 100)</label>
                            <input type="number" placeholder="Enter score" required min="0" max="100" />
                        </div>
                        <div className="form-group">
                            <label>Feedback</label>
                            <textarea placeholder="Write feedback to the student..." rows="4"></textarea>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => setIsGradeModalOpen(false)}>Cancel</button>
                            <button type="submit" className="submit-btn">Submit Grade</button>
                        </div>
                    </form>
                </Modal>
            </main>
        </div>
    );
};

export default TrainerDashboard;
