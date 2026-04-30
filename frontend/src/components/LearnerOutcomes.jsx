
import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import DonutChart from './DonutChart';
import '../styles/LearnerOutcomes.css';

const LearnerOutcomes = () => {
    return (
        <section className="outcomes-section">
            <div className="outcomes-wrapper">

                {/* Header */}
                <div className="outcomes-header">
                    <span className="subheading">LEARNER OUTCOMES</span>
                    <h2 className="main-heading">See How Far You Could Go</h2>
                </div>

                {/* Outer Card Wrapper */}
                <div className="outcomes-outer-card">
                    <p className="inner-report-title">FIC's Historical Career Transition Report</p>

                    <div className="outcomes-main-content">
                        {/* Left: Chart & Legend */}
                        <div className="chart-and-legend-wrapper">
                            <DonutChart />
                        </div>

                        {/* Right: Report Download Area */}
                        <div className="report-action-box">
                            <div className="year-select-wrapper">
                                <select className="year-select">
                                    <option>B2K Analytics – Academy (2023–24)</option>
                                    <option>B2K Analytics – Academy (2022–23)</option>
                                </select>
                                <ChevronDown className="select-chevron" size={16} />
                            </div>
                            <button className="download-btn-white">
                                DOWNLOAD <Download size={16} />
                            </button>
                        </div>
                    </div>

                    <p className="disclaimer">
                        Disclaimer: Past outcomes are not indicative of future placements for subsequent cohorts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LearnerOutcomes;
