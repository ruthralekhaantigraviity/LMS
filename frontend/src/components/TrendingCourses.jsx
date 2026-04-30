import React from 'react';
import '../styles/TrendingCourses.css';

const TrendingCourses = () => {
    const trendingCourses = [
        'Data Science Course',
        'Advanced AI & Machine Learning Course',
        'Devops Course',
        'Full Stack Developer Course',
        'Machine Learning Course',
        'Data Structure and Algorithms (DSA) Course',
        'Web Development Course',
        'System Design Course',
        'Artificial Intelligence & Machine Learning Course',
    ];

    const tutorials = [
        'Data Structure Tutorial',
        'Python Tutorial',
        'Java Tutorial',
        'DBMS Tutorial',
        'C Tutorial',
        'JavaScript Tutorial',
        'C++ Tutorial',
        'SQL Tutorial',
        'Data Science Tutorial',
        'CSS Tutorial',
        'Software Engineering Tutorial',
        'HTML Tutorial',
    ];

    const careerAdvice = [
        'Software Development',
        'Data Science',
        'Machine Learning',
        'Devops',
    ];

    return (
        <section className="trending-section">
            <div className="trending-wrapper">

                {/* Trending Courses */}
                <div className="trending-block">
                    <h4 className="trending-heading">Trending Courses</h4>
                    <div className="trending-links">
                        {trendingCourses.map((item) => (
                            <a key={item} href="#" className="trending-link">{item}</a>
                        ))}
                    </div>
                </div>

                {/* Tutorial */}
                <div className="trending-block">
                    <h4 className="trending-heading">Tutorial</h4>
                    <div className="trending-links">
                        {tutorials.map((item) => (
                            <a key={item} href="#" className="trending-link">{item}</a>
                        ))}
                    </div>
                </div>

                {/* Career Advice Resources */}
                <div className="trending-block">
                    <h4 className="trending-heading">Career Advice Resources</h4>
                    <div className="trending-links">
                        {careerAdvice.map((item) => (
                            <a key={item} href="#" className="trending-link">{item}</a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrendingCourses;
