import React from "react";
import "../styles/GameDetailCard.css";

const GameDetailCard = () => {
  return (
    <div className="game-card">
      {/* Header with image and basic info */}
      <div className="header">
        <img
          src="/unnamed.webp"
          alt="Game Thumbnail"
          className="game-thumbnail"
        />
        <div className="game-info">
          <h2 className="game-title">Super Battle Royale</h2>
          <p className="game-dev">by Epic Games Studio</p>
          <div className="rating">
            ⭐ 4.6 • 1M+ reviews • 100M+ downloads • Rated for 12+
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="screenshots">
        <img src="/unnamed (1).webp" alt="Screenshot 1" />
        <img src="/unnamed (2).webp" alt="Screenshot 2" />
        <img src="/unnamed (3).webp" alt="Screenshot 3" />
      </div>

      {/* Description */}
      <div className="game-description">
        Join intense multiplayer battles in this action-packed game. Unlock weapons,
        customize characters, and dominate the leaderboard. New content every season!
      </div>

      {/* Additional Info */}
      <div className="additional-info">
        <p><strong>Size:</strong> 1.2 GB</p>
        <p><strong>Version:</strong> 2.5.1</p>
        <p><strong>Updated on:</strong> Apr 15, 2025</p>
        <p><strong>In-app purchases:</strong> Yes</p>
        <p><strong>Compatibility:</strong> Android 10+ / Windows 10+</p>
      </div>

      {/* Play on PC Section */}
      <div className="play-pc">
        <h4>Play on PC</h4>
        <ul>
          <li>Official Google experience</li>
          <li>Bigger screen</li>
          <li>Improved controls</li>
          <li>Seamless sync across devices</li>
          <li>Earn Google Play Points</li>
        </ul>
      </div>
    </div>
  );
};

export default GameDetailCard;
