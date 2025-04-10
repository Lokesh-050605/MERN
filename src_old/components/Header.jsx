import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-blue" style={{width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", margin: "0 auto", padding: "10px 30px" }}>
        {/* Brand Name - Left Most */}
        <h1 className="" href="#">
          <i>EXPLORE EASE</i>
        </h1>

        {/* Navigation Links - Right Most */}
        <div className="d-flex align-items-center" style={{ gap: "30px" }}>
          <a href="#" className="text-decoration-none text-dark fw-bold">Home</a>
          <a href="#" className="text-decoration-none text-dark fw-bold">Pricing</a>
          <a href="#" className="text-decoration-none text-dark fw-bold">Contact</a>

          {/* Login Button */}
          <button 
            className="btn" 
            style={{
              backgroundColor: "#ff5733",
              color: "white",
              borderRadius: "20px",
              padding: "8px 20px",
              fontWeight: "bold"
            }}
            onClick={() => window.location.href = "/sign-in"}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
