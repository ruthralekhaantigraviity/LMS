import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import LogoCarousel from './components/LogoCarousel';
import Courses from './components/Courses';

import AIInterviews from './components/AIInterviews';
import Testimonials from './components/Testimonials';
import SuccessStories from './components/SuccessStories';
import WhyChooseFIC from './components/WhyChooseFIC';

import CourseReviews from './components/CourseReviews';
import FeaturedNews from './components/FeaturedNews';


import StickyFooter from './components/StickyFooter';
import FloatingPhone from './components/FloatingPhone';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminSignupPage from './pages/AdminSignupPage';
import GoogleAccountChooser from './pages/GoogleAccountChooser';
import ApplicationPage from './pages/ApplicationPage';
import MasterclassPage from './pages/MasterclassPage';
import AlumniPage from './pages/AlumniPage';
import ProgramDetailsPage from './pages/ProgramDetailsPage';
import SettingsPage from './pages/SettingsPage';
import DashboardPage from './pages/DashboardPage';
import SuccessPage from './pages/SuccessPage';

// Dashboard Imports
import AdminDashboard from './pages/dashboards/AdminDashboard';
import HRDashboard from './pages/dashboards/HRDashboard';
import TrainerDashboard from './pages/dashboards/TrainerDashboard';
import StudentDashboard from './pages/dashboards/StudentDashboard';

import './App.css';

const LandingPage = () => (
  <>
    <Hero />

    <LogoCarousel />
    <WhyChooseFIC />
    <Courses />
    <AIInterviews />
    <Testimonials />
    <SuccessStories />


    <CourseReviews />
    <FeaturedNews />



  </>
);

const AppContent = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const hideNavbarRoutes = [
    '/login', 
    '/apply', 
    '/google-login', 
    '/admin/login', 
    '/admin/signup',
    '/admin-dashboard', 
    '/hr-dashboard', 
    '/trainer-dashboard', 
    '/student-dashboard'
  ];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className={`app-container ${theme === 'light' ? 'light-theme' : ''}`}>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/signup" element={<AdminSignupPage />} />
        <Route path="/google-login" element={<GoogleAccountChooser />} />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/masterclass" element={<MasterclassPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/program/:id" element={<ProgramDetailsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/course-success" element={<SuccessPage />} />
        
        {/* Role-Based Dashboards */}
        <Route 
          path="/admin-dashboard" 
          element={<ProtectedRoute allowedRoles={['admin']} redirectPath="/admin/login"><AdminDashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/hr-dashboard" 
          element={<ProtectedRoute allowedRoles={['hr']} redirectPath="/admin/login"><HRDashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/trainer-dashboard" 
          element={<ProtectedRoute allowedRoles={['trainer']} redirectPath="/admin/login"><TrainerDashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/student-dashboard" 
          element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} 
        />

        <Route path="/blogs" element={<div className="placeholder-page">Blogs Page</div>} />
        <Route path="/video-courses" element={<div className="placeholder-page">Video Courses Page</div>} />
        <Route path="/coding-tutorials" element={<div className="placeholder-page">Coding Tutorials Page</div>} />
        <Route path="/mobile-app" element={<div className="placeholder-page">Mobile App Page</div>} />
        <Route path="/interview-bit" element={<div className="placeholder-page">InterviewBit Page</div>} />
      </Routes>
      {!shouldHideNavbar && <StickyFooter />}
      {!shouldHideNavbar && <FloatingPhone />}
    </div>
  );
};

function App() {
  return (
    <ToastProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <AppContent />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}

export default App;
