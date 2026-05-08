import React from 'react';
import { CheckCircle2, Briefcase, Users, Trophy, Target } from 'lucide-react';
import whyImage from '../assets/why-choose-us.png';
import '../styles/WhyChooseFIC.css';

const WhyChooseFIC = () => {
    const features = [
        "End-to-end IT solutions",
        "Industry-ready training programs",
        "Placement support ecosystem",
        "360° business support"
    ];

    return (
        <section className="why-fic-section" id="about-section">
            <div className="why-fic-container">
                <div className="why-fic-content">
                    <span className="why-label">WHY CHOOSE FIC</span>
                    <h2 className="why-heading">
                        Why Choose <span className="why-highlight">FIC?</span><br />
                        End-to-End <span className="why-highlight-blue">IT Solutions</span>
                    </h2>
                    
                    <p className="why-description">
                        Forge India Connect is a technology-first company dedicated to transforming businesses 
                        through smart digital engineering and a robust skill development ecosystem.
                    </p>

                    <div className="why-features-list">
                        {features.map((feature, index) => (
                            <div key={index} className="why-feature-item">
                                <CheckCircle2 className="why-check-icon" size={24} />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="why-stats-row">
                        <div className="why-stat-card partners">
                            <div className="why-stat-icon-box">
                                <Briefcase size={24} />
                            </div>
                            <div className="why-stat-info">
                                <h3 className="why-stat-number">500+</h3>
                                <p className="why-stat-label">VERIFIED PARTNERS</p>
                            </div>
                        </div>

                        <div className="why-stat-card candidates">
                            <div className="why-stat-icon-box">
                                <Users size={24} />
                            </div>
                            <div className="why-stat-info">
                                <h3 className="why-stat-number">10k+</h3>
                                <p className="why-stat-label">PLACED CANDIDATES</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="why-fic-image-side">
                    <div className="why-image-wrapper">
                        <img 
                            src={whyImage} 
                            alt="Team Collaboration" 
                            className="why-main-img"
                        />
                        <div className="why-floating-badge">
                            <Trophy size={20} />
                            <span>Top Rated Program</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFIC;
