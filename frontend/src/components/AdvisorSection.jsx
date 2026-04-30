import React from 'react';
import '../styles/AdvisorSection.css';

const ScalerDotsLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <g transform="rotate(0 12 12)">
            <rect x="11.5" y="6" width="2" height="2" transform="rotate(45 12.5 7)" />
            <rect x="9.5" y="9" width="2" height="2" transform="rotate(45 10.5 10)" />
            <rect x="13.5" y="9" width="2" height="2" transform="rotate(45 14.5 10)" />
            <rect x="7.5" y="12" width="2" height="2" transform="rotate(45 8.5 13)" />
            <rect x="11.5" y="12" width="2" height="2" transform="rotate(45 12.5 13)" />
            <rect x="15.5" y="12" width="2" height="2" transform="rotate(45 16.5 13)" />
            <rect x="5.5" y="15" width="2" height="2" transform="rotate(45 6.5 16)" />
            <rect x="9.5" y="15" width="2" height="2" transform="rotate(45 10.5 16)" />
            <rect x="13.5" y="15" width="2" height="2" transform="rotate(45 14.5 16)" />
            <rect x="17.5" y="15" width="2" height="2" transform="rotate(45 18.5 16)" />
        </g>
    </svg>
);

const PlayStoreIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3L20 12L4 21V3Z" stroke="white" strokeWidth="1.2" />
        <path d="M4 3L13 12L4 21" stroke="white" strokeWidth="1.2" />
        <path d="M20 12L4 12" stroke="white" strokeWidth="1.2" />
        <path d="M4.5 3.5L20.5 12.5L4.5 21.5V3.5Z" stroke="rgba(255,0,0,0.3)" strokeWidth="0.5" />
        <path d="M3.5 2.5L19.5 11.5L3.5 20.5V2.5Z" stroke="rgba(0,255,255,0.3)" strokeWidth="0.5" />
    </svg>
);

const footerLinks = {
    'Explore FIC': [
        { label: 'Software Development', highlight: false },
        { label: 'Data Science & Machine Learning', highlight: false },
        { label: 'DevOps', highlight: false },
        { label: 'Advanced AI & Machine Learning', highlight: false },
        { label: 'Masters in Software Development', highlight: false },
        { label: 'Masters in Data Science & ML', highlight: false },
        { label: 'Masters in DevOps', highlight: true },
        { label: 'FIC School of Technology', highlight: false },
        { label: 'FIC School of Business', highlight: false },
        { label: 'AI Engineering Advanced Certification by IIT-Roorkee, CEC', highlight: false },
    ],
    Resources: [
        { label: 'Alumni Reviews' },
        { label: 'Blogs' },
        { label: 'Contact Us' },
        { label: 'Careers' },
        { label: 'Terms of Use' },
        { label: 'Privacy Policy' },
    ],
    Others: [
        { label: 'About us' },
        { label: 'Become a Mentor', highlight: true },
        { label: 'Become a TA' },
        { label: 'Hire from us', highlight: true },
    ],
    Socials: [
        { label: 'Youtube', icon: '▶' },
        { label: 'LinkedIn', icon: 'in' },
        { label: 'Facebook', icon: 'f' },
        { label: 'Instagram', icon: '⬡' },
        { label: 'Twitter', icon: '𝕏' },
        { label: 'Quora', icon: 'Q' },
    ],
};

const AdvisorSection = () => (
    <div className="as-root">

        {/* ── HERO PANEL ── */}
        <section className="as-hero">

            {/* Left */}
            <div className="as-hero-left">
                <h2 className="as-heading">Talk to our Advisor</h2>

                <p className="as-andget">AND GET</p>

                <ul className="as-benefits">
                    <li>
                        <span className="as-spark">✦</span>
                        Personalized <strong>Career Roadmap</strong>
                    </li>
                    <li>
                        <span className="as-spark">✦</span>
                        Free <strong>Career Counselling</strong>
                    </li>
                    <li>
                        <span className="as-spark">✦</span>
                        Free Access to <strong>FIC Events</strong>
                    </li>
                </ul>

                <a href="#" className="as-cta-btn">REQUEST A CALL &nbsp;↗</a>
            </div>

            {/* Right */}
            <div className="as-hero-right">
                <div className="as-tri as-tri--topleft" />
                <div className="as-tri as-tri--topright" />
                <div className="as-tri as-tri--bottomright" />

                <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop&crop=face,top"
                    alt="Career Advisor"
                    className="as-advisor-img"
                />
            </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="as-footer">
            <div className="as-footer-inner">

                {/* Col 1 — Brand */}
                <div className="as-footer-brand">
                    <div className="as-scaler-logo">
                        FIC <span className="as-logo-icon">
                            <ScalerDotsLogo />
                        </span>
                    </div>
                    <a href="#" className="as-app-btn">
                        <span className="as-play-icon">
                            <PlayStoreIcon />
                        </span>
                        <span>DOWNLOAD APP<br />NOW</span>
                    </a>
                    <p className="as-address">
                        <strong>Address</strong><br />
                        InterviewBit Software Services Private Limited<br />
                        3th Floor, Surya Park II<br />
                        14, 3rd cross, Pampapura Agrahara<br />
                        Electronic City Rd, Electronic City Phase 1,<br />
                        Electronic City, Bengaluru, Karnataka 560100
                    </p>
                    <div className="as-certs">
                        <div className="as-cert-circle as-cert-iso">
                            <span className="as-cert-top">ISO 27001</span>
                            <span className="as-cert-mid">R-Date</span>
                        </div>
                        <div className="as-cert-circle as-cert-soc">
                            <span className="as-cert-top">SOC 2</span>
                            <span className="as-cert-mid">Verified</span>
                        </div>
                    </div>
                </div>

                {/* Col 2–5 — Link columns */}
                {Object.entries(footerLinks).map(([heading, links]) => (
                    <div className="as-footer-col" key={heading}>
                        <h4 className="as-footer-heading">{heading}</h4>
                        <ul className="as-footer-list">
                            {links.map((link, i) => {
                                const label = typeof link === 'string' ? link : link.label;
                                const icon = typeof link === 'object' ? link.icon : null;
                                const hl = typeof link === 'object' ? link.highlight : false;
                                return (
                                    <li key={i}>
                                        <a href="#" className={`as-footer-link${hl ? ' as-footer-link--hl' : ''}`}>
                                            {icon && <span className="as-social-icon">{icon}</span>}
                                            {label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}

            </div>

            {/* ── BOTTOM BAR — #CREATE IMPACT + staircase ── */}
            <div className="as-footer-bottom">
                <div className="as-create-impact">
                    <span>#CREATE</span>
                    <span>IMPACT</span>
                </div>
                <div className="as-staircase">
                    <img
                        src="https://images.unsplash.com/photo-1508175800969-525c72a047dd?q=80&w=600&auto=format&fit=crop"
                        alt="Staircase to opportunity"
                        className="as-staircase-img"
                    />
                </div>
            </div>

        </footer>

    </div>
);

export default AdvisorSection;
