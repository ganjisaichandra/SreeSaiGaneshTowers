import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectHighlights from "./components/ProjectHighlights";
import LocationAdvantages from "./components/LocationAdvantages";
import FloorPlans from "./components/FloorPlans";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero />
        <ProjectHighlights />
        <LocationAdvantages />
        <FloorPlans />
        <Amenities />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Sree Shiva Sai Durga Builders. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
