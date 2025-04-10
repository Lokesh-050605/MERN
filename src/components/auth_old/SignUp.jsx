import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bg.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateName = (value) => {
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(value)) {
      setNameError("Name must be at least 3 characters and contain only letters.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError("Password must be 8+ chars, include uppercase, lowercase, number & special char.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validatePassword(password);

    if (!nameError && !emailError && !passwordError) {
      alert("Registration successful!");
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
      <div className="bg-white p-4 rounded-4 shadow-lg" style={{ 
          maxWidth: "400px", 
          width: "90%", 
          background: "rgba(255, 255, 255, 0.5)", 
          backdropFilter: "blur(20px)" 
        }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className={`form-control ${nameError ? "is-invalid" : ""}`} 
              value={name} 
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }} 
              required 
            />
            {nameError && <div className="invalid-feedback">{nameError}</div>}
          </div>
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
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          <div className="mt-2 text-center">
            <Link to="/sign-in">Already have an account? Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
