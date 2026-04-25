import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ background: 'linear-gradient(135deg, #e63946 0%, #780000 100%)' }}>
                <div className="container">
                    <h1>Connect, Collaborate, Succeed</h1>
                    <p>Discover peers, join communities, and collaborate on projects at Chitkara University. Build your network and enhance your learning experience.</p>
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Student Connect?</h2>
                        <p>Our platform is designed to help Chitkara University students connect, collaborate, and grow together.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">👤</div>
                            <h3>Complete Profiles</h3>
                            <p>Showcase your skills, interests, academic background, and projects in a professional profile that helps others discover you.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>Communities & Groups</h3>
                            <p>Join interest-based communities, participate in discussions, and find like-minded peers who share your passions.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🤝</div>
                            <h3>Direct Connections</h3>
                            <p>Connect with students across departments, find project partners, and build meaningful academic relationships.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Profiles Section */}
            <section className="profiles" id="profiles">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Your Peers</h2>
                        <p>Discover talented students from across Chitkara University with diverse skills and interests.</p>
                    </div>
                    <div className="profiles-grid">
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">A</div>
                            </div>
                            <div className="profile-body">
                                <h3 className="profile-name">Ananya Sharma</h3>
                                <div className="profile-major">Computer Science</div>
                                <p className="profile-about">Passionate about AI and machine learning. Currently working on a research project in natural language processing.</p>
                                <div className="skills">
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">Machine Learning</span>
                                    <span className="skill-tag">TensorFlow</span>
                                    <span className="skill-tag">Research</span>
                                </div>
                                <div className="profile-actions">
                                    <div className="action-btn">📧</div>
                                    <div className="action-btn">💬</div>
                                    <div className="action-btn">🔗</div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">R</div>
                            </div>
                            <div className="profile-body">
                                <h3 className="profile-name">Rahul Verma</h3>
                                <div className="profile-major">Electrical Engineering</div>
                                <p className="profile-about">Electronics enthusiast and robotics team lead. Love building innovative solutions to real-world problems.</p>
                                <div className="skills">
                                    <span className="skill-tag">Circuit Design</span>
                                    <span className="skill-tag">Robotics</span>
                                    <span className="skill-tag">Arduino</span>
                                    <span className="skill-tag">Team Leadership</span>
                                </div>
                                <div className="profile-actions">
                                    <div className="action-btn">📧</div>
                                    <div className="action-btn">💬</div>
                                    <div className="action-btn">🔗</div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">P</div>
                            </div>
                            <div className="profile-body">
                                <h3 className="profile-name">Priya Mehta</h3>
                                <div className="profile-major">Business Administration</div>
                                <p className="profile-about">Aspiring entrepreneur with a focus on sustainable business models. Organizer of campus startup events.</p>
                                <div className="skills">
                                    <span className="skill-tag">Entrepreneurship</span>
                                    <span className="skill-tag">Marketing</span>
                                    <span className="skill-tag">Event Planning</span>
                                    <span className="skill-tag">Sustainability</span>
                                </div>
                                <div className="profile-actions">
                                    <div className="action-btn">📧</div>
                                    <div className="action-btn">💬</div>
                                    <div className="action-btn">🔗</div>
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
                            <div className="community-header">💻</div>
                            <div className="community-body">
                                <h3 className="community-title">Tech Innovators</h3>
                                <div className="community-members">247 members</div>
                                <p className="community-desc">A community for students interested in technology, innovation, and cutting-edge developments in computer science and engineering.</p>
                                <div className="community-tags">
                                    <span className="community-tag">Programming</span>
                                    <span className="community-tag">AI</span>
                                    <span className="community-tag">Hackathons</span>
                                </div>
                                <Link to="/communities" className="btn btn-primary" style={{ width: '100%' }}>Join Community</Link>
                            </div>
                        </div>
                        <div className="community-card">
                            <div className="community-header">🎨</div>
                            <div className="community-body">
                                <h3 className="community-title">Creative Minds</h3>
                                <div className="community-members">189 members</div>
                                <p className="community-desc">For artists, designers, and creative thinkers to share ideas, collaborate on projects, and showcase their work.</p>
                                <div className="community-tags">
                                    <span className="community-tag">Design</span>
                                    <span className="community-tag">Art</span>
                                    <span className="community-tag">Photography</span>
                                </div>
                                <Link to="/communities" className="btn btn-primary" style={{ width: '100%' }}>Join Community</Link>
                            </div>
                        </div>
                        <div className="community-card">
                            <div className="community-header">🚀</div>
                            <div className="community-body">
                                <h3 className="community-title">Startup Hub</h3>
                                <div className="community-members">156 members</div>
                                <p className="community-desc">An entrepreneurial community for aspiring founders, innovators, and business enthusiasts to network and launch ventures.</p>
                                <div className="community-tags">
                                    <span className="community-tag">Entrepreneurship</span>
                                    <span className="community-tag">Investing</span>
                                    <span className="community-tag">Pitching</span>
                                </div>
                                <Link to="/communities" className="btn btn-primary" style={{ width: '100%' }}>Join Community</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
