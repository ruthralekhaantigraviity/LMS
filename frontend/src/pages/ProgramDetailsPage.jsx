import React, { useEffect } from 'react';
import Hero from '../components/Hero';

import LogoCarousel from '../components/LogoCarousel';
import Courses from '../components/Courses';
import AIInterviews from '../components/AIInterviews';
import Testimonials from '../components/Testimonials';
import SuccessStories from '../components/SuccessStories';


import CourseReviews from '../components/CourseReviews';
import FeaturedNews from '../components/FeaturedNews';
import ScalerBanner from '../components/ScalerBanner';

import '../styles/ProgramDetailsPage.css';

const ProgramDetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="program-details-page">
            <Hero isProgramPage={true} />
            <div className="program-content-wrapper">

                <LogoCarousel />
                <Courses />
                <AIInterviews />
                <Testimonials />
                <SuccessStories />


                <CourseReviews />
                <FeaturedNews />
                <ScalerBanner />

            </div>
        </div>
    );
};

export default ProgramDetailsPage;
