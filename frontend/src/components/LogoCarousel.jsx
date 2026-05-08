import React from 'react';
import '../styles/LogoCarousel.css';

const LogoCarousel = () => {
    // Top Row Logos - Exact order from new reference
    const logos = [
        {
            name: "AXIS BANK",
            icon: (
                <div className="axis-logo">
                    <div className="axis-icon">
                        <svg viewBox="0 0 100 100" fill="#ae285d">
                            <path d="M50 10 L90 80 L70 80 L50 45 L30 80 L10 80 Z" />
                        </svg>
                    </div>
                    <span>AXIS BANK</span>
                </div>
            )
        },
        {
            name: "Capgemini",
            icon: (
                <div className="capgemini-logo">
                    <span>Capgemini</span>
                    <div className="cap-icon"></div>
                </div>
            )
        },
        {
            name: "CUB",
            icon: (
                <div className="cub-logo">
                    <div className="cub-badge">
                        <div className="cub-inner"></div>
                    </div>
                    <span>CUB</span>
                </div>
            )
        },
        {
            name: "DELTA",
            icon: (
                <div className="delta-logo">
                    <div className="delta-icon">
                        <svg viewBox="0 0 100 100" fill="#888">
                            <path d="M10 80 L50 10 L90 80 L75 80 L50 35 L25 80 Z" />
                        </svg>
                    </div>
                    <span>DELTA</span>
                </div>
            )
        },
        {
            name: "Equitas",
            icon: (
                <div className="equitas-logo">
                    <div className="e-circle">e</div>
                    <span>equitas</span>
                </div>
            )
        },
        {
            name: "FOXCONN",
            icon: (
                <div className="foxconn-logo">
                    <div className="fox-h">H</div>
                    <span>FOXCONN</span>
                </div>
            )
        },
        {
            name: "HDFC BANK",
            icon: (
                <div className="hdfc-logo">
                    <div className="hdfc-box">
                        <div className="hdfc-inner"></div>
                    </div>
                    <span>HDFC BANK</span>
                </div>
            )
        },
        {
            name: "HYUNDAI",
            icon: (
                <div className="hyundai-logo">
                    <div className="h-oval">
                        <span className="h-letter">H</span>
                    </div>
                    <span>HYUNDAI</span>
                </div>
            )
        },
        {
            name: "Kotak",
            icon: (
                <div className="kotak-logo">
                    <div className="k-red-circle">
                        <div className="k-white-symbol"></div>
                    </div>
                    <span>kotak</span>
                </div>
            )
        },
        {
            name: "MA FOI",
            icon: (
                <div className="mafoi-logo">
                    <div className="mafoi-icon">
                        <div className="triangle-mafoi"></div>
                    </div>
                    <span>MA FOI</span>
                </div>
            )
        },
        {
            name: "movate",
            icon: (
                <div className="movate-logo">
                    <div className="movate-icon">M</div>
                    <span>movate</span>
                </div>
            )
        },
        {
            name: "Muthoot Finance",
            icon: (
                <div className="muthoot-logo">
                    <div className="muthoot-m">M</div>
                    <span>Muthoot Finance</span>
                </div>
            )
        }
    ];

    return (
        <section className="alumni-section">
            <div className="alumni-header">
                <h2 className="alumni-title">
                    TRUSTED BY GLOBAL <span className="italic-giant">GIANTS</span>
                </h2>
            </div>

            <div className="marquees-container">
                <div className="marquee-wrapper top-marquee">
                    <div className="marquee-content">
                        {[...logos, ...logos, ...logos, ...logos].map((brand, index) => (
                            <div key={`logo-${index}`} className="logo-item" title={brand.name}>
                                {brand.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
