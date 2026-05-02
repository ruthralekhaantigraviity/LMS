
import React, { useRef, useState, useEffect } from 'react';
import Modal from './Modal';
import {
    Code,
    Database,
    Brain,
    Cloud,
    Briefcase,
    Clock,
    FileBadge,
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    ArrowRight,
    Download,
    Trophy,
    Stars,
    Layers,
    Layout,
    Bookmark,
    Globe,
    Contact,
    GraduationCap
} from 'lucide-react';
import '../styles/Courses.css';

const Courses = () => {
    const scrollRef = useRef(null);
    const [adminCourses, setAdminCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [programFilter, setProgramFilter] = useState('online');

    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem('fic_courses') || '[]');
        setAdminCourses(storedCourses);
    }, []);

    const UnifiedIcon = () => (
        <div className="unified-star-icon" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stars className="star-bg" size={120} style={{ opacity: 0.15, position: 'absolute' }} />
            <Stars size={60} color="white" strokeWidth={1.5} />
        </div>
    );

    const courses = [
        {
            title: "Software Development Course with AI Specialisation",
            gradient: "banner-solid-blue",
            icon: <Code size={70} strokeWidth={2.5} />,
            badge: "NSDC CERTIFIED",
            meta: [
                { label: "Min. work exp: 1 year", icon: <Briefcase size={14} /> },
                { label: "Duration: 9-12 months", icon: <Clock size={14} /> },
                { label: "1 Capstone project", icon: <Layers size={14} /> }
            ],
            type: "ONLINE PROGRAM",
            typeClass: "online-pill",
            isNew: false
        },
        {
            title: "Online PGP in Business & AI",
            gradient: "banner-orange",
            icon: <UnifiedIcon />,
            badge: "MANAGEMENT & AI PROGRAM",
            meta: [
                { label: "Min. work exp: 2 years", icon: <Briefcase size={14} /> },
                { label: "Duration: 12 months", icon: <Clock size={14} /> },
                { label: "Integrated with Applied AI learning", icon: <Brain size={14} /> }
            ],
            type: "ONLINE PROGRAM",
            typeClass: "online",
            isNew: true
        },
        {
            title: "AI Engineering Advanced Certification by IIT-Roorkee, CEC",
            gradient: "banner-magenta",
            icon: <UnifiedIcon />,
            badge: "DESIGNED BY IIT-R, CEC X FIC",
            meta: [
                { label: "Working as tech professionals", icon: <Briefcase size={14} /> },
                { label: "Duration: 2 Months", icon: <Clock size={14} /> },
                { label: "Hands on projects", icon: <Stars size={14} /> }
            ],
            type: "ONLINE PROGRAM",
            typeClass: "online",
            isNew: true
        },
        {
            title: "Data Science Course with AI Specialisation",
            gradient: "banner-purple",
            icon: <UnifiedIcon />,
            badge: "NSDC CERTIFIED",
            meta: [
                { label: "Min. work exp: 1 year", icon: <Briefcase size={14} /> },
                { label: "Duration: 7-18 months", icon: <Clock size={14} /> },
                { label: "50+ real-world case studies", icon: <FileBadge size={14} /> }
            ],
            type: "ONLINE PROGRAM",
            typeClass: "online",
            isNew: false
        },
        {
            title: "Bachelor's + Master's Program",
            gradient: "banner-blue-light",
            icon: <UnifiedIcon />,
            badge: "RECOMMENDED DEGREE FROM BITS",
            meta: [
                { label: "Completed 12th grade", icon: <GraduationCap size={14} /> },
                { label: "3 years + 1-year internship", icon: <Clock size={14} /> },
                { label: "Fully residential in Bangalore", icon: <Briefcase size={14} /> }
            ],
            type: "ON CAMPUS PROGRAM",
            typeClass: "campus",
            isNew: false
        },
        {
            title: "Business Program",
            gradient: "banner-green",
            icon: <UnifiedIcon />,
            badge: "DESIGNED BY BUSINESS LEADERS",
            meta: [
                { label: "Min. work exp: 1 years", icon: <Briefcase size={14} /> },
                { label: "Duration: 15 months + 3-month internship", icon: <Clock size={14} /> },
                { label: "Build your MVP", icon: <Stars size={14} /> }
            ],
            type: "ON-CAMPUS PROGRAM",
            typeClass: "campus",
            isNew: true
        },
        {
            title: "Master's in Software Development Course",
            gradient: "banner-yellow",
            icon: <UnifiedIcon />,
            badge: "DEGREE FROM WOOLF",
            meta: [
                { label: "Min. work exp: 1 year", icon: <Briefcase size={14} /> },
                { label: "Duration: 18 months", icon: <Clock size={14} /> },
                { label: "90 Transferable ECTS credits", icon: <FileBadge size={14} /> }
            ],
            type: "ONLINE PROGRAM",
            typeClass: "online",
            isNew: false
        }
    ];

    // Merge admin courses to display in the customer page
    const mappedAdminCourses = adminCourses.filter(c => c.status === 'Active').map(c => ({
        title: c.title,
        gradient: "banner-magenta",
        icon: <UnifiedIcon />,
        badge: "NEW FIC COURSE",
        meta: [
            { label: "Admin Added", icon: <Stars size={14} /> },
            { label: `Duration: ${c.dur}`, icon: <Clock size={14} /> },
            { label: `Price: ${c.price}`, icon: <Briefcase size={14} /> }
        ],
        type: "ONLINE PROGRAM",
        typeClass: "online",
        isNew: true,
        price: c.price,
        duration: c.dur
    }));

    const allCourses = [...courses, ...mappedAdminCourses];

    const filteredCourses = allCourses.filter(course => {
        if (programFilter === 'online') {
            return course.type === "ONLINE PROGRAM";
        } else {
            return course.type === "ON CAMPUS PROGRAM" || course.type === "ON-CAMPUS PROGRAM";
        }
    });

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 340; // 320px card + 20px gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="courses-section full-screen">
            <div className="courses-header-wrapper">
                <div className="courses-header-content">
                    <span className="section-label">OUR COURSES</span>
                    <h2 className="courses-heading">Programs To Help You Upskill</h2>

                    <div className="toggle-group">
                        <button 
                            className={`toggle-btn ${programFilter === 'online' ? 'active' : ''}`}
                            onClick={() => setProgramFilter('online')}
                        >
                            Online Programs
                        </button>
                        <button 
                            className={`toggle-btn ${programFilter === 'campus' ? 'active' : ''}`}
                            onClick={() => setProgramFilter('campus')}
                        >
                            On-Campus Programs
                        </button>
                    </div>
                </div>
            </div>

            <div className="slider-viewport">
                <div className="slider-overlay left">
                    <button className="arrow-btn-hover left" onClick={() => scroll('left')}>
                        <ArrowLeft size={24} />
                    </button>
                </div>

                <div className="courses-slider-container" ref={scrollRef}>
                    <div className="courses-wrapper-flex">
                        {filteredCourses.map((course, index) => (
                            <div key={index} className="course-card-full" onClick={() => setSelectedCourse(course)} style={{cursor: 'pointer'}}>
                                {/* Banner */}
                                <div className={`card-banner-v2 ${course.gradient}`}>
                                    <div className="banner-icon-large">
                                        {course.icon}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="card-body-v2">
                                    <div className="badge-row">
                                        <div className="meta-badge-v2">
                                            <Layout size={10} />
                                            <span>{course.badge}</span>
                                        </div>
                                    </div>

                                    <h3 className="course-title-v2">{course.title}</h3>

                                    <div className="meta-list-v2">
                                        {course.meta.map((m, i) => (
                                            <div key={i} className="meta-row-v2">
                                                <span className="meta-icon-v2">{m.icon}</span>
                                                <span className="meta-text-v2">{m.label}</span>
                                            </div>
                                        ))}
                                        <div className="meta-row-v2 meta-status-v2-wrapper">
                                            <div className="meta-status-v2">
                                                <span className="meta-icon-v2">
                                                    {course.typeClass === 'online-pill' ? (
                                                        <Globe size={14} strokeWidth={2.5} />
                                                    ) : (
                                                        <div className="status-dot-meta"></div>
                                                    )}
                                                </span>
                                                <span className="meta-text-v2">{course.type}</span>
                                            </div>
                                            {course.isNew && <span className="new-tag-v2">NEW</span>}
                                        </div>
                                    </div>

                                    <div className="status-row-v2">
                                    </div>

                                    <div className="card-actions-footer">
                                        <button className="btn-go-v2">GO TO PROGRAM</button>
                                        <button className="btn-brochure-v2">
                                            BROCHURE <Download size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider-overlay right">
                    <button className="arrow-btn-hover right" onClick={() => scroll('right')}>
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Course Details Modal */}
            <Modal isOpen={!!selectedCourse} onClose={() => setSelectedCourse(null)} title="Course Details & Fees">
                {selectedCourse && (
                    <div className="course-details-modal-content">
                        <div className={`card-banner-v2 ${selectedCourse.gradient}`} style={{ height: '120px', borderRadius: '12px', marginBottom: '20px' }}>
                            <div className="banner-icon-large" style={{ opacity: 0.8, transform: 'scale(0.8)' }}>
                                {selectedCourse.icon}
                            </div>
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#1a202c' }}>{selectedCourse.title}</h2>
                        <div style={{ display: 'inline-block', background: 'rgba(230, 0, 92, 0.1)', color: '#e6005c', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '20px' }}>
                            {selectedCourse.badge}
                        </div>
                        
                        <div className="course-fees-section" style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#2d3748', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Trophy size={18} color="#e6005c"/> Program Fees & Structure
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div>
                                    <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '4px' }}>Total Fees</p>
                                    <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a202c' }}>{selectedCourse.price || '₹85,000'}</p>
                                </div>
                                <div>
                                    <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '4px' }}>Duration</p>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a202c' }}>{selectedCourse.duration || selectedCourse.meta.find(m => m.label.includes('Duration'))?.label.replace('Duration: ', '') || '6 Months'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="course-highlights-section">
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#2d3748' }}>Program Highlights</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {selectedCourse.meta.map((m, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4a5568', fontSize: '0.95rem' }}>
                                        <span style={{ color: '#e6005c' }}>{m.icon}</span>
                                        {m.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-actions" style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
                            <button className="submit-btn" style={{ flex: 1, padding: '12px', background: '#e6005c', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }} onClick={() => { setSelectedCourse(null); window.location.href='/apply'; }}>Apply Now</button>
                            <button className="cancel-btn" style={{ padding: '12px 20px', background: '#edf2f7', color: '#4a5568', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }} onClick={() => setSelectedCourse(null)}>Close</button>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Courses;
