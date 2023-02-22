import React, {useEffect} from "react";
import "./App.css";
import HeroSection from "./components/HomePage/HeroSection";
import Navbar from "./components/HomePage/Navbar";
import axios from 'axios';

function App() {
      useEffect(() => {
        axios.get("http://localhost:8000/").then((response) => {
          console.log(response.data);
        });
      }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
