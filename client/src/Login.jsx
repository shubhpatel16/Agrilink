import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data.message === "Success") {
          const { role } = result.data;
          localStorage.setItem("email", email);
          localStorage.setItem("role", role);

          if (role === "Farmer") {
            navigate("/farmerdashboard");
          } else if (role === "Merchant") {
            navigate("/merchantdashboard");
          } else {
            setError("Unknown role. Please contact support.");
          }
        } else if (result.data.message) {
          setError(result.data.message); // Display the error message from the backend
        } else {
          setError("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred while logging in. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link-text">Don't have an account?</p>
        <Link to="/register" className="signup-link">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
