import React, { useRef } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const scrollRef = useRef(null);

    const testimonials = [
        {
            name: "Imran Khan",
            role: "Recruitment Manager",
            company: "TechMojo",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop",
            text: "It was incredible working with FIC. The applicants are great at critical thinking and ideating. We have made quite a number of offers and most of them have joined us."
        },
        {
            name: "Shantanu Bhombe",
            role: "Manager- Talent Acquisition",
            company: "Joveo",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
            text: "I would like to thank FIC Academy for nurturing a pool of talented engineers who became part of our team in the last few months."
        },
        {
            name: "Zoheab Rehaman",
            role: "Chief of Staff and Head TA/HR",
            company: "Pocket 52",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
            text: "I consider FIC as a Partner to our growth. Folks at FIC are immensely talented with high attention to detail. FIC focuses on quality over quantity- Making our hiring easier."
        },
        {
            name: "Bharat Goyal",
            role: "Co-Founder & CPTO @ Mystifly",
            company: "",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop",
            type: "video"
        },
        {
            name: "Sneha Reddy",
            role: "SDE II @ Microsoft",
            company: "",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop",
            text: "\"FIC was the turning point in my career. The curriculum is extremely structured and relevant to what the industry needs today. The mentorship I received was world-class.\"",
            type: "quote"
        }
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 412; // 380px card + 32px gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-wrapper">
                {/* Header */}
                <div className="testimonials-header">
                    <span className="testimonial-subtitle">OUR LEARNERS' WORKS SPEAKS FOR THEM</span>
                    <h2 className="testimonial-heading">Hear What The Industry Has To Say</h2>
                </div>

                <div className="slider-viewport">
                    <div className="slider-overlay left">
                        <button className="arrow-btn-hover left" onClick={() => scroll('left')}>
                            <ArrowLeft size={24} />
                        </button>
                    </div>

                    <div className="testimonials-slider-container" ref={scrollRef}>
                        <div className="testimonials-wrapper-flex">
                            {testimonials.map((t, index) => (
                                <div key={index} className="t-card">
                                    {t.type === 'video' ? (
                                        <>
                                            <div
                                                className="video-thumbnail"
                                                style={{ backgroundImage: `url(${t.image})` }}
                                            >
                                                <div className="video-overlay">
                                                    <div className="play-btn">
                                                        <Play size={24} className="play-icon" color="white" fill="white" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-info">
                                                <h3 className="speaker-name">{t.name}</h3>
                                                <p className="speaker-role">{t.role}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="quote-content">
                                            <p className="quote-text">{t.text}</p>
                                            <div className="quote-profile">
                                                <img src={t.image} alt={t.name} className="quote-img" />
                                                <div className="quote-author">
                                                    <span className="speaker-name">{t.name}</span>
                                                    <span className="speaker-role">{t.role}</span>
                                                    {t.company && <span className="speaker-company">{t.company}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="slider-overlay right">
                        <button className="arrow-btn-hover right" onClick={() => scroll('right')}>
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
