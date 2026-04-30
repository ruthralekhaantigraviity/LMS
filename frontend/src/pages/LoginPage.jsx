import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' or 'email'
    const [verificationState, setVerificationState] = useState('idle'); // 'idle', 'verifying', 'success'
    const [showOtpStep, setShowOtpStep] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [enteredOtp, setEnteredOtp] = useState('');
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckbox = () => {
        if (verificationState !== 'idle') return;
        setVerificationState('verifying');
        setTimeout(() => setVerificationState('success'), 2000);
    };

    const handleRedirect = (role) => {
        switch(role) {
            case 'admin': navigate('/admin-dashboard'); break;
            case 'hr': navigate('/hr-dashboard'); break;
            case 'trainer': navigate('/trainer-dashboard'); break;
            case 'student': navigate('/student-dashboard'); break;
            default: navigate('/dashboard');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (loginMethod === 'phone') {
            if (!showOtpStep) {
                if (!fullName.trim()) {
                    alert('Please enter your full name');
                    setIsLoading(false);
                    return;
                }
                const otp = Math.floor(1000 + Math.random() * 9000).toString();
                setGeneratedOtp(otp);
                setShowOtpStep(true);
                setIsLoading(false);
            } else {
                if (enteredOtp === generatedOtp) {
                    const mockUser = { name: fullName, role: 'student', token: 'mock-token' };
                    login(mockUser);
                    setIsLoginSuccess(true);
                    setTimeout(() => handleRedirect('student'), 2000);
                } else {
                    alert('Invalid OTP');
                    setIsLoading(false);
                }
            }
        } else {
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (data.success) {
                    login({ ...data.user, token: data.token });
                    setIsLoginSuccess(true);
                    setTimeout(() => handleRedirect(data.user.role), 2000);
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('Connection error to backend');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="login-overlay">
            <div className="login-modal">
                <Link to="/" className="close-btn-box">
                    <X size={20} />
                </Link>

                <div className="login-modal-inner">
                    <div className="login-content">
                        {isLoginSuccess ? (
                            <div className="login-success-screen">
                                <div className="success-icon-large">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" fill="#e6005c" fillOpacity="0.1" />
                                        <circle cx="12" cy="12" r="8" fill="#e6005c" />
                                        <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h2 className="success-title">Welcome to FIC, {fullName || email.split('@')[0]}!</h2>
                                <p className="success-message">You've successfully logged in.</p>
                                <div className="redirection-box">
                                    <span className="redirection-text">Redirecting to your dashboard</span>
                                    <div className="loading-dots">
                                        <span>.</span><span>.</span><span>.</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h1 className="login-label">Login</h1>
                                <form className="login-form" onSubmit={handleSubmit}>
                                    <div className="login-field-wrapper" style={{ display: showOtpStep ? 'none' : 'block' }}>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="login-field"
                                            required={!showOtpStep}
                                        />
                                    </div>
                                    {loginMethod === 'phone' ? (
                                        <div className="phone-login-wrapper">
                                            <div className="phone-input-container" style={{ opacity: showOtpStep ? 0.6 : 1, pointerEvents: showOtpStep ? 'none' : 'auto' }}>
                                                <div className="country-code">
                                                    <span>+91</span>
                                                    <ChevronDown size={14} strokeWidth={3} />
                                                </div>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter Phone"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="phone-input"
                                                    required
                                                />
                                            </div>

                                            {showOtpStep && (
                                                <div className="otp-step-container">
                                                    <div className="otp-temp-display">
                                                        <span>Your temporary OTP: </span>
                                                        <strong className="generated-otp">{generatedOtp}</strong>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter 4-digit OTP"
                                                        value={enteredOtp}
                                                        onChange={(e) => setEnteredOtp(e.target.value)}
                                                        className="login-field otp-input"
                                                        maxLength={4}
                                                        required
                                                        autoFocus
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="email-login-fields">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="login-field"
                                                required
                                            />
                                            <input
                                                type="password"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="login-field"
                                                required
                                            />
                                            <a href="#" className="forgot-password">Forgot Password?</a>
                                        </div>
                                    )}

                                    {/* Cloudflare Verification Widget */}
                                    <div className="cloudflare-widget">
                                        <div className="widget-content">
                                            {verificationState === 'idle' ? (
                                                <div className="cf-checkbox-row" onClick={handleCheckbox}>
                                                    <div className="cf-checkbox"></div>
                                                    <span className="cf-checkbox-label">I am human</span>
                                                </div>
                                            ) : verificationState === 'verifying' ? (
                                                <>
                                                    <div className="cf-loading">
                                                        <div className="dot-spinner">
                                                            {[...Array(8)].map((_, i) => (
                                                                <div key={i} className={`dot dot-${i + 1}`}></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <span className="verifying-text">Verifying...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="success-icon">
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12" cy="12" r="10" fill="#22c55e" />
                                                            <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <span className="success-text">Success!</span>
                                                </>
                                            )}
                                            <div className="cloudflare-brand">
                                                <div className="cf-logo-row">
                                                    <span className="cf-text">CLOUDFLARE</span>
                                                    <svg className="cf-cloud" viewBox="0 0 24 24" width="24" height="24">
                                                        <path fill="#f48120" d="M17.5,19c-3.1,0-5.7-2.1-6.4-5h-0.1c-0.1,0-0.2,0-0.3,0c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c0.3,0,0.6,0.1,0.9,0.2 C12.3,5.9,14,5,16,5c2.8,0,5.1,2.1,5.5,4.8c1.4,0.4,2.5,1.7,2.5,3.2C24,14.7,22.7,18.4,17.5,19z" />
                                                        <path fill="#f6ad3c" d="M17.5,19c-3.1,0-5.7-2.1-6.4-5h-0.1c-0.1,0-0.2,0-0.3,0c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c0.3,0,0.6,0.1,0.9,0.2 C12.3,5.9,14,5,16,5c1.4,0,2.6,0.5,3.6,1.4C18.6,6.3,17,7,15.6,8.4c-0.4,0.4-0.8,0.9-1.1,1.4c-0.4,0.7-0.7,1.5-0.8,2.3h-0.1 c-0.1,0-0.2,0-0.3,0c-0.4,0-0.8,0.1-1.2,0.2c0.4,2.5,2.4,4.4,4.8,4.7c0.2,0,0.4,0,0.6,0c2.5,0,4.7-1.8,5.2-4.2 c0.1-0.3,0.1-0.6,0.1-0.9c0-1.4-1.1-2.5-2.5-2.5C20.3,6.2,19,5,17.5,5z" />
                                                    </svg>
                                                </div>
                                                <div className="cf-links">
                                                    <a href="#">Privacy</a>
                                                    <span>•</span>
                                                    <a href="#">Help</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="otp-btn">
                                        {loginMethod === 'phone' ? (showOtpStep ? 'VERIFY AND LOGIN' : 'GET OTP') : 'VERIFY AND LOGIN'}
                                    </button>
                                </form>

                                <div className="divider-wrapper">
                                    <div className="divider-line"></div>
                                    <span className="divider-text">OR</span>
                                    <div className="divider-line"></div>
                                </div>

                                <div className="social-logins">
                                    <button
                                        type="button"
                                        className="social-btn"
                                        onClick={() => setLoginMethod(loginMethod === 'phone' ? 'email' : 'phone')}
                                    >
                                        Login via {loginMethod === 'phone' ? 'Email' : 'Phone Number'}
                                    </button>
                                    <button
                                        className="social-btn google-btn"
                                        onClick={() => navigate('/google-login')}
                                    >
                                        <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        <span>Login via Google</span>
                                    </button>
                                </div>

                                <div className="login-signup-text">
                                    <span>Or create an account on FIC?</span>
                                    <Link to="/apply" className="signup-link">Sign up</Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
