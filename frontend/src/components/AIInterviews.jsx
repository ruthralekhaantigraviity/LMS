import React from 'react';
import { Sparkle, Bot, GraduationCap, Briefcase, Clock, Brain, FileBadge, Code, Database, Layout, Trophy, Bookmark, ArrowRight } from 'lucide-react';
import '../styles/AIInterviews.css';

const AIInterviews = () => {
    return (
        <section className="ai-section">
            <div className="ai-wrapper">
                <header className="ai-header">
                    <span className="ai-label">AI-POWERED EXPERIENCE</span>
                    <h2 className="ai-heading">Master Interviews with AI Profiles Inspired by Industry <br className="heading-br" /> Leaders</h2>

                    <div className="ai-features">
                        <div className="feature-item">
                            <Sparkle size={14} className="sparkle-icon" fill="currentColor" />
                            <span>Practice with AI profiles</span>
                        </div>
                        <div className="feature-item">
                            <Sparkle size={14} className="sparkle-icon" fill="currentColor" />
                            <span>Explore Voice-based mock interviews</span>
                        </div>
                        <div className="feature-item">
                            <Sparkle size={14} className="sparkle-icon" fill="currentColor" />
                            <span>Get instant feedback</span>
                        </div>
                    </div>
                </header>

                {/* Laptop Mockup */}
                <div className="laptop-container">
                    <div className="laptop-glow" />

                    <div className="laptop-frame">
                        <div className="laptop-screen">
                            <img src="/ai image.png" alt="AI Interview Experience" className="ai-screen-img" />
                        </div>
                    </div>
                </div>

                {/* Footer text of the section */}
                <div className="ai-section-footer">
                    <button className="btn-explore-pink">
                        EXPLORE INTERVIEWS <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AIInterviews;
