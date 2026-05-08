
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userName'));
  const [currentUser, setCurrentUser] = useState({ name: localStorage.getItem('userName') || 'User' });
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsResourcesOpen(false);
    setIsProgramsOpen(false);
  }, [location]);

  const togglePrograms = () => {
    setIsProgramsOpen(!isProgramsOpen);
    setIsResourcesOpen(false);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsProgramsOpen(false);
  };

  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (menu === 'resources') {
      setIsResourcesOpen(true);
      setIsProgramsOpen(false);
    } else if (menu === 'programs') {
      setIsProgramsOpen(true);
      setIsResourcesOpen(false);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
      setIsProgramsOpen(false);
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="logo-section">
            <span className="fic-logo-text">FIC <span className="fic-logo-icon">◆</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <div
              className={`menu-item programs-tab ${isProgramsOpen ? 'active-dropdown' : ''}`}
              onClick={togglePrograms}
            >
              <span>PROGRAMS</span>
              <ChevronDown
                size={14}
                strokeWidth={3}
                className={isProgramsOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
                style={{ color: 'inherit' }}
              />
            </div>
            <a 
              href="/#about-section" 
              className="menu-item"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              ABOUT US
            </a>
            <Link to="/contact" className="menu-item">CONTACT US</Link>
          </div>


          {/* Right Side Buttons */}
          <div className="right-buttons">
            {!isLoggedIn ? (
              <>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <Link to="/login" className="btn-login" style={{ textDecoration: 'none' }}>
                  LOGIN
                </Link>
                <Link to="/apply" className="btn-apply" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  APPLY NOW
                </Link>
              </>
            ) : (
              <div className="user-profile-section">
                <button className="theme-toggle-logged" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div
                  className={`user-greeting-trigger ${isUserDropdownOpen ? 'active' : ''}`}
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                >
                  <span className="greeting-text">Hi, {currentUser.name}</span>
                  <ChevronDown
                    size={24}
                    className={`dropdown-arrow ${isUserDropdownOpen ? 'rotate-180' : ''}`}
                  />

                  {isUserDropdownOpen && (
                    <div className="user-dropdown-menu">
                      <Link to="/dashboard" className="dropdown-item dashboard-item">
                        Dashboard
                      </Link>
                      <Link to="/settings" className="dropdown-item settings-item">
                        Settings
                      </Link>
                      <Link to="/logout" className="dropdown-item logout-item" onClick={(e) => {
                        e.preventDefault();
                        setIsLoggedIn(false);
                        setIsUserDropdownOpen(false);
                        localStorage.removeItem('userName');
                      }}>
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Programs Mega Menu - Moved inside container for precise alignment */}
          {isProgramsOpen && (
            <div
              className="programs-mega-menu-box"
              id="programs-pinned-menu"
            >
              <div className="programs-scroll-container">
                <div className="programs-section">
                  <h3 className="programs-section-header">ONLINE PROGRAMS</h3>
                  <div className="programs-grid">
                    <Link to="/program/full-stack-python" className="program-card">
                      <div className="program-icon-box" style={{ background: '#3776ab' }}>
                        <div className="p-icon-code">Py</div>
                      </div>
                      <div className="program-info">
                        <div className="program-badge popular">POPULAR</div>
                        <h4 className="program-title">Full Stack Python</h4>
                        <p className="program-subtitle">6 Months | 10+ Projects</p>
                      </div>
                    </Link>
                    <Link to="/program/full-stack-mern" className="program-card">
                      <div className="program-icon-box" style={{ background: '#61dbfb' }}>
                        <div className="p-icon-code">M</div>
                      </div>
                      <div className="program-info">
                        <div className="program-badge popular">POPULAR</div>
                        <h4 className="program-title">Full Stack MERN</h4>
                        <p className="program-subtitle">6 Months | 12+ Projects</p>
                      </div>
                    </Link>
                    <Link to="/program/data-analytics" className="program-card">
                      <div className="program-icon-box" style={{ background: '#f7931e' }}>
                        <div className="p-icon-sparkles">DA</div>
                      </div>
                      <div className="program-info">
                        <h4 className="program-title">Data Analytics</h4>
                        <p className="program-subtitle">6 Months | 8+ Projects</p>
                      </div>
                    </Link>
                    <Link to="/program/java-full-stack" className="program-card">
                      <div className="program-icon-box" style={{ background: '#007396' }}>
                        <div className="p-icon-nexus">J</div>
                      </div>
                      <div className="program-info">
                        <h4 className="program-title">Java Full Stack</h4>
                        <p className="program-subtitle">6 Months | 10+ Projects</p>
                      </div>
                    </Link>
                    <Link to="/program/ui-ux-design" className="program-card">
                      <div className="program-icon-box" style={{ background: '#ff61f6' }}>
                        <div className="p-icon-grad">UI</div>
                      </div>
                      <div className="program-info">
                        <h4 className="program-title">UI/UX Design</h4>
                        <p className="program-subtitle">6 Months | Portfolio Building</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
