
import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-wrapper">

                {/* Main Headline */}
                <div className="hero-header">
                    <h1 className="hero-title">
                        Become the Top 1% in Tech
                    </h1>
                </div>

                {/* Two Column Layout */}
                <div className="hero-grid">

                    {/* Left Column - Stats & Info (Image Removed) */}
                    <div className="left-col">
                        {/* Only keeping stats if they are in HeroLeft, or we can just remove this col */}
                        <HeroLeft /> 
                    </div>

                    {/* Right Column - Form */}
                    <div className="right-col">
                        <HeroRight />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
