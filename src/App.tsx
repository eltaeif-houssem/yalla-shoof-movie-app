import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context";
import type { contextInterface } from "./@types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
// Import pages
import { HomePage, SignupPage, SigninPage } from "./pages";

// Import components
import { Navbar } from "./components";

const App: React.FC = () => {
  const ctx = useContext<contextInterface | null>(AppContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        ctx?.setAuth(true);
      }
    });
  });
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
