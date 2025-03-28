import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/bg.png";

const SignUp = () => {
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
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <div className="mt-2">
          <Link to="/sign-in">Already have an account? Sign In</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
