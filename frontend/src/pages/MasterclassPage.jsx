import React from 'react';
import { Search, CheckCircle, ArrowRight, Twitter, Linkedin, Github, Youtube, Instagram, Facebook } from 'lucide-react';
import Navbar from '../components/Navbar';
import '../styles/MasterclassPage.css';

const MasterclassPage = () => {
    const masterclasses = [
        {
            id: 1,
            title: "System Design for Real-Time Streaming (Locus)",
            mentor: "Tanmay Kacker",
            role: "Ex-Tech Lead, Locus",
            tags: ["High-Level Design", "Streaming"],
            description: "Learn how to build scalable real-time streaming architectures using Kafka, Spark, and Flink.",
            thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
            mentorImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop&crop=face"
        },
        {
            id: 2,
            title: "Mastering Distributed Databases at Scale",
            mentor: "Naman Bhalla",
            role: "Lead Instructor, FIC",
            tags: ["Databases", "Distributed Systems"],
            description: "Deep dive into consistency, availability, and partitioning in distributed databases like Cassandra.",
            thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=600&auto=format&fit=crop",
            mentorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&crop=face"
        },
        {
            id: 3,
            title: "Deep Dive into React Performance",
            mentor: "Sabeel Khan",
            role: "Software Engineer, PayU",
            tags: ["Frontend", "React"],
            description: "Learn advanced patterns for profiling and optimizing large-scale React applications.",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
            mentorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop&crop=face"
        }
    ];

    return (
        <div className="mp-container">
            <Navbar />

            {/* Hero Banner */}
            <section className="mp-hero">
                <div className="mp-hero-content">
                    <div className="mp-hero-left">
                        <h1 className="mp-hero-title">FIC Masterclass</h1>
                        <p className="mp-hero-desc">
                            Upskill with free live masterclasses and workshops led by top tech experts from the industry.
                        </p>
                        <div className="mp-search-container">
                            <Search size={20} className="mp-search-icon" />
                            <input type="text" placeholder="Search for masterclasses, mentors, topics..." />
                        </div>
                    </div>
                    <div className="mp-hero-right">
                        <div className="mp-mentors-preview">
                            <div className="mentor-stack">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop&crop=face" alt="Mentor" />
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&crop=face" alt="Mentor" />
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop&crop=face" alt="Mentor" />
                            </div>
                            <span className="mp-mentor-count">Join 50K+ learners learning from best mentors</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <main className="mp-main">
                <div className="mp-layout">
                    {/* Left Side: Cards */}
                    <div className="mp-list">
                        <h2 className="mp-list-title">Upcoming Live Masterclasses</h2>
                        <div className="mp-grid">
                            {masterclasses.map((mc) => (
                                <div key={mc.id} className="mp-card">
                                    <div className="mp-card-thumb">
                                        <img src={mc.thumbnail} alt={mc.title} />
                                    </div>
                                    <div className="mp-card-content">
                                        <div className="mp-card-tags">
                                            {mc.tags.map(tag => <span key={tag} className="mp-tag">{tag}</span>)}
                                        </div>
                                        <h3 className="mp-card-title">{mc.title}</h3>
                                        <div className="mp-card-mentor">
                                            <img src={mc.mentorImg} alt={mc.mentor} />
                                            <div>
                                                <p className="mp-mentor-name">{mc.mentor}</p>
                                                <p className="mp-mentor-role">{mc.role}</p>
                                            </div>
                                        </div>
                                        <p className="mp-card-desc">{mc.description}</p>
                                        <button className="mp-card-btn">REGISTER NOW <ArrowRight size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Sticky Info Box */}
                    <aside className="mp-sidebar">
                        <div className="mp-sticky-box">
                            <h3 className="mp-sticky-title">Why Join FIC Masterclass?</h3>
                            <ul className="mp-benefit-list">
                                <li>
                                    <CheckCircle size={20} className="mp-check-icon" />
                                    <div>
                                        <strong>Industry Insights</strong>
                                        <p>Learn real-world tech strategies from FAANG experts.</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="mp-check-icon" />
                                    <div>
                                        <strong>Hands-on Workshop</strong>
                                        <p>Interactive sessions with live coding and Q&A.</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="mp-check-icon" />
                                    <div>
                                        <strong>Certification</strong>
                                        <p>Boost your profile with verified completion certificates.</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="mp-check-icon" />
                                    <div>
                                        <strong>Networking</strong>
                                        <p>Connect with 50,000+ like-minded tech enthusiasts.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Dark Footer */}
            <footer className="mp-footer">
                <div className="mp-footer-content">
                    <div className="mp-footer-grid">
                        <div className="mp-footer-col">
                            <h4>FIC</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Alumni Stories</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                        <div className="mp-footer-col">
                            <h4>Programs</h4>
                            <a href="#">FIC Academy</a>
                            <a href="#">FIC Data Science</a>
                            <a href="#">FIC Neovarsity</a>
                        </div>
                        <div className="mp-footer-col">
                            <h4>Resources</h4>
                            <a href="#">Masterclass</a>
                            <a href="#">Blogs</a>
                            <a href="#">Coding Tutorials</a>
                            <a href="#">Mobile App</a>
                        </div>
                        <div className="mp-footer-col">
                            <h4>Community</h4>
                            <div className="mp-socials">
                                <Twitter size={20} />
                                <Linkedin size={20} />
                                <Github size={20} />
                                <Youtube size={20} />
                                <Instagram size={20} />
                                <Facebook size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="mp-footer-bottom">
                        <p>© 2026 FIC. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MasterclassPage;
