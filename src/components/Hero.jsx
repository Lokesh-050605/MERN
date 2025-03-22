import React from "react";
import background from "../assets/bg.png";
import SearchBar from "./SearchBar";

const Hero = () => {
    const containerStyle = {
        background:"linear-gradient(135deg, #eff4f0, #c2d1ed)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
    };

    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.8,
        zIndex: 0,
    };

    const contentStyle = {
        position: "relative",
        zIndex: 1, // Ensures text appears over the background
        color: "black",
        textAlign: "center",
        
    };

    return (
        <div style={containerStyle}>
            <div style={backgroundStyle}></div>
            <div style={contentStyle}>
               
                <SearchBar />
            </div>
        </div>
    );
};

export default Hero;
