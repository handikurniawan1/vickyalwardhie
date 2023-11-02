import react from "react";
import About from "../components/about";
import Service from "../components/service";
import Project from "../components/project";
import Contact from "../components/contact";
import Hero from "../components/hero";
import '.././App.css'
function Home() {
  return (
    <div>
      <section className="hero">
        <Hero />
      </section>
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
