import React from "react";
import CustomButton from "../components/CustomButton";
import "./ProfilePage.css";

export default function ProfilePage() {


  // Mock user data - in a real app, this would come from your auth context or API
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
    joinDate: "January 2024",
    totalOrders: 15,
    favoriteCategory: "Electronics",
    address: "123 Main Street, City, State 12345"
  };


  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <button className="back-button" onClick={() => console.log("back to home")}>
            ← Back to Home
          </button>
          <h1>My Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar">
            <img src={userProfile.avatar} alt="Profile" />
            <div className="edit-avatar">
              <span>✏️</span>
            </div>
          </div>

          <div className="profile-info">
            <h2>{userProfile.name}</h2>
            <p className="email">{userProfile.email}</p>
            <p className="member-since">Member since {userProfile.joinDate}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <div className="detail-section">
            <h3>Personal Information</h3>
            <div className="detail-item">
              <span className="label">Full Name:</span>
              <span className="value">{userProfile.name}</span>
            </div>
            <div className="detail-item">
              <span className="label">Email:</span>
              <span className="value">{userProfile.email}</span>
            </div>
            <div className="detail-item">
              <span className="label">Address:</span>
              <span className="value">{userProfile.address}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Shopping Statistics</h3>
            <div className="detail-item">
              <span className="label">Total Orders:</span>
              <span className="value">{userProfile.totalOrders}</span>
            </div>
            <div className="detail-item">
              <span className="label">Favorite Category:</span>
              <span className="value">{userProfile.favoriteCategory}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          <CustomButton 
            name="Edit Profile" 
            onPress={() => alert("Edit profile functionality coming soon!")}
          />
          <CustomButton 
            name="Change Password" 
            onPress={() => alert("Change password functionality coming soon!")}
          />
          <CustomButton 
            name="Logout" 
            onPress={() => console.log("logout")}
            className="logout-btn"
          />
        </div>
      </div>
    </div>
  );
} 