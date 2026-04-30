
import React, { useRef } from 'react';
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

    const UnifiedIcon = ({ gradient }) => (
        <div className="unified-star-icon">
            <Stars className="star-bg" size={120} />
            <img src="/scalerlogo.svg" alt="Logo" className="scaler-icon-inner" />
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
                        <button className="toggle-btn active">Online Programs</button>
                        <button className="toggle-btn">On-Campus Programs</button>
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
                        {courses.map((course, index) => (
                            <div key={index} className="course-card-full">
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
        </section>
    );
};

export default Courses;
