// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import SampleBooks from "./components/SampleBooks";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[linear-gradient(135deg,_#1e0533,_#110a1f)] text-gray-800 dark:text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <SampleBooks />
      <Roadmap />
    </div>
  );
}

export default App;
