import { Component } from "solid-js";
import Navbar from "../../components/Navbar";
import Intro from "./subroutes/Intro";
import About from "./subroutes/About";
import Projects from "./subroutes/Projects";
import Contact from "./subroutes/Contact";
import "../../styles/components/home.css"

const Home: Component = () => {
  return (
    <div class="slide-fade-in">
      <section id="intro">
        <Intro></Intro>
      </section>
      {/* <section id="projects">
        <Projects></Projects>  
      </section>
      <section id="about">
        <About></About>
      </section>
      <section>
        <Contact></Contact>
      </section> */}
    </div>
  );
};

export default Home;