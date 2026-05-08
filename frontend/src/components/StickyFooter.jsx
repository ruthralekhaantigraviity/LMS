import React from 'react';
import { Facebook, Linkedin, Instagram, Globe, MapPin, Phone, CheckCircle, ChevronUp } from 'lucide-react';
import '../styles/StickyFooter.css';

const StickyFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-top-section">
                    <div className="footer-brand-section">
                        <div className="footer-logo-box">
                            <div className="footer-logo-icon">
                                <span>F</span>
                            </div>
                            <div className="footer-logo-text">
                                <span className="forge-text">FORGE INDIA</span>
                                <span className="connect-text">CONNECT</span>
                                <span className="ecosystem-text">CONNECT ECOSYSTEM</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            India's premier gateway for career placement, business excellence, and digital transformation. Bridging talent with global opportunities through a verified partner network.
                        </p>
                        <div className="footer-social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" aria-label="Website"><Globe size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-links-wrapper">
                        <div className="footer-links-column">
                            <h3 className="footer-column-title">
                                <span className="title-dot"></span> COMPANY
                            </h3>
                            <ul className="footer-links-list">
                                <li><a href="#">About FIC</a></li>
                                <li><a href="#">Our Clientele</a></li>
                                <li><a href="#">Success Stories</a></li>
                                <li><a href="#">Partner with Us</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-links-column">
                            <h3 className="footer-column-title">
                                <span className="title-dot"></span> CORE SERVICES
                            </h3>
                            <ul className="footer-links-list">
                                <li><a href="#">Job Consulting</a></li>
                                <li><a href="#">IT Solutions</a></li>
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">Insurance Services</a></li>
                                <li><a href="#">Web & App Dev</a></li>
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h3 className="footer-column-title">
                                <span className="title-dot"></span> SUPPORT
                            </h3>
                            <ul className="footer-links-list">
                                <li><a href="#">Help Center & FAQ</a></li>
                                <li><a href="#">Contact Support</a></li>
                                <li><a href="#">Member Login</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom-section">
                    <div className="footer-info-card certification-card">
                        <h4 className="card-title">
                            <CheckCircle size={16} className="text-teal" /> ISO 9001:2015 CERTIFIED
                        </h4>
                        <p className="card-text">
                            Government Approved Job Consultancy | MSME Registered | Trusted by 180+ Enterprise Partners across South India.
                        </p>
                    </div>

                    <div className="footer-info-card">
                        <h4 className="card-subtitle">HEAD OFFICE</h4>
                        <h3 className="card-location">
                            <MapPin size={16} className="text-purple" /> Krishnagiri
                        </h3>
                        <p className="card-address">
                            RK Towers, Rayakottai Rd, opposite to HP Petrol Bunk, Wahab Nagar, Krishnagiri, Tamil Nadu 635002
                        </p>
                        <p className="card-phone">
                            <Phone size={14} className="text-teal" /> +91 63694 06416
                        </p>
                    </div>

                    <div className="footer-info-card">
                        <h4 className="card-subtitle">BRANCH OFFICE</h4>
                        <h3 className="card-location">
                            <MapPin size={16} className="text-purple" /> Chennai
                        </h3>
                        <p className="card-address">
                            22, VVM Towers, 3rd Floor, Pattullos Rd, Anna Salai, Royapettah, Chennai, Tamil Nadu 600002
                        </p>
                        <p className="card-phone">
                            <Phone size={14} className="text-teal" /> +91 63694 06416
                        </p>
                    </div>

                    <div className="footer-info-card">
                        <h4 className="card-subtitle">LIAISON OFFICE</h4>
                        <h3 className="card-location">
                            <MapPin size={16} className="text-purple" /> Bangalore
                        </h3>
                        <p className="card-address">
                            Excel coworks, Marilingappa layout, Nagarbhavi, Papareddypalya, Bangalore.
                        </p>
                        <p className="card-phone">
                            <Phone size={14} className="text-teal" /> +91 63694 06416
                        </p>
                    </div>
                </div>
                
                <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
                    <ChevronUp size={24} />
                </button>
            </div>
        </footer>
    );
};

export default StickyFooter;
