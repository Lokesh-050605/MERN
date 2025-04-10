import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bg.png"; // Adjust the path as necessary

const SignIn = () => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError("Password must be 8+ chars, include uppercase, lowercase, number & special char");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
      localStorage.setItem("email", email);
      alert("Form submitted successfully!");
      // Add API call or navigation logic here
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <div className="bg-white p-4 rounded-5 shadow-lg" style={{ 
          maxWidth: "400px", 
          width: "90%", 
          background: "rgba(255, 255, 255, 0.5)", 
          backdropFilter: "blur(20px)" 
        }}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className={`form-control ${emailError ? "is-invalid" : ""}`} 
              value={email} 
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }} 
              required 
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className={`form-control ${passwordError ? "is-invalid" : ""}`} 
              value={password} 
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }} 
              required 
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
          <div className="mt-3 text-center">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/sign-up">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
