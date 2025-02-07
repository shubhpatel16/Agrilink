import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="text-container">
        <span className="typing-animation">Agri Link</span>
      </div>
      <div className="button-container">
        <button onClick={goToRegister} className="button">Go to Register</button>
        <button onClick={goToLogin} className="button">Go to Login</button>
      </div>
    </nav>
  );
}