import React, { useState, useEffect, useMemo } from 'react';
import './index.css'; // Import the component-specific styles

// Sample profile data (in a real app, this would come from an API)
const initialProfiles = [
    {
        id: 1,
        name: 'Rahul Kumar',
        major: 'B.Tech Computer Science',
        about: 'Passionate about AI and web development. Looking for project collaborations.',
        skills: ['JavaScript', 'Python', 'React', 'Machine Learning'],
        avatar: '👨‍💻',
        connections: 45
    },
    {
        id: 2,
        name: 'Priya Singh',
        major: 'BBA Marketing',
        about: 'Interested in digital marketing and brand management. Seeking internship opportunities.',
        skills: ['Digital Marketing', 'Social Media', 'Content Writing', 'Analytics'],
        avatar: '👩‍💼',
        connections: 38
    },
    {
        id: 3,
        name: 'Amit Patel',
        major: 'M.Tech Data Science',
        about: 'Working on big data projects. Open to research collaborations.',
        skills: ['Data Analysis', 'Python', 'R', 'Big Data'],
        avatar: '👨‍🔬',
        connections: 52
    }
];

const ProfileCard = ({ profile }) => {
    const handleConnect = (e) => {
        const profileName = profile.name;
        const button = e.target;
        if (button.classList.contains('connected')) {
            button.textContent = 'Connect';
            button.classList.remove('connected');
            alert(`Disconnected from ${profileName}`);
        } else {
            button.textContent = 'Connected';
            button.classList.add('connected');
            alert(`Connection request sent to ${profileName}`);
        }
    };

    const handleMessage = () => {
        alert(`Opening chat with ${profile.name}...\n(Chat functionality coming soon)`);
    };

    return (
        <div className="profile-card fade-in">
            <div className="profile-header">
                <h3 className="profile-name">{profile.name}</h3>
                <div className="profile-avatar">{profile.avatar}</div>
            </div>
            <div className="profile-body">
                <div className="profile-major">{profile.major}</div>
                <p className="profile-about">{profile.about}</p>
                <div className="skills">
                    {profile.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
                <div className="profile-stats">
                    <span>🔗 {profile.connections} Connections</span>
                </div>
                <div className="profile-actions">
                    <button className="btn btn-primary connect-btn" onClick={handleConnect}>Connect</button>
                    <button className="btn btn-outline message-btn" onClick={handleMessage}>Message</button>
                </div>
            </div>
        </div>
    );
};

const Profiles = () => {
    const [profiles, setProfiles] = useState(initialProfiles);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProfiles = useMemo(() => {
        return profiles.filter(profile =>
            profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.skills.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [profiles, searchTerm]);

    return (
        <section className="profiles-section">
            <div className="container">
                <div className="section-title">
                    <h2>Student Profiles</h2>
                    <p>Connect with talented students from across Chitkara University.</p>
                </div>

                <input
                    type="text"
                    className="search-input"
                    placeholder="Search profiles by name, major, or skill..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="profiles-grid">
                    {filteredProfiles.map(profile => <ProfileCard key={profile.id} profile={profile} />)}
                </div>
            </div>
        </section>
    );
};

export default Profiles;
