import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '../styles/FeaturedNews.css';

const marqueeText = Array(10).fill(null).map((_, i) => (
    <React.Fragment key={i}>
        <span className="fn-m-dim">FULL STACK</span>
        <span className="fn-m-dot"> • </span>
        <span className="fn-m-bright">DATA ANALYTICS</span>
        <span className="fn-m-dot"> • </span>
        <span className="fn-m-dim">JAVA</span>
        <span className="fn-m-dot"> • </span>
        <span className="fn-m-bright">PYTHON</span>
        <span className="fn-m-dot"> • </span>
    </React.Fragment>
));

const outlets = [
    {
        id: 'toi',
        headline: 'Google for Startups and FIC launch AI skilling program for Indian founders',
        date: 'Published by The Times of India on November 10, 2025',
    },
    {
        id: 'indiatoday',
        headline: 'IIT Madras partners with FIC to enhance BS Data science learning through digital tools',
        date: 'Published by India Today on June 05, 2025',
    },
    {
        id: 'et',
        headline: 'FIC Innovation Lab ties up with Gahan AI to develop autonomous mobility solutions for mining sector',
        date: 'Published by Economic Times on May 22, 2025',
    },
    {
        id: 'timesnow',
        headline: 'IIT Roorkee, FIC to Jointly Launch Advanced AI-Focused Courses',
        date: 'Published by Times Now on May 12, 2025',
    },
    {
        id: 'et2',
        headline: 'Edtech firm FIC appoints Vijayvargia as its new CEO',
        date: 'Published by Economic Times',
    },
];

/* SVG-based faithful logo recreations */
const LogoTOI = () => (
    <div className="fn-logo fn-logo--toi">
        <div className="fn-toi-box">
            <span className="fn-toi-text">TOI</span>
        </div>
    </div>
);

const LogoIndiaToday = () => (
    <div className="fn-logo fn-logo--it">
        <div className="fn-it-box">
            <span className="fn-it-india">INDIA</span>
            <span className="fn-it-today">TODAY</span>
        </div>
    </div>
);

const LogoET = () => (
    <div className="fn-logo fn-logo--et">
        <div className="fn-et-box">
            <span className="fn-et-text">ET</span>
        </div>
    </div>
);

const LogoTimesNow = () => (
    <div className="fn-logo fn-logo--tn">
        <div className="fn-tn-box">
            <span className="fn-tn-times">TIMES</span>
            <div className="fn-tn-now-row">
                <span className="fn-tn-n">N</span>
                <span className="fn-tn-o">O</span>
                <span className="fn-tn-w">W</span>
            </div>
        </div>
    </div>
);

const LogoET2 = () => (
    <div className="fn-logo fn-logo--et2">
        <div className="fn-et-box">
            <span className="fn-et-text">ET</span>
        </div>
    </div>
);

const logos = [LogoTOI, LogoIndiaToday, LogoET, LogoTimesNow, LogoET2];
const cardAccents = ['fn-card--toi', 'fn-card--it', 'fn-card--et', 'fn-card--tn', 'fn-card--et2'];

const FeaturedNews = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 400; // 380px card + 20px gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="fn-section">
            <div className="fn-slider-viewport">
                <div className="fn-slider-overlay left">
                    <button className="fn-arrow-btn-hover left" onClick={() => scroll('left')}>
                        <ArrowLeft size={24} />
                    </button>
                </div>

                {/* Cards row */}
                <div className="fn-cards-scroll" ref={scrollRef}>
                    <div className="fn-cards-row">
                        {outlets.map((outlet, i) => {
                            const Logo = logos[i];
                            return (
                                <div className={`fn-card ${cardAccents[i]}`} key={i}>
                                    {/* Top: gradient + logo */}
                                    <div className="fn-card-top">
                                        <Logo />
                                    </div>
                                    {/* Bottom: headline + date */}
                                    <div className="fn-card-bottom">
                                        <p className="fn-card-headline">{outlet.headline}</p>
                                        <p className="fn-card-date">{outlet.date}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="fn-slider-overlay right">
                    <button className="fn-arrow-btn-hover right" onClick={() => scroll('right')}>
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedNews;
