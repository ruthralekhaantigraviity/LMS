
import React, { useState } from 'react';
import '../styles/SettingsPage.css';
import { ChevronDown, Phone, MapPin, Mail, User, Info, Youtube, Linkedin, Facebook, Twitter, Instagram, Smartphone, Eye } from 'lucide-react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('account');

    const renderForm = () => {
        if (activeTab === 'account') {
            return (
                <form className="settings-form">
                    <div className="form-group">
                        <label>Name<span className="required">*</span></label>
                        <input type="text" defaultValue={localStorage.getItem('userName') || ''} className="settings-input" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number<span className="required">*</span></label>
                        <div className="phone-input-split">
                            <div className="country-box">
                                <img src="https://flagcdn.com/w20/in.png" alt="India" className="flag-icon" />
                                <span>+91</span>
                                <ChevronDown size={14} />
                            </div>
                            <input type="tel" defaultValue="6369960835" className="settings-input phone-number-field" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Pincode<span className="required">*</span></label>
                            <input type="text" placeholder="Pincode" className="settings-input" />
                        </div>
                        <div className="form-spacer"></div>
                    </div>

                    <div className="form-group">
                        <label>Street Address<span className="required">*</span></label>
                        <input type="text" placeholder="Flat/House No.,/Floor/Building" className="settings-input address-input" />
                        <input type="text" placeholder="Colony/Street/Locality" className="settings-input address-input" />
                    </div>

                    <div className="form-group">
                        <label>Landmark</label>
                        <input type="text" className="settings-input" />
                    </div>

                    {/* Help Banner */}
                    <div className="help-banner">
                        <span className="help-icon">👤</span>
                        <span>Need Help? Talk to us at <b>08047939623</b> or <button className="request-call-link">Request a Call</button></span>
                    </div>

                    <div className="form-group">
                        <label>City<span className="required">*</span></label>
                        <input type="text" placeholder="City" className="settings-input" />
                    </div>

                    <div className="form-group">
                        <label>State<span className="required">*</span></label>
                        <input type="text" placeholder="State" className="settings-input" />
                    </div>

                    <div className="form-group">
                        <label>T-Shirt Size</label>
                        <div className="select-wrapper">
                            <select className="settings-input settings-select">
                                <option>Select T-Shirt Size</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                            <ChevronDown size={18} className="select-arrow" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Username<span className="required">*</span></label>
                        <input type="text" defaultValue={`${(localStorage.getItem('userName') || 'user').toLowerCase().replace(/\s/g, '')}_${Math.random().toString(36).substring(2, 7)}`} className="settings-input" />
                    </div>

                    <div className="form-group">
                        <label>Email Address<span className="required">*</span></label>
                        <input type="email" defaultValue="kathiresans0502@gmail.com" className="settings-input disabled-input" readOnly />
                    </div>

                    <div className="form-group">
                        <label>Time Zone<span className="required">*</span></label>
                        <div className="select-wrapper">
                            <select className="settings-input settings-select">
                                <option>Select Time Zone</option>
                                <option>(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            </select>
                            <ChevronDown size={18} className="select-arrow" />
                        </div>
                    </div>

                    <button type="submit" className="update-details-btn">
                        Update Account Details
                    </button>
                </form>
            );
        } else if (activeTab === 'academic') {
            return (
                <form className="settings-form academic-form">
                    <div className="form-group">
                        <label>Country<span className="required">*</span></label>
                        <div className="select-wrapper">
                            <div className="settings-input settings-select-visual">
                                <img src="https://flagcdn.com/w20/in.png" alt="India" className="flag-icon-select" />
                                <span>India</span>
                            </div>
                            <ChevronDown size={18} className="select-arrow" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Phone Number<span className="required">*</span></label>
                        <div className="phone-input-split">
                            <div className="country-box">
                                <img src="https://flagcdn.com/w20/in.png" alt="India" className="flag-icon" />
                                <span>+91</span>
                                <ChevronDown size={14} />
                            </div>
                            <input type="tel" defaultValue="6369960835" className="settings-input phone-number-field" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Grad Year<span className="required">*</span></label>
                        <p className="field-hint">(Please add the future graduation year if still studying)</p>
                        <div className="select-wrapper">
                            <select className="settings-input settings-select">
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                            </select>
                            <ChevronDown size={18} className="select-arrow" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Years of Experience<span className="required">*</span></label>
                        <p className="field-hint">(Years of full time Software Engineering experience)</p>
                        <div className="experience-cols">
                            <div className="select-wrapper flex-1">
                                <select className="settings-input settings-select">
                                    <option>0 Years</option>
                                    <option>1 Year</option>
                                    <option>2 Years</option>
                                </select>
                                <ChevronDown size={18} className="select-arrow" />
                            </div>
                            <div className="select-wrapper flex-1">
                                <select className="settings-input settings-select">
                                    <option>0 Months</option>
                                    <option>1 Month</option>
                                    <option>2 Months</option>
                                </select>
                                <ChevronDown size={18} className="select-arrow" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>College/University<span className="required">*</span></label>
                        <div className="select-wrapper">
                            <select className="settings-input settings-select">
                                <option value="">Enter college/university name</option>
                            </select>
                            <ChevronDown size={18} className="select-arrow" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Degree<span className="required">*</span></label>
                        <div className="select-wrapper">
                            <select className="settings-input settings-select">
                                <option value="">Select Degree</option>
                            </select>
                            <ChevronDown size={18} className="select-arrow" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Branch<span className="required">*</span></label>
                        <div className="select-wrapper">
                            <select className="settings-input settings-select">
                                <option value="">Select Branch</option>
                            </select>
                            <ChevronDown size={18} className="select-arrow" />
                        </div>
                    </div>

                    {/* Help Banner */}
                    <div className="help-banner">
                        <span className="help-icon">👤</span>
                        <span>Need Help? Talk to us at <b>08047939623</b> or <button className="request-call-link">Request a Call</button></span>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Enter you CGPA" className="settings-input" />
                    </div>

                    <button type="submit" className="update-details-btn academic-btn">
                        Update Academic Profile
                    </button>
                </form>
            );
        } else if (activeTab === 'job') {
            return (
                <form className="settings-form job-form">
                    <div className="job-section">
                        <div className="section-header">
                            <h3>Profile Headline <Info size={16} className="info-icon-small" /></h3>
                        </div>
                        <textarea
                            placeholder="Write a short introduction (300 characters max)"
                            className="settings-textarea"
                            maxLength={300}
                        ></textarea>
                    </div>

                    <div className="job-section">
                        <div className="section-header">
                            <h3>Experiences</h3>
                            <button type="button" className="add-link-red">+ Add Experiences</button>
                        </div>
                        <p className="section-hint">Experiences added here would be reflected on your default resume</p>

                        <div className="experience-item-card">
                            <div className="exp-left">
                                <div className="exp-info">
                                    <span className="exp-company">Google</span>
                                    <span className="exp-duration">1 mo</span>
                                </div>
                                <div className="exp-role">Frontend Engineer</div>
                                <div className="exp-dates">Feb 2026 - Present</div>
                            </div>
                            <div className="exp-actions">
                                <button type="button" className="icon-btn-gray">✎</button>
                                <button type="button" className="icon-btn-gray">🗑</button>
                            </div>
                        </div>
                    </div>

                    <div className="job-section">
                        <div className="section-header">
                            <h3>Notice Period</h3>
                            <div className="select-wrapper notice-select">
                                <select className="settings-input settings-select">
                                    <option>Select your notice period du...</option>
                                </select>
                                <ChevronDown size={18} className="select-arrow" />
                            </div>
                        </div>
                    </div>

                    <div className="job-section">
                        <div className="section-header">
                            <h3>Skills</h3>
                            <button type="button" className="add-link-red">+ Add Skills</button>
                        </div>
                        <p className="section-hint">Skills added here would be reflected on your default resume</p>

                        <div className="empty-skills-container">
                            <p className="no-skills-text">No Skills Added</p>
                            <p className="no-skills-subtext">Please add skills by clicking the button above.</p>
                        </div>
                    </div>

                    <div className="job-section resume-section">
                        <label className="resume-label">Connect LinkedIn or Upload Resume<span className="required">*</span></label>
                        <div className="resume-actions-row">
                            <button type="button" className="linkedin-btn">Connect LinkedIn</button>
                            <button type="button" className="upload-btn">Upload Resume</button>
                        </div>
                        <p className="resume-format-hint">Note: Resumes in PDF format tend to get better response.<br />Allowed formats: .pdf, .doc, .docx</p>
                    </div>

                    <button type="submit" className="update-details-btn job-update-btn">
                        Update Job Profile
                    </button>
                </form>
            );
        } else if (activeTab === 'social') {
            return (
                <form className="settings-form social-form">
                    <div className="social-input-group">
                        <label className="social-platform-label">
                            <img src="/ib-icon.png" alt="" className="platform-icon" />
                            InterviewBit Profile
                        </label>
                        <input type="text" placeholder="Add profile link" className="settings-input" />
                    </div>

                    <div className="social-input-group">
                        <label className="social-platform-label">
                            <img src="/cf-icon.png" alt="" className="platform-icon" />
                            Codeforces Profile
                        </label>
                        <input type="text" placeholder="Add profile link" className="settings-input" />
                    </div>

                    <div className="social-input-group">
                        <label className="social-platform-label">
                            <img src="/cc-icon.png" alt="" className="platform-icon" />
                            CodeChef Profile
                        </label>
                        <input type="text" placeholder="Add profile link" className="settings-input" />
                    </div>

                    <div className="social-input-group">
                        <label className="social-platform-label">
                            <img src="/hr-icon.png" alt="" className="platform-icon" />
                            HackerRank Profile
                        </label>
                        <input type="text" placeholder="Add profile link" className="settings-input" />
                    </div>

                    <div className="social-input-group">
                        <label className="social-platform-label">
                            <img src="/he-icon.png" alt="" className="platform-icon" />
                            HackerEarth Profile
                        </label>
                        <input type="text" placeholder="Add profile link" className="settings-input" />
                    </div>

                    <div className="social-input-group">
                        <label className="social-platform-label">
                            <img src="/li-icon.png" alt="" className="platform-icon" />
                            LinkedIn Profile
                        </label>
                        <input type="text" placeholder="Add profile link" className="settings-input" />
                        <p className="field-hint-social">Example: https://linkedin.com/in/your-profile</p>
                    </div>

                    <div className="contribution-header">
                        <h3>Highlight other contributions you'd like to share.</h3>
                    </div>

                    {/* Help Banner */}
                    <div className="help-banner">
                        <span className="help-icon">👤</span>
                        <span>Need Help? Talk to us at <b>08047939623</b> or <button type="button" className="request-call-link">Request a Call</button></span>
                    </div>

                    <div className="form-group">
                        <textarea
                            placeholder="Please briefly describe the content of the link you've posted above."
                            className="settings-textarea contribution-textarea"
                        ></textarea>
                    </div>

                    <div className="add-more-links-container">
                        <button type="button" className="add-more-link-btn">Add More Links</button>
                    </div>

                    <button type="submit" className="update-details-btn social-update-btn">
                        Update Social Profiles & Contributions
                    </button>
                </form>
            );
        } else if (activeTab === 'email') {
            return (
                <form className="settings-form email-form">
                    <div className="settings-field-group">
                        <label className="settings-label">Current Email</label>
                        <input type="email" value={`${(localStorage.getItem('userName') || 'user').toLowerCase().replace(/\s/g, '')}@example.com`} disabled className="settings-input disabled-input" />
                    </div>

                    <div className="settings-field-group">
                        <label className="settings-label">New Email Address<span className="required">*</span></label>
                        <input type="email" placeholder="Enter your new email address" className="settings-input" />
                    </div>

                    <div className="settings-field-group">
                        <label className="settings-label">Verify Password<span className="required">*</span></label>
                        <input type="password" placeholder="Enter your current password" className="settings-input" />
                    </div>

                    <button type="submit" className="update-details-btn">
                        Update Email
                    </button>
                </form>
            );
        } else if (activeTab === 'phone') {
            return (
                <form className="settings-form phone-form">
                    <div className="settings-field-group">
                        <label className="settings-label">New Phone Number<span className="required">*</span></label>
                        <div className="phone-input-wrapper">
                            <div className="country-code-select-wrapper">
                                <select className="country-code-select">
                                    <option>+91 (India)</option>
                                    <option>+1 (USA)</option>
                                </select>
                                <ChevronDown size={14} className="select-arrow-mini" />
                            </div>
                            <input type="tel" placeholder="Enter new phone number" className="settings-input" />
                        </div>
                        <p className="field-hint">A verification code will be sent to this number.</p>
                    </div>

                    <button type="submit" className="update-details-btn">
                        Update Phone Number
                    </button>
                </form>
            );
        } else if (activeTab === 'password') {
            return (
                <form className="settings-form password-form">
                    <div className="settings-field-group">
                        <label className="settings-label">Current Password<span className="required">*</span></label>
                        <div className="password-input-wrapper">
                            <input type="password" placeholder="Enter current password" className="settings-input" />
                            <Eye size={18} className="password-toggle-icon" />
                        </div>
                    </div>

                    <div className="settings-field-group">
                        <label className="settings-label">New Password<span className="required">*</span></label>
                        <div className="password-input-wrapper">
                            <input type="password" placeholder="Enter new password" className="settings-input" />
                            <Eye size={18} className="password-toggle-icon" />
                        </div>
                    </div>

                    <div className="settings-field-group">
                        <label className="settings-label">Confirm New Password<span className="required">*</span></label>
                        <div className="password-input-wrapper">
                            <input type="password" placeholder="Re-enter new password" className="settings-input" />
                            <Eye size={18} className="password-toggle-icon" />
                        </div>
                    </div>

                    <button type="submit" className="update-details-btn">
                        Update Password
                    </button>
                </form>
            );
        } else if (activeTab === 'notifications') {
            return (
                <div className="settings-form notifications-form">
                    <div className="notification-category">
                        <h3>General Preferences</h3>
                        <div className="notification-item">
                            <div className="notif-info">
                                <span className="notif-title">Email Notifications</span>
                                <span className="notif-desc">Receive updates about your account and programs via email.</span>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="notification-item">
                            <div className="notif-info">
                                <span className="notif-title">WhatsApp Updates</span>
                                <span className="notif-desc">Get instant alerts and reminders on WhatsApp.</span>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="notification-item">
                            <div className="notif-info">
                                <span className="notif-title">SMS Alerts</span>
                                <span className="notif-desc">Receive critical notifications via SMS.</span>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <button type="button" className="update-details-btn">
                        Save Preferences
                    </button>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="settings-page">
            {/* Verification Banner */}
            <div className="verification-banner">
                Please verify your email address. <button className="resend-btn">Resend confirmation email</button>
            </div>

            <div className="settings-container">
                <div className="settings-layout">
                    {/* Left Column - Form */}
                    <div className="settings-main">
                        {activeTab === 'account' && (
                            <div className="profile-photo-section">
                                <div className="avatar-placeholder">
                                    <img src="/user-avatar.png" alt="Profile" className="avatar-img" />
                                    <button className="change-photo-overlay">Change Photo</button>
                                </div>
                            </div>
                        )}

                        {renderForm()}
                    </div>

                    {/* Right Column - Sidebar */}
                    <aside className="settings-sidebar">
                        <nav className="settings-nav">
                            <button
                                onClick={() => setActiveTab('account')}
                                className={`nav-link-btn ${activeTab === 'account' ? 'active' : ''}`}
                            >
                                Account Details
                            </button>
                            <button
                                onClick={() => setActiveTab('academic')}
                                className={`nav-link-btn ${activeTab === 'academic' ? 'active' : ''}`}
                            >
                                Academic Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('job')}
                                className={`nav-link-btn ${activeTab === 'job' ? 'active' : ''}`}
                            >
                                Job Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('social')}
                                className={`nav-link-btn ${activeTab === 'social' ? 'active' : ''}`}
                            >
                                Social Profiles & Contributions
                            </button>
                            <button
                                onClick={() => setActiveTab('email')}
                                className={`nav-link-btn ${activeTab === 'email' ? 'active' : ''}`}
                            >
                                Change Email
                            </button>
                            <button
                                onClick={() => setActiveTab('phone')}
                                className={`nav-link-btn ${activeTab === 'phone' ? 'active' : ''}`}
                            >
                                Update Phone Number
                            </button>
                            <button
                                onClick={() => setActiveTab('password')}
                                className={`nav-link-btn ${activeTab === 'password' ? 'active' : ''}`}
                            >
                                Change Password
                            </button>
                            <button
                                onClick={() => setActiveTab('notifications')}
                                className={`nav-link-btn ${activeTab === 'notifications' ? 'active' : ''}`}
                            >
                                Notifications
                            </button>
                        </nav>
                    </aside>
                </div>
            </div>

            {/* Site Footer */}
            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <img src="/scalerlogo_blue.svg" alt="FIC" className="footer-logo" />
                            <p className="engineered-text">Engineered with <span className="heart">❤️</span> by <span className="ib-text">InterviewBit</span></p>

                            <div className="app-download">
                                <p>Download the App</p>
                                <div className="download-btns">
                                    <img src="/playstore.png" alt="Get it on Google Play" className="app-badge" />
                                </div>
                            </div>

                            <div className="social-links">
                                <p>Follow us on</p>
                                <div className="social-icons">
                                    <Youtube size={20} />
                                    <Linkedin size={20} />
                                    <Facebook size={20} />
                                    <Twitter size={20} />
                                    <Instagram size={20} />
                                    <div className="quora">Q</div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-nav">
                            <div className="footer-column">
                                <h4 className="footer-header">Explore FIC</h4>
                                <ul>
                                    <li>FIC Academy</li>
                                    <li>FIC Data Science & ML</li>
                                    <li>FIC Advanced AI & Machine Learning</li>
                                    <li>FIC DevOps and Cloud Computing</li>
                                    <li>FIC School of Technology</li>
                                    <li>FIC School of Business</li>
                                    <li>FIC Neovarsity</li>
                                    <li>Become a Mentor</li>
                                    <li>Become a TA</li>
                                    <li>Become a Career Coach</li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h4 className="footer-header">Resources</h4>
                                <ul>
                                    <li>Blog</li>
                                    <li>About us</li>
                                    <li>Contact Us</li>
                                    <li>Careers</li>
                                    <li>Review</li>
                                    <li>Join Our Discord</li>
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-tutorials">
                        <h4 className="tutorials-header">Tutorials</h4>
                        <div className="tutorial-links">
                            <span>Data Structures Tutorial</span> |
                            <span>Python Tutorial</span> |
                            <span>Java Tutorial</span> |
                            <span>DBMS Tutorial</span> |
                            <span>C Tutorial</span> |
                            <span>JavaScript Tutorial</span> |
                            <span>C++ Tutorial</span> |
                            <span>SQL Tutorial</span> |
                            <span>Data Science Tutorial</span> |
                            <span>Software Engineering Tutorial</span> |
                            <span>HTML Tutorial</span> |
                            <span>CSS Tutorial</span>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>Copyright © 2026 InterviewBit Technologies Pte. Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SettingsPage;
