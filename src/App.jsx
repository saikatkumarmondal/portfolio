import React from "react";
import "./App.css";
import Header from "./components/Header";
import ITBERRIES from "./components/ITBERRIES";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Main Section */}
      <div className="w-full flex-row">
        <ITBERRIES />
      </div>

      <div className="w-full flex-row">
        <AboutMe />
      </div>
      <div className="w-full flex-row">
        <Skills />
      </div>
      <div className="w-full flex-row">
        <Project />
      </div>
      <div className="w-full flex-row">
        <Contact />
      </div>
      {/* Footer / Additional content */}

      <div className="w-full ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
