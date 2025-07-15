import React from "react";
import {
  UserCircle,
  Archive,
  History,
  ShieldCheck,
  ClipboardList
} from "lucide-react";
import './ProfilePage.css';
import Header from "./header";

const ProfilePage = () => {
  const user = {
    name: "Deepak",
    credits: 120,
    points: 850,
    likedFacts: 42,
    history: 128,
    mockTests: 7,
    recentActivity: 34,
    achievements: 5,
    about:
      "Curious explorer of facts and knowledge. Passionate about learning something new every day.",
  };

  return (
    <>
    <Header/>
    <div className="profile-wrapper">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-info">
            <UserCircle className="profile-avatar" />
            <div>
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-about">{user.about}</p>
            </div>
          </div>
          <div className="profile-stats">
            <div>
              <p className="stat-label">Credits</p>
              <p className="stat-value credits">{user.credits}</p>
            </div>
            <div>
              <p className="stat-label">Points</p>
              <p className="stat-value points">{user.points}</p>
            </div>
            <div>
              <p className="stat-label">Liked</p>
              <p className="stat-value liked">{user.likedFacts}</p>
            </div>
            <div>
              <p className="stat-label">History</p>
              <p className="stat-value history">{user.history}</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="profile-cards">
          <Card icon={<ClipboardList className="card-icon green" />} title="Mock Tests" value={user.mockTests} />
          <Card icon={<History className="card-icon orange" />} title="Recent Activity" value={user.recentActivity} />
          <Card icon={<ShieldCheck className="card-icon teal" />} title="Achievements" value={user.achievements} />
          <Card icon={<Archive className="card-icon gray" />} title="Archived" value={12} />
        </div>

        {/* About Section */}
        <div className="profile-more-about">
          <h2 className="more-about-title">More About You</h2>
          <p className="more-about-text">
            Track your learning journey, review your liked facts and mock tests, revisit history,
            and celebrate your achievements. This profile is your gateway to personal insights and progress.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

const Card = ({ icon, title, value }) => (
  <div className="profile-card">
    <div className="card-header">
      {icon}
      <h3 className="card-title">{title}</h3>
    </div>
    <p className="card-value">{value}</p>
  </div>
);

export default ProfilePage;
