import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DestinationCard = ({ image, title, description }) => {
  return (
    <div className="card shadow-sm text-center border-0" style={{ borderRadius: "15px", width: "300px" }}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", height: "180px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
