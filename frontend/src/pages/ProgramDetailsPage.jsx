import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import LearnerOutcomes from '../components/LearnerOutcomes';
import LogoCarousel from '../components/LogoCarousel';
import Courses from '../components/Courses';
import AIInterviews from '../components/AIInterviews';
import Testimonials from '../components/Testimonials';
import SuccessStories from '../components/SuccessStories';
import FormulaForGrowth from '../components/FormulaForGrowth';
import Leaders from '../components/Leaders';
import MasterclassEvents from '../components/MasterclassEvents';
import CourseReviews from '../components/CourseReviews';
import FeaturedNews from '../components/FeaturedNews';
import ScalerBanner from '../components/ScalerBanner';
import AdvisorSection from '../components/AdvisorSection';
import TrendingCourses from '../components/TrendingCourses';
import '../styles/ProgramDetailsPage.css';

const ProgramDetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="program-details-page">
            <Hero isProgramPage={true} />
            <div className="program-content-wrapper">
                <LearnerOutcomes />
                <LogoCarousel />
                <Courses />
                <AIInterviews />
                <Testimonials />
                <SuccessStories />
                <FormulaForGrowth />
                <Leaders />
                <MasterclassEvents />
                <CourseReviews />
                <FeaturedNews />
                <ScalerBanner />
                <AdvisorSection />
                <TrendingCourses />
            </div>
        </div>
    );
};

export default ProgramDetailsPage;
