import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import ClusterChart from "./ClusterChart";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/sign-in" element={<SignIn />} />
    //     <Route path="/sign-up" element={<SignUp />} />
    //     <Route path="/forgot-password" element={<ForgotPassword />} />
    //   </Routes>
    // </Router>
<div>
  <h1>hkiiiiiiiiiiiiiiiii</h1>
  <ClusterChart />
  
  <h1>end</h1></div>
     // This is where you can render the ClusterChart component directly for testing purposes.
  );
};

export default App;
