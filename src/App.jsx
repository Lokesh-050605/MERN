import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">TravelQuest</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Destinations</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Bookings</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <h1 className="display-3">Explore the World</h1>
          <p className="lead">Find your next adventure with us</p>
          <input type="text" className="form-control search-bar" placeholder="Search destinations..." />
        </div>
      </header>
      
      {/* Featured Destinations */}
      <section className="container mt-5">
        <h2 className="text-center section-title">Featured Destinations</h2>
        <div className="row">
          {[
            { name: "Paris, France", img: "https://source.unsplash.com/1600x900/?paris" },
            { name: "Bali, Indonesia", img: "https://source.unsplash.com/1600x900/?bali" },
            { name: "New York, USA", img: "https://source.unsplash.com/1600x900/?newyork" }
          ].map((destination, index) => (
            <div className="col-md-4" key={index}>
              <div className="card destination-card">
                <img src={destination.img} className="card-img-top" alt={destination.name} />
                <div className="card-body">
                  <h5 className="card-title">{destination.name}</h5>
                  <p className="card-text">Discover the beauty of {destination.name}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 TravelQuest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;