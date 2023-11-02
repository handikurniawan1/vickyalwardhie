import ".././App.css";
import React, { useEffect, useState } from "react";
import Profile from "../assets/silvie.png";
function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const openMenu = () => {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
  };

  const closeMenu = () => {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
  };

  // React useEffect to handle Intersection Observer
  useEffect(() => {
    const aboutSection = document.querySelector("#about");

    const fadeInAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      threshold: 0.5,
      once: true,
    };

    const observer = new IntersectionObserver(fadeInAnimation, options);
    observer.observe(aboutSection);
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={Profile} alt="" />
          </div>
          <div className="about-col-2">
            <div className="sub-title">
              <h1>About Me</h1>
            </div>
            <div>
              <p>Hello, my name is Vicky Alward Hie. This is my architectural portfolio website, where you can see some of my best work. My architectural interests have expanded to include Commercial, Urban Design, High Rise Building, and Interior Design. Architecture, in my opinion, is a tool that can be used to solve problems in both the macro and micro spheres. We can pour concepts and ideas through optimal and effective design.</p>
            </div>
            <div className="tab-titles">
              <p className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`} onClick={() => openTab("skills")}>
                Skills
              </p>
              <p className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`} onClick={() => openTab("experience")}>
                Experience
              </p>
              <p className={`tab-links ${activeTab === "education" ? "active-link" : ""}`} onClick={() => openTab("education")}>
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              <ul className="skills-list">
                <li>
                  <span>Autocad</span>
                </li>
                <li>
                  <span>Archicad</span>
                </li>
                <li>
                  <span>Skecthup</span>
                </li>
                <li>
                  <span>Enscape</span>
                </li>
                <li>
                  <span>Twinmotion</span>
                </li>
                <li>
                  <span>Vray</span>
                </li>
                <li>
                  <span>Adobe Illustrator</span>
                </li>
                <li>
                  <span>Adobe Indesign</span>
                </li>
                <li>
                  <span>Adobe Photoshop</span>
                </li>
                {/* Add other skills here */}
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
              <ul>
                <li>
                  <span>PT Artha Karya Internusa</span>
                  <br />
                  Designing Web app Interfaces
                </li>
                <li>
                  <span>PT Pandega Desain Weharima</span>
                  <br />
                  Designing Web app Interfaces
                </li>
                {/* Add other experiences here */}
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              <ul>
                <li>
                  <span>Universitas Agung Podomoro Jakarta</span>
                  <br />
                  Designing Web app Interfaces
                </li>
                {/* Add other education details here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
