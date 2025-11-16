import { Component } from "solid-js";
import Navbar from "../../components/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "../../styles/components/home.css"
import Experience from "./sections/Experience";

const Home: Component = () => {
  return (
    <div class="home-div">
      <section id="intro">
        <div class="intro-section">
          <Intro></Intro>
        </div>
      </section>
      <section id="experience">
        <div class="experience-section">
          <Experience></Experience>
        </div>
      </section>
      <section id="projects">
        <div class="projects-section">
          <Projects></Projects>  
        </div>
      </section>
      <section id="about">
        <div class="about-section">
          <About></About>
        </div>
      </section>
      <section id="contact">
        <div class="contact-section">
          <Contact></Contact>
        </div>
      </section>
    </div>
  );
};

export default Home;