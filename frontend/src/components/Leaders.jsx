import React from 'react';
import '../styles/Leaders.css';

const Leaders = () => {
    const leaders = [
        {
            name: "Anshuman Singh",
            role: "Co-Founder, FIC",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&crop=face",
            bio: "He worked with Mark Zuckerberg and led the team that built FB Messenger, before setting up FB's office outside the US."
        },
        {
            name: "Abhimanyu Saxena",
            role: "Co-Founder, FIC",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&crop=face",
            bio: "One of the first engineers at Fab.com, his passion for tech education led to the launch of FIC & InterviewBit."
        },
        {
            name: "Bhavik Rathod",
            role: "President SST",
            image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=400&auto=format&fit=crop&crop=face",
            bio: "As the head of Uber Eats in India & South Asia, he scaled the business to USD $300M in over 40 cities."
        },
        {
            name: "Saurabh Saxena",
            role: "COO, FIC & SST",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&crop=face",
            bio: "He brings invaluable experience as the founder of Alpha Growth Lab—the perfect ecosystem for start-ups."
        },
        {
            name: "Binny Bansal",
            role: "Co-Founder, Flipkart",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&crop=face",
            bio: "He is an internet entrepreneur who founded Flipkart, a leading e-commerce marketplace in the country.",
            highlight: true
        }
    ];

    const highlightLeader = leaders.find(l => l.highlight);

    return (
        <section className="leaders-section">
            <div className="leaders-banner">

                {/* Banner Title */}
                <div className="leaders-banner-header">
                    <span className="leaders-label">OUR TEAM</span>
                    <h2 className="leaders-banner-title">The Leaders Behind FIC</h2>
                </div>

                {/* Photo Row */}
                <div className="leaders-photos-row">
                    {leaders.map((leader, index) => (
                        <div key={index} className={`leader-photo-card${leader.highlight ? ' leader-photo-card--highlight' : ''}`}>
                            <div className="leader-photo-frame">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="leader-photo-img"
                                />
                            </div>
                            <div className="leader-photo-label">
                                <span className="leader-photo-name">{leader.name}</span>
                                <span className="leader-photo-role">{leader.role}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Right Description Overlay */}
                {highlightLeader && (
                    <div className="leaders-description-overlay">
                        <p className="leaders-description-text">
                            {highlightLeader.bio}
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Leaders;
