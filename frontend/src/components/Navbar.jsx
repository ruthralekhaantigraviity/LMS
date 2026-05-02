
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon, CalendarCheck, Newspaper, MonitorPlay, Library, Smartphone, PhoneCall, Info, Triangle, ArrowRight, Cpu } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userName'));
  const [currentUser, setCurrentUser] = useState({ name: localStorage.getItem('userName') || 'User' });
  const [theme, setTheme] = useState('dark');
  const [adminCourses, setAdminCourses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('fic_courses') || '[]');
    setAdminCourses(stored.filter(c => c.status === 'Active'));
  }, [isProgramsOpen]);
  const location = useLocation();

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsResourcesOpen(false);
    setIsProgramsOpen(false);
  }, [location]);

  const togglePrograms = () => {
    // Only toggle if not already open via hover, or handle state correctly
    setIsProgramsOpen(!isProgramsOpen);
    setIsResourcesOpen(false);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsProgramsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
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
            <Link to="/masterclass" className="menu-item">MASTERCLASS</Link>
            <Link to="/alumni" className="menu-item">ALUMNI</Link>
            <div
              className={`menu-item ${isResourcesOpen ? 'resources-active' : ''}`}
              onClick={toggleResources}
            >
              <span>RESOURCES</span>
              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className={isResourcesOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
                style={{ color: 'inherit' }}
              />
            </div>
          </div>

          {/* Mega Menu Overlay - Final Pinned Positioning */}
          {isResourcesOpen && (
            <div
              className="mega-menu"
              id="final-pinned-menu"
            >
              <div className="mega-menu-content">
                <div className="mega-menu-grid">
                  {/* Column 1 */}
                  <div className="mega-menu-column">
                    <h4 className="column-header">FREE LEARNING RESOURCES</h4>
                    <div className="column-items">
                      <Link to="/masterclass" className="mega-item">
                        <div className="mega-item-left">
                          <CalendarCheck className="mega-icon" size={20} />
                          <span>Masterclass</span>
                        </div>
                        <ArrowRight className="mega-arrow" size={18} />
                      </Link>
                      <Link to="/blogs" className="mega-item">
                        <div className="mega-item-left">
                          <Newspaper className="mega-icon" size={20} />
                          <span>Blogs</span>
                        </div>
                        <ArrowRight className="mega-arrow" size={18} />
                      </Link>
                      <Link to="/video-courses" className="mega-item">
                        <div className="mega-item-left">
                          <MonitorPlay className="mega-icon" size={20} />
                          <span>Video Course</span>
                        </div>
                        <ArrowRight className="mega-arrow" size={18} />
                      </Link>
                      <Link to="/coding-tutorials" className="mega-item">
                        <div className="mega-item-left">
                          <Library className="mega-icon" size={20} />
                          <span>Coding Tutorials</span>
                        </div>
                        <ArrowRight className="mega-arrow" size={18} />
                      </Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-menu-column">
                    <h4 className="column-header">OTHER RESOURCES</h4>
                    <div className="column-items">
                      <Link to="/mobile-app" className="mega-item">
                        <div className="mega-item-left">
                          <Smartphone className="mega-icon" size={20} />
                          <span>Mobile App</span>
                        </div>
                        <ArrowRight className="mega-arrow" size={18} />
                      </Link>
                      <Link to="/interview-bit" className="mega-item">
                        <div className="mega-item-left">
                          <Triangle className="mega-icon" size={20} />
                          <span>InterviewBit</span>
                        </div>
                        <ArrowRight className="mega-arrow" size={18} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mega Menu Footer Alignment */}
                <div className="mega-menu-footer" id="final-pinned-footer">
                  <div className="footer-item">
                    <PhoneCall size={18} />
                    <span>Talk to counsellors</span>
                  </div>
                  <div className="footer-vertical-divider" />
                  <div className="footer-item">
                    <Info size={18} />
                    <span>About Us</span>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                    {/* Dynamic Admin Courses from Admin Dashboard */}
                    {adminCourses.map((course) => (
                      <Link to="#" key={course.id} className="program-card">
                        <div className="program-icon-box" style={{ background: '#e6005c' }}>
                          <div className="p-icon-nexus">{course.title.charAt(0)}</div>
                        </div>
                        <div className="program-info">
                          <div className="program-badge popular">NEW</div>
                          <h4 className="program-title">{course.title}</h4>
                          <p className="program-subtitle">{course.dur} • {course.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="programs-section">
                  <h3 className="programs-section-header">ON CAMPUS PROGRAMS</h3>
                  <div className="programs-grid">
                    <Link to="#" className="program-card">
                      <div className="program-icon-box" style={{ background: '#2563eb' }}>
                        <div className="p-icon-school">🏫</div>
                      </div>
                      <div className="program-info">
                        <h4 className="program-title">FIC School of Technology</h4>
                      </div>
                    </Link>
                    <Link to="#" className="program-card">
                      <div className="program-icon-box" style={{ background: '#059669' }}>
                        <div className="p-icon-business">📖</div>
                      </div>
                      <div className="program-info">
                        <h4 className="program-title">FIC School of Business</h4>
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
