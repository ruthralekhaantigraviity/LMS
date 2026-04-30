import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/StickyFooter.css';

const StickyFooter = () => {
    return (
        <div className="sticky-footer">
            <div className="sticky-footer-content">
                <span className="sticky-footer-text">
                    <strong>Need Help?</strong> Talk to us at 08045579576 or
                    <a href="#callback" className="sticky-footer-link">
                        REQUEST CALLBACK <ArrowUpRight className="sticky-footer-icon" size={16} />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default StickyFooter;
