import React, {useEffect} from "react";
import "./App.css";
import HeroSection from "./components/HomePage/HeroSection";
import Navbar from "./components/HomePage/Navbar";
import { Helmet } from "react-helmet";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer position="top-right" transition={Slide} />    
      <HeroSection />
    </div>
  );
}

export default App;
