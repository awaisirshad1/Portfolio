import './homepage.css'
import GithubSvg from '../../assets/icons/svg/github-142-svgrepo-com.svg'
import EmailSvg from '../../assets/icons/svg/email-1572-svgrepo-com.svg'
import LinkedInSvg from '../../assets/icons/svg/linkedin-svgrepo-com.svg'
// import ResumeSvg from '../../assets/icons/svg/fellow-recruit-message-svgrepo-com.svg'
import DropdownSection from '../../components/dropdown-section/DropdownSection'
import { Component, createSignal, onMount } from 'solid-js'
import { Section } from '../../types/section'
import { Experience } from '../../types/experience'
import { Project } from '../../types/project'

const HomePage: Component = () => {
  let projects: Array<Project>;
  let experiences: Array<Experience>;
  const [sections, setSections] = createSignal<Array<Section>>([]);

  const loadExperiences = async () => {
    try {
      const response = await fetch("/experiences.json");
      const data = await response.json();
      experiences = data.map((exp: any) => ({
        ...exp, 
        startDate: new Date(exp.startDate),
        endDate: new Date(exp.endDate)
      }));
      console.log(experiences);

      setSections(prev => [
        ...prev,
        {
          title: "Work Experience",
          description: "My professional career so far",
          items: experiences
        } as Section
      ])
    }
    catch(error) {
      console.error("Error loading experiences: ", error);
    }
  }

  const loadProjects = async () => {
    try {
      const response = await fetch("/projects.json");
      const data = await response.json();
      projects = data.map((proj: any) => ({
        ...proj
      }));
      console.log(projects);

      setSections(prev => [
        ...prev, 
        {
          title: "Projects",
          description: "Code I write in my free time outside of work",
          items: projects
        } as Section
      ])
    }
    catch(error) {
      console.error("Error loading projects: ", error);
    }
  }

  onMount(() => {
    loadExperiences();
    loadProjects();
  });

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
        <DropdownSection sections={sections()}></DropdownSection>
      </div>
    </div>
  );
}

export default HomePage;