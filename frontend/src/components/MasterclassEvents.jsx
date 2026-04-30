import React from 'react';
import { Calendar, Clock, TrendingUp, ExternalLink, BadgeCheck } from 'lucide-react';
import '../styles/MasterclassEvents.css';

const MasterclassEvents = () => {
    const events = [
        {
            title: "How to get an SDE Job Outside India?",
            speaker: "Tanmay Kacker",
            speakerRole: "Ex-Tech Lead, Locus",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop&crop=face",
            date: "Feb 21, 2026 | 5:00 PM",
            duration: "3 Hrs",
            registered: "1632",
        },
        {
            title: "Low-Level Design of Payment Apps",
            speaker: "Naman Bhalla",
            speakerRole: "Senior Product Manager & Lead Instructor, FIC",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&crop=face",
            date: "Feb 24, 2026 | 7:30 PM",
            duration: "3 Hrs",
            registered: "1404",
        },
        {
            title: "Master Core Redux Concepts",
            speaker: "Sabeel Khan",
            speakerRole: "Software Engineer, PayU",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop&crop=face",
            date: "Feb 26, 2026 | 7:30 PM",
            duration: "3 Hrs",
            registered: "633",
        },
        {
            title: "What does it take to become an Amazon SDE?",
            speaker: "Dhruv Sethi",
            speakerRole: "Software Development Engineer – Amazon",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&crop=face",
            date: "Feb 28, 2026 | 5:00 PM",
            duration: "3 Hrs",
            registered: "83",
        },
    ];

    return (
        <section className="mc-section">
            <div className="mc-wrapper">

                {/* Section Header */}
                <div className="mc-header">
                    <p className="mc-label">ATTEND MASTERCLASS</p>
                    <h2 className="mc-title">Your First Step To Success</h2>
                </div>

                {/* Cards Row */}
                <div className="mc-cards-row">
                    {events.map((ev, i) => (
                        <div className="mc-card" key={i}>

                            {/* Top Badges */}
                            <div className="mc-card-badges">
                                <span className="mc-badge mc-badge--upcoming">UPCOMING</span>
                                <span className="mc-badge mc-badge--cert">
                                    <BadgeCheck size={13} />
                                    CERTIFICATE
                                </span>
                            </div>

                            {/* Event Title */}
                            <h3 className="mc-card-title">{ev.title}</h3>

                            {/* Speaker Row */}
                            <div className="mc-speaker-row">
                                <img
                                    src={ev.img}
                                    alt={ev.speaker}
                                    className="mc-speaker-img"
                                />
                                <div className="mc-speaker-info">
                                    <span className="mc-speaker-by">By {ev.speaker}</span>
                                    <span className="mc-speaker-role">{ev.speakerRole}</span>
                                </div>
                            </div>

                            {/* Date + Duration */}
                            <div className="mc-meta-row">
                                <span className="mc-meta-item">
                                    <Calendar size={13} className="mc-meta-icon" />
                                    {ev.date}
                                </span>
                                <span className="mc-meta-item">
                                    <Clock size={13} className="mc-meta-icon" />
                                    {ev.duration}
                                </span>
                            </div>

                            {/* Registered Count Bar */}
                            <div className="mc-registered-bar">
                                <TrendingUp size={14} className="mc-reg-icon" />
                                <span className="mc-reg-text">
                                    <strong>{ev.registered}</strong> people have registered
                                </span>
                            </div>

                            {/* CTA Button */}
                            <button className="mc-register-btn">REGISTER NOW</button>

                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="mc-view-more-row">
                    <a href="#" className="mc-view-more-btn">
                        VIEW MORE EVENTS
                        <ExternalLink size={14} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default MasterclassEvents;
