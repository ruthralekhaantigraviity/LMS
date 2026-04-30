
import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import '../styles/SuccessStories.css';

const SuccessStories = () => {
    const stories = [
        {
            name: "Mohini Bansal",
            role: "Software Engineer 3 @ Walmart Labs",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
            hike: "171%",
            pre: "Khoros",
            preLogo: "https://logo.clearbit.com/khoros.com",
            post: "Walmart Labs",
            postLogo: "https://logo.clearbit.com/walmart.com"
        },
        {
            name: "Ayush Mishra",
            role: "SDE 2 @ Microsoft",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
            hike: "424%",
            pre: "Samsung",
            preLogo: "https://logo.clearbit.com/samsung.com",
            post: "Microsoft",
            postLogo: "https://logo.clearbit.com/microsoft.com"
        },
        {
            name: "Shriram Bhat",
            role: "Software Engineer 3 @ Paypal",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
            hike: "171%",
            pre: "HCL",
            preLogo: "https://logo.clearbit.com/hcltech.com",
            post: "PayPal",
            postLogo: "https://logo.clearbit.com/paypal.com"
        },
        {
            name: "Sudhanshu Gera",
            role: "Software Engineer 3 @ Walmart",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
            hike: "300%",
            pre: "Wipro Limited",
            preLogo: "https://logo.clearbit.com/wipro.com",
            post: "Walmart",
            postLogo: "https://logo.clearbit.com/walmart.com"
        }
    ];

    return (
        <section className="success-section">
            <div className="success-wrapper">

                {/* Header */}
                <div className="success-header">
                    <span className="success-subtitle">SHAPING SUCCESS STORIES SINCE 2019</span>
                    <h2 className="success-heading">Your Journey, Our Mission</h2>
                </div>

                {/* Grid */}
                <div className="success-grid">
                    {stories.map((story, index) => (
                        <div key={index} className="success-card">

                            {/* Top: Profile */}
                            <div className="card-top">
                                <img src={story.image} alt={story.name} className="profile-pic" />
                                <div className="profile-info">
                                    <h3 className="profile-name">{story.name}</h3>
                                    <p className="profile-role">{story.role}</p>
                                </div>
                            </div>

                            {/* Middle: Hike & Companies */}
                            <div className="card-stats-container">

                                {/* Companies Row (Single Line) */}
                                <div className="companies-row">

                                    {/* Pre */}
                                    <div className="company-col">
                                        <span className="stat-label">Pre FIC</span>
                                        <span className="company-name">{story.pre}</span>
                                    </div>

                                    {/* Hike Section (Middle) */}
                                    <div className="hike-section">
                                        <span className="stat-label hike-label">Salary Hike</span>
                                        <span className="hike-val">{story.hike}</span>
                                        <div className="hike-arrows">
                                            <ChevronRight size={20} />
                                            <ChevronRight size={20} />
                                            <ChevronRight size={20} />
                                        </div>
                                    </div>

                                    {/* Post */}
                                    <div className="company-col">
                                        <span className="stat-label">Post FIC</span>
                                        <img src={story.postLogo} alt={story.post} className="company-logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} />
                                        <span className="company-name-fallback" style={{ display: 'none' }}>{story.post}</span>
                                    </div>
                                </div>

                            </div>

                            {/* Second Divider */}
                            <div className="stats-divider"></div>

                            <button className="success-btn-view-profile">VIEW PROFILE</button>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <button className="bottom-cta">
                    VIEW MORE SUCCESS STORIES <ArrowUpRight size={16} />
                </button>

            </div>
        </section>
    );
};

export default SuccessStories;
