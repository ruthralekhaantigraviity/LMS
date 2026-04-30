
import React from 'react';
import '../styles/HeroLeft.css';

const PlayStoreIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer triangle */}
        <path d="M4 3L20 12L4 21V3Z" stroke="white" strokeWidth="1.2" />
        {/* Inner dividing lines */}
        <path d="M4 3L13 12L4 21" stroke="white" strokeWidth="1.2" />
        <path d="M20 12L4 12" stroke="white" strokeWidth="1.2" />
        {/* Chromatic aberration effect (subtle) */}
        <path d="M4.5 3.5L20.5 12.5L4.5 21.5V3.5Z" stroke="rgba(255,0,0,0.3)" strokeWidth="0.5" />
        <path d="M3.5 2.5L19.5 11.5L3.5 20.5V2.5Z" stroke="rgba(0,255,255,0.3)" strokeWidth="0.5" />
    </svg>
);

const ScalerDotsLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <g transform="rotate(0 12 12)">
            {/* Pyramid arrangement using diamonds (rect rotated) */}
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

const HeroLeft = () => {
    return (
        <div className="hero-left">
            {/* Media Container (Instructor Image) */}
            <div className="hero-media-container">
                <video
                    src="/video 1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                />

                {/* Floating Icons strip */}
                <div className="floating-icons-strip">
                    <div className="f-icon-box">
                        <PlayStoreIcon />
                    </div>
                    <div className="f-icon-box">
                        <ScalerDotsLogo />
                    </div>
                </div>

                {/* Connecting Lines */}
                <svg className="connecting-lines" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                    <line x1="55%" y1="35%" x2="65%" y2="20%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <line x1="60%" y1="40%" x2="72%" y2="32%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <line x1="58%" y1="50%" x2="68%" y2="48%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                </svg>

                {/* Bottom Caption */}
                <div className="hero-video-overlay">
                    <span className="subtitle-text">Which is why</span>
                </div>
            </div>

            {/* Stats Below Image */}
            <div className="hero-stats">
                <div className="stat-item">
                    <div className="stat-number-group">
                        <span className="stat-number">1200</span>
                        <span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Placement Partners</span>
                </div>
                <div className="stat-item">
                    <div className="stat-number-group">
                        <span className="stat-number">15K</span>
                        <span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Careers Transformed</span>
                </div>
                <div className="stat-item">
                    <div className="stat-number-group">
                        <span className="stat-number">100</span>
                        <span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Capstone Projects</span>
                </div>
            </div>
        </div>
    );
};

export default HeroLeft;
