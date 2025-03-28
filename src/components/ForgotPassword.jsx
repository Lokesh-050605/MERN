import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/bg.png";

const ForgotPassword = () => {
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
          <div className="bg-white p-5 rounded-5 shadow-lg" style={{ 
              maxWidth: "400px", 
              width: "90%", 
              background: "rgba(255, 255, 255, 0.5)", 
              backdropFilter: "blur(20px)" 
            }}>
      <h2>Forgot Password</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Enter your email</label>
          <input type="email" className="form-control" required />
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" required />
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
        <div className="mt-3">
          <Link to="/sign-in">Back to Sign In</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;
