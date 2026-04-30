
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/FormulaForGrowth.css';

const FormulaForGrowth = () => {
    return (
        <section className="formula-section">
            <div className="formula-wrapper">

                {/* Left Content */}
                <div className="formula-content">
                    <span className="formula-label">FORMULA FOR GROWTH</span>
                    <h2 className="formula-heading">Why should you<br />upskill now?</h2>

                    <button className="btn-book-class">
                        BOOK A CLASS <ArrowUpRight size={18} />
                    </button>
                </div>

                {/* Right Video */}
                <div className="formula-video-container">
                    <video
                        src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/085/492/original/Upskill_now.mp4?1723202727"
                        className="formula-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

            </div>
        </section>
    );
};

export default FormulaForGrowth;
