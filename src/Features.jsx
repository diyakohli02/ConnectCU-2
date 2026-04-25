import React from 'react';

const Features = () => {
    return (
        <>
            {/* Features Section */}
            <section className="features-section" style={{ padding: '5rem 0', backgroundColor: '#f5f7fb' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Platform Features</h2>
                        <p>Discover all the ways Student Connect can help you network and grow.</p>
                    </div>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        <div className="feature-card">
                            <div className="feature-icon">👤</div>
                            <h3>Professional Profiles</h3>
                            <p>Create your academic and professional profile to showcase your skills, projects, and interests to potential collaborators.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🤝</div>
                            <h3>Smart Matching</h3>
                            <p>Our intelligent algorithm connects you with peers who share your interests and academic goals.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Communities</h3>
                            <p>Join interest-based communities to discuss ideas, share resources, and collaborate on projects.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>Real-time Chat</h3>
                            <p>Connect with peers through our built-in messaging system for seamless communication.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3>Progress Tracking</h3>
                            <p>Track your networking growth and engagement within the platform.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Goal Setting</h3>
                            <p>Set and achieve your academic and professional networking goals with our guided system.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works" id="how-it-works" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>How It Works</h2>
                        <p>Get started with Student Connect in just a few simple steps</p>
                    </div>
                    <div className="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        <div className="step" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                            <div className="step-number" style={{ width: '50px', height: '50px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1rem' }}>1</div>
                            <h3>Create Your Profile</h3>
                            <p>Sign up and build your academic profile with your skills, interests, and goals.</p>
                        </div>
                        <div className="step" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                            <div className="step-number" style={{ width: '50px', height: '50px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1rem' }}>2</div>
                            <h3>Join Communities</h3>
                            <p>Find and join communities that match your interests and academic pursuits.</p>
                        </div>
                        <div className="step" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                            <div className="step-number" style={{ width: '50px', height: '50px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1rem' }}>3</div>
                            <div className="step-content">
                                <h3>Connect with Peers</h3>
                                <p>Start networking with fellow students and build meaningful connections.</p>
                            </div>
                        </div>
                        <div className="step" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                            <div className="step-number" style={{ width: '50px', height: '50px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1rem' }}>4</div>
                            <h3>Collaborate & Grow</h3>
                            <p>Work on projects, share knowledge, and achieve your goals together.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
