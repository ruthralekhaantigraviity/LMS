import React, { useState, useEffect } from 'react';
import '../styles/HeroLeft.css';

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const currentCount = Math.min(Math.floor((progress / duration) * end), end);
            setCount(currentCount);
            if (currentCount < end) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
};

const HeroLeft = () => {
    return (
        <div className="hero-left">
            {/* Media Container (Course Animation Video) */}
            <div className="hero-media-container">
                <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
                    alt="Upskill Now"
                    className="hero-video"
                    style={{ objectFit: 'cover' }}
                />

                {/* Bottom Caption */}
                <div className="hero-video-overlay">
                    <span className="subtitle-text">Master Your Skills</span>
                </div>
            </div>

            {/* Stats Section - Animated Numbers */}
            <div className="hero-stats-horizontal">
                <div className="stat-item-col">
                    <span className="stat-num-large">
                        <CountUp end={1248} />
                    </span>
                    <span className="stat-text-small">ACTIVE MEMBERS</span>
                </div>
                <div className="stat-item-col">
                    <span className="stat-num-large">
                        <CountUp end={85} />
                    </span>
                    <span className="stat-text-small">EVENTS HOSTED</span>
                </div>
                <div className="stat-item-col">
                    <span className="stat-num-large">
                        <CountUp end={300} />
                    </span>
                    <span className="stat-text-small">BUSINESS DEALS</span>
                </div>
                <div className="stat-item-col">
                    <span className="stat-num-large">
                        <CountUp end={25} />
                    </span>
                    <span className="stat-text-small">INDUSTRIES</span>
                </div>
            </div>
        </div>
    );
};

export default HeroLeft;
