
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Users, 
  PhoneCall, 
  CheckCircle, 
  LogOut, 
  Search,
  Filter,
  Mail,
  ShieldCheck,
  FileText,
  Plus,
  ClipboardList,
  LayoutDashboard
} from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle';
import Modal from '../../components/Modal';
import { useToast } from '../../context/ToastContext';
import '../../styles/Dashboards.css';

const HRDashboard = () => {
    const { user, logout } = useAuth();
    const { addToast } = useToast();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('overview');
    
    const [leads, setLeads] = useState([]);
    
    // HR Tasks
    const [hrTasks, setHrTasks] = useState([]);
    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({ title: '', description: '', trainer: '', priority: 'Medium' });
    
    // Student Details Modal
    const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        const storedLeads = JSON.parse(localStorage.getItem('scaler_leads') || '[]');
        
        // Initial mock data if empty
        if (storedLeads.length === 0) {
            const initialMock = [
                { id: 1, name: 'Alice Johnson', email: 'alice@gmail.com', phone: '+91 98989 89898', program: 'Full Stack Web Dev', source: 'Instagram', status: 'pending', date: '2h ago' },
                { id: 2, name: 'Bob Smith', email: 'bob@yahoo.com', phone: '+91 87878 78787', program: 'Data Science', source: 'Website', status: 'pending', date: '5h ago' },
            ];
            setLeads(initialMock);
            localStorage.setItem('scaler_leads', JSON.stringify(initialMock));
        } else {
            setLeads(storedLeads);
        }

        const storedTasks = JSON.parse(localStorage.getItem('hr_trainer_tasks') || '[]');
        setHrTasks(storedTasks);
    }, []);

    const handleAction = (id, newStatus) => {
        const updatedLeads = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
        setLeads(updatedLeads);
        localStorage.setItem('scaler_leads', JSON.stringify(updatedLeads));
        
        let message = 'Status updated';
        let type = 'info';

        if (newStatus === 'active') {
            message = 'Student enrolled successfully!';
            type = 'success';
        } else if (newStatus === 'called') {
            message = 'Lead marked as called';
        } else if (newStatus === 'rejected') {
            message = 'Lead marked as rejected';
            type = 'error';
        }

        addToast(message, type);
    };

    const handleViewStudent = (student) => {
        setSelectedStudent(student);
        setIsStudentModalOpen(true);
    };

    const handleCreateHrTask = (e) => {
        e.preventDefault();
        const taskToAdd = {
            id: Date.now(),
            ...newTask,
            date: new Date().toLocaleDateString(),
            status: 'Pending'
        };
        const updatedTasks = [taskToAdd, ...hrTasks];
        setHrTasks(updatedTasks);
        localStorage.setItem('hr_trainer_tasks', JSON.stringify(updatedTasks));
        setIsCreateTaskModalOpen(false);
        setNewTask({ title: '', description: '', trainer: '', priority: 'Medium' });
        addToast('Task successfully assigned to trainer!', 'success');
    };

    return (
        <div className="dashboard-container hr-dashboard">
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2>FIC HR HUB</h2>
                    <div className="user-badge">
                        <ShieldCheck size={14} /> Admissions Team
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
                        <LayoutDashboard size={20} /> Overview Dashboard
                    </button>
                    <button className={activeTab === 'bookings' ? 'active' : ''} onClick={() => setActiveTab('bookings')}>
                        <Users size={20} /> New Inquiries
                    </button>
                    <button className={activeTab === 'followups' ? 'active' : ''} onClick={() => setActiveTab('followups')}>
                        <PhoneCall size={20} /> Follow-ups
                    </button>
                    <button className={activeTab === 'enrolled' ? 'active' : ''} onClick={() => setActiveTab('enrolled')}>
                        <CheckCircle size={20} /> Enrolled Students
                    </button>
                    <button className={activeTab === 'tasks' ? 'active' : ''} onClick={() => setActiveTab('tasks')}>
                        <FileText size={20} /> Assign Tasks
                    </button>
                    <button className="logout-btn" onClick={logout}>
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            <main className="dashboard-content">
                <header className="content-header">
                    <div className="header-title">
                        <h1>{
                            activeTab === 'overview' ? 'HR Overview' :
                            activeTab === 'bookings' ? 'New Admissions' : 
                            activeTab === 'followups' ? 'Follow-up Queue' : 
                            activeTab === 'tasks' ? 'Assign Trainer Tasks' : 
                            'Enrollment Records'
                        }</h1>
                        <p>{
                            activeTab === 'overview' ? 'Summary of your admission pipeline' :
                            activeTab === 'tasks' ? 'Create and assign operational tasks to trainers' : 
                            'Track and convert your student inquiries'
                        }</p>
                    </div>
                    <div className="header-actions">
                        <ThemeToggle />
                        <div className="search-bar-container">
                            <Search size={18} />
                            <input 
                                type="text" 
                                placeholder="Search leads..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </header>
                
                <div className="content-body">
                    {activeTab === 'overview' && (
                    <div className="overview-cards">
                        <div className="stat-card">
                            <div className="stat-icon pending"><Users size={24} /></div>
                            <div className="stat-info">
                                <h3>Pending Inquiries</h3>
                                <p>{leads.filter(b => b.status === 'pending').length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon info"><PhoneCall size={24} /></div>
                            <div className="stat-info">
                                <h3>Follow-ups</h3>
                                <p>{leads.filter(b => b.status === 'called').length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon success"><CheckCircle size={24} /></div>
                            <div className="stat-info">
                                <h3>Total Enrolled</h3>
                                <p>{leads.filter(b => b.status === 'active').length}</p>
                            </div>
                        </div>
                    </div>
                    )}
                    
                    {activeTab === 'overview' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Recent Activity</h3>
                            </div>
                            <p style={{ color: 'var(--text-muted)' }}>Welcome to your overview. Here you can see a high-level summary of all inquiries.</p>
                        </div>
                    )}

                    {activeTab !== 'tasks' && activeTab !== 'overview' && (
                    <div className="manage-section">
                        <div className="section-header">
                            <h3>Lead Management Pipeline</h3>
                            <div className="header-btns">
                                <button className="add-btn secondary"><Filter size={18} /> Advanced Filter</button>
                            </div>
                        </div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Student Details</th>
                                    <th>Course & Source</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads
                                    .filter(l => {
                                        if (activeTab === 'bookings') return l.status === 'pending';
                                        if (activeTab === 'followups') return l.status === 'called';
                                        if (activeTab === 'enrolled') return l.status === 'active';
                                        return true;
                                    })
                                    .filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                    .map(student => (
                                    <tr key={student.id}>
                                        <td>
                                            <div className="student-profile-cell">
                                                <div className="avatar-small">{student.name.charAt(0)}</div>
                                                <div className="profile-info">
                                                    <strong>{student.name}</strong>
                                                    <span>{student.email} • {student.phone}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="course-source-cell">
                                                <strong>{student.program || student.course}</strong>
                                                <span className="source-tag">{student.source || 'Direct'}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="status-cell">
                                                <span className={`badge ${student.status}`}>
                                                    <select 
                                                        className="status-select"
                                                        value={student.status}
                                                        onChange={(e) => handleAction(student.id, e.target.value)}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="called">Called</option>
                                                        <option value="active">Enrolled</option>
                                                        <option value="rejected">Rejected</option>
                                                    </select>
                                                </span>
                                                <span className="time-ago">{student.date}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="action-row">
                                                {student.status === 'pending' && (
                                                    <button className="action-btn call-btn" onClick={() => handleAction(student.id, 'called')}>
                                                        <PhoneCall size={14} /> Call
                                                    </button>
                                                )}
                                                {student.status === 'called' && (
                                                    <button className="action-btn enroll-btn" onClick={() => handleAction(student.id, 'active')}>
                                                        <CheckCircle size={14} /> Enroll
                                                    </button>
                                                )}
                                                {student.status === 'active' && (
                                                    <button className="action-btn-small view" onClick={() => handleViewStudent(student)}>
                                                        <Mail size={14} /> Message
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {leads.filter(l => {
                            if (activeTab === 'bookings') return l.status === 'pending';
                            if (activeTab === 'followups') return l.status === 'called';
                            if (activeTab === 'enrolled') return l.status === 'active';
                            return true;
                        }).length === 0 && (
                            <div className="empty-state">
                                <p>No leads found in this category.</p>
                            </div>
                        )}
                    </div>
                    )}

                    {activeTab === 'tasks' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Trainer Task Assignments</h3>
                                <button className="add-btn" onClick={() => setIsCreateTaskModalOpen(true)}>
                                    <Plus size={18} /> Assign New Task
                                </button>
                            </div>
                            <div className="assignment-grid">
                                {hrTasks.map((task) => (
                                    <div className="task-card-wide" key={task.id}>
                                        <div className="task-info-main">
                                            <div className="task-icon-bg" style={{background: 'rgba(230, 0, 92, 0.1)', color: '#e6005c'}}>
                                                <ClipboardList size={20} />
                                            </div>
                                            <div className="task-titles">
                                                <h4>{task.title}</h4>
                                                <span>Trainer: {task.trainer}</span>
                                            </div>
                                        </div>
                                        <div className="task-stats-horizontal">
                                            <div className="task-stat">
                                                <strong>{task.status}</strong>
                                                <span>Status</span>
                                            </div>
                                            <div className="task-stat">
                                                <strong>{task.date}</strong>
                                                <span>Date Assigned</span>
                                            </div>
                                            <div className="task-stat">
                                                <strong>{task.priority}</strong>
                                                <span>Priority</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {hrTasks.length === 0 && (
                                    <div className="empty-state" style={{gridColumn: '1 / -1'}}>
                                        <ClipboardList size={48} style={{opacity: 0.5, marginBottom: '1rem'}} />
                                        <p>No tasks assigned yet. Click "Assign New Task" to create one.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Create HR Task Modal */}
                <Modal isOpen={isCreateTaskModalOpen} onClose={() => setIsCreateTaskModalOpen(false)} title="Assign Task to Trainer">
                    <form className="dashboard-form" onSubmit={handleCreateHrTask}>
                        <div className="form-group">
                            <label>Task Title</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Prepare curriculum for next week" 
                                value={newTask.title}
                                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Assign To Trainer</label>
                            <select 
                                value={newTask.trainer}
                                onChange={(e) => setNewTask({...newTask, trainer: e.target.value})}
                                required
                            >
                                <option value="" disabled>Select a trainer</option>
                                <option value="All Trainers">All Trainers</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Sarah Smith">Sarah Smith</option>
                                <option value="Michael Tech">Michael Tech</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Description / Instructions</label>
                            <textarea 
                                placeholder="Details about what the trainer needs to do..." 
                                value={newTask.description}
                                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                                required
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Priority</label>
                            <select 
                                value={newTask.priority}
                                onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => setIsCreateTaskModalOpen(false)}>Cancel</button>
                            <button type="submit" className="submit-btn">Assign Task</button>
                        </div>
                    </form>
                </Modal>

                {/* Student Details / Messaging Modal */}
                <Modal isOpen={isStudentModalOpen} onClose={() => setIsStudentModalOpen(false)} title="Student File & Messaging">
                    {selectedStudent && (
                        <div className="student-details-view">
                            <div className="details-header-top">
                                <div className="avatar-large">{selectedStudent.name.charAt(0)}</div>
                                <div className="details-main-info">
                                    <h3>{selectedStudent.name}</h3>
                                    <p>{selectedStudent.email} • {selectedStudent.phone}</p>
                                    <span className="badge active">Enrolled Student</span>
                                </div>
                            </div>

                            <div className="details-grid">
                                <div className="detail-item">
                                    <label>Program Enrolled</label>
                                    <strong>{selectedStudent.program || selectedStudent.course}</strong>
                                </div>
                                <div className="detail-item">
                                    <label>Admission Date</label>
                                    <strong>{selectedStudent.date}</strong>
                                </div>
                                <div className="detail-item">
                                    <label>Source</label>
                                    <strong>{selectedStudent.source || 'Direct'}</strong>
                                </div>
                            </div>

                            <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid var(--border-color)' }} />

                            <div className="message-area">
                                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>Send Message to Student</label>
                                <textarea 
                                    placeholder="Type your message here..." 
                                    rows="4" 
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-light)', border: '1px solid var(--border-color)', color: 'var(--text-main)', resize: 'none' }}
                                ></textarea>
                                <div className="form-actions" style={{ marginTop: '1rem' }}>
                                    <button className="add-btn" onClick={() => {
                                        addToast(`Message sent to ${selectedStudent.name}!`, 'success');
                                        setIsStudentModalOpen(false);
                                    }}>Send Message</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </main>
        </div>
    );
};

export default HRDashboard;
