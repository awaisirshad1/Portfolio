import { Component, For } from "solid-js";
import "../../../../styles/components/main-content/home/project/project.css"
import { Project } from "../../../../types/Project";

interface ProjProps {
  projects: Project[];
}

const ProjectComponent: Component<ProjProps> = (props) => {
  return (
    <div class="project-container-div">
      <For each={props.projects}>
        {(project) => (
          <div class="project-component-card">
            <div class="title-bar">{project.projectName} - Link: {project.projectLink}</div>
            <div class="tech-stack">
              {project.techStack}
            </div>
            <div class="project-details">{project.description}</div>
          </div>
        )}
      </For>
    </div>
  );
};

export default ProjectComponent;