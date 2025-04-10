import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import DestinationCard from "./Card";
import Footer from "./Footer";

const destinations = [
    {
      image: "https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/life-in-city-images/paris-france-gallery-2.jpg",
      title: "Paris, France",
      description: "Explore the City of Love with its rich culture and stunning architecture."
    },
    {
      image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_6000,h_3375,c_limit/tokyoGettyImages-1031467664.jpeg",
      title: "Tokyo, Japan",
      description: "Experience the fusion of modern technology and ancient traditions."
    },
    {
      image: "https://www.hw.ac.uk/dubai/img/dubai-waterfront-800x450.jpg",
      title: "Dubai, UAE",
      description: "Luxury, adventure, and world-class shopping await you in Dubai."
    }
  ];

const HomePage = () => {
    const containerStyle = {
        background: "linear-gradient(135deg, #eff4f0, #c2d1ed)",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "99vw",
        alignItems: "center",
    };

    return (
        <div style={containerStyle}>
            <Header />
            <Hero />

            <div className="d-flex justify-content-center flex-wrap" style={{ gap: "80px", marginTop: "30px" }}>
                {destinations.map((dest, index) => (
                    <DestinationCard key={index} {...dest} />
                ))}
            </div>
             <Footer />
        </div>
    );
};

export default HomePage;
