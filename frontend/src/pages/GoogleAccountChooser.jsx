import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, X } from 'lucide-react';
import '../styles/GoogleAccountChooser.css';

const GoogleAccountChooser = () => {
    const navigate = useNavigate();

    const accounts = [
        { name: 'Kushal Maru', email: 'kushal.maru@gmail.com', initial: 'K', color: '#1a73e8' },
        { name: 'FIC Student', email: 'student@scaler.com', initial: 'F', color: '#e6005c' }
    ];

    const handleSelect = (account) => {
        // Simulate a brief delay like a real redirect
        setTimeout(() => {
            navigate('/');
        }, 800);
    };

    return (
        <div className="google-chooser-container">
            <div className="google-chooser-card">
                <Link to="/login" className="google-close-btn">
                    <X size={20} />
                </Link>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="google-logo"
                />
                <h2 className="google-chooser-title">Choose an account</h2>
                <p className="google-chooser-subtitle">to continue to FIC</p>

                <div className="account-list">
                    {accounts.map((account, index) => (
                        <div
                            key={index}
                            className="account-item"
                            onClick={() => handleSelect(account)}
                        >
                            <div
                                className="account-avatar"
                                style={{ backgroundColor: account.color }}
                            >
                                {account.initial}
                            </div>
                            <div className="account-info">
                                <span className="account-name">{account.name}</span>
                                <span className="account-email">{account.email}</span>
                            </div>
                        </div>
                    ))}
                    <div className="use-another-account">
                        <UserPlus size={20} />
                        <span>Use another account</span>
                    </div>
                </div>

                <div className="google-chooser-footer">
                    To continue, Google will share your name, email address, language preference, and profile picture with FIC. Before using this app, you can review FIC's <a href="#">privacy policy</a> and <a href="#">terms of service</a>.
                </div>
            </div>
        </div>
    );
};

export default GoogleAccountChooser;
