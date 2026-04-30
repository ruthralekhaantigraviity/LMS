import React, { useState } from 'react';
import { Search, Star, MessageSquare, ChevronDown, Download, ExternalLink, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import '../styles/AlumniPage.css';

const AlumniPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = [
        "All", "Fullstack", "Frontend", "Backend", "Data Science", "Mobile", "B.Tech", "M.Tech", "Experience 2+ yrs", "Freshers"
    ];

    const alumni = [
        {
            name: "Krishna Chaitanya",
            role: "Software Engineer III",
            company: "Google",
            location: "Bangalore",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
            preRole: "System Engineer",
            preCompany: "Infosys",
            postCompanyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            hike: "180% Salary hike after FIC",
            stars: 5,
            verified: true
        },
        {
            name: "Sandeep Rao",
            role: "SDE-2",
            company: "Microsoft",
            location: "Hyderabad",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
            preRole: "Junior Developer",
            preCompany: "TCS",
            postCompanyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            hike: "125% Salary hike after FIC",
            stars: 5,
            verified: true
        },
        {
            name: "Jagurati Tripathy",
            role: "SDE-2",
            company: "Walmart",
            location: "Bangalore",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
            preRole: "Software Engineer",
            preCompany: "Capgemini",
            postCompanyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
            hike: "140% Salary hike after FIC",
            stars: 5,
            verified: true
        },
        {
            name: "Animesh Kumar",
            role: "Backend Lead",
            company: "PayPal",
            location: "Chennai",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
            preRole: "Tech Consultant",
            preCompany: "Accenture",
            postCompanyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
            hike: "115% Salary hike after FIC",
            stars: 4,
            verified: true
        },
        {
            name: "Subham Goel",
            role: "Data Scientist",
            company: "Amazon",
            location: "Gurgaon",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
            preRole: "Analyst",
            preCompany: "Mu Sigma",
            postCompanyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            hike: "160% Salary hike after FIC",
            stars: 5,
            verified: true
        }
    ];

    return (
        <div className="alumni-page">
            <Navbar />

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <span>Home</span> <span className="separator">›</span> <span>FIC Reviews</span>
            </div>

            <div className="alumni-container">
                {/* Header Section */}
                <header className="alumni-header">
                    <div className="header-top">
                        <h1>FIC Reviews</h1>
                        <div className="rating-badge">
                            <Star size={14} fill="#fcca00" color="#fcca00" />
                            <span>4.8/5 (Based on 5,000+ reviews)</span>
                        </div>
                    </div>
                    <p className="header-desc">
                        See how FIC is transforming careers. From developers to leaders, our alumni work at the world’s most ambitious tech companies.
                    </p>
                </header>

                {/* Filter Bar */}
                <div className="filter-bar-container">
                    <div className="filter-dropdowns">
                        <div className="dropdown-item">
                            <span className="label">Institution</span>
                            <div className="select-box">
                                <span>Select Inst.</span>
                                <ChevronDown size={16} />
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <span className="label">Old Company</span>
                            <div className="select-box">
                                <span>All Companies</span>
                                <ChevronDown size={16} />
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <span className="label">New Role</span>
                            <div className="select-box">
                                <span>Search by role</span>
                                <ChevronDown size={16} />
                            </div>
                        </div>
                        <button className="btn-search-alumni">SEARCH ALUMNI</button>
                    </div>

                    <div className="pill-filters">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`pill ${selectedFilter === filter ? 'active' : ''}`}
                                onClick={() => setSelectedFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Alumni Cards */}
                <div className="alumni-grid">
                    {alumni.map((person, index) => (
                        <div key={index} className="alumni-card">
                            <div className="card-top">
                                <div className="profile-img-container">
                                    <img src={person.img} alt={person.name} className="profile-img" />
                                    {person.verified && <CheckCircle size={14} className="verified-badge" fill="#2563eb" color="#fff" />}
                                </div>
                                <div className="profile-info">
                                    <h3>{person.name}</h3>
                                    <div className="role-company">
                                        <span>{person.role}</span>
                                        <span className="dot"></span>
                                        <span>{person.company}</span>
                                    </div>
                                    <div className="location">
                                        <MapPin size={12} />
                                        <span>{person.location}</span>
                                    </div>
                                </div>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < person.stars ? "#fcca00" : "#e5e7eb"} color={i < person.stars ? "#fcca00" : "#e5e7eb"} />
                                    ))}
                                </div>
                            </div>

                            <div className="card-transition">
                                <div className="transition-box pre">
                                    <span className="label">Pre FIC</span>
                                    <p className="transition-role">{person.preRole}</p>
                                    <p className="transition-company">{person.preCompany}</p>
                                </div>
                                <div className="transition-arrow">
                                    <ArrowRight size={24} color="#d1d5db" />
                                </div>
                                <div className="transition-box post">
                                    <span className="label">Post FIC</span>
                                    <div className="company-logo-box">
                                        <img src={person.postCompanyLogo} alt="Logo" className="company-logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="card-bottom">
                                <div className="hike-badge">
                                    <CheckCircle size={14} fill="#10b981" color="#fff" />
                                    <span>{person.hike}</span>
                                </div>
                                <button className="btn-view-profile">View Profile <ExternalLink size={12} /></button>
                            </div>
                        </div>
                    ))}

                    {/* Placement Report Banner */}
                    <div className="placement-banner">
                        <div className="banner-content">
                            <div className="banner-left">
                                <h2>FIC Placement Report</h2>
                                <div className="stats">
                                    <div className="stat">
                                        <span className="val">1,200+</span>
                                        <span className="lbl">Alumni in Top MNCs</span>
                                    </div>
                                    <div className="stat">
                                        <span className="val">150%</span>
                                        <span className="lbl">Avg. Hike</span>
                                    </div>
                                    <div className="stat">
                                        <span className="val">37 LPA</span>
                                        <span className="lbl">Highest Package</span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn-download-report">
                                Download Report <Download size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="alumni-footer">
                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <a href="#">Courses</a>
                        <a href="#">Curriculum</a>
                        <a href="#">Events</a>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <a href="#">Blogs</a>
                        <a href="#">Interview Prep</a>
                        <a href="#">Case Studies</a>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Mentors</a>
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <a href="#">Contact Us</a>
                        <a href="#">FAQs</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 FIC. All rights reserved.</p>
                    <div className="socials">
                        <span className="social-icon">Twitter</span>
                        <span className="social-icon">LinkedIn</span>
                        <span className="social-icon">YT</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AlumniPage;
