
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
  ShieldCheck
} from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle';
import { useToast } from '../../context/ToastContext';
import '../../styles/Dashboards.css';

const HRDashboard = () => {
    const { user, logout } = useAuth();
    const { addToast } = useToast();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('bookings');
    
    // Load leads from localStorage
    const [leads, setLeads] = useState([]);

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
    }, []);

    const handleAction = (id, newStatus) => {
        const updatedLeads = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
        setLeads(updatedLeads);
        localStorage.setItem('scaler_leads', JSON.stringify(updatedLeads));
        
        const message = newStatus === 'active' ? 'Student enrolled successfully!' : 'Lead status updated';
        addToast(message, newStatus === 'active' ? 'success' : 'info');
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
                    <button className={activeTab === 'bookings' ? 'active' : ''} onClick={() => setActiveTab('bookings')}>
                        <Users size={20} /> New Inquiries
                    </button>
                    <button className={activeTab === 'followups' ? 'active' : ''} onClick={() => setActiveTab('followups')}>
                        <PhoneCall size={20} /> Follow-ups
                    </button>
                    <button className={activeTab === 'enrolled' ? 'active' : ''} onClick={() => setActiveTab('enrolled')}>
                        <CheckCircle size={20} /> Enrolled Students
                    </button>
                    <button className="logout-btn" onClick={logout}>
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            <main className="dashboard-content">
                <header className="content-header">
                    <div className="header-title">
                        <h1>{activeTab === 'bookings' ? 'New Admissions' : activeTab === 'followups' ? 'Follow-up Queue' : 'Enrollment Records'}</h1>
                        <p>Track and convert your student inquiries</p>
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
                                                <span className={`badge ${student.status}`}>{student.status}</span>
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
                                                    <button className="action-btn-small view" onClick={() => addToast('Opening student file...', 'info')}>
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
                </div>
            </main>
        </div>
    );
};

export default HRDashboard;
