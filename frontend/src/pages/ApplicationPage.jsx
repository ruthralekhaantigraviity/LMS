import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/ApplicationPage.css';

const PROGRAMS = [
    'Academy (Software Development)',
    'Data Science',
    'AI & Machine Learning',
    'DevOps',
];

const COUNTRY_CODES = ['+91', '+1', '+44'];

const GRAD_YEARS = ['2024', '2023', '2022', '2021', '2020', 'Earlier'];
const COMPANIES = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Netflix', 'Other'];
const JOB_TITLES = ['Software Engineer', 'Product Manager', 'Data Scientist', 'Designer', 'Other'];

const ApplicationPage = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState('');
    const [codeOpen, setCodeOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState('+91');
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [verificationState, setVerificationState] = useState('idle'); // 'idle', 'verifying', 'success'

    const navigate = useNavigate();

    // New states for expanded dropdowns
    const [gradOpen, setGradOpen] = useState(false);
    const [selectedGrad, setSelectedGrad] = useState('');
    const [companyOpen, setCompanyOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [jobOpen, setJobOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    const dropdownRef = useRef(null);
    const codeRef = useRef(null);
    const gradRef = useRef(null);
    const companyRef = useRef(null);
    const jobRef = useRef(null);

    const handleCheckbox = () => {
        if (verificationState !== 'idle') return;
        setVerificationState('verifying');
        setTimeout(() => setVerificationState('success'), 2000);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
            if (codeRef.current && !codeRef.current.contains(e.target)) {
                setCodeOpen(false);
            }
            if (gradRef.current && !gradRef.current.contains(e.target)) {
                setGradOpen(false);
            }
            if (companyRef.current && !companyRef.current.contains(e.target)) {
                setCompanyOpen(false);
            }
            if (jobRef.current && !jobRef.current.contains(e.target)) {
                setJobOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="apply-overlay">
            <div className="apply-modal">
                <Link to="/" className="close-btn-apply">
                    <X size={20} />
                </Link>

                <div className="apply-modal-outline">
                    <div className="apply-modal-inner">
                        <div className="apply-content">
                            <h2 className="apply-title">Ready to become a Rockstar Developer?</h2>

                            <form className="apply-form" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
                                {/* Program Dropdown */}
                                <div className="input-group">
                                    <label className="input-label">Your Topic of Interest*</label>
                                    <div className="custom-select-wrapper" ref={dropdownRef}>
                                        <button
                                            type="button"
                                            className={`custom-select-btn ${dropdownOpen ? 'open' : ''}`}
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            <span className={selectedProgram ? 'selected-text' : 'placeholder-text'}>
                                                {selectedProgram || 'Select Program'}
                                            </span>
                                            {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </button>
                                        {dropdownOpen && (
                                            <div className="custom-dropdown-list">
                                                {PROGRAMS.map((prog) => (
                                                    <div
                                                        key={prog}
                                                        className={`custom-dropdown-item ${selectedProgram === prog ? 'active' : ''}`}
                                                        onClick={() => { setSelectedProgram(prog); setDropdownOpen(false); }}
                                                    >
                                                        {prog}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <input type="text" placeholder="Enter Name" className="apply-input" />
                                <input type="email" placeholder="Enter Email" className="apply-input" />

                                {/* Phone Row — custom country code + phone input */}
                                <div className={`phone-section-container ${isPhoneFocused ? 'expanded' : ''}`}>
                                    <div className="phone-row">
                                        {/* Custom Country Code Picker */}
                                        <div className="cc-wrapper" ref={codeRef}>
                                            <button
                                                type="button"
                                                className="cc-btn"
                                                onClick={() => setCodeOpen(!codeOpen)}
                                            >
                                                <span>{selectedCode}</span>
                                                <ChevronDown size={14} />
                                            </button>
                                            {codeOpen && (
                                                <div className="cc-dropdown">
                                                    {COUNTRY_CODES.map((code) => (
                                                        <div
                                                            key={code}
                                                            className={`cc-option ${selectedCode === code ? 'active' : ''}`}
                                                            onClick={() => { setSelectedCode(code); setCodeOpen(false); }}
                                                        >
                                                            {code}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <input
                                            type="tel"
                                            placeholder="Enter Phone"
                                            className="apply-input phone-input"
                                            onFocus={() => setIsPhoneFocused(true)}
                                        />
                                    </div>

                                    {isPhoneFocused && (
                                        <div className="expanded-fields">
                                            {/* Graduation Year Dropdown */}
                                            <div className="expand-input-wrapper" ref={gradRef}>
                                                <div className="custom-select-wrapper dark-theme-select">
                                                    <button
                                                        type="button"
                                                        className={`apply-input expand-input ${gradOpen ? 'open' : ''}`}
                                                        onClick={() => setGradOpen(!gradOpen)}
                                                    >
                                                        <span className={selectedGrad ? 'selected-text' : 'placeholder-text'}>
                                                            {selectedGrad || 'Graduation Year'}
                                                        </span>
                                                        <ChevronDown size={18} className="expand-chevron" />
                                                    </button>
                                                    {gradOpen && (
                                                        <div className="custom-dropdown-list">
                                                            {GRAD_YEARS.map((year) => (
                                                                <div
                                                                    key={year}
                                                                    className={`custom-dropdown-item ${selectedGrad === year ? 'active' : ''}`}
                                                                    onClick={() => { setSelectedGrad(year); setGradOpen(false); }}
                                                                >
                                                                    {year}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Company Dropdown */}
                                            <div className="expand-input-wrapper" ref={companyRef}>
                                                <div className="custom-select-wrapper dark-theme-select">
                                                    <button
                                                        type="button"
                                                        className={`apply-input expand-input ${companyOpen ? 'open' : ''}`}
                                                        onClick={() => setCompanyOpen(!companyOpen)}
                                                    >
                                                        <span className={selectedCompany ? 'selected-text' : 'placeholder-text'}>
                                                            {selectedCompany || 'Company'}
                                                        </span>
                                                        <ChevronDown size={18} className="expand-chevron" />
                                                    </button>
                                                    {companyOpen && (
                                                        <div className="custom-dropdown-list">
                                                            {COMPANIES.map((comp) => (
                                                                <div
                                                                    key={comp}
                                                                    className={`custom-dropdown-item ${selectedCompany === comp ? 'active' : ''}`}
                                                                    onClick={() => { setSelectedCompany(comp); setCompanyOpen(false); }}
                                                                >
                                                                    {comp}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Job Title Dropdown */}
                                            <div className="expand-input-wrapper" ref={jobRef}>
                                                <div className="custom-select-wrapper dark-theme-select">
                                                    <button
                                                        type="button"
                                                        className={`apply-input expand-input ${jobOpen ? 'open' : ''}`}
                                                        onClick={() => setJobOpen(!jobOpen)}
                                                    >
                                                        <span className={selectedJob ? 'selected-text' : 'placeholder-text'}>
                                                            {selectedJob || 'Job Title'}
                                                        </span>
                                                        <ChevronDown size={18} className="expand-chevron" />
                                                    </button>
                                                    {jobOpen && (
                                                        <div className="custom-dropdown-list">
                                                            {JOB_TITLES.map((job) => (
                                                                <div
                                                                    key={job}
                                                                    className={`custom-dropdown-item ${selectedJob === job ? 'active' : ''}`}
                                                                    onClick={() => { setSelectedJob(job); setJobOpen(false); }}
                                                                >
                                                                    {job}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Cloudflare Verification Widget */}
                                            <div className="cloudflare-widget">
                                                <div className="widget-content">
                                                    {verificationState === 'idle' ? (
                                                        <div className="cf-checkbox-row" onClick={handleCheckbox}>
                                                            <div className="cf-checkbox"></div>
                                                            <span className="cf-checkbox-label">I am human</span>
                                                        </div>
                                                    ) : verificationState === 'verifying' ? (
                                                        <>
                                                            <div className="cf-loading">
                                                                <div className="dot-spinner">
                                                                    {[...Array(8)].map((_, i) => (
                                                                        <div key={i} className={`dot dot-${i + 1}`}></div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <span className="verifying-text">Verifying...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="success-icon">
                                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="12" cy="12" r="10" fill="#22c55e" />
                                                                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <span className="success-text">Success!</span>
                                                        </>
                                                    )}
                                                    <div className="cloudflare-brand">
                                                        <div className="cf-logo-row">
                                                            <span className="cf-text">CLOUDFLARE</span>
                                                            <svg className="cf-cloud" viewBox="0 0 24 24" width="24" height="24">
                                                                <path fill="#f48120" d="M17.5,19c-3.1,0-5.7-2.1-6.4-5h-0.1c-0.1,0-0.2,0-0.3,0c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c0.3,0,0.6,0.1,0.9,0.2 C12.3,5.9,14,5,16,5c2.8,0,5.1,2.1,5.5,4.8c1.4,0.4,2.5,1.7,2.5,3.2C24,14.7,22.7,18.4,17.5,19z" />
                                                                <path fill="#f6ad3c" d="M17.5,19c-3.1,0-5.7-2.1-6.4-5h-0.1c-0.1,0-0.2,0-0.3,0c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c0.3,0,0.6,0.1,0.9,0.2 C12.3,5.9,14,5,16,5c1.4,0,2.6,0.5,3.6,1.4C18.6,6.3,17,7,15.6,8.4c-0.4,0.4-0.8,0.9-1.1,1.4c-0.4,0.7-0.7,1.5-0.8,2.3h-0.1 c-0.1,0-0.2,0-0.3,0c-0.4,0-0.8,0.1-1.2,0.2c0.4,2.5,2.4,4.4,4.8,4.7c0.2,0,0.4,0,0.6,0c2.5,0,4.7-1.8,5.2-4.2 c0.1-0.3,0.1-0.6,0.1-0.9c0-1.4-1.1-2.5-2.5-2.5C20.3,6.2,19,5,17.5,5z" />
                                                            </svg>
                                                        </div>
                                                        <div className="cf-links">
                                                            <a href="#">Privacy</a>
                                                            <span>•</span>
                                                            <a href="#">Help</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button type="submit" className="btn-continue">CONTINUE</button>

                                <p className="account-text">
                                    Already have an account? <Link to="/login" className="blue-link">Click here</Link>
                                </p>
                                <p className="footer-terms">
                                    By creating an account I have read and agree to <a href="#" className="blue-link">Terms</a> and <a href="#" className="blue-link">Privacy Policy</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationPage;
