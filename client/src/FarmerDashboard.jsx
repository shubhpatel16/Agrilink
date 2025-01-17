import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function FarmerDashboard() {
  return (
    <div className="container-fluid bg-light vh-100">
      <div className="row">
        <nav className="col-md-3 bg-success text-white p-4">
          <h2 className="mb-4">Farmer Dashboard</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/profile" className="nav-link text-white">
                View Profile
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/marketplace" className="nav-link text-white">
                Access Marketplace
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/job-postings" className="nav-link text-white">
                View Job Postings
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/bids" className="nav-link text-white">
                Manage Bids
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/settings" className="nav-link text-white">
                Account Settings
              </Link>
            </li>
          </ul>
        </nav>
        <main className="col-md-9 p-4">
          <h1>Welcome, Farmer!</h1>
          <p>Use the menu on the left to navigate through the dashboard.</p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">Update your personal and contact details.</p>
                  <Link to="/profile" className="btn btn-primary">
                    Go to Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Marketplace</h5>
                  <p className="card-text">Buy and sell agricultural products.</p>
                  <Link to="/marketplace" className="btn btn-primary">
                    Explore Marketplace
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Job Postings</h5>
                  <p className="card-text">Find and apply for agricultural jobs.</p>
                  <Link to="/job-postings" className="btn btn-primary">
                    View Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FarmerDashboard;
