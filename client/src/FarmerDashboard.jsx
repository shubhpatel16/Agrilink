import React, { useState } from "react";
import "./FarmerDashboard.css";

function FarmerDashboard() {
  const [name, setName] = useState("Patel Shubh Mayankbhai");
  const [email, setEmail] = useState("shubh16012002@gmail.com");
  const [mobile, setMobile] = useState("9510748891");
  const [profession, setProfession] = useState("");
  const [district, setDistrict] = useState("");
  const [image, setImage] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    setIsEditable(false);
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="navbar-title">Dashboard</h1>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="header">
          <h2 className="welcome-message">welcome, {name.split(" ")[0]}</h2>
          <div className="button-group">
            <button className="action-button edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="action-button save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-image-wrapper">
            <label htmlFor="profile-image-input">
              <img
                src={image || "https://via.placeholder.com/150"}
                alt="Profile"
                className="profile-image"
              />
            </label>
            <input
              id="profile-image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              disabled={!isEditable}
            />
          </div>
          <div className="profile-details">
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Your Mobile Number"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label>Profession</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              disabled={!isEditable}
            >
              <option value="">Your Profession</option>
              <option value="Farmer">Farmer</option>
              <option value="Merchant">Merchant</option>
            </select>
          </div>

          <div className="form-group">
            <label>District</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!isEditable}
            >
              <option value="">Your District</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Rajkot">Rajkot</option>
              {/* Add more districts as needed */}
            </select>
          </div>
        </div>

        <div className="email-section">
          <h4>My email Address</h4>
          <p>
            <span className="email-icon">📧</span> {email}
          </p>
          <button className="add-email-button">+ Add Email Address</button>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;