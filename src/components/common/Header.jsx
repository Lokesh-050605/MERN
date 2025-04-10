import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        width: "100%",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="container d-flex justify-content-between align-items-center"
        style={{ maxWidth: "1200px", width: "100%" }}
      >
        {/* Brand Name */}
        <h1 className="mb-0" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
          <i>EXPLORE EASE</i>
        </h1>

        {/* Navigation Links */}
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
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
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
