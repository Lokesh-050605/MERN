import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-white py-4" style={{width:"100%", backgroundColor: "#3b5998", borderRadius: "25px 25px 0px 0px", marginTop: "30px" }}>
      <p className="mb-1 fw-bold">
        "Your trusted travel partner! We offer the best travel deals and experiences worldwide."
      </p>
      <p className="d-flex justify-content-center align-items-center">
        <FaEnvelope className="me-2" />
        Email: support@exploreease.com
      </p>
      <div className="d-flex justify-content-center mt-2 gap-3">
        <FaInstagram size={22} />
        <FaFacebook size={22} />
        <FaTwitter size={22} />
      </div>
    </footer>
  );
};

export default Footer;
