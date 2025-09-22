import { Component } from "solid-js";
import "../../../styles/components/main-content/home/intro.css"

const Intro: Component = () => {
  return (
    <div class="intro-container">
      <h1 class="intro-header">
        Hi There 👋
      </h1>
      <p class="intro-paragraph">
        I'm Awais, and I'm currently a senior studying software engineering at Toronto Metropolitan University. 
        Feel free to take a look through my personal website to find out more about me, my experiences or how to contact me 
      </p>
    </div>
  );
} 

export default Intro;