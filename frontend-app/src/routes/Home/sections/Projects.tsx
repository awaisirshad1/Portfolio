import { Component, createSignal, For, onMount } from "solid-js";
import "../../../styles/components/main-content/home/projects.css"
import ProjectComponent from "./project/Project";
import { Project } from "../../../types/Project";

const Projects: Component = () => {
  const[projects, setProjects] = createSignal<Project[]>([]);

  const loadProjects = async () => {
    try{
      const response = await fetch("/projects.json");
      const parsedProjects: Project[]  = await response.json();
      setProjects(parsedProjects);

    } catch(error){
      console.error("error while getting projects:", error)
    }
  }

  onMount(() => {
    loadProjects();
  })

  return (
    <div class="projects-container-div">
      <p class="projects-section-header">Projects</p>
      <ProjectComponent projects={projects()}></ProjectComponent>
    </div>
  );
}

export default Projects;