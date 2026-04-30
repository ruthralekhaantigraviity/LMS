import React from 'react';
import { Download, X, Award } from 'lucide-react';

const Certificate = ({ userName, courseTitle, onClose, isStatic = false }) => {
    const certContent = (
        <div id="certificate-to-download" className={`cert-modal ${isStatic ? 'cert-static' : ''}`}>
            <div className="cert-border-inner">
                <div className="cert-logo" style={{ marginBottom: '0.8rem' }}>
                    <img src="/scalerlogo.svg" alt="FIC" width="120" />
                </div>
                <h2 className="cert-title" style={{ fontSize: '2.5rem', marginBottom: '0.2rem' }}>CERTIFICATE</h2>
                <p className="cert-text" style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>OF COMPLETION</p>
                <p className="cert-text" style={{ fontStyle: 'italic', marginTop: '0.4rem', marginBottom: '0.4rem', fontSize: '0.9rem' }}>This is to certify that</p>
                <h3 className="cert-name" style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#ff0080' }}>{userName}</h3>
                <p className="cert-text" style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>has successfully completed the</p>
                <h4 className="cert-course" style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{courseTitle}</h4>
                <p className="cert-text" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>with distinction and demonstrated mastery.</p>

                <div className="cert-footer" style={{ marginTop: '0.5rem' }}>
                    <div className="signature-box" style={{ width: '150px', textAlign: 'center' }}>
                        <div className="signature-line" style={{ borderTop: '2px solid #333', marginBottom: '0.1rem', paddingTop: '0.1rem' }}>
                            <span className="signature-name" style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Abhimanyu Saxena</span>
                        </div>
                        <p className="cert-footer-label" style={{ fontSize: '0.55rem', color: '#666', margin: '0', lineHeight: '1', display: 'block' }}>Co-Founder, FIC</p>
                    </div>
                    <div className="seal" style={{ width: '60px', height: '60px' }}>
                        <Award size={32} />
                    </div>
                    <div className="signature-box" style={{ width: '150px', textAlign: 'center' }}>
                        <div className="signature-line" style={{ borderTop: '2px solid #333', marginBottom: '0.1rem', paddingTop: '0.1rem' }}>
                            <span className="signature-name" style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Anshuman Singh</span>
                        </div>
                        <p className="cert-footer-label" style={{ fontSize: '0.55rem', color: '#666', margin: '0', lineHeight: '1', display: 'block' }}>Co-Founder, FIC</p>
                    </div>
                </div>
            </div>
        </div>
    );

    if (isStatic) return certContent;

    return (
        <div className="cert-overlay">
            <button
                onClick={onClose}
                style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
            >
                <X size={32} />
            </button>
            {certContent}
            <button
                className="btn-download-pdf-fixed"
                onClick={() => window.print()}
            >
                <Download size={20} /> DOWNLOAD PDF
            </button>
        </div>
    );
};

export default Certificate;
