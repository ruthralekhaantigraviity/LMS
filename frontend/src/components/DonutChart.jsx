
import React from 'react';

const DonutChart = () => {
    // Data: Tech Solutions 14.1%, Fintech 13.9%, E-com 13.7%, Consumer Tech 8.2%
    // Remainder: 100 - (14.1+13.9+13.7+8.2) = 50.1% (Others/Services)

    // Circumference = 2 * pi * r
    // r = 80 (since viewbox is 200x200, center 100,100)
    const radius = 60;
    const circumference = 2 * Math.PI * radius; // ~440

    const segments = [
        { label: "Technology Solutions", value: 14.1, color: "#004de1" }, // Scaler Blue
        { label: "Financial Technology", value: 13.9, color: "#0084ff" }, // Cyan Blue
        { label: "E-com & Retail", value: 13.7, color: "#1959ff" },      // Royal Blue
        { label: "Consumer Technology", value: 8.2, color: "#85d1ff" },  // Sky Blue
        { label: "Others", value: 50.1, color: "#0e214d" }               // Dark Navy
    ];

    let cumulativePercent = 0;

    return (
        <div className="donut-and-legend">
            <div className="donut-chart-wrapper">
                <svg viewBox="0 0 200 200" className="donut-svg">
                    {segments.map((segment, index) => {
                        const strokeDasharray = `${(segment.value / 100) * circumference} ${circumference}`;
                        const strokeDashoffset = -((cumulativePercent / 100) * circumference);
                        cumulativePercent += segment.value;

                        return (
                            <circle
                                key={index}
                                cx="100"
                                cy="100"
                                r={radius}
                                className="donut-segment"
                                stroke={segment.color}
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                            />
                        );
                    })}
                </svg>
            </div>

            {/* Legend - Only first 4 as per image */}
            <div className="legend-container">
                {segments.slice(0, 4).map((segment, index) => (
                    <div key={index} className="legend-item">
                        <div className="legend-square" style={{ backgroundColor: segment.color }} />
                        <span className="legend-text">
                            {segment.label}: <strong>{segment.value}%</strong>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonutChart;
