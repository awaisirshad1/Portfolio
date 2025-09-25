import { Component } from "solid-js";
import "../../../styles/components/main-content/home/intro.css"

const Intro: Component = () => {
  return (
    <div class="intro-container">
      <p class="intro-nametag">
        Awais Irshad
      </p>
      <p class="intro-paragraph-1">
        Software Engineer with a focus on systems, cloud native technologies and automation.
      </p>
      <p class="intro-paragraph-2">
        <span class="background-text">Currently studying software engineering </span>
        <span>@ </span>
        <a class="school-link" href="https://www.torontomu.ca/">Toronto Metropolitan University.</a>
      </p>
      {/* <p class="intro-paragraph-2">
        My main interests in engineering relate to:
      </p>
      <ul class="intro-list">
          <li>
            Systems Programming
          </li>
          <li>
            Concurrency and multithreading
          </li>
          <li>
            Observability (OpenTelemetry)
          </li>
          <li>
            Data orchestration + workflow automation
          </li>
          <li>
            DevOps + Automation
          </li>
          <li>
            FIX (Financial information exchange) Protocol
          </li>
          <li>
            Real-time operating systems
          </li>
        </ul> */}
    </div>
  );
} 

export default Intro;