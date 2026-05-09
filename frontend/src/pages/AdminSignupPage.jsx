import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, User, Phone, Key } from 'lucide-react';
import { apiUrl } from '../utils/api';
import '../styles/AdminAuth.css';

const AdminSignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student'
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl('/api/auth/register'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, phone: '0000000000' }) 
            });
            const data = await response.json();

            if (data.success) {
                alert('Account created successfully! Please login.');
                navigate('/admin/login');
            } else {
                alert(data.message || 'Signup failed');
            }
        } catch (err) {
            alert('Error connecting to server');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="admin-auth-container">
            <div className="admin-auth-card">
                <div className="admin-auth-header">
                    <div className="admin-logo-circle">
                        <ShieldCheck size={32} color="#e6005c" />
                    </div>
                    <h1>Create FIC Account</h1>
                    <p>Internal registration for FIC Academy Portal</p>
                </div>
                <form onSubmit={handleSubmit} className="admin-auth-form">
                    <div className="admin-input-group">
                        <label>Full Name</label>
                        <div className="input-with-icon">
                            <User size={18} />
                            <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="admin-input-group">
                        <label>Email Address</label>
                        <div className="input-with-icon">
                            <Mail size={18} />
                            <input type="email" name="email" placeholder="name@fic.com" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="admin-input-group">
                        <label>I am a...</label>
                        <div className="input-with-icon">
                            <ShieldCheck size={18} />
                            <select name="role" value={formData.role} onChange={handleChange} required>
                                <option value="student">Student</option>
                                <option value="trainer">Trainer / Instructor</option>
                                <option value="hr">HR Admissions</option>
                                <option value="admin">Administrator</option>
                            </select>
                        </div>
                    </div>
                    <div className="admin-input-group">
                        <label>Set Password</label>
                        <div className="input-with-icon">
                            <Lock size={18} />
                            <input type="password" name="password" placeholder="••••••••" onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit" className="admin-submit-btn" disabled={isLoading}>
                        {isLoading ? 'Processing...' : 'Create Account'}
                    </button>
                </form>
                <div className="admin-auth-footer">
                    <p>Already have an account? <Link to="/admin/login">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default AdminSignupPage;
