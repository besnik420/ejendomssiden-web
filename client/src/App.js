import React from "react";
import "./App.css";
import HeroSection from "./components/HomePage/HeroSection";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";

function App() {
  return (
    <div>
      <ToastContainer position="top-right" transition={Slide} />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<HeroSection />}>
          {/* protected routes */}
          {/* <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
          </Route> */}
        </Route>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
