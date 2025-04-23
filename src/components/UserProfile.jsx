import React from "react";
import Sidebar from "./Sidebar";
import ProfileHeader from "./ProfileHeader";
import InfoSection from "./InfoSection";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <div className="user-profile-page">
      <Sidebar active="Your info" />
      <main className="profile-main">
        <ProfileHeader />
        <InfoSection />
      </main>
    </div>
  );
}
