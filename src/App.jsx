import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ITBERRIES from "./components/ITBERRIES";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full">
        <Header
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>

      {/* Main Section */}
      <div className="w-full flex-row">
        {activeSection === "home" ? (
          <>
            <ITBERRIES />
            <AboutMe />
            <Skills />
            <Project />
            <Contact />
          </>
        ) : (
          <>
            {activeSection === "about" && <AboutMe />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "projects" && <Project />}
            {activeSection === "contact" && <Contact />}
          </>
        )}
      </div>

      {/* Footer / Additional content */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
