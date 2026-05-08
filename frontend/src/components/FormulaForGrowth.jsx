import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../styles/FormulaForGrowth.css';

const FormulaForGrowth = () => {
    const navigate = useNavigate();

    return (
        <section className="formula-section">
            <div className="formula-wrapper">

                {/* Left Content */}
                <div className="formula-content">
                    <span className="formula-label">FORMULA FOR GROWTH</span>
                    <h2 className="formula-heading">Why should you<br />upskill now?</h2>

                    <button className="btn-book-class" onClick={() => navigate('/apply')}>
                        BOOK A CLASS <ArrowUpRight size={18} />
                    </button>
                </div>

                {/* Right Video */}
                <div className="formula-video-container">
                    <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                        alt="Growth"
                        className="formula-video"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

            </div>
        </section>
    );
};

export default FormulaForGrowth;
