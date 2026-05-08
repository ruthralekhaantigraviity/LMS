
import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import '../styles/HeroRight.css';

const HeroRight = () => {
    const { addToast } = useToast();
    const [formData, setFormData] = useState({
        program: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.program || !formData.name || !formData.email || !formData.phone) {
            addToast('Please fill all fields', 'error');
            return;
        }

        // Save lead to localStorage so dashboards can see it
        const existingLeads = JSON.parse(localStorage.getItem('fic_leads') || '[]');
        const newLead = {
            id: Date.now(),
            ...formData,
            status: 'pending',
            date: new Date().toLocaleDateString()
        };
        
        localStorage.setItem('fic_leads', JSON.stringify([newLead, ...existingLeads]));
        
        addToast('Class booked! Our advisor will contact you soon.', 'success');
        setFormData({ program: '', name: '', email: '', phone: '' });
    };

    return (
        <div className="hero-right">
            <div className="form-card">

                <div className="form-header">
                    <h3 className="form-title">Book a Live Class, For Free!</h3>
                </div>

                <form className="form-fields" onSubmit={handleSubmit}>
                    {/* Experience Dropdown */}
                    <div>
                        <label className="form-label">Your Topic of Interest*</label>
                        <select 
                            className="form-select" 
                            value={formData.program}
                            onChange={(e) => setFormData({...formData, program: e.target.value})}
                        >
                            <option value="" disabled>Select Program</option>
                            <option value="Full Stack Python">Full Stack Python</option>
                            <option value="Full Stack MERN">Full Stack MERN</option>
                            <option value="Data Analytics">Data Analytics</option>
                            <option value="Java Full Stack">Java Full Stack</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                        </select>
                    </div>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />

                    <div className="phone-group">
                        <select className="phone-select">
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                        </select>
                        <input
                            type="tel"
                            placeholder="Enter Phone"
                            className="form-input phone-input-box"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>

                    <button type="submit" className="btn-submit">
                        BOOK FREE LIVE CLASS
                    </button>

                    <div className="limited-seats">
                        <Users size={16} />
                        <span>Limited Seats Left</span>
                    </div>

                    <p className="terms-text">
                        Already have an account? <span className="link-text">Click here</span>
                    </p>
                    <p className="terms-text terms-privacy">
                        By creating an account I have read and agree to <span className="link-text">Terms</span> and <span className="link-text">Privacy Policy</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default HeroRight;
