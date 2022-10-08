import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppContext } from "../../context";

// Import components
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

const HomePage: React.FC = () => {
  const ctx = useContext(AppContext);

  return !ctx!.isLoggedIn ? (
    <Navigate to="/signin" />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default HomePage;
