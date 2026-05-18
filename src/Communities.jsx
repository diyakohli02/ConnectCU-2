import React from 'react';
import { Link } from 'react-router-dom';

function Communities() {
  return (
    <section className="communities">
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
  );
}

export default Communities;
