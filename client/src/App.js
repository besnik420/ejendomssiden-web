import React, {useEffect} from "react";
import "./App.css";
import HeroSection from "./components/HomePage/HeroSection";
import Navbar from "./components/HomePage/Navbar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
