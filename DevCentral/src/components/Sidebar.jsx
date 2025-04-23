import React from "react";
import "./UserProfile.css";

const menu = [
  "Account", "Your info", "Subscriptions", "Devices", "Security", "Privacy",
  "Order history", "Payment options", "Address book"
];

export default function Sidebar({ active }) {
  return (
    <aside className="sidebar">
      <div className="user">
        <img src="tiktok-profile-picture-template_742173-4482.avif" alt="avatar" className="avatar" />
        <div className="user-name">Rawan El-Saadany</div>
        <div className="user-email">rawanemad500@gmail.com</div>
      </div>
      <ul className="sidebar-menu">
        {menu.map((item, i) => (
          <li key={i} className={active === item ? "active" : ""}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}
