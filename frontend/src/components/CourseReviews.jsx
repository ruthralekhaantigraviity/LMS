import React from 'react';
import '../styles/CourseReviews.css';

const StarRating = ({ rating, color = '#f59e0b' }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const filled = i <= Math.floor(rating);
        const half = !filled && i === Math.ceil(rating) && rating % 1 >= 0.4;
        stars.push(
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none">
                {half ? (
                    <>
                        <defs>
                            <linearGradient id={`half-${i}`}>
                                <stop offset="50%" stopColor={color} />
                                <stop offset="50%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                            fill={`url(#half-${i})`}
                            stroke={color}
                            strokeWidth="1.5"
                        />
                    </>
                ) : (
                    <polygon
                        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                        fill={filled ? color : 'transparent'}
                        stroke={color}
                        strokeWidth="1.5"
                    />
                )}
            </svg>
        );
    }
    return <div className="cr-stars">{stars}</div>;
};

const marqueeItems = Array(12).fill(null).map((_, i) => (
    <React.Fragment key={i}>
        <span className="cr-marquee-dim">FULL STACK •&nbsp;</span>
        <span className="cr-marquee-bright">DATA ANALYTICS •&nbsp;</span>
        <span className="cr-marquee-dim">UI/UX •&nbsp;</span>
        <span className="cr-marquee-bright">JAVA •&nbsp;</span>
        <span className="cr-marquee-dim">PYTHON •&nbsp;</span>
    </React.Fragment>
));

const CourseReviews = () => {
    return (
        <section className="cr-section">
            {/* Header */}
            <div className="cr-header">
                <p className="cr-label">REVIEWS ABOUT US</p>
                <h2 className="cr-title">We've Made Hundreds of Learners Happy</h2>
            </div>

            {/* Two Rating Boxes */}
            <div className="cr-boxes-row">
                {/* Course Report Box */}
                <div className="cr-box">
                    <div className="cr-logo cr-logo--course">
                        <span className="cr-cr-text">COURSE<br />REPORT</span>
                    </div>
                    <div className="cr-rating-line">
                        <StarRating rating={4.7} />
                        <span className="cr-score">4.7</span>
                    </div>
                </div>

                {/* Switchup Box */}
                <div className="cr-box">
                    <div className="cr-logo cr-logo--switchup">
                        <div className="cr-switchup-icon">s</div>
                        <span className="cr-switchup-name">switchup</span>
                    </div>
                    <div className="cr-rating-line">
                        <StarRating rating={4.6} />
                        <span className="cr-score">4.6</span>
                    </div>
                </div>
            </div>

            {/* Scrolling Marquee — Row 1 */}
            <div className="cr-marquee-wrap">
                <div className="cr-marquee cr-marquee--row1">
                    <div className="cr-marquee-track">{marqueeItems}{marqueeItems}</div>
                </div>
                {/* Row 2 — offset */}
                <div className="cr-marquee cr-marquee--row2">
                    <div className="cr-marquee-track cr-marquee-track--rev">
                        {marqueeItems}{marqueeItems}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseReviews;
