export const COURSE_DATA = [
    {
        id: 'software-dev',
        title: 'Software Development Program',
        videos: [
            {
                id: 'v1',
                title: 'Modern Web Architecture',
                duration: '10:15',
                videoUrl: 'https://www.youtube.com/embed/_higfXfhjdo',
                thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop',
                content: `Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications.

Key Concepts:
- SDLC (Software Development Life Cycle): Planning, Analysis, Design, Implementation, Maintenance.
- Version Control: Using systems like Git to manage code changes.
- Frontend vs Backend: Understanding the client-side and server-side of applications.

Study Tasks:
1. Research the difference between Monolithic and Microservices architectures.
2. Set up a basic Git repository.
3. Explain the role of an API in modern software.`
            },
            {
                id: 'v2',
                title: 'DevOps & CI/CD Pipelines',
                duration: '15:20',
                videoUrl: 'https://www.youtube.com/embed/scEDHsr3APg',
                thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=400&h=225&fit=crop',
                content: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle.

Path to Automation:
- Continuous Integration (CI): Merging code changes frequently.
- Continuous Deployment (CD): Automatically deploying code to production.
- Infrastructure as Code (IaC): Managing servers through configuration files.

Modern developers must understand how their code is deployed and scaled in cloud environments.`
            }
        ]
    },
    {
        id: 'data-science',
        title: 'Data Science Program',
        videos: [
            {
                id: 'v3',
                title: 'Exploratory Data Analysis',
                duration: '12:45',
                videoUrl: 'https://www.youtube.com/embed/dcXqhMqhZUo',
                thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
                content: `Data Science involves extracting insights and knowledge from data using various scientific methods, algorithms, and systems.

EDA Techniques:
- Visualizing distributions and correlations.
- Handling missing values and outliers.
- Feature scaling and normalization.

Data is the new oil, and EDA is the refining process.`
            },
            {
                id: 'v4',
                title: 'Machine Learning Fundamentals',
                duration: '18:10',
                videoUrl: 'https://www.youtube.com/embed/ukzFI9rgwfU',
                thumbnail: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=400&h=225&fit=crop',
                content: `Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data.

Types of ML:
- Supervised Learning: Learning from labeled data (e.g., Regression).
- Supervised Learning: Finding patterns in unlabeled data (e.g., Clustering).
- Reinforcement Learning: Learning through trial and error.

Understanding these foundations is crucial for any data professional.`
            }
        ]
    }
];
