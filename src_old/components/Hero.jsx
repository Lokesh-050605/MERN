import React from "react";
import background from "../assets/bg.png";
import SearchBar from "./SearchBar";

const Hero = () => {
    const containerStyle = {
        background: "linear-gradient(135deg, #eff4f0, #c2d1ed)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "90vh",
        alignItems: "center", 
        justifyContent: "center", 
        position: "relative", 
        
    };

    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.9,
        zIndex: 0,
    };

    const contentStyle = {
        position: "relative",
        zIndex: 1, 
        color: "black",
        textAlign: "center",
        display: "flex", // Ensure child components like SearchBar are centered in the content
        flexDirection: "column", // Ensures vertical alignment if needed for other elements inside content
        justifyContent: "center",
        alignItems: "center", // Centers SearchBar horizontally
    };

    return (
        <div style={containerStyle}>
            <div style={backgroundStyle}></div>
            <div style={contentStyle}>
                <div style={{marginTop : "-400px"}}>
                <SearchBar  />
                </div>
            </div>
        </div>
    );
};

export default Hero;
