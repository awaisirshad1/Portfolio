import './homepage.css'
import GithubSvg from '../../assets/icons/svg/github-142-svgrepo-com.svg'
import EmailSvg from '../../assets/icons/svg/email-1572-svgrepo-com.svg'
import LinkedInSvg from '../../assets/icons/svg/linkedin-svgrepo-com.svg'
import ResumeSvg from '../../assets/icons/svg/fellow-recruit-message-svgrepo-com.svg'
import DropdownSection from '../../components/dropdown-section/DropdownSection'
import { Component } from 'solid-js'

const HomePage: Component = () => {
  let projects;
  let experiences;
  const sections = [experiences, projects];
  
  return (
    <div class='swagger-ui'>
      <div class='information-container-wrapper'>
        <section class='description-section'>
          <div class='info'>
            <hgroup>
              <h2 class='title-heading'>Awais Irshad - Software Engineer
                <span>
                  <small>
                    <pre class='version'>1.0.0</pre>
                  </small>
                  <small>
                    <pre class='version-stamp'>OAS3</pre>
                  </small>
                </span>
              </h2>
              <a href="https://awaisirshad.com" class='link'>https://awaisirshad.com</a>
            </hgroup>
            <div class='description'>
              <p class='description-paragraph'>
                Welcome to version 1.0.0 of my portfolio website, which I've modeled after the OpenAPI 3.0 specification. 
                I'm a software engineer that works mainly with cloud native technologies and microservices. I have about 2
                years of professional software development experience. My main technology stack is Spring Boot and Go for 
                backend services, React and Typescript for the frontend (though this website is built using SolidJS) and 
                several cloud native technologies like Docker, Kubernetes and Helm. 
              </p>
              <p class='description-paragraph'>
                A few open source projects that I am actively researching (with the intention to contribute to) are Apache 
                Fory (formerly Apache Fury) and OpenTelemetry. Some projects that I am currently working on myself are The
                Halal Food Bank, for which I'm developing web and mobile applications; and my capstone (senior engineering
                project) for which I'm working with a large range of technologies including working with IoT fleets (MQTT),
                cloud native technologies like Docker, and analytics tools like Grafana.
              </p>
              <p class='description-paragraph'>
                Feel free to take a look around my website to learn more about me; or reach out using the links below :)
              </p>
              <p class='description-paragraph'>Some useful links:</p>
              <ul class='list-links'>
                <li>
                  <a target='_blank' href="https://github.com/awaisirshad1" class='social-link'>
                    <GithubSvg class='link-icon'></GithubSvg>
                    <span>Github</span>
                  </a>
                </li>

                <li>
                  <a target='_blank' href="http://www.linkedin.com/in/awais-irshad-43281a1b6" class='social-link'>
                    <LinkedInSvg class='linkedIn-icon'></LinkedInSvg>
                    <span>LinkedIn</span>
                  </a>
                </li>

                <li>
                  <a target='_blank' href="mailto:awaisirshadswe@gmail.com" class='social-link'>
                    <EmailSvg class='link-icon'></EmailSvg>
                    <span>Email</span>
                  </a>
                </li>

                {/* <li>
                  <a target='_blank' href="" class='social-link'>
                    <ResumeSvg class='resume-icon'></ResumeSvg>
                    <span>Resume</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
        <DropdownSection></DropdownSection>
      </div>
    </div>
  );
}

export default HomePage;