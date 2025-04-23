import React from "react";
import "./UserProfile.css";

export default function ProfileHeader() {
  return (
    <section className="profile-header-main">
      <h1>Your info</h1>
      <button className="change-password">Change password</button>
    </section>
  );
}
