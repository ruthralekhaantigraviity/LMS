
import React from 'react';
import '../styles/LogoCarousel.css';

const LogoCarousel = () => {
    // Top Row Logos - Exact order from new reference
    const topRow = [
        {
            name: "PayPal",
            icon: (
                <div className="paypal-logo">
                    <span className="pp">P</span>
                    <span className="paypal-text">PayPal</span>
                </div>
            )
        },
        {
            name: "Houses",
            icon: (
                <div className="houses-logo">
                    <svg width="30" height="25" viewBox="0 0 40 30" fill="none" stroke="#ff7a59" strokeWidth="2.5">
                        <path d="M5 25 L5 15 L15 8 L25 15 L25 25 Z" />
                        <path d="M20 20 L20 10 L30 3 L40 10 L40 20 Z" />
                    </svg>
                </div>
            )
        },
        {
            name: "XB",
            icon: (
                <div className="xb-logo">
                    <span className="xb-slash">///</span>
                    <span className="xb-text">XB</span>
                </div>
            )
        },
        {
            name: "NYKAA",
            icon: <p className="logo-text nykaa">NYKAA</p>
        },
        {
            name: "vimeo",
            icon: <p className="logo-text vimeo">vimeo</p>
        },
        {
            name: "AJIO",
            icon: <p className="logo-text ajio">AJIO</p>
        },
        {
            name: "MYSTIFLY",
            icon: (
                <div className="mystifly-logo">
                    <div className="mystifly-icon">
                        <div className="inner-dot"></div>
                    </div>
                    <span>MYSTIFLY</span>
                </div>
            )
        },
        {
            name: "WorkSpan",
            icon: (
                <div className="workspan-logo">
                    <div className="w-logo">W</div>
                    <span>WorkSpan</span>
                </div>
            )
        },
        {
            name: "wisetech global",
            icon: (
                <div className="wisetech-logo">
                    <div className="grid-icon">
                        <span></span><span></span><span></span>
                    </div>
                    <div className="wt-text">
                        <span>wisetech</span>
                        <span>global</span>
                    </div>
                </div>
            )
        },
        {
            name: "Paymatrix",
            icon: (
                <div className="paymatrix-logo">
                    <div className="matrix-icon">M</div>
                    <span>Paymatrix™</span>
                </div>
            )
        },
        {
            name: "ZEE",
            icon: (
                <div className="zee-logo">
                    <div className="zee-circle">Z</div>
                </div>
            )
        }
    ];

    // Bottom Row Logos - Exact order from new reference
    const bottomRow = [
        {
            name: "first hive",
            icon: (
                <div className="firsthive-logo">
                    <div className="hive-icon"></div>
                    <div className="fh-text">
                        <span>first</span>
                        <span>hive</span>
                    </div>
                </div>
            )
        },
        {
            name: "REBEL FOODS",
            icon: <p className="logo-text rebel">REBEL<br /><span>FOODS</span></p>
        },
        {
            name: "Yubi",
            icon: (
                <div className="yubi-logo">
                    <div className="yubi-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <span>Yubi</span>
                </div>
            )
        },
        {
            name: "CREDERA",
            icon: (
                <div className="credera-logo">
                    <div className="c-box"></div>
                    <span>CREDERA</span>
                </div>
            )
        },
        {
            name: "Love, Bonito",
            icon: <p className="logo-text love-bonito">Love, Bonito</p>
        },
        {
            name: "siply",
            icon: (
                <div className="siply-logo">
                    <div className="siply-swoosh"></div>
                    <span>siply</span>
                </div>
            )
        },
        {
            name: "FYERS",
            icon: (
                <div className="fyers-logo">
                    <div className="fyers-shield">F</div>
                    <span>FYERS</span>
                </div>
            )
        },
        {
            name: "PORTER",
            icon: (
                <div className="porter-logo">
                    <div className="porter-pin"></div>
                    <span>PORTER</span>
                </div>
            )
        },
        {
            name: "TURVO",
            icon: (
                <div className="turvo-logo">
                    <div className="turvo-circle">T</div>
                    <span>TURVO</span>
                </div>
            )
        },
        {
            name: "apna",
            icon: (
                <div className="apna-box">
                    <span>apna</span>
                </div>
            )
        },
        {
            name: "SIGMOID",
            icon: (
                <div className="sigmoid-logo">
                    <div className="sigmoid-lines">
                        <span></span><span></span><span></span>
                    </div>
                    <span>SIGMOID</span>
                </div>
            )
        }
    ];

    return (
        <section className="alumni-section">
            <div className="alumni-header">
                <h2 className="alumni-title">Our Alumni Work At</h2>
            </div>

            <div className="marquees-container">
                <div className="marquee-wrapper top-marquee">
                    <div className="marquee-content">
                        {[...topRow, ...topRow].map((brand, index) => (
                            <div key={`top-${index}`} className="logo-item" title={brand.name}>
                                {brand.icon}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="marquee-wrapper bottom-marquee">
                    <div className="marquee-content reverse">
                        {[...bottomRow, ...bottomRow].map((brand, index) => (
                            <div key={`bottom-${index}`} className="logo-item" title={brand.name}>
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
