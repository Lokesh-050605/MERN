import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{marginTop: "-25vh"}} >
        <div className="input-group" >
            <input
                type="text"
                className="form-control border px-3"
                style={{ width: "500px", borderRadius: "20px", height: "60px" }}
                placeholder="Search"
            />
            <button className="btn" style={{ backgroundColor: "#ff5733", color: "white", borderRadius: "20px" , marginLeft: "8px", width: "100px", height: "60px",fontSize: "20px" }}>
                Search 
            </button>
        </div>
    </div>
    );
};

export default SearchBar;
