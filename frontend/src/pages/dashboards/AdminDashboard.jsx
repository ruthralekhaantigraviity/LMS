
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  CalendarCheck, 
  LogOut, 
  Plus, 
  MoreVertical,
  TrendingUp,
  UserPlus,
  Edit,
  Trash2,
  Mail,
  Shield
} from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle';
import Modal from '../../components/Modal';
import { useToast } from '../../context/ToastContext';
import '../../styles/Dashboards.css';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('overview');
    
    // Modal States
    const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
    const [isEditCourseModalOpen, setIsEditCourseModalOpen] = useState(false);
    const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);
    const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);
    
    const [openMenuId, setOpenMenuId] = useState(null);
    const [editingCourse, setEditingCourse] = useState(null);
    const [editingStaff, setEditingStaff] = useState(null);

    // Data States
    const [leads, setLeads] = useState([]);
    const [staffList, setStaffList] = useState([
        { id: 1, name: 'Sarah Connor', role: 'HR Admissions', email: 'sarah@fic.com', status: 'online' },
        { id: 2, name: 'David Miller', role: 'Lead Trainer', email: 'david@fic.com', status: 'online' },
        { id: 3, name: 'John Wick', role: 'Instructor', email: 'john@fic.com', status: 'offline' },
    ]);

    const [courseList, setCourseList] = useState([
        { id: 1, title: 'Full Stack Web Dev', cat: 'Tech', dur: '6 Months', price: '₹49,999', status: 'Active' },
        { id: 2, title: 'Data Science Specialization', cat: 'Tech', dur: '8 Months', price: '₹65,000', status: 'Active' },
        { id: 3, title: 'UI/UX Design Masterclass', cat: 'Design', dur: '3 Months', price: '₹25,000', status: 'Draft' },
        { id: 4, title: 'Cloud Computing (AWS)', cat: 'Tech', dur: '4 Months', price: '₹35,000', status: 'Active' },
    ]);

    const [newCourse, setNewCourse] = useState({ title: '', cat: 'tech', price: '' });
    const [newStaff, setNewStaff] = useState({ name: '', email: '', role: 'HR Admissions', password: '' });

    useEffect(() => {
        const storedLeads = JSON.parse(localStorage.getItem('scaler_leads') || '[]');
        setLeads(storedLeads);

        // Load admin courses
        const storedCourses = JSON.parse(localStorage.getItem('fic_courses'));
        if (storedCourses && storedCourses.length > 0) {
            setCourseList(storedCourses);
        }
    }, [activeTab]); // Refresh when tab changes

    // --- Course Actions ---
    const handleAddCourse = (e) => {
        e.preventDefault();
        const courseToAdd = {
            id: Date.now(),
            title: newCourse.title,
            cat: newCourse.cat.charAt(0).toUpperCase() + newCourse.cat.slice(1),
            dur: 'Self-Paced',
            price: `₹${Number(newCourse.price).toLocaleString()}`,
            status: 'Active'
        };
        const updatedCourses = [courseToAdd, ...courseList];
        setCourseList(updatedCourses);
        localStorage.setItem('fic_courses', JSON.stringify(updatedCourses));
        setIsCourseModalOpen(false);
        setNewCourse({ title: '', cat: 'tech', price: '' });
        addToast('Course added successfully!', 'success');
    };

    const handleEditCourseClick = (course) => {
        setEditingCourse({ ...course, rawPrice: course.price.replace(/[^\d]/g, '') });
        setIsEditCourseModalOpen(true);
        setOpenMenuId(null);
    };

    const handleUpdateCourse = (e) => {
        e.preventDefault();
        const updatedPrice = `₹${Number(editingCourse.rawPrice).toLocaleString()}`;
        const updatedCourses = courseList.map(c => 
            c.id === editingCourse.id ? { ...editingCourse, price: updatedPrice } : c
        );
        setCourseList(updatedCourses);
        localStorage.setItem('fic_courses', JSON.stringify(updatedCourses));
        setIsEditCourseModalOpen(false);
        setEditingCourse(null);
        addToast('Course updated successfully!', 'success');
    };

    const handleDeleteCourse = (id) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            const updatedCourses = courseList.filter(c => c.id !== id);
            setCourseList(updatedCourses);
            localStorage.setItem('fic_courses', JSON.stringify(updatedCourses));
            addToast('Course deleted', 'error');
        }
    };

    // --- Staff Actions ---
    const handleAddStaff = (e) => {
        e.preventDefault();
        const staffToAdd = {
            id: Date.now(),
            ...newStaff,
            status: 'online'
        };
        setStaffList([staffToAdd, ...staffList]);
        setIsStaffModalOpen(false);
        setNewStaff({ name: '', email: '', role: 'HR Admissions', password: '' });
        addToast('Staff member registered!', 'success');
    };

    const handleEditStaffClick = (staff) => {
        setEditingStaff({ ...staff });
        setIsEditStaffModalOpen(true);
        setOpenMenuId(null);
    };

    const handleUpdateStaff = (e) => {
        e.preventDefault();
        setStaffList(prev => prev.map(s => s.id === editingStaff.id ? editingStaff : s));
        setIsEditStaffModalOpen(false);
        setEditingStaff(null);
        addToast('Staff profile updated', 'success');
    };

    const handleDeleteStaff = (id) => {
        if (window.confirm('Are you sure you want to remove this staff member?')) {
            setStaffList(prev => prev.filter(s => s.id !== id));
            addToast('Staff member removed', 'error');
        }
    };

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    return (
        <div className="dashboard-container admin-dashboard" onClick={() => setOpenMenuId(null)}>
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2>FIC ACADEMY</h2>
                    <div className="user-badge admin">
                        <Shield size={14} /> Administrator
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <button className={activeTab === 'overview' ? 'active' : ''} onClick={(e) => { e.stopPropagation(); setActiveTab('overview'); }}>
                        <LayoutDashboard size={20} /> Overview
                    </button>
                    <button className={activeTab === 'courses' ? 'active' : ''} onClick={(e) => { e.stopPropagation(); setActiveTab('courses'); }}>
                        <BookOpen size={20} /> Manage Courses
                    </button>
                    <button className={activeTab === 'staff' ? 'active' : ''} onClick={(e) => { e.stopPropagation(); setActiveTab('staff'); }}>
                        <Users size={20} /> Manage Staff
                    </button>
                    <button className={activeTab === 'bookings' ? 'active' : ''} onClick={(e) => { e.stopPropagation(); setActiveTab('bookings'); }}>
                        <CalendarCheck size={20} /> All Bookings
                    </button>
                    <button className="logout-btn" onClick={logout}>
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            <main className="dashboard-content">
                <header className="content-header">
                    <div className="header-title">
                        <h1>{activeTab === 'staff' ? 'Staff Management' : activeTab === 'bookings' ? 'Bookings' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                        <p>Welcome back, {user?.name}</p>
                    </div>
                    <div className="header-actions">
                        <ThemeToggle />
                        <div className="trainer-status-pill">
                            <span className="pulse-dot"></span> System Live
                        </div>
                    </div>
                </header>

                <div className="content-body">
                    {activeTab === 'overview' && (
                        <div className="overview-cards">
                            <div className="stat-card">
                                <h3>Active Courses</h3>
                                <p>{courseList.length}</p>
                                <span className="trend-up"><TrendingUp size={14} /> +2 this month</span>
                            </div>
                            <div className="stat-card">
                                <h3>Total Staff</h3>
                                <p>{staffList.length}</p>
                                <span className="trend-neutral">Lead Trainers: 1</span>
                            </div>
                            <div className="stat-card">
                                <h3>New Bookings</h3>
                                <p>{leads.length}</p>
                                <span className="trend-up"><TrendingUp size={14} /> +{leads.length > 0 ? 'Live' : '0%'}</span>
                            </div>
                            <div className="stat-card">
                                <h3>Revenue</h3>
                                <p>₹12.4L</p>
                                <span className="trend-up"><TrendingUp size={14} /> +8%</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'courses' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Course Inventory</h3>
                                <button className="add-btn" onClick={(e) => { e.stopPropagation(); setIsCourseModalOpen(true); }}><Plus size={18} /> Add Course</button>
                            </div>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th>Category</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseList.map(course => (
                                        <tr key={course.id}>
                                            <td><strong>{course.title}</strong></td>
                                            <td>{course.cat}</td>
                                            <td>{course.dur}</td>
                                            <td>{course.price}</td>
                                            <td><span className={`badge ${course.status.toLowerCase()}`}>{course.status}</span></td>
                                            <td className="actions-cell">
                                                <div className="action-wrapper">
                                                    <button className="icon-btn" onClick={(e) => { e.stopPropagation(); toggleMenu(course.id); }}>
                                                        <MoreVertical size={16} />
                                                    </button>
                                                    {openMenuId === course.id && (
                                                        <div className="small-action-menu">
                                                            <button className="action-btn-small edit" onClick={() => handleEditCourseClick(course)}>
                                                                <Edit size={14} /> Edit
                                                            </button>
                                                            <button className="action-btn-small delete" onClick={() => handleDeleteCourse(course.id)}>
                                                                <Trash2 size={14} /> Delete
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'staff' && (
                        <div className="manage-section">
                            <div className="section-header">
                                <h3>Personnel Directory</h3>
                                <button className="add-btn" onClick={(e) => { e.stopPropagation(); setIsStaffModalOpen(true); }}><UserPlus size={18} /> Add Staff</button>
                            </div>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staffList.map(staff => (
                                        <tr key={staff.id}>
                                            <td><strong>{staff.name}</strong></td>
                                            <td><span className="badge info">{staff.role}</span></td>
                                            <td>{staff.email}</td>
                                            <td><span className={`badge ${staff.status === 'online' ? 'active' : 'draft'}`}>{staff.status}</span></td>
                                            <td className="actions-cell">
                                                <div className="action-wrapper">
                                                    <button className="icon-btn" onClick={(e) => { e.stopPropagation(); toggleMenu(`staff-${staff.id}`); }}>
                                                        <MoreVertical size={16} />
                                                    </button>
                                                    {openMenuId === `staff-${staff.id}` && (
                                                        <div className="small-action-menu">
                                                            <button className="action-btn-small edit" onClick={() => handleEditStaffClick(staff)}>
                                                                <Edit size={14} /> Edit
                                                            </button>
                                                            <button className="action-btn-small delete" onClick={() => handleDeleteStaff(staff.id)}>
                                                                <Trash2 size={14} /> Delete
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'bookings' && (
                        <div className="manage-section">
                            <div className="section-header"><h3>Recent Live Class Bookings</h3></div>
                            <table className="data-table">
                                <thead>
                                    <tr><th>Student</th><th>Program</th><th>Contact</th><th>Status</th></tr>
                                </thead>
                                <tbody>
                                    {leads.map(lead => (
                                        <tr key={lead.id}>
                                            <td><strong>{lead.name}</strong></td>
                                            <td>{lead.program}</td>
                                            <td>{lead.email} <br/> <small>{lead.phone}</small></td>
                                            <td><span className={`badge ${lead.status}`}>{lead.status}</span></td>
                                        </tr>
                                    ))}
                                    {leads.length === 0 && (
                                        <tr><td colSpan="4" style={{textAlign: 'center', padding: '2rem'}}>No live class bookings yet.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>

            {/* Modals */}
            <Modal isOpen={isCourseModalOpen} onClose={() => setIsCourseModalOpen(false)} title="Add New Course">
                <form className="dashboard-form" onSubmit={handleAddCourse}>
                    <div className="form-group">
                        <label>Course Title</label>
                        <input type="text" value={newCourse.title} onChange={(e) => setNewCourse({...newCourse, title: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select value={newCourse.cat} onChange={(e) => setNewCourse({...newCourse, cat: e.target.value})}>
                            <option value="tech">Technology</option>
                            <option value="design">Design</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Price (₹)</label>
                        <input type="number" value={newCourse.price} onChange={(e) => setNewCourse({...newCourse, price: e.target.value})} required />
                    </div>
                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => setIsCourseModalOpen(false)}>Cancel</button>
                        <button type="submit" className="submit-btn">Create Course</button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isEditCourseModalOpen} onClose={() => setIsEditCourseModalOpen(false)} title="Edit Course">
                {editingCourse && (
                    <form className="dashboard-form" onSubmit={handleUpdateCourse}>
                        <div className="form-group">
                            <label>Course Title</label>
                            <input type="text" value={editingCourse.title} onChange={(e) => setEditingCourse({...editingCourse, title: e.target.value})} required />
                        </div>
                        <div className="form-group">
                            <label>Price (₹)</label>
                            <input type="number" value={editingCourse.rawPrice} onChange={(e) => setEditingCourse({...editingCourse, rawPrice: e.target.value})} required />
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => setIsEditCourseModalOpen(false)}>Cancel</button>
                            <button type="submit" className="submit-btn">Update Course</button>
                        </div>
                    </form>
                )}
            </Modal>

            <Modal isOpen={isStaffModalOpen} onClose={() => setIsStaffModalOpen(false)} title="Add Staff">
                <form className="dashboard-form" onSubmit={handleAddStaff}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" value={newStaff.name} onChange={(e) => setNewStaff({...newStaff, name: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={newStaff.email} onChange={(e) => setNewStaff({...newStaff, email: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select value={newStaff.role} onChange={(e) => setNewStaff({...newStaff, role: e.target.value})}>
                            <option value="HR Admissions">HR Admissions</option>
                            <option value="Lead Trainer">Lead Trainer</option>
                            <option value="Instructor">Instructor</option>
                        </select>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => setIsStaffModalOpen(false)}>Cancel</button>
                        <button type="submit" className="submit-btn">Register</button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isEditStaffModalOpen} onClose={() => setIsEditStaffModalOpen(false)} title="Edit Staff">
                {editingStaff && (
                    <form className="dashboard-form" onSubmit={handleUpdateStaff}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" value={editingStaff.name} onChange={(e) => setEditingStaff({...editingStaff, name: e.target.value})} required />
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <select value={editingStaff.role} onChange={(e) => setEditingStaff({...editingStaff, role: e.target.value})}>
                                <option value="HR Admissions">HR Admissions</option>
                                <option value="Lead Trainer">Lead Trainer</option>
                                <option value="Instructor">Instructor</option>
                            </select>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => setIsEditStaffModalOpen(false)}>Cancel</button>
                            <button type="submit" className="submit-btn">Update</button>
                        </div>
                    </form>
                )}
            </Modal>
        </div>
    );
};

export default AdminDashboard;
