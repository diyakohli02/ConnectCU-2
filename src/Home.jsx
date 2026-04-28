import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentCommunityIndex, setCurrentCommunityIndex] = useState(0);

    const communities = [
        {
            title: 'Tech Innovators',
            initials: 'TI',
            members: '247 members',
            description: 'A community for students interested in technology, innovation, and cutting-edge developments in computer science and engineering.',
            tags: ['Programming', 'AI', 'Hackathons']
        },
        {
            title: 'Creative Minds',
            initials: 'CM',
            members: '189 members',
            description: 'For artists, designers, and creative thinkers to share ideas, collaborate on projects, and showcase their work.',
            tags: ['Design', 'Art', 'Photography']
        },
        {
            title: 'Startup Hub',
            initials: 'SH',
            members: '156 members',
            description: 'An entrepreneurial community for aspiring founders, innovators, and business enthusiasts to network and launch ventures.',
            tags: ['Entrepreneurship', 'Investing', 'Pitching']
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCommunityIndex((prevIndex) => (prevIndex + 1) % communities.length);
        }, 4000); // Change community every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const community = communities[currentCommunityIndex];

    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ background: 'linear-gradient(135deg, #e63946 0%, #780000 100%)' }}>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-left">
                            <h1>Connect, Collaborate, Succeed</h1>
                            <p>Discover peers, join communities, and collaborate on projects at Chitkara University. Build your network and enhance your learning experience.</p>
                            <div className="hero-buttons">
                                <Link to="./Connect" className="btn btn-primary">Get Started</Link>
                                <Link to="./Profiles" className="btn btn-secondary">Browse Students</Link>
                            </div>
                            <div className="hero-stats">
                                <div className="stat">
                                    <div className="stat-number">30+</div>
                                    <div className="stat-label">Departments</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-right">
                            <div className="community-card-preview fade-in-out">
                                <div className="community-preview-header">
                                    <div className="community-preview-initials">{community.initials}</div>
                                </div>
                                <div className="community-preview-body">
                                    <h4>{community.title}</h4>
                                    <p className="community-preview-members">{community.members}</p>
                                    <p className="community-preview-description">{community.description}</p>
                                    <div className="community-preview-tags">
                                        {community.tags.map((tag, index) => (
                                            <span key={index}>{tag}</span>
                                        ))}
                                    </div>
                                    <button className="btn btn-sm">Join Community</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <div className="container">
                    <div className="section-title">
                        <h2>Everything you need to grow</h2>
                        <p>Built for Chitkara University students to connect, collaborate, and grow together.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card feature-card-blue">
                            <div className="feature-left">
                                <div className="feature-number">01</div>
                            </div>
                            <div className="feature-content">
                                <div className="feature-icon">👤</div>
                                <h3>Complete Profiles</h3>
                                <p>Showcase your skills, interests, academic background, and projects in a professional profile that helps others discover you.</p>
                            </div>
                        </div>
                        <div className="feature-card feature-card-green">
                            <div className="feature-left">
                                <div className="feature-number">02</div>
                            </div>
                            <div className="feature-content">
                                <div className="feature-icon">💬</div>
                                <h3>Communities & Groups</h3>
                                <p>Join interest-based communities, participate in discussions, and find like-minded peers who share your passions.</p>
                            </div>
                        </div>
                        <div className="feature-card feature-card-amber">
                            <div className="feature-left">
                                <div className="feature-number">03</div>
                            </div>
                            <div className="feature-content">
                                <div className="feature-icon">🤝</div>
                                <h3>Direct Connections</h3>
                                <p>Connect with students across departments, find project partners, and build meaningful academic relationships.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Profiles Section */}
            <section className="profiles" id="profiles">
                <div className="container">
                    <div className="section-title">
                        <h2>Talented peers around you</h2>
                        <p>Discover talented students from across Chitkara University with diverse skills and interests.</p>
                    </div>
                    <div className="profiles-grid">
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">A</div>
                                <div className="profile-header-text">
                                    <h3 className="profile-name">Aiden Mehta</h3>
                                    <div className="profile-major">Computer Science • 3rd year</div>
                                </div>
                            </div>
                            <div className="profile-body">
                                <p className="profile-about">Passionate about AI and machine learning. Currently working on a research project in natural language processing.</p>
                                <div className="skills">
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">Machine Learning</span>
                                    <span className="skill-tag">TensorFlow</span>
                                </div>
                                <div className="profile-actions">
                                    <button className="btn btn-secondary">Connect</button>
                                    <button className="btn btn-outline-secondary">Message</button>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">R</div>
                                <div className="profile-header-text">
                                    <h3 className="profile-name">Rahul Sharma</h3>
                                    <div className="profile-major">Electrical Engineering • 4th year</div>
                                </div>
                            </div>
                            <div className="profile-body">
                                <p className="profile-about">Electronics enthusiast and robotics team lead. Love building innovative solutions to real-world problems.</p>
                                <div className="skills">
                                    <span className="skill-tag">Circuit Design</span>
                                    <span className="skill-tag">Robotics</span>
                                    <span className="skill-tag">Arduino</span>
                                </div>
                                <div className="profile-actions">
                                    <button className="btn btn-secondary">Connect</button>
                                    <button className="btn btn-outline-secondary">Message</button>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">P</div>
                                <div className="profile-header-text">
                                    <h3 className="profile-name">Priya Nair</h3>
                                    <div className="profile-major">Business Administration • 3rd year</div>
                                </div>
                            </div>
                            <div className="profile-body">
                                <p className="profile-about">Aspiring entrepreneur with a focus on sustainable business models. Organizer of campus startup events.</p>
                                <div className="skills">
                                    <span className="skill-tag">Entrepreneurship</span>
                                    <span className="skill-tag">Marketing</span>
                                    <span className="skill-tag">Event Planning</span>
                                </div>
                                <div className="profile-actions">
                                    <button className="btn btn-secondary">Connect</button>
                                    <button className="btn btn-outline-secondary">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Communities Section */}
            <section className="communities" id="communities">
                <div className="container">
                    <div className="section-title">
                        <h2>Join Communities</h2>
                        <p>Connect with interest groups and communities that match your passions and academic goals.</p>
                    </div>
                    <div className="communities-grid">
                        <div className="community-card">
                            <div className="community-header">TI</div>
                            <div className="community-body">
                                <h3 className="community-title">Tech Innovators</h3>
                                <div className="community-members">247 members</div>
                                <p className="community-desc">A community for students interested in technology, innovation, and cutting-edge developments in computer science and engineering.</p>
                                <div className="community-tags">
                                    <span className="community-tag">Programming</span>
                                    <span className="community-tag">AI</span>
                                    <span className="community-tag">Hackathons</span>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%' }}>Join Community</button>
                            </div>
                        </div>
                        <div className="community-card">
                            <div className="community-header">CM</div>
                            <div className="community-body">
                                <h3 className="community-title">Creative Minds</h3>
                                <div className="community-members">189 members</div>
                                <p className="community-desc">For artists, designers, and creative thinkers to share ideas, collaborate on projects, and showcase their work.</p>
                                <div className="community-tags">
                                    <span className="community-tag">Design</span>
                                    <span className="community-tag">Art</span>
                                    <span className="community-tag">Photography</span>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%' }}>Join Community</button>
                            </div>
                        </div>
                        <div className="community-card">
                            <div className="community-header">SH</div>
                            <div className="community-body">
                                <h3 className="community-title">Startup Hub</h3>
                                <div className="community-members">156 members</div>
                                <p className="community-desc">An entrepreneurial community for aspiring founders, innovators, and business enthusiasts to network and launch ventures.</p>
                                <div className="community-tags">
                                    <span className="community-tag">Entrepreneurship</span>
                                    <span className="community-tag">Investing</span>
                                    <span className="community-tag">Pitching</span>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%' }}>Join Community</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
