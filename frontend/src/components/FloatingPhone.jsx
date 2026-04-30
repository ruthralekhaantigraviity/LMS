import React from 'react';
import { PhoneCall } from 'lucide-react';
import '../styles/FloatingPhone.css';

const FloatingPhone = () => {
    return (
        <a href="tel:08045579576" className="floating-phone-btn" aria-label="Call Us">
            <PhoneCall size={20} className="floating-phone-icon" strokeWidth={2} />
        </a>
    );
};

export default FloatingPhone;
